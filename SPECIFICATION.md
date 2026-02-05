# Workshop Planner Specifikáció

## Áttekintés
Ez a dokumentum a Workshop Planner webalkalmazás specifikációját tartalmazza. Az alkalmazás célja service design és egyéb workshopok agenda tervezésének támogatása egy intuitív, vizuális felületen.

## Technológiai Stack
- **Frontend:** React (Next.js App Router), TypeScript.
- **Stílus:** Tailwind CSS, **shadcn/ui** (komponens könyvtár), **Geist Sans/Inter** font.
- **Animációk:** Framer Motion (finom interakciókhoz).
- **Adattárolás:** LocalStorage (kezdetben), később Supabase.
- **Hosting:** Vercel.

## Design & UI Irányelvek
- **Stílus:** "Engineering Premium" esztétika (Railway.app inspiráció). Sötét, technikai, de élénk.
- **Színek (Railway-inspired):**
  - **Háttér:** Mélylila/Éjfekete alap (`#13111c` / `#0b0d0e`) a tiszta fekete helyett, hogy melegebb, gazdagabb hatást keltsen.
  - **Felületek:** Sötét kártyák finom, áttetsző keretekkel (`white/10%`), árnyékok helyett "glow" effektek.
  - **Akcentusok:** Élénk, neon-szerű lila (`#8b5cf6`), cián vagy rózsaszín (`#ec4899`) gradiensek a gombokon és aktív állapotokon.
  - **Szöveg:** Tiszta fehér (`#ffffff`) címsorok, törtfehér/szürkés (`#a1a1aa`) kenyérszöveg a kontraszt miatt.
- **Tipográfia:** Sans-serif, modern, jól olvasható (Inter vagy Geist Sans). Félkövér címsorok, szellős sorközök.
- **Interakciók:**
  - **Hover effektek:** Finom világosodás, border-színek élénkülése.
  - **Feedback:** "Snappy" visszajelzések, gyors tűnési animációk.
- **Layout:**
  - "Bento grid" szerű elrendezés a dashboardon.
  - Tiszta, szellős elrendezés tágas margókkal ("breathable UI").


## Funkcionális Követelmények

### 1. Workshop Kezelés
- **Új workshop létrehozása:**
  - **Választás:** Üres projekt vagy Template.
  - **Azonnali indítás (Üres):**
    - Alapértelmezett név: "Névtelen Workshop".
    - Alapértelmezés: 1 napos, 09:00 kezdés.
    - Opcionális adatok (később megadható): Dátum, Ügyfél, Helyszín.
  - **Azonnali indítás (Template):**
    - Betölti a template struktúráját, egyébként mint fent.
- **Többnapos workshopok:**
  - Napok hozzáadása/törlése.
  - Template-ből betöltött napok kezelése.

### 2. Agenda Tervező (Napi/Többnapos Nézet)
- **Vizuális megjelenítés (Time Grid & Swimlanes):**
  - **Side-by-Side Layout:** A napok oszlopai egymás mellett helyezkednek el (mint egy Kanban tábla vagy Swimlane nézet).
  - **Görgetés:** Ha a napok nem férnek ki (különösen mobilon), vízszintes görgetéssel érhetők el.
  - **Teljes nap:** A nézet egy teljes munkanapot (pl. 8:00 - 18:00) fed le görgethető felületen.
  - **Háttérrács:** Halvány vizszintes vonalak jelölik az órákat (és félórákat), segítve az időbeli tájékozódást ("Guides").
  - **Arányos kártyák:** A feladat kártyák magassága pixelpontosan tükrözi az időtartamot (pl. 1 perc = 2px).
- **Interakciók:**
  - **Drag & Drop:** Elemek szabad sorbarendezése.
  - **Beszúrási Pontok (Drop Zones):**
    - **Desktop:** Két feladat között "hover" állapotra megjelenő "+" gomb vagy sáv.
    - **Mobil:** Az elemek közötti elválasztó vonalra koppintva ("Gap Tap"), vagy az elem "Context Menu"-jéből elérhető "Insert" opcióval.
    - A lista legvégén állandó "Add Item" lehetőség.
  - **Átméretezés:** Elem aljának húzásával ("Resizer handle") az időtartam módosítása.

### 3. Eszköztár és Elem Könyvtár (Sidebar Library)
- **Desktop Felület:**
  - Bal vagy jobb oldali fix panel ("Component Library").
  - **Drag & Drop:** Az elemek innen "behúzhatók" az idővonalra.
  - **Tartalom:** Kategóriákra bontott lista (Discovery, Ideation, stb.).
  - **Predefined Items:** Minden elemnek van alapértelmezett hossza (pl. "HMW Voting" = 15 perc), ami behúzás után testreszabható.
- **Mobil Felület:**
  - "Add" gomb vagy "Library" ikon nyitja meg a panelt (Bottom Sheet / Drawer).
  - Az elemek innen is behúzhatók ujjmozdulattal, vagy sima koppintással hozzáadhatók a lista végéhez/kijelölt helyre.
- **Smart Picker (Kiegészítő):**
  - A "+" gombra kattintva továbbra is elérhető a gyorskereső (`cmdk`) a "power userek" számára.

