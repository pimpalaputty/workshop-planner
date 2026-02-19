#!/usr/bin/env node

/**
 * Script to refactor workshop templates to use references instead of full item data
 * 
 * For items that exist in AGENDA_ITEM_LIBRARY, replace with simple reference: { title: '...' }
 * For items that don't exist in library, keep as full object
 * 
 * Usage: node refactor-templates.js
 */

const fs = require('fs');
const path = require('path');

const templatesFile = path.join(__dirname, 'src/lib/templates.ts');

console.log('Reading templates file...');
let content = fs.readFileSync(templatesFile, 'utf8');

// Extract all titles from AGENDA_ITEM_LIBRARY
const libraryStart = content.indexOf('export const AGENDA_ITEM_LIBRARY');
if (libraryStart === -1) {
  console.error('❌ Could not find AGENDA_ITEM_LIBRARY');
  process.exit(1);
}

const libraryArrayStart = content.indexOf('[', libraryStart);
const libraryArrayEnd = content.indexOf(']', content.indexOf('// ==========================================\n// Workshop Templates', libraryArrayStart) - 100);

if (libraryArrayStart === -1 || libraryArrayEnd === -1) {
  console.error('❌ Could not find library array boundaries');
  process.exit(1);
}

const libraryContent = content.substring(libraryArrayStart, libraryArrayEnd);
const libraryTitles = new Set();

// Extract titles
const titleRegex = /title:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = titleRegex.exec(libraryContent)) !== null) {
  libraryTitles.add(match[1]);
}

console.log(`✅ Found ${libraryTitles.size} items in library`);

// Find WORKSHOP_TEMPLATES section
const templatesStart = content.indexOf('export const WORKSHOP_TEMPLATES');
if (templatesStart === -1) {
  console.error('❌ Could not find WORKSHOP_TEMPLATES');
  process.exit(1);
}

const templatesArrayStart = content.indexOf('[', templatesStart);
const templatesArrayEnd = content.indexOf(']', content.indexOf('\n// Helper:', templatesArrayStart) - 100);

if (templatesArrayStart === -1 || templatesArrayEnd === -1) {
  console.error('❌ Could not find templates array boundaries');
  process.exit(1);
}

console.log('Processing templates...');

// Use a more careful approach: find objects that have both title and category
// and are complete (have matching braces)
let newContent = content;
let replacements = 0;
let pos = templatesArrayStart;

while (pos < templatesArrayEnd) {
  // Find next object that has both title and category
  const nextTitle = newContent.indexOf('title:', pos);
  if (nextTitle === -1 || nextTitle >= templatesArrayEnd) break;
  
  // Check if this object has category (meaning it's a full object)
  const next1000 = newContent.substring(nextTitle, Math.min(nextTitle + 1000, templatesArrayEnd));
  if (!next1000.includes('category:')) {
    pos = nextTitle + 1;
    continue;
  }
  
  // Find the start of this object (opening brace)
  let objStart = nextTitle;
  while (objStart > templatesArrayStart && newContent[objStart] !== '{') {
    objStart--;
  }
  
  // Find the end of this object (matching closing brace)
  let bracketCount = 0;
  let objEnd = objStart;
  let inString = false;
  let stringChar = null;
  
  for (let i = objStart; i < Math.min(objStart + 2000, templatesArrayEnd); i++) {
    const char = newContent[i];
    const prevChar = i > 0 ? newContent[i - 1] : '';
    
    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true;
      stringChar = char;
    } else if (inString && char === stringChar && prevChar !== '\\') {
      inString = false;
      stringChar = null;
    }
    
    if (!inString) {
      if (char === '{') bracketCount++;
      if (char === '}') {
        bracketCount--;
        if (bracketCount === 0) {
          objEnd = i + 1;
          break;
        }
      }
    }
  }
  
  if (bracketCount === 0 && objEnd > objStart) {
    const objContent = newContent.substring(objStart, objEnd);
    const titleMatch = objContent.match(/title:\s*['"]([^'"]+)['"]/);
    
    if (titleMatch && libraryTitles.has(titleMatch[1])) {
      // Extract indentation
      const beforeObj = newContent.substring(Math.max(0, objStart - 50), objStart);
      const indentMatch = beforeObj.match(/(\s*)$/);
      const indent = indentMatch ? indentMatch[1] : '          ';
      
      // Replace with simple reference
      const newRef = `${indent}{ title: '${titleMatch[1]}' }`;
      newContent = newContent.substring(0, objStart) + newRef + newContent.substring(objEnd);
      
      replacements++;
      if (replacements <= 10) {
        console.log(`  ✓ ${titleMatch[1]}`);
      }
      
      // Adjust position
      pos = objStart + newRef.length;
    } else {
      pos = objEnd;
    }
  } else {
    pos = nextTitle + 1;
  }
}

if (replacements > 10) {
  console.log(`  ... and ${replacements - 10} more`);
}

console.log(`\n✅ Refactored ${replacements} items`);

// Write back
fs.writeFileSync(templatesFile, newContent, 'utf8');
console.log(`📝 Updated file: ${templatesFile}`);