### 4. Elem Részletek
- **Szerkesztés:**
  - Cím, leírás/instrukciók.
  - **Rich Text Editor:** Notion-szerű WYSIWYG szerkesztő (Markdown támogatással).
    - Funkciók: "/" parancsok, formázás (bold, italic, listák), kód blokkok.
    - Könyvtár: **Novel** (vagy Tiptap alapú shadcn implementáció).
  - Szükséges eszközök (post-it, whiteboard, stb.).
  - Linkek (pl. Miro board, prezentáció).

## Adatmodell (Draft)

```typescript
// Enums / Típusok
type LocationType = 'offline' | 'online';

type ActivityCategory = 
  | 'discovery' 
  | 'ideation' 
  | 'decision' 
  | 'break' 
  | 'presentation' 
  | 'ice-breaker' 
  | 'other';

// Alapvető építőkocka
interface AgendaItem {
  id: string;
  title: string;
  category: ActivityCategory;
  durationMinutes: number; // pl. 10, 20, 60
  description?: string;
  instructions?: string;
  tools?: string[]; // pl. ["post-it", "filc", "projector"]
  links?: string[]; // URL-ek
  isFixed?: boolean; // Ha true, nem mozgatható (pl. ebédidő fixálása - opcionális)
}

// Egy nap struktúrája
interface WorkshopDay {
  id: string;
  dateOffset: number; // 0 az első nap, 1 a második, stb.
  startTime: string; // "09:00"
  items: AgendaItem[];
}

// A teljes workshop
interface Workshop {
  id: string;
  name: string; // Default: "Untitled Workshop"
  clientName?: string; // Optional
  locationType?: LocationType; // Optional
  locationDetails?: string; // Optional
  startDate?: string; // Optional (ISO Date string)
  days: WorkshopDay[];
  createdAt: string;
  updatedAt: string;
}

// Template struktúra (hasonló a workshophoz, de dátumok nélkül)
interface WorkshopTemplate {
  id: string;
  name: string;
  description: string;
  defaultStartTime: string;
  days: {
    dayIndex: number; // 0, 1...
    items: Omit<AgendaItem, 'id'>[]; // ID-k generálódnak példányosításkor
  }[];
}
```

## Felhasználói Folyamat (User Flow)

1. **Landing Page:**
   - **Cél:** Bemutatkozás és belépési pont.
   - **Tartalom:** Rövid ismertető ("Hero" szekció), és egy prominens gomb: "Go to Dashboard" / "Start Planning".
   - **Design:** Railway-stílusú "glow" effektek, sötét háttér, nagy tipográfia.

2. **Dashboard:**
   - **Lista nézet:** Ha vannak már workshopok, kártya/lista nézetben megjelennek (Név, Dátum, Ügyfél).
   - **Empty State:** Ha nincsenek még workshopok, egy prominens "Új Workshop indítása" CTA látható csak (esetleg illusztrációval).
   - "Új Workshop" gomb mindig elérhető (sticky vagy headerben).
3. **Setup (Modal):**
   - **Template Létrehozás:** Az implementáció során a `research/workshop_templates.md` fájl tartalmából kell legenerálni az összes beépített templatet (pl. Lightning Decision Jam, Brand Sprint).
   - Választás: "Üres Projekt" vagy "Template használata".
3. **Editor Felület (Azonnal nyílik):**
   - Ha üres volt: "Névtelen Workshop", 1 nap, 09:00 kezdés.
   - Bal oldalon/Fent: Workshop infók (Cím, Dátum).
     - **Szerkesztés:** A cím melletti "Edit" / "Settings" gombbal nyitható meg a **Workshop Adatlap** modal (Név, Ügyfél, Dátum, Helyszín módosítása).
   - Középen: Idővonalas nézet (Agenda).
   - "Hozzáadás" gombok az elemek között.
4. **Hozzáadás:**
   - Kategória választás -> Típus választás -> Bekerül az idővonalra.
5. **Finomhangolás:**
   - Húzogatás, átméretezés.
   - Részletek kitöltése (kattintásra sidebar/modal).
6. **Mentés:** Automatikus mentés LocalStorage-ba változáskor.

## Mobil Használhatóság (Mobile First Focus)
Kiemelt fontosságú a mobilon való teljes értékű használat.

- **Drag & Drop Stratégia:**
  - Mobilon a véletlen áthelyezések elkerülése végett "long-press" (hosszú nyomás) vagy dedikált "drag handle" ikon indítja a mozgatást.
  - Alternatív megoldás: Elemre kattintva "Move Up/Down" menüpontok.
- **Navigáció (Több nap esetén):**
  - A napok oszlopai "túlcsordulnak" a képernyőn, vízszintes görgetéssel ("Horizontal Scroll Snap") navigálható a teljes workshop.
  - **Cross-Day Drag:** Mobilon is lehetővé teszi az áthúzást: az elemet a képernyő széléhez húzva a nézet automatikusan görög a következő napra.
- **Szerkesztés & Részletek:**
  - Dialógusok (Modals) helyett **Bottom Sheets** (alulról felcsúszó panelek) használata, amelyek könnyen elérhetők hüvelykujjal ("Thumb Zone").
  - Az input mezők és gombok mérete mobilon legalább 44px magas a kényelmes érintéshez.
  - A billentyűzet megjelenésekor a felület nem takarhatja ki az aktív beviteli mezőt (autoscroll).


## Jövőbeli tervek (Out of Scope)
- Felhasználói fiókok és felhő alapú mentés.
- PDF export.
- Valós idejű kollaboráció.
