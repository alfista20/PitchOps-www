import type { Lang } from '../i18n/languages';

export type ManualCallout = {
  title: string;
  text: string;
  x: number;
  y: number;
};

export type ManualStep = {
  id: string;
  group: string;
  number: string;
  title: string;
  summary: string;
  screenshot: string;
  alt: string;
  bullets: string[];
  callouts: ManualCallout[];
};

export type ManualGroup = {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
};

export type ManualContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryButton: string;
    secondaryButton: string;
  };
  overview: {
    eyebrow: string;
    title: string;
    text: string;
    cards: { title: string; text: string }[];
  };
  labels: {
    contents: string;
    workflow: string;
    visualGuide: string;
    missingImage: string;
    missingImageText: string;
    exactFile: string;
    missingReportTitle: string;
    missingReportText: string;
    tokenUsers: string;
  };
  groups: ManualGroup[];
  steps: ManualStep[];
  tokenSection: {
    eyebrow: string;
    title: string;
    text: string;
    points: string[];
  };
};

const groupsEn: ManualGroup[] = [
  {
    id: 'getting-started',
    eyebrow: 'Getting started',
    title: 'Start from the mobile operations dashboard',
    text: 'Use the dashboard and 48-hour weather forecast before logging work on site.',
  },
  {
    id: 'tasks',
    eyebrow: 'Tasks',
    title: 'Record maintenance and operational work',
    text: 'Tasks capture what was done, who worked on it, current conditions and photo evidence.',
  },
  {
    id: 'usage',
    eyebrow: 'Usage',
    title: 'Record pitch load from football activity',
    text: 'Usage entries describe training, match, warm-up or other load on the pitch.',
  },
  {
    id: 'schedule',
    eyebrow: 'Schedule',
    title: 'Plan and adjust work across week and month views',
    text: 'The schedule connects planned tasks and pitch usage so the team can adapt quickly.',
  },
  {
    id: 'stats',
    eyebrow: 'Stats',
    title: 'Summarize operations and export reporting views',
    text: 'Statistics turn operational records into totals, charts and review-ready evidence.',
  },
  {
    id: 'agronomy',
    eyebrow: 'Agronomy',
    title: 'Track fertilizing history and nutrient records',
    text: 'Agronomy views help the team review application history and nutrient trends.',
  },
  {
    id: 'settings',
    eyebrow: 'Settings',
    title: 'Keep mobile reporting options ready for the team',
    text: 'Settings define the equipment, staff and venue token links used in daily reporting.',
  },
];

const stepsEn: ManualStep[] = [
  {
    id: 'home-dashboard',
    group: 'getting-started',
    number: '1',
    title: 'Home dashboard',
    summary:
      'This is the starting point for Pitch Operations. It gives the mobile user the main entry points before work is logged.',
    screenshot: '01-home-dashboard-mobile.png',
    alt: 'PitchOps mobile home dashboard',
    bullets: [
      'Use the visible tiles and cards as shortcuts into the main workflows.',
      'The 48-hour weather forecast appears after the user allows browser location access.',
      'Scroll the forecast chips horizontally to see later hours.',
    ],
    callouts: [
      {
        title: 'Main entry tiles',
        text: 'Open the operational areas from the dashboard instead of hunting through menus.',
        x: 50,
        y: 56,
      },
      {
        title: '48-hour weather',
        text: 'Swipe the forecast cards sideways to check later conditions.',
        x: 50,
        y: 28,
      },
      {
        title: 'Mobile menu',
        text: 'Use the header controls to return home or open the mobile menu.',
        x: 92,
        y: 3,
      },
    ],
  },
  {
    id: 'task-add-modal',
    group: 'tasks',
    number: '2',
    title: 'Log a task',
    summary:
      'This modal opens after tapping Log task. Use it for maintenance or operational work completed or planned on the pitch.',
    screenshot: '03-tasks-add-modal-mobile.png',
    alt: 'PitchOps mobile task form modal',
    bullets: [
      'Fill in task type, equipment, weather, staff, notes, date, status and photos.',
      'The cloud button is useful because it fetches current weather data for the task.',
      'Use status to show whether the task is planned, in progress or completed.',
      'Add notes while the work context is still fresh.',
    ],
    callouts: [
      {
        title: 'Task details',
        text: 'Select the type of maintenance or operational work being recorded.',
        x: 50,
        y: 20,
      },
      {
        title: 'Cloud weather button',
        text: 'Fetch current weather so the task record carries the right site context.',
        x: 82,
        y: 42,
      },
      {
        title: 'Notes and timing',
        text: 'Use notes and date or time fields to capture context before saving.',
        x: 50,
        y: 82,
      },
    ],
  },
  {
    id: 'task-photos',
    group: 'tasks',
    number: '3',
    title: 'Add task photos',
    summary:
      'Tasks can include photos, turning daily work into a clearer operational record for later review.',
    screenshot: '04-tasks-add-photos-mobile.png',
    alt: 'PitchOps mobile task photos area',
    bullets: [
      'Add photos where the form provides the photo upload area.',
      'Use photos to document completed work, surface condition or visible issues.',
      'Photos stay connected to the task instead of disappearing into chat threads.',
    ],
    callouts: [
      {
        title: 'Photo area',
        text: 'Tap here to add images to the task record.',
        x: 50,
        y: 70,
      },
      {
        title: 'Operational evidence',
        text: 'Photos make the task easier to verify during reviews.',
        x: 50,
        y: 80,
      },
    ],
  },
  {
    id: 'task-list-controls',
    group: 'tasks',
    number: '4',
    title: 'Task list and controls',
    summary:
      'After saving a task, the task list becomes the practical place to search, filter and continue work through the mobile tabs.',
    screenshot: '05-tasks-list-controls-mobile.png',
    alt: 'PitchOps mobile task list controls',
    bullets: [
      'Use search and filters to narrow the task list.',
      'CSV export helps move task history into a review or reporting workflow.',
      'Status and photo indicators show whether records carry completion and evidence.',
      'Continue through the bottom tab bar after saving; it is the main mobile navigation path.',
    ],
    callouts: [
      {
        title: 'Search and filters',
        text: 'Find the right tasks quickly when the list grows.',
        x: 50,
        y: 30,
      },
      {
        title: 'Status and photos',
        text: 'Check what is complete and which entries include photo evidence.',
        x: 63,
        y: 70,
      },
      {
        title: 'Bottom tabs',
        text: 'Move between dashboard, tasks, usage, schedule and other areas from here.',
        x: 50,
        y: 96,
      },
    ],
  },
  {
    id: 'usage-add-modal',
    group: 'usage',
    number: '5',
    title: 'Log usage',
    summary:
      'This modal opens after tapping Log usage. Use it to record pitch load from training, matches, warm-ups or other use.',
    screenshot: '06-usage-add-modal-mobile.png',
    alt: 'PitchOps mobile usage form modal',
    bullets: [
      'Task means maintenance or operational work on the pitch.',
      'Usage means football load placed on the pitch by training, match, warm-up or other activity.',
      'Record the usage type, date, time, venue or pitch context and useful notes.',
      'Use consistent entries so future statistics and schedules stay reliable.',
    ],
    callouts: [
      {
        title: 'Usage type',
        text: 'Choose what kind of pitch activity is being recorded.',
        x: 50,
        y: 20,
      },
      {
        title: 'Date and time',
        text: 'Place the load accurately on the operational timeline.',
        x: 50,
        y: 50,
      },
      {
        title: 'Notes',
        text: 'Add context that helps explain unusual load or surface impact.',
        x: 50,
        y: 80,
      },
    ],
  },
  {
    id: 'usage-list-controls',
    group: 'usage',
    number: '6',
    title: 'Usage list and controls',
    summary:
      'The usage list helps the team review today, upcoming sessions and historical entries after records are saved.',
    screenshot: '07-usage-list-controls-mobile.png',
    alt: 'PitchOps mobile usage list controls',
    bullets: [
      'Use Today, Upcoming and List views when they are available to switch the planning context.',
      'Search, filters, date controls and CSV export help manage longer usage histories.',
      'Use the bottom tab bar as the main path to continue through the mobile module.',
    ],
    callouts: [
      {
        title: 'View controls',
        text: 'Move between today, upcoming and list-based usage views.',
        x: 50,
        y: 27,
      },
      {
        title: 'Search, dates and export',
        text: 'Filter the history or export records when you need a review file.',
        x: 50,
        y: 51,
      },
      {
        title: 'Bottom tabs',
        text: 'Keep moving through the mobile module from the persistent tab bar.',
        x: 50,
        y: 96,
      },
    ],
  },
  {
    id: 'schedule-week',
    group: 'schedule',
    number: '7',
    title: 'Weekly schedule',
    summary:
      'The weekly schedule shows planned operational work and pitch usage in the same planning rhythm.',
    screenshot: '08-schedule-week-mobile.png',
    alt: 'PitchOps mobile weekly schedule',
    bullets: [
      'Read the week from day to day and check where tasks and usage sit.',
      'Use the view to understand pressure around training, match windows and maintenance work.',
      'Tasks and usage appear together so planning decisions stay connected.',
    ],
    callouts: [
      {
        title: 'Week window',
        text: 'Check the active days and move through the planning week with the date range and arrows.',
        x: 34,
        y: 14,
      },
      {
        title: 'Schedule chips',
        text: 'Tasks and usage appear as practical plan items visible directly in the weekly grid.',
        x: 26,
        y: 43,
      },
      {
        title: 'Adding entries in an empty slot',
        text: 'Tap a free area in the selected day to quickly add a new task or usage without leaving the schedule.',
        x: 78,
        y: 57,
      },
    ],
  },
  {
    id: 'schedule-copy-move',
    group: 'schedule',
    number: '8',
    title: 'Copy or move schedule chips',
    summary:
      'Copying and moving schedule chips is done with drag & drop, which helps adjust repeated or shifted operational items without recreating entries.',
    screenshot: '08a-schedule-chip-copy-move-mobile.png',
    alt: 'PitchOps mobile schedule chip copy and move controls',
    bullets: [
      'Use drag & drop to copy an item when similar work or usage needs to be repeated.',
      'Use drag & drop to move an item when timing changes but the entry itself should stay the same.',
      'This keeps plan adjustments quick during busy operational weeks.',
    ],
    callouts: [
      {
        title: 'Chip action',
        text: 'Use drag & drop to copy or move the selected schedule entry.',
        x: 34,
        y: 64,
      },
      {
        title: 'Fast adjustment',
        text: 'Shift plans without rebuilding the record from zero.',
        x: 64,
        y: 59,
      },
    ],
  },
  {
    id: 'schedule-week-filters',
    group: 'schedule',
    number: '9',
    title: 'Weekly view filters',
    summary:
      'In the weekly schedule view, choose whether to display Tasks, Usage or All records.',
    screenshot: '08b-schedule-week-view-filters-mobile.png',
    alt: 'PitchOps mobile weekly schedule filter controls',
    bullets: [
      'Choose Tasks when maintenance planning is the focus.',
      'Choose Usage when football load is the focus.',
      'Choose All when you need the full operational picture.',
    ],
    callouts: [
      {
        title: 'Tasks, Usage, All',
        text: 'This switch controls which schedule records are visible.',
        x: 74,
        y: 17,
      },
      {
        title: 'Cleaner reading',
        text: 'Filter the week when the schedule becomes busy.',
        x: 50,
        y: 52,
      },
    ],
  },
  {
    id: 'schedule-month',
    group: 'schedule',
    number: '10',
    title: 'Monthly schedule',
    summary:
      'The monthly schedule gives a higher-level view across the month for planning and review.',
    screenshot: '09-schedule-month-mobile.png',
    alt: 'PitchOps mobile monthly schedule',
    bullets: [
      'Use the month overview to see wider maintenance and usage rhythm.',
      'Look for busy periods, open windows and repeated pitch demand.',
      'Open specific dates when you need more detail.',
    ],
    callouts: [
      {
        title: 'Month grid',
        text: 'Scan the month for pressure points and open windows.',
        x: 50,
        y: 52,
      },
      {
        title: 'Date entries',
        text: 'Use visible markers to identify days with planned work or usage.',
        x: 34,
        y: 66,
      },
    ],
  },
  {
    id: 'schedule-multiday',
    group: 'schedule',
    number: '11',
    title: 'Add a multiday event',
    summary:
      'This modal opens after pressing the plus button in the date window. Use it for events spanning more than one day.',
    screenshot: '09b-schedule-add-multiday-event-modal-mobile.png',
    alt: 'PitchOps mobile multiday event modal',
    bullets: [
      'Set the event title or type so the plan is easy to read later.',
      'Choose start and end dates for the multiday window.',
      'Add notes or context when the event affects access, workload or planning.',
    ],
    callouts: [
      {
        title: 'Event setup',
        text: 'Start with the event colour and name after opening the multiday modal.',
        x: 28,
        y: 28,
      },
      {
        title: 'Start and end',
        text: 'Use date fields to define the full event range.',
        x: 50,
        y: 50,
      },
      {
        title: 'Event context',
        text: 'Add useful planning notes before saving.',
        x: 50,
        y: 68,
      },
    ],
  },
  {
    id: 'stats-overview',
    group: 'stats',
    number: '12',
    title: 'Stats overview',
    summary:
      'Use this single screen to summarize operations with KPI cards, filters, charts and PDF export.',
    screenshot: '10-stats-overview-mobile.png',
    alt: 'PitchOps mobile statistics overview',
    bullets: [
      'KPI cards summarize the most important operational totals.',
      'Time range and filters decide which records are included.',
      'Charts reveal patterns across work, usage or other operational categories.',
      'Export PDF when the view needs to become a shareable report.',
    ],
    callouts: [
      {
        title: 'KPI cards',
        text: 'Read totals first to understand the period quickly.',
        x: 50,
        y: 50,
      },
      {
        title: 'Range and filters',
        text: 'Change the period before reviewing charts or exporting.',
        x: 50,
        y: 24,
      },
      {
        title: 'Charts and PDF',
        text: 'Use charts for patterns and PDF export for reporting.',
        x: 55,
        y: 78,
      },
    ],
  },
  {
    id: 'agronomy-overview',
    group: 'agronomy',
    number: '13',
    title: 'Agronomy overview',
    summary:
      'The agronomy area is for fertilizing history and nutrient records connected to the operational timeline.',
    screenshot: '11-agronomy-overview-mobile.png',
    alt: 'PitchOps mobile agronomy overview',
    bullets: [
      'Use the main table or list to review fertilizer history.',
      'Filters help narrow records by date, venue, product or visible criteria.',
      'The view supports traceability of applications and nutrient records.',
    ],
    callouts: [
      {
        title: 'Fertilizing history',
        text: 'Review applications in a structured operational list.',
        x: 50,
        y: 40,
      },
      {
        title: 'Filters',
        text: 'Narrow the history before reviewing or reporting.',
        x: 50,
        y: 20,
      },
    ],
  },
  {
    id: 'agronomy-chart',
    group: 'agronomy',
    number: '14',
    title: 'Agronomy chart view',
    summary:
      'The chart view helps analyze nutrient history and visible trends without claiming automatic recommendations.',
    screenshot: '12-agronomy-chart-mobile.png',
    alt: 'PitchOps mobile agronomy nutrient chart',
    bullets: [
      'Switch between N, P, K and other visible nutrient views when available.',
      'Use chart trends to understand recorded nutrient history over time.',
      'Treat the chart as analysis support, not as an automatic agronomic recommendation.',
    ],
    callouts: [
      {
        title: 'Nutrient switch',
        text: 'Move between N, P, K or other visible nutrient categories.',
        x: 24,
        y: 8,
      },
      {
        title: 'Trend chart',
        text: 'Read the line or bars as recorded nutrient history over time.',
        x: 50,
        y: 43,
      },
    ],
  },
  {
    id: 'mobile-menu',
    group: 'settings',
    number: '15',
    title: 'Mobile menu navigation',
    summary:
      'The mobile menu is useful when the user needs a compact route to less frequent areas of the module.',
    screenshot: '13a-mobile-menu-navigation.png',
    alt: 'PitchOps mobile menu navigation',
    bullets: [
      'Use the mobile menu for secondary navigation when the tab bar is not enough.',
      'Keep the daily workflow anchored in the dashboard, tabs and schedule.',
    ],
    callouts: [
      {
        title: 'Menu entry',
        text: 'Open the menu to reach supporting areas without leaving mobile context.',
        x: 92,
        y: 6,
      },
      {
        title: 'Navigation list',
        text: 'Choose the destination that matches the work you need to do next.',
        x: 68,
        y: 42,
      },
    ],
  },
  {
    id: 'settings-token-links',
    group: 'settings',
    number: '16',
    title: 'Settings, lists and token links',
    summary:
      'Settings control the practical options available in mobile reporting: equipment, staff, venues and token links.',
    screenshot: '13b-settings-equipment-staff-token-links-mobile.png',
    alt: 'PitchOps mobile settings equipment staff and token links',
    bullets: [
      'Equipment types define the equipment options available when logging tasks.',
      'The staff list defines workers and staff entries available in task records.',
      'The venue list includes token links that can be sent to workers.',
      'Token links let workers log completed work or update planned entries according to their permissions.',
    ],
    callouts: [
      {
        title: 'Equipment and staff',
        text: 'Maintain the choices that appear inside task forms.',
        x: 50,
        y: 72,
      },
      {
        title: 'Venue list',
        text: 'Find venue-specific settings and token links here.',
        x: 50,
        y: 29,
      },
      {
        title: 'Token links',
        text: 'Send practical reporting access to workers without making this an admin workflow.',
        x: 92,
        y: 29,
      },
    ],
  },
];

const groupsPl: ManualGroup[] = [
  {
    id: 'getting-started',
    eyebrow: 'Pierwsze kroki',
    title: 'Zacznij od mobilnego panelu operacji',
    text: 'Panel główny i prognoza pogody 48h przygotowują użytkownika do pracy na obiekcie.',
  },
  {
    id: 'tasks',
    eyebrow: 'Zadania',
    title: 'Rejestruj prace pielęgnacyjne i operacyjne',
    text: 'Zadania opisują wykonaną pracę, zaangażowane osoby, warunki i zdjęcia jako dowód.',
  },
  {
    id: 'usage',
    eyebrow: 'Użycie',
    title: 'Rejestruj obciążenie murawy przez aktywność piłkarską',
    text: 'Użycie opisuje trening, mecz, rozgrzewkę albo inne obciążenie boiska.',
  },
  {
    id: 'schedule',
    eyebrow: 'Harmonogram',
    title: 'Planuj i koryguj prace w widoku tygodnia oraz miesiąca',
    text: 'Harmonogram łączy zaplanowane zadania i użycie boiska, żeby zespół mógł szybko reagować.',
  },
  {
    id: 'stats',
    eyebrow: 'Statystyki',
    title: 'Podsumowuj operacje i eksportuj widoki raportowe',
    text: 'Statystyki zamieniają zapisy operacyjne w sumy, wykresy i materiał do przeglądu.',
  },
  {
    id: 'agronomy',
    eyebrow: 'Agronomia',
    title: 'Śledź historię nawożenia i zapisy składników',
    text: 'Widoki agronomiczne pomagają przeglądać historię aplikacji oraz trendy składników.',
  },
  {
    id: 'settings',
    eyebrow: 'Ustawienia',
    title: 'Utrzymuj opcje mobilnego raportowania gotowe dla zespołu',
    text: 'Ustawienia definiują sprzęt, personel i linki tokenowe obiektu używane w codziennej pracy.',
  },
];

const stepsPl: ManualStep[] = [
  {
    id: 'home-dashboard',
    group: 'getting-started',
    number: '1',
    title: 'Panel główny',
    summary:
      'To punkt startowy modułu operacji na murawie. Mobilny użytkownik widzi tu najważniejsze wejścia do pracy operacyjnej.',
    screenshot: '01-home-dashboard-mobile.png',
    alt: 'Mobilny panel główny PitchOps',
    bullets: [
      'Widoczne kafle i karty prowadzą do głównych przepływów pracy.',
      'Prognoza pogody na 48 godzin pojawia się po zezwoleniu na dostęp do lokalizacji w przeglądarce.',
      'Karty prognozy można przewijać poziomo, aby zobaczyć dalsze godziny.',
    ],
    callouts: [
      {
        title: 'Główne kafle',
        text: 'Otwieraj obszary operacyjne bez szukania ich w menu.',
        x: 50,
        y: 56,
      },
      {
        title: 'Prognoza 48h',
        text: 'Przesuń karty pogody w bok, aby sprawdzić późniejsze godziny.',
        x: 50,
        y: 28,
      },
      {
        title: 'Menu mobilne',
        text: 'Użyj kontrolek w nagłówku, aby wrócić do panelu lub otworzyć menu mobilne.',
        x: 92,
        y: 3,
      },
    ],
  },
  {
    id: 'task-add-modal',
    group: 'tasks',
    number: '2',
    title: 'Rejestracja zadania',
    summary:
      'Ten modal otwiera się po wybraniu opcji rejestracji zadania. Służy do zapisu prac pielęgnacyjnych lub operacyjnych na murawie.',
    screenshot: '03-tasks-add-modal-mobile.png',
    alt: 'Mobilny formularz zadania PitchOps',
    bullets: [
      'Uzupełnij typ zadania, sprzęt, pogodę, personel, notatki, datę, status i zdjęcia.',
      'Przycisk z chmurą pobiera aktualne dane pogodowe i uzupełnia nimi rekord zadania.',
      'Status pokazuje, czy zadanie jest planowane, w toku albo zakończone.',
      'Dodaj notatki wtedy, gdy kontekst pracy jest jeszcze świeży.',
    ],
    callouts: [
      {
        title: 'Szczegóły zadania',
        text: 'Wybierz rodzaj pracy pielęgnacyjnej lub operacyjnej.',
        x: 50,
        y: 20,
      },
      {
        title: 'Przycisk z chmurą',
        text: 'Pobierz bieżącą pogodę, aby rekord miał właściwy kontekst z obiektu.',
        x: 82,
        y: 42,
      },
      {
        title: 'Notatki i czas',
        text: 'Uzupełnij notatki oraz pola daty lub czasu, aby zapisać kontekst przed zapisaniem.',
        x: 50,
        y: 82,
      },
    ],
  },
  {
    id: 'task-photos',
    group: 'tasks',
    number: '3',
    title: 'Dodawanie zdjęć do zadania',
    summary:
      'Zadania mogą zawierać zdjęcia, dzięki czemu codzienna praca staje się czytelnym zapisem operacyjnym.',
    screenshot: '04-tasks-add-photos-mobile.png',
    alt: 'Mobilna sekcja zdjęć zadania PitchOps',
    bullets: [
      'Dodawaj zdjęcia w miejscu formularza przeznaczonym na załączniki.',
      'Używaj zdjęć do dokumentowania wykonanej pracy, stanu murawy albo widocznych problemów.',
      'Zdjęcia pozostają przypisane do zadania zamiast ginąć w wiadomościach.',
    ],
    callouts: [
      {
        title: 'Miejsce na zdjęcia',
        text: 'Dotknij tego obszaru, aby dodać obrazy do rekordu zadania.',
        x: 50,
        y: 70,
      },
      {
        title: 'Dowód operacyjny',
        text: 'Zdjęcia ułatwiają późniejszą weryfikację pracy.',
        x: 50,
        y: 80,
      },
    ],
  },
  {
    id: 'task-list-controls',
    group: 'tasks',
    number: '4',
    title: 'Lista zadań i sterowanie',
    summary:
      'Po zapisaniu zadania lista zadań jest miejscem do wyszukiwania, filtrowania i dalszej pracy przez dolny pasek kart.',
    screenshot: '05-tasks-list-controls-mobile.png',
    alt: 'Mobilna lista zadań i kontrolki PitchOps',
    bullets: [
      'Wyszukiwarka i filtry pomagają zawęzić listę zadań.',
      'Eksport CSV pozwala przenieść historię zadań do przeglądu lub raportowania.',
      'Status i oznaczenia zdjęć pokazują, które rekordy mają wykonanie oraz dowody.',
      'Po zapisie zadania pracuj dalej przez dolny pasek kart; to główna ścieżka nawigacji mobilnej.',
    ],
    callouts: [
      {
        title: 'Wyszukiwarka i filtry',
        text: 'Szybko znajdź właściwe zadania, gdy lista się rozrośnie.',
        x: 50,
        y: 30,
      },
      {
        title: 'Status i zdjęcia',
        text: 'Sprawdź, co jest zakończone i które wpisy mają dokumentację zdjęciową.',
        x: 63,
        y: 70,
      },
      {
        title: 'Dolne karty',
        text: 'Przechodź między panelem, zadaniami, użyciem, harmonogramem i innymi obszarami.',
        x: 50,
        y: 96,
      },
    ],
  },
  {
    id: 'usage-add-modal',
    group: 'usage',
    number: '5',
    title: 'Rejestracja użycia',
    summary:
      'Ten modal otwiera się po wybraniu rejestracji użycia. Służy do zapisu obciążenia murawy przez trening, mecz, rozgrzewkę albo inne użycie.',
    screenshot: '06-usage-add-modal-mobile.png',
    alt: 'Mobilny formularz użycia PitchOps',
    bullets: [
      'Zadanie oznacza pracę pielęgnacyjną lub operacyjną na murawie.',
      'Użycie oznacza obciążenie piłkarskie: trening, mecz, rozgrzewkę albo inną aktywność.',
      'Zapisz typ użycia, datę, godzinę, kontekst obiektu lub boiska oraz przydatne notatki.',
      'Spójne wpisy sprawiają, że przyszłe statystyki i harmonogramy pozostają wiarygodne.',
    ],
    callouts: [
      {
        title: 'Typ użycia',
        text: 'Wybierz rodzaj aktywności na murawie.',
        x: 50,
        y: 20,
      },
      {
        title: 'Data i czas',
        text: 'Umieść obciążenie dokładnie na osi operacyjnej.',
        x: 50,
        y: 50,
      },
      {
        title: 'Notatki',
        text: 'Dodaj kontekst wyjaśniający nietypowe obciążenie albo wpływ na nawierzchnię.',
        x: 50,
        y: 80,
      },
    ],
  },
  {
    id: 'usage-list-controls',
    group: 'usage',
    number: '6',
    title: 'Lista użycia i sterowanie',
    summary:
      'Lista użycia pomaga przeglądać dzisiejsze wpisy, nadchodzące aktywności i historię po zapisaniu rekordów.',
    screenshot: '07-usage-list-controls-mobile.png',
    alt: 'Mobilna lista użycia i kontrolki PitchOps',
    bullets: [
      'Jeżeli widoczne są przełączniki Dzisiaj, Nadchodzące i Lista, używaj ich do zmiany kontekstu planowania.',
      'Wyszukiwarka, filtry, daty i eksport CSV pomagają obsłużyć dłuższą historię użycia.',
      'Dolny pasek kart pozostaje główną ścieżką dalszej pracy w module mobilnym.',
    ],
    callouts: [
      {
        title: 'Przełączniki widoku',
        text: 'Przechodź między dzisiejszymi, nadchodzącymi i listowymi widokami użycia.',
        x: 50,
        y: 27,
      },
      {
        title: 'Wyszukiwanie, daty i eksport',
        text: 'Filtruj historię lub wyeksportuj rekordy do przeglądu.',
        x: 50,
        y: 51,
      },
      {
        title: 'Dolne karty',
        text: 'Kontynuuj pracę przez stały pasek kart na dole ekranu.',
        x: 50,
        y: 96,
      },
    ],
  },
  {
    id: 'schedule-week',
    group: 'schedule',
    number: '7',
    title: 'Harmonogram tygodniowy',
    summary:
      'Harmonogram tygodniowy pokazuje zaplanowane prace operacyjne i użycie boiska w jednym rytmie planowania.',
    screenshot: '08-schedule-week-mobile.png',
    alt: 'Mobilny harmonogram tygodniowy PitchOps',
    bullets: [
      'Czytaj tydzień dzień po dniu i sprawdzaj położenie zadań oraz użycia.',
      'Widok pomaga rozumieć presję treningów, meczów i prac pielęgnacyjnych.',
      'Zadania i użycie są widoczne razem, więc decyzje planistyczne pozostają połączone.',
    ],
    callouts: [
      {
        title: 'Okno tygodnia',
        text: 'Sprawdź aktywne dni i poruszaj się po tygodniu planowania za pomocą zakresu dat i strzałek.',
        x: 34,
        y: 14,
      },
      {
        title: 'Elementy harmonogramu',
        text: 'Zadania i użycie pojawiają się jako praktyczne pozycje planu widoczne bezpośrednio w siatce tygodnia.',
        x: 26,
        y: 43,
      },
      {
        title: 'Dodawanie wpisów w pustym polu',
        text: 'Naciśnięcie wolnego pola w wybranym dniu pozwala szybko dodać nowe zadanie lub usage bez wychodzenia z harmonogramu.',
        x: 78,
        y: 57,
      },
    ],
  },
  {
    id: 'schedule-copy-move',
    group: 'schedule',
    number: '8',
    title: 'Kopiowanie i przenoszenie elementów',
    summary:
      'Kopiowanie i przenoszenie elementów harmonogramu odbywa się przez drag & drop, co pomaga obsłużyć powtarzane albo przesunięte pozycje bez tworzenia ich od początku.',
    screenshot: '08a-schedule-chip-copy-move-mobile.png',
    alt: 'Mobilne opcje kopiowania i przenoszenia elementu harmonogramu PitchOps',
    bullets: [
      'Użyj drag & drop, aby skopiować pozycję, gdy podobna praca lub aktywność ma zostać powtórzona.',
      'Użyj drag & drop, aby przenieść pozycję, gdy zmienia się termin, ale sam wpis ma pozostać ten sam.',
      'To przyspiesza korekty planu w intensywnych tygodniach operacyjnych.',
    ],
    callouts: [
      {
        title: 'Akcja elementu',
        text: 'Użyj drag & drop, aby skopiować albo przenieść wybraną pozycję harmonogramu.',
        x: 34,
        y: 64,
      },
      {
        title: 'Szybka korekta',
        text: 'Przesuwaj plany bez odbudowywania wpisu od zera.',
        x: 64,
        y: 59,
      },
    ],
  },
  {
    id: 'schedule-week-filters',
    group: 'schedule',
    number: '9',
    title: 'Filtry widoku tygodnia',
    summary:
      'W widoku tygodniowym użytkownik może wybrać, czy widzi zadania, użycie czy wszystkie rekordy.',
    screenshot: '08b-schedule-week-view-filters-mobile.png',
    alt: 'Mobilne filtry harmonogramu tygodniowego PitchOps',
    bullets: [
      'Wybierz Zadania, gdy skupiasz się na planie prac pielęgnacyjnych.',
      'Wybierz Użycie, gdy analizujesz obciążenie piłkarskie.',
      'Wybierz Wszystko, gdy potrzebujesz pełnego obrazu operacyjnego.',
    ],
    callouts: [
      {
        title: 'Zadania, Użycie, Wszystko',
        text: 'Ten przełącznik decyduje, które rekordy są widoczne w harmonogramie.',
        x: 74,
        y: 17,
      },
      {
        title: 'Czytelniejszy tydzień',
        text: 'Filtruj widok, gdy harmonogram robi się gęsty.',
        x: 50,
        y: 52,
      },
    ],
  },
  {
    id: 'schedule-month',
    group: 'schedule',
    number: '10',
    title: 'Harmonogram miesięczny',
    summary:
      'Harmonogram miesięczny daje szerszy widok planu w całym miesiącu.',
    screenshot: '09-schedule-month-mobile.png',
    alt: 'Mobilny harmonogram miesięczny PitchOps',
    bullets: [
      'Używaj widoku miesiąca, aby zobaczyć rytm pielęgnacji i użycia w dłuższej perspektywie.',
      'Szukaj okresów dużego obciążenia, wolnych okien i powtarzalnego zapotrzebowania na boisko.',
      'Otwieraj konkretne daty, gdy potrzebujesz większej szczegółowości.',
    ],
    callouts: [
      {
        title: 'Siatka miesiąca',
        text: 'Skanuj miesiąc pod kątem presji i dostępnych okien.',
        x: 50,
        y: 52,
      },
      {
        title: 'Wpisy w datach',
        text: 'Widoczne oznaczenia pomagają znaleźć dni z pracami albo użyciem.',
        x: 34,
        y: 66,
      },
    ],
  },
  {
    id: 'schedule-multiday',
    group: 'schedule',
    number: '11',
    title: 'Dodanie wydarzenia wielodniowego',
    summary:
      'Ten modal otwiera się po naciśnięciu plusa w oknie daty. Służy do wydarzeń trwających więcej niż jeden dzień.',
    screenshot: '09b-schedule-add-multiday-event-modal-mobile.png',
    alt: 'Mobilny modal wydarzenia wielodniowego PitchOps',
    bullets: [
      'Ustaw nazwę albo typ wydarzenia, aby plan był później czytelny.',
      'Wybierz datę rozpoczęcia i zakończenia wielodniowego okna.',
      'Dodaj notatki, gdy wydarzenie wpływa na dostęp, obciążenie albo planowanie.',
    ],
    callouts: [
      {
        title: 'Ustawienia wydarzenia',
        text: 'Po otwarciu modalu zacznij od koloru i nazwy wydarzenia wielodniowego.',
        x: 28,
        y: 28,
      },
      {
        title: 'Początek i koniec',
        text: 'Pola dat określają pełny zakres wydarzenia.',
        x: 50,
        y: 50,
      },
      {
        title: 'Kontekst wydarzenia',
        text: 'Dodaj przydatne notatki planistyczne przed zapisaniem.',
        x: 50,
        y: 68,
      },
    ],
  },
  {
    id: 'stats-overview',
    group: 'stats',
    number: '12',
    title: 'Przegląd statystyk',
    summary:
      'Ten jeden ekran podsumowuje operacje przez karty KPI, zakres czasu, filtry, wykresy i eksport PDF.',
    screenshot: '10-stats-overview-mobile.png',
    alt: 'Mobilny przegląd statystyk PitchOps',
    bullets: [
      'Karty KPI pokazują najważniejsze sumy operacyjne.',
      'Zakres czasu i filtry decydują, które rekordy wchodzą do podsumowania.',
      'Wykresy pomagają zobaczyć wzorce w pracy, użyciu albo innych kategoriach operacyjnych.',
      'Eksport PDF tworzy widok, który można udostępnić jako raport.',
    ],
    callouts: [
      {
        title: 'Karty KPI',
        text: 'Najpierw sprawdź sumy, aby szybko zrozumieć okres.',
        x: 50,
        y: 50,
      },
      {
        title: 'Zakres i filtry',
        text: 'Zmień okres przed analizą wykresów albo eksportem.',
        x: 50,
        y: 24,
      },
      {
        title: 'Wykresy i PDF',
        text: 'Wykresy pokazują wzorce, a PDF wspiera raportowanie.',
        x: 55,
        y: 78,
      },
    ],
  },
  {
    id: 'agronomy-overview',
    group: 'agronomy',
    number: '13',
    title: 'Przegląd agronomii',
    summary:
      'Obszar agronomii służy do historii nawożenia i zapisów składników połączonych z operacyjną osią czasu.',
    screenshot: '11-agronomy-overview-mobile.png',
    alt: 'Mobilny przegląd agronomii PitchOps',
    bullets: [
      'Główna tabela lub lista pozwala przeglądać historię nawożenia.',
      'Filtry zawężają rekordy według daty, obiektu, produktu albo widocznych kryteriów.',
      'Widok wspiera śledzenie aplikacji i zapisów składników.',
    ],
    callouts: [
      {
        title: 'Historia nawożenia',
        text: 'Przeglądaj aplikacje w uporządkowanej liście operacyjnej.',
        x: 50,
        y: 40,
      },
      {
        title: 'Filtry',
        text: 'Zawęź historię przed przeglądem albo raportowaniem.',
        x: 50,
        y: 20,
      },
    ],
  },
  {
    id: 'agronomy-chart',
    group: 'agronomy',
    number: '14',
    title: 'Widok wykresu agronomicznego',
    summary:
      'Widok wykresu pomaga analizować historię składników i widoczne trendy, ale nie oznacza automatycznych rekomendacji agronomicznych.',
    screenshot: '12-agronomy-chart-mobile.png',
    alt: 'Mobilny wykres składników agronomicznych PitchOps',
    bullets: [
      'Przełączaj N, P, K i inne widoczne składniki, jeżeli są dostępne.',
      'Trend na wykresie pokazuje zapisaną historię składników w czasie.',
      'Traktuj wykres jako wsparcie analizy, a nie automatyczną rekomendację agronomiczną.',
    ],
    callouts: [
      {
        title: 'Przełącznik składników',
        text: 'Zmieniaj widok między N, P, K albo innymi widocznymi kategoriami.',
        x: 24,
        y: 8,
      },
      {
        title: 'Wykres trendu',
        text: 'Linia albo słupki pokazują zapisaną historię składników w czasie.',
        x: 50,
        y: 43,
      },
    ],
  },
  {
    id: 'mobile-menu',
    group: 'settings',
    number: '15',
    title: 'Nawigacja w menu mobilnym',
    summary:
      'Menu mobilne jest przydatne, gdy użytkownik potrzebuje szybkiego przejścia do rzadziej używanych miejsc modułu.',
    screenshot: '13a-mobile-menu-navigation.png',
    alt: 'Mobilna nawigacja menu PitchOps',
    bullets: [
      'Używaj menu mobilnego jako dodatkowej nawigacji, gdy dolny pasek kart nie wystarcza.',
      'Codzienną pracę opieraj przede wszystkim na panelu, kartach i harmonogramie.',
    ],
    callouts: [
      {
        title: 'Wejście do menu',
        text: 'Otwórz menu, aby dotrzeć do obszarów pomocniczych bez wychodzenia z kontekstu mobilnego.',
        x: 92,
        y: 6,
      },
      {
        title: 'Lista nawigacji',
        text: 'Wybierz miejsce, które odpowiada następnej czynności.',
        x: 68,
        y: 42,
      },
    ],
  },
  {
    id: 'settings-token-links',
    group: 'settings',
    number: '16',
    title: 'Ustawienia, listy i linki tokenowe',
    summary:
      'Ustawienia sterują praktycznymi opcjami raportowania mobilnego: sprzętem, personelem, obiektami i linkami tokenowymi.',
    screenshot: '13b-settings-equipment-staff-token-links-mobile.png',
    alt: 'Mobilne ustawienia sprzętu, personelu i linków tokenowych PitchOps',
    bullets: [
      'Typy sprzętu definiują opcje sprzętu dostępne przy rejestrowaniu zadań.',
      'Lista personelu definiuje pracowników i wpisy osób dostępne w rekordach zadań.',
      'Lista obiektów zawiera linki tokenowe, które można wysłać pracownikom.',
      'Linki tokenowe pozwalają pracownikom rejestrować wykonane prace lub aktualizować zaplanowane wpisy zgodnie z uprawnieniami.',
    ],
    callouts: [
      {
        title: 'Sprzęt i personel',
        text: 'Utrzymuj listy wyboru widoczne w formularzach zadań.',
        x: 50,
        y: 72,
      },
      {
        title: 'Lista obiektów',
        text: 'Tutaj znajdują się ustawienia obiektu i linki tokenowe.',
        x: 50,
        y: 29,
      },
      {
        title: 'Linki tokenowe',
        text: 'Wyślij praktyczny dostęp do raportowania bez zamieniania go w panel administracyjny.',
        x: 92,
        y: 29,
      },
    ],
  },
];

type ManualStepText = Pick<ManualStep, 'title' | 'summary' | 'alt' | 'bullets'> & {
  callouts: Array<Pick<ManualCallout, 'title' | 'text'>>;
};

const localizeSteps = (base: ManualStep[], texts: Record<string, ManualStepText>): ManualStep[] =>
  base.map((step) => {
    const translated = texts[step.id];
    return {
      ...step,
      title: translated.title,
      summary: translated.summary,
      alt: translated.alt,
      bullets: translated.bullets,
      callouts: step.callouts.map((callout, index) => ({
        ...callout,
        title: translated.callouts[index].title,
        text: translated.callouts[index].text,
      })),
    };
  });

const groupsDe: ManualGroup[] = [
  { id: 'getting-started', eyebrow: 'Erste Schritte', title: 'Beginnen Sie im mobilen Operations-Dashboard', text: 'Nutzen Sie Dashboard und 48-Stunden-Wetter, bevor Arbeiten vor Ort erfasst werden.' },
  { id: 'tasks', eyebrow: 'Aufgaben', title: 'Pflege- und Betriebsarbeiten erfassen', text: 'Aufgaben dokumentieren, was erledigt wurde, wer beteiligt war, welche Bedingungen galten und welche Fotos vorliegen.' },
  { id: 'usage', eyebrow: 'Nutzung', title: 'Belastung des Platzes durch Fußballaktivität erfassen', text: 'Nutzungseinträge beschreiben Training, Spiel, Aufwärmen oder andere Belastung des Platzes.' },
  { id: 'schedule', eyebrow: 'Zeitplan', title: 'Arbeiten in Wochen- und Monatsansichten planen und anpassen', text: 'Der Zeitplan verbindet geplante Aufgaben und Platznutzung, damit das Team schnell reagieren kann.' },
  { id: 'stats', eyebrow: 'Statistiken', title: 'Operationen zusammenfassen und Berichte exportieren', text: 'Statistiken machen aus Betriebsdaten Summen, Diagramme und prüfbare Übersichten.' },
  { id: 'agronomy', eyebrow: 'Agronomie', title: 'Düngehistorie und Nährstoffdaten verfolgen', text: 'Agronomische Ansichten helfen, Anwendungen und Nährstofftrends nachzuvollziehen.' },
  { id: 'settings', eyebrow: 'Einstellungen', title: 'Mobile Berichtsoptionen für das Team vorbereiten', text: 'Einstellungen definieren Geräte, Personal und Token-Links der Objekte für die tägliche Meldung.' },
];

const groupsEs: ManualGroup[] = [
  { id: 'getting-started', eyebrow: 'Primeros pasos', title: 'Empieza desde el panel móvil de operaciones', text: 'Usa el panel y la previsión de 48 horas antes de registrar trabajo en el campo.' },
  { id: 'tasks', eyebrow: 'Tareas', title: 'Registra trabajos de cuidado y operación', text: 'Las tareas recogen qué se hizo, quién participó, las condiciones y la evidencia fotográfica.' },
  { id: 'usage', eyebrow: 'Uso', title: 'Registra la carga del campo por actividad futbolística', text: 'Los registros de uso describen entrenamientos, partidos, calentamientos u otra carga sobre el campo.' },
  { id: 'schedule', eyebrow: 'Calendario', title: 'Planifica y ajusta trabajos en vistas semanal y mensual', text: 'El calendario conecta tareas planificadas y uso del campo para que el equipo pueda adaptarse rápido.' },
  { id: 'stats', eyebrow: 'Estadísticas', title: 'Resume operaciones y exporta vistas de informe', text: 'Las estadísticas convierten registros operativos en totales, gráficos y evidencia lista para revisión.' },
  { id: 'agronomy', eyebrow: 'Agronomía', title: 'Sigue el historial de fertilización y nutrientes', text: 'Las vistas agronómicas ayudan a revisar aplicaciones y tendencias de nutrientes.' },
  { id: 'settings', eyebrow: 'Ajustes', title: 'Mantén listas las opciones de reporte móvil', text: 'Los ajustes definen equipos, personal y enlaces token del recinto usados en el reporte diario.' },
];

const groupsFr: ManualGroup[] = [
  { id: 'getting-started', eyebrow: 'Premiers pas', title: 'Commencez par le tableau de bord mobile', text: 'Utilisez le tableau de bord et la météo à 48 h avant de consigner le travail sur site.' },
  { id: 'tasks', eyebrow: 'Tâches', title: 'Consigner les travaux d’entretien et d’exploitation', text: 'Les tâches décrivent ce qui a été fait, qui est intervenu, les conditions et les preuves photo.' },
  { id: 'usage', eyebrow: 'Utilisation', title: 'Consigner la charge du terrain liée au football', text: 'Les entrées d’utilisation décrivent entraînements, matchs, échauffements ou autre charge du terrain.' },
  { id: 'schedule', eyebrow: 'Planning', title: 'Planifier et ajuster les travaux en semaine et en mois', text: 'Le planning relie tâches prévues et utilisation du terrain pour aider l’équipe à réagir vite.' },
  { id: 'stats', eyebrow: 'Statistiques', title: 'Résumer les opérations et exporter des vues de reporting', text: 'Les statistiques transforment les enregistrements en totaux, graphiques et éléments de revue.' },
  { id: 'agronomy', eyebrow: 'Agronomie', title: 'Suivre l’historique de fertilisation et les nutriments', text: 'Les vues agronomiques aident à revoir les applications et les tendances nutritives.' },
  { id: 'settings', eyebrow: 'Paramètres', title: 'Préparer les options de reporting mobile', text: 'Les paramètres définissent équipements, personnel et liens token utilisés au quotidien.' },
];

const groupsPt: ManualGroup[] = [
  { id: 'getting-started', eyebrow: 'Primeiros passos', title: 'Comece pelo painel móvel de operações', text: 'Use o painel e a previsão de 48 horas antes de registar trabalho no recinto.' },
  { id: 'tasks', eyebrow: 'Tarefas', title: 'Registe trabalhos de manutenção e operação', text: 'As tarefas registam o que foi feito, quem participou, as condições e a evidência fotográfica.' },
  { id: 'usage', eyebrow: 'Utilização', title: 'Registe a carga do relvado por atividade futebolística', text: 'Os registos de utilização descrevem treinos, jogos, aquecimentos ou outra carga no relvado.' },
  { id: 'schedule', eyebrow: 'Calendário', title: 'Planeie e ajuste trabalhos em vistas semanais e mensais', text: 'O calendário liga tarefas planeadas e utilização do campo para a equipa reagir rapidamente.' },
  { id: 'stats', eyebrow: 'Estatísticas', title: 'Resuma operações e exporte vistas de relatório', text: 'As estatísticas transformam registos operacionais em totais, gráficos e evidência para revisão.' },
  { id: 'agronomy', eyebrow: 'Agronomia', title: 'Acompanhe histórico de fertilização e nutrientes', text: 'As vistas agronómicas ajudam a rever aplicações e tendências de nutrientes.' },
  { id: 'settings', eyebrow: 'Definições', title: 'Mantenha prontas as opções móveis de reporte', text: 'As definições controlam equipamentos, equipa e links token usados no reporte diário.' },
];

const stepsDe = localizeSteps(stepsEn, {
  'home-dashboard': {
    title: 'Start-Dashboard',
    summary: 'Dies ist der Einstiegspunkt für den mobilen Platzbetrieb. Mobile Nutzer sehen hier die wichtigsten Wege in die tägliche Arbeit.',
    alt: 'Mobiles PitchOps Start-Dashboard',
    bullets: ['Nutzen Sie sichtbare Kacheln und Karten als Abkürzungen zu den Arbeitsbereichen.', 'Die 48-Stunden-Wetterprognose erscheint, nachdem der Standortzugriff im Browser erlaubt wurde.', 'Wischen Sie die Wetterkarten seitlich, um spätere Stunden zu sehen.'],
    callouts: [{ title: 'Hauptkacheln', text: 'Öffnen Sie operative Bereiche direkt vom Dashboard.' }, { title: '48-Stunden-Wetter', text: 'Wischen Sie seitlich, um spätere Bedingungen zu prüfen.' }, { title: 'Mobiles Menü', text: 'Nutzen Sie die Kopfleiste für Startseite oder mobiles Menü.' }],
  },
  'task-add-modal': {
    title: 'Aufgabe erfassen',
    summary: 'Dieses Fenster öffnet sich beim Erfassen einer Aufgabe. Es dient für Pflege- oder Betriebsarbeiten am Platz.',
    alt: 'Mobiles PitchOps Aufgabenformular',
    bullets: ['Erfassen Sie Typ, Gerät, Wetter, Personal, Notizen, Datum, Status und Fotos.', 'Die Wolken-Schaltfläche holt aktuelle Wetterdaten in den Eintrag.', 'Der Status zeigt, ob eine Aufgabe geplant, in Arbeit oder erledigt ist.', 'Notizen sind am wertvollsten, solange der Kontext frisch ist.'],
    callouts: [{ title: 'Aufgabendetails', text: 'Wählen Sie die Art der Arbeit aus.' }, { title: 'Wetter abrufen', text: 'Holen Sie aktuelle Wetterdaten für den richtigen Kontext.' }, { title: 'Notizen und Zeit', text: 'Erfassen Sie Kontext, Datum und Zeit vor dem Speichern.' }],
  },
  'task-photos': {
    title: 'Fotos zur Aufgabe hinzufügen',
    summary: 'Aufgaben können Fotos enthalten, damit tägliche Arbeit später nachvollziehbar bleibt.',
    alt: 'Mobiler Fotobereich einer PitchOps Aufgabe',
    bullets: ['Fügen Sie Fotos im vorgesehenen Upload-Bereich hinzu.', 'Dokumentieren Sie Arbeit, Platzstatus oder sichtbare Probleme.', 'Fotos bleiben mit dem Eintrag verbunden.'],
    callouts: [{ title: 'Fotobereich', text: 'Tippen Sie hier, um Bilder zum Eintrag hinzuzufügen.' }, { title: 'Betriebsnachweis', text: 'Fotos erleichtern spätere Prüfung und Abstimmung.' }],
  },
  'task-list-controls': {
    title: 'Aufgabenliste und Steuerung',
    summary: 'Nach dem Speichern ist die Aufgabenliste der Ort für Suche, Filter und weitere mobile Arbeit.',
    alt: 'Mobile PitchOps Aufgabenliste mit Steuerung',
    bullets: ['Nutzen Sie Suche und Filter, um die Liste einzugrenzen.', 'CSV-Export unterstützt Prüfung und Reporting.', 'Status und Fotos zeigen, welche Einträge abgeschlossen und belegt sind.', 'Arbeiten Sie über die unteren Tabs weiter.'],
    callouts: [{ title: 'Suche und Filter', text: 'Finden Sie passende Aufgaben auch in langen Listen.' }, { title: 'Status und Fotos', text: 'Prüfen Sie Abschluss und Fotodokumentation.' }, { title: 'Untere Tabs', text: 'Wechseln Sie zwischen Dashboard, Aufgaben, Nutzung, Zeitplan und Statistik.' }],
  },
  'usage-add-modal': {
    title: 'Nutzung erfassen',
    summary: 'Dieses Fenster dient zur Erfassung von Platzbelastung durch Training, Spiel, Aufwärmen oder andere Nutzung.',
    alt: 'Mobiles PitchOps Nutzungsformular',
    bullets: ['Aufgabe bedeutet Pflege- oder Betriebsarbeit am Platz.', 'Nutzung bedeutet Fußballbelastung durch Training, Spiel oder andere Aktivität.', 'Erfassen Sie Nutzungsart, Datum, Zeit, Platzkontext und Notizen.', 'Einheitliche Einträge halten Statistiken und Zeitpläne zuverlässig.'],
    callouts: [{ title: 'Nutzungsart', text: 'Wählen Sie die Art der Aktivität aus.' }, { title: 'Datum und Zeit', text: 'Platzieren Sie die Belastung sauber auf der Zeitleiste.' }, { title: 'Notizen', text: 'Ergänzen Sie Kontext zu besonderer Belastung oder Platzwirkung.' }],
  },
  'usage-list-controls': {
    title: 'Nutzungsliste und Steuerung',
    summary: 'Die Nutzungsliste hilft, heutige, kommende und historische Einträge zu prüfen.',
    alt: 'Mobile PitchOps Nutzungsliste mit Steuerung',
    bullets: ['Nutzen Sie Heute, Kommend und Liste, wenn diese Ansichten sichtbar sind.', 'Suche, Filter, Datum und CSV helfen bei längeren Historien.', 'Die unteren Tabs bleiben der Hauptweg durch das mobile Modul.'],
    callouts: [{ title: 'Ansichtssteuerung', text: 'Wechseln Sie zwischen heutigen, kommenden und Listenansichten.' }, { title: 'Suche, Datum und Export', text: 'Filtern oder exportieren Sie die Nutzungshistorie.' }, { title: 'Untere Tabs', text: 'Setzen Sie die Arbeit über die feste Tab-Leiste fort.' }],
  },
  'schedule-week': {
    title: 'Wochenplan',
    summary: 'Der Wochenplan zeigt geplante Arbeiten und Platznutzung im gleichen Planungsrhythmus.',
    alt: 'Mobiler PitchOps Wochenplan',
    bullets: ['Lesen Sie die Woche Tag für Tag.', 'Erkennen Sie Druck durch Training, Spiele und Pflegearbeiten.', 'Aufgaben und Nutzung bleiben in einer gemeinsamen Ansicht verbunden.'],
    callouts: [{ title: 'Wochenfenster', text: 'Prüfen Sie aktive Tage und navigieren Sie mit Datumsbereich und Pfeilen.' }, { title: 'Planelemente', text: 'Aufgaben und Nutzung erscheinen direkt im Wochenraster.' }, { title: 'Eintrag aus freiem Feld', text: 'Tippen Sie in ein freies Feld, um Aufgabe oder Nutzung schnell hinzuzufügen.' }],
  },
  'schedule-copy-move': {
    title: 'Elemente kopieren oder verschieben',
    summary: 'Kopieren und Verschieben erfolgt per Drag & Drop, damit wiederholte oder verschobene Einträge schnell angepasst werden.',
    alt: 'Mobile PitchOps Drag-and-drop-Planung',
    bullets: ['Nutzen Sie Drag & Drop zum Kopieren ähnlicher Arbeiten oder Nutzungen.', 'Nutzen Sie Drag & Drop zum Verschieben bei Terminänderungen.', 'So bleiben Anpassungen in vollen Wochen schnell.'],
    callouts: [{ title: 'Elementaktion', text: 'Kopieren oder verschieben Sie den Eintrag per Drag & Drop.' }, { title: 'Schnelle Anpassung', text: 'Ändern Sie Pläne ohne den Eintrag neu aufzubauen.' }],
  },
  'schedule-week-filters': {
    title: 'Filter der Wochenansicht',
    summary: 'In der Wochenansicht wählen Sie Aufgaben, Nutzung oder alle Einträge.',
    alt: 'Mobile PitchOps Filter der Wochenansicht',
    bullets: ['Wählen Sie Aufgaben für Pflegeplanung.', 'Wählen Sie Nutzung für Fußballbelastung.', 'Wählen Sie Alle für das vollständige Bild.'],
    callouts: [{ title: 'Aufgaben, Nutzung, Alle', text: 'Der Schalter steuert, welche Einträge sichtbar sind.' }, { title: 'Bessere Lesbarkeit', text: 'Filtern Sie, wenn der Plan dicht wird.' }],
  },
  'schedule-month': {
    title: 'Monatsplan',
    summary: 'Der Monatsplan gibt einen Überblick über Planung und Belastung im ganzen Monat.',
    alt: 'Mobiler PitchOps Monatsplan',
    bullets: ['Nutzen Sie die Monatsansicht für den größeren Rhythmus.', 'Suchen Sie Belastungsspitzen, freie Fenster und wiederkehrende Nachfrage.', 'Öffnen Sie einzelne Daten für mehr Details.'],
    callouts: [{ title: 'Monatsraster', text: 'Scannen Sie den Monat nach Druckpunkten und freien Fenstern.' }, { title: 'Einträge in Tagen', text: 'Markierungen zeigen Tage mit Arbeit oder Nutzung.' }],
  },
  'schedule-multiday': {
    title: 'Mehrtägiges Ereignis hinzufügen',
    summary: 'Dieses Fenster dient für Ereignisse, die sich über mehr als einen Tag erstrecken.',
    alt: 'Mobiles PitchOps Fenster für mehrtägige Ereignisse',
    bullets: ['Benennen Sie das Ereignis eindeutig.', 'Wählen Sie Start- und Enddatum.', 'Ergänzen Sie Notizen, wenn Zugriff, Belastung oder Planung betroffen sind.'],
    callouts: [{ title: 'Ereignis einrichten', text: 'Beginnen Sie mit Farbe und Name des Ereignisses.' }, { title: 'Start und Ende', text: 'Die Datumsfelder bestimmen den Zeitraum.' }, { title: 'Planungskontext', text: 'Ergänzen Sie hilfreiche Notizen vor dem Speichern.' }],
  },
  'stats-overview': {
    title: 'Statistikübersicht',
    summary: 'Diese Ansicht fasst Operationen mit KPIs, Zeitraum, Filtern, Diagrammen und PDF-Export zusammen.',
    alt: 'Mobile PitchOps Statistikübersicht',
    bullets: ['KPI-Karten zeigen die wichtigsten Summen.', 'Zeitraum und Filter bestimmen die Datenbasis.', 'Diagramme zeigen Muster in Arbeit und Nutzung.', 'PDF-Export unterstützt Reporting.'],
    callouts: [{ title: 'KPI-Karten', text: 'Lesen Sie zuerst die Summen.' }, { title: 'Zeitraum und Filter', text: 'Passen Sie den Zeitraum vor Analyse oder Export an.' }, { title: 'Diagramme und PDF', text: 'Nutzen Sie Diagramme für Muster und PDF für Berichte.' }],
  },
  'agronomy-overview': {
    title: 'Agronomieübersicht',
    summary: 'Der Agronomiebereich dient der Düngehistorie und Nährstoffdokumentation.',
    alt: 'Mobile PitchOps Agronomieübersicht',
    bullets: ['Prüfen Sie Anwendungen in Tabelle oder Liste.', 'Filter grenzen Datensätze nach Datum, Objekt oder Produkt ein.', 'Die Ansicht unterstützt Rückverfolgbarkeit von Anwendungen und Nährstoffen.'],
    callouts: [{ title: 'Düngehistorie', text: 'Prüfen Sie Anwendungen in strukturierter Liste.' }, { title: 'Filter', text: 'Grenzen Sie die Historie vor Prüfung oder Reporting ein.' }],
  },
  'agronomy-chart': {
    title: 'Agronomische Diagrammansicht',
    summary: 'Das Diagramm hilft, Nährstoffhistorie und Trends zu analysieren, ohne automatische Empfehlungen zu behaupten.',
    alt: 'Mobiles PitchOps Nährstoffdiagramm',
    bullets: ['Wechseln Sie zwischen N, P, K und weiteren sichtbaren Nährstoffen.', 'Trends zeigen gespeicherte Nährstoffhistorie im Zeitverlauf.', 'Die Ansicht unterstützt Analyse, ersetzt aber keine agronomische Empfehlung.'],
    callouts: [{ title: 'Nährstoffschalter', text: 'Wechseln Sie zwischen N, P, K und weiteren Kategorien.' }, { title: 'Trenddiagramm', text: 'Linien oder Balken zeigen die gespeicherte Historie.' }],
  },
  'mobile-menu': {
    title: 'Navigation im mobilen Menü',
    summary: 'Das mobile Menü führt schnell zu weniger häufig genutzten Bereichen.',
    alt: 'Mobile PitchOps Menü-Navigation',
    bullets: ['Nutzen Sie das Menü als zusätzliche Navigation.', 'Die tägliche Arbeit bleibt vor allem in Dashboard, Tabs und Zeitplan.'],
    callouts: [{ title: 'Menü öffnen', text: 'Öffnen Sie das Menü für unterstützende Bereiche.' }, { title: 'Navigationsliste', text: 'Wählen Sie den Bereich für den nächsten Arbeitsschritt.' }],
  },
  'settings-token-links': {
    title: 'Einstellungen, Listen und Token-Links',
    summary: 'Einstellungen steuern Geräte, Personal, Objekte und Token-Links für mobiles Reporting.',
    alt: 'Mobile PitchOps Einstellungen für Geräte, Personal und Token-Links',
    bullets: ['Gerätetypen definieren Optionen in Aufgabenformularen.', 'Die Personalliste definiert verfügbare Mitarbeitende.', 'Die Objektliste enthält Token-Links für Mitarbeitende.', 'Token-Links erlauben Meldung und Statusänderung gemäß Berechtigungen.'],
    callouts: [{ title: 'Geräte und Personal', text: 'Pflegen Sie Auswahllisten für Aufgaben.' }, { title: 'Objektliste', text: 'Hier befinden sich Objekteinstellungen und Token-Links.' }, { title: 'Token-Links', text: 'Senden Sie praktischen Meldezugang ohne Administrationsablauf.' }],
  },
});

const stepsEs = localizeSteps(stepsEn, {
  'home-dashboard': {
    title: 'Panel principal',
    summary: 'Es el punto de partida de las operaciones móviles del campo. El usuario móvil ve aquí las entradas principales antes de registrar trabajo.',
    alt: 'Panel principal móvil de PitchOps',
    bullets: ['Usa las tarjetas visibles como accesos directos a los flujos principales.', 'La previsión meteorológica de 48 horas aparece cuando el usuario permite el acceso a la ubicación del navegador.', 'Desliza horizontalmente las tarjetas de previsión para ver horas posteriores.'],
    callouts: [{ title: 'Tarjetas principales', text: 'Abre las áreas operativas desde el panel sin buscar en menús.' }, { title: 'Previsión 48 h', text: 'Desliza las tarjetas para revisar condiciones más tarde.' }, { title: 'Menú móvil', text: 'Usa los controles superiores para volver al inicio o abrir el menú.' }],
  },
  'task-add-modal': {
    title: 'Registrar tarea',
    summary: 'Este modal se abre al registrar una tarea. Sirve para trabajos de cuidado u operación realizados o planificados en el campo.',
    alt: 'Formulario móvil de tarea en PitchOps',
    bullets: ['Completa tipo de tarea, equipo, clima, personal, notas, fecha, estado y fotos.', 'El botón de nube es útil porque trae datos meteorológicos actuales al registro.', 'Usa el estado para indicar si la tarea está planificada, en curso o completada.', 'Añade notas mientras el contexto del trabajo sigue fresco.'],
    callouts: [{ title: 'Detalles de la tarea', text: 'Selecciona el tipo de trabajo que se está registrando.' }, { title: 'Botón de clima', text: 'Trae el clima actual para guardar el contexto correcto del recinto.' }, { title: 'Notas y hora', text: 'Registra contexto, fecha y hora antes de guardar.' }],
  },
  'task-photos': {
    title: 'Añadir fotos a la tarea',
    summary: 'Las tareas pueden incluir fotos, convirtiendo el trabajo diario en un registro operativo más claro.',
    alt: 'Zona móvil de fotos de tarea en PitchOps',
    bullets: ['Añade fotos en el área de carga del formulario.', 'Úsalas para documentar trabajo completado, estado de la superficie o incidencias visibles.', 'Las fotos quedan vinculadas a la tarea en lugar de perderse en chats.'],
    callouts: [{ title: 'Zona de fotos', text: 'Toca aquí para añadir imágenes al registro.' }, { title: 'Evidencia operativa', text: 'Las fotos facilitan revisar y verificar el trabajo.' }],
  },
  'task-list-controls': {
    title: 'Lista de tareas y controles',
    summary: 'Después de guardar una tarea, la lista permite buscar, filtrar y continuar el trabajo desde las pestañas móviles.',
    alt: 'Lista móvil de tareas y controles en PitchOps',
    bullets: ['Usa búsqueda y filtros para acotar la lista.', 'La exportación CSV ayuda a llevar el historial a revisión o reporte.', 'Estado e indicadores de foto muestran qué registros tienen cierre y evidencia.', 'Continúa desde la barra inferior; es la ruta principal de navegación móvil.'],
    callouts: [{ title: 'Búsqueda y filtros', text: 'Encuentra tareas rápidamente cuando la lista crece.' }, { title: 'Estado y fotos', text: 'Comprueba qué está completado y qué tiene evidencia fotográfica.' }, { title: 'Pestañas inferiores', text: 'Muévete entre panel, tareas, uso, calendario y otras áreas.' }],
  },
  'usage-add-modal': {
    title: 'Registrar uso',
    summary: 'Este modal se abre al registrar uso. Sirve para documentar la carga del campo por entrenamientos, partidos, calentamientos u otra actividad.',
    alt: 'Formulario móvil de uso en PitchOps',
    bullets: ['Tarea significa trabajo de cuidado u operación sobre el campo.', 'Uso significa carga futbolística: entrenamiento, partido, calentamiento u otra actividad.', 'Registra tipo de uso, fecha, hora, contexto del campo y notas útiles.', 'Las entradas coherentes mantienen fiables las estadísticas y el calendario.'],
    callouts: [{ title: 'Tipo de uso', text: 'Elige la actividad realizada sobre el campo.' }, { title: 'Fecha y hora', text: 'Coloca la carga en la línea operativa correcta.' }, { title: 'Notas', text: 'Añade contexto sobre cargas especiales o impacto en la superficie.' }],
  },
  'usage-list-controls': {
    title: 'Lista de uso y controles',
    summary: 'La lista de uso ayuda a revisar entradas de hoy, próximas actividades e historial tras guardar registros.',
    alt: 'Lista móvil de uso y controles en PitchOps',
    bullets: ['Si ves Hoy, Próximas y Lista, usa esos conmutadores para cambiar el contexto.', 'Búsqueda, filtros, fechas y CSV ayudan con historiales más largos.', 'La barra inferior sigue siendo el camino principal de trabajo móvil.'],
    callouts: [{ title: 'Cambio de vista', text: 'Alterna entre hoy, próximas actividades y lista.' }, { title: 'Búsqueda, fechas y exportación', text: 'Filtra el historial o exporta registros para revisión.' }, { title: 'Pestañas inferiores', text: 'Continúa desde la barra fija inferior.' }],
  },
  'schedule-week': {
    title: 'Calendario semanal',
    summary: 'La vista semanal muestra trabajos planificados y uso del campo dentro del mismo ritmo de planificación.',
    alt: 'Calendario semanal móvil de PitchOps',
    bullets: ['Lee la semana día a día y revisa la posición de tareas y uso.', 'La vista ayuda a entender la presión de entrenamientos, partidos y cuidado del campo.', 'Tareas y uso se ven juntos para mantener conectadas las decisiones.'],
    callouts: [{ title: 'Ventana semanal', text: 'Revisa días activos y navega con el rango de fechas y las flechas.' }, { title: 'Elementos del calendario', text: 'Tareas y uso aparecen como posiciones prácticas dentro de la cuadrícula.' }, { title: 'Añadir desde un espacio libre', text: 'Toca un hueco del día para añadir rápido una tarea o uso.' }],
  },
  'schedule-copy-move': {
    title: 'Copiar y mover elementos',
    summary: 'Copiar o mover se hace con drag & drop, útil para ajustar elementos repetidos o desplazados sin recrearlos.',
    alt: 'Opciones móviles para copiar y mover elementos en PitchOps',
    bullets: ['Usa drag & drop para copiar una entrada cuando una actividad parecida se repite.', 'Usa drag & drop para mover una entrada cuando cambia la fecha.', 'Esto acelera los ajustes en semanas operativas intensas.'],
    callouts: [{ title: 'Acción del elemento', text: 'Copia o mueve la posición seleccionada con drag & drop.' }, { title: 'Ajuste rápido', text: 'Cambia planes sin reconstruir el registro desde cero.' }],
  },
  'schedule-week-filters': {
    title: 'Filtros de la vista semanal',
    summary: 'En la vista semanal puedes elegir si se muestran tareas, uso o todos los registros.',
    alt: 'Filtros móviles de vista semanal en PitchOps',
    bullets: ['Elige Tareas cuando el foco sea el plan de cuidado.', 'Elige Uso cuando analices la carga futbolística.', 'Elige Todo cuando necesites la imagen operativa completa.'],
    callouts: [{ title: 'Tareas, Uso, Todo', text: 'Este control decide qué registros son visibles en el calendario.' }, { title: 'Semana más legible', text: 'Filtra cuando el calendario está muy cargado.' }],
  },
  'schedule-month': {
    title: 'Calendario mensual',
    summary: 'La vista mensual ofrece una lectura amplia del plan durante todo el mes.',
    alt: 'Calendario mensual móvil de PitchOps',
    bullets: ['Usa el mes para ver el ritmo de cuidado y uso a mayor escala.', 'Busca picos de carga, ventanas libres y demanda repetida del campo.', 'Abre fechas concretas cuando necesites más detalle.'],
    callouts: [{ title: 'Cuadrícula mensual', text: 'Escanea el mes para detectar presión y ventanas disponibles.' }, { title: 'Entradas por fecha', text: 'Las marcas ayudan a encontrar días con trabajo o uso.' }],
  },
  'schedule-multiday': {
    title: 'Añadir evento de varios días',
    summary: 'Este modal se abre con el botón “+” de la ventana de fecha y sirve para eventos que duran más de un día.',
    alt: 'Modal móvil de evento de varios días en PitchOps',
    bullets: ['Define nombre o tipo de evento para que el plan sea claro.', 'Selecciona fecha de inicio y fin.', 'Añade notas si afecta al acceso, la carga o la planificación.'],
    callouts: [{ title: 'Configuración del evento', text: 'Empieza por color y nombre del evento.' }, { title: 'Inicio y fin', text: 'Los campos de fecha definen todo el rango.' }, { title: 'Contexto de planificación', text: 'Añade notas útiles antes de guardar.' }],
  },
  'stats-overview': {
    title: 'Resumen de estadísticas',
    summary: 'Una pantalla resume operaciones mediante KPI, rango temporal, filtros, gráficos y exportación PDF.',
    alt: 'Resumen móvil de estadísticas en PitchOps',
    bullets: ['Las tarjetas KPI muestran los totales operativos principales.', 'El rango temporal y los filtros determinan qué registros entran en el resumen.', 'Los gráficos ayudan a ver patrones de trabajo, uso u otras categorías.', 'La exportación PDF crea una vista para compartir como informe.'],
    callouts: [{ title: 'Tarjetas KPI', text: 'Revisa primero los totales para entender el periodo.' }, { title: 'Rango y filtros', text: 'Ajusta el periodo antes del análisis o exportación.' }, { title: 'Gráficos y PDF', text: 'Los gráficos muestran patrones y el PDF apoya el reporte.' }],
  },
  'agronomy-overview': {
    title: 'Resumen de agronomía',
    summary: 'El área de agronomía reúne historial de fertilización y registros de nutrientes dentro de la línea operativa.',
    alt: 'Resumen móvil de agronomía en PitchOps',
    bullets: ['Usa la tabla o lista principal para revisar el historial de fertilización.', 'Los filtros acotan registros por fecha, recinto, producto o criterios visibles.', 'La vista apoya la trazabilidad de aplicaciones y nutrientes.'],
    callouts: [{ title: 'Historial de fertilización', text: 'Revisa aplicaciones en una lista operativa estructurada.' }, { title: 'Filtros', text: 'Acota el historial antes de revisar o reportar.' }],
  },
  'agronomy-chart': {
    title: 'Vista de gráfico agronómico',
    summary: 'El gráfico ayuda a analizar historial de nutrientes y tendencias visibles sin afirmar recomendaciones automáticas.',
    alt: 'Gráfico móvil de nutrientes en PitchOps',
    bullets: ['Cambia entre N, P, K y otros nutrientes visibles cuando estén disponibles.', 'Usa las tendencias para entender el historial registrado a lo largo del tiempo.', 'Trata el gráfico como apoyo de análisis, no como recomendación agronómica automática.'],
    callouts: [{ title: 'Selector de nutrientes', text: 'Cambia entre N, P, K u otras categorías visibles.' }, { title: 'Gráfico de tendencia', text: 'Lee líneas o barras como historial registrado en el tiempo.' }],
  },
  'mobile-menu': {
    title: 'Navegación del menú móvil',
    summary: 'El menú móvil ayuda a llegar rápidamente a zonas menos frecuentes del módulo.',
    alt: 'Navegación móvil de menú en PitchOps',
    bullets: ['Usa el menú móvil como navegación secundaria cuando la barra inferior no alcance.', 'Mantén el trabajo diario anclado en panel, pestañas y calendario.'],
    callouts: [{ title: 'Entrada del menú', text: 'Abre el menú para llegar a áreas de apoyo.' }, { title: 'Lista de navegación', text: 'Elige el destino que corresponde al siguiente paso.' }],
  },
  'settings-token-links': {
    title: 'Ajustes, listas y enlaces token',
    summary: 'Los ajustes controlan opciones prácticas del reporte móvil: equipos, personal, recintos y enlaces token.',
    alt: 'Ajustes móviles de equipos, personal y enlaces token en PitchOps',
    bullets: ['Los tipos de equipo definen las opciones disponibles al registrar tareas.', 'La lista de personal define trabajadores y entradas disponibles.', 'La lista de recintos incluye enlaces token que pueden enviarse al equipo.', 'Los enlaces token permiten registrar trabajo o actualizar entradas planificadas según permisos.'],
    callouts: [{ title: 'Equipo y personal', text: 'Mantén las opciones que aparecen en formularios de tarea.' }, { title: 'Lista de recintos', text: 'Aquí están ajustes del recinto y enlaces token.' }, { title: 'Enlaces token', text: 'Envía acceso práctico de reporte sin convertirlo en administración.' }],
  },
});

const stepsFr = localizeSteps(stepsEn, {
  'home-dashboard': {
    title: 'Tableau de bord',
    summary: 'C’est le point de départ des opérations terrain mobiles. L’utilisateur mobile y voit les principaux accès avant de consigner le travail.',
    alt: 'Tableau de bord mobile PitchOps',
    bullets: ['Utilisez les cartes visibles comme raccourcis vers les principaux flux.', 'La météo à 48 h apparaît après autorisation de la localisation dans le navigateur.', 'Faites défiler les pastilles météo horizontalement pour voir les heures suivantes.'],
    callouts: [{ title: 'Cartes principales', text: 'Ouvrez les zones opérationnelles depuis le tableau de bord.' }, { title: 'Météo 48 h', text: 'Balayez les cartes pour vérifier les conditions plus tard.' }, { title: 'Menu mobile', text: 'Utilisez l’en-tête pour revenir à l’accueil ou ouvrir le menu.' }],
  },
  'task-add-modal': {
    title: 'Consigner une tâche',
    summary: 'Cette fenêtre s’ouvre lors de la consignation d’une tâche. Elle sert aux travaux d’entretien ou d’exploitation réalisés ou planifiés.',
    alt: 'Formulaire mobile de tâche PitchOps',
    bullets: ['Renseignez type de tâche, équipement, météo, personnel, notes, date, statut et photos.', 'Le bouton nuage récupère les données météo actuelles pour le registre.', 'Le statut indique si la tâche est prévue, en cours ou terminée.', 'Ajoutez les notes pendant que le contexte est encore frais.'],
    callouts: [{ title: 'Détails de la tâche', text: 'Sélectionnez le type de travail à consigner.' }, { title: 'Bouton météo', text: 'Récupérez la météo actuelle pour garder le bon contexte terrain.' }, { title: 'Notes et temps', text: 'Ajoutez contexte, date ou heure avant l’enregistrement.' }],
  },
  'task-photos': {
    title: 'Ajouter des photos',
    summary: 'Les tâches peuvent inclure des photos, ce qui rend le travail quotidien plus facile à vérifier ensuite.',
    alt: 'Zone photo mobile d’une tâche PitchOps',
    bullets: ['Ajoutez les photos dans la zone prévue du formulaire.', 'Documentez le travail réalisé, l’état de surface ou les problèmes visibles.', 'Les photos restent liées à la tâche au lieu de se perdre dans les messages.'],
    callouts: [{ title: 'Zone photo', text: 'Touchez ici pour ajouter des images au registre.' }, { title: 'Preuve opérationnelle', text: 'Les photos facilitent la vérification lors des revues.' }],
  },
  'task-list-controls': {
    title: 'Liste des tâches et contrôles',
    summary: 'Après enregistrement, la liste des tâches sert à rechercher, filtrer et poursuivre le travail via les onglets mobiles.',
    alt: 'Liste mobile des tâches et contrôles PitchOps',
    bullets: ['Utilisez recherche et filtres pour réduire la liste.', 'L’export CSV aide à préparer revue ou reporting.', 'Statut et indicateurs photo montrent les entrées clôturées et documentées.', 'Continuez avec la barre d’onglets inférieure, principale navigation mobile.'],
    callouts: [{ title: 'Recherche et filtres', text: 'Trouvez vite les bonnes tâches quand la liste grandit.' }, { title: 'Statut et photos', text: 'Vérifiez ce qui est terminé et documenté.' }, { title: 'Onglets inférieurs', text: 'Passez entre tableau de bord, tâches, utilisation, planning et autres zones.' }],
  },
  'usage-add-modal': {
    title: 'Consigner l’utilisation',
    summary: 'Cette fenêtre sert à consigner la charge du terrain liée aux entraînements, matchs, échauffements ou autres usages.',
    alt: 'Formulaire mobile d’utilisation PitchOps',
    bullets: ['Une tâche correspond à un travail d’entretien ou d’exploitation sur le terrain.', 'Une utilisation correspond à une charge football: entraînement, match, échauffement ou autre activité.', 'Consignez type d’utilisation, date, heure, contexte terrain et notes utiles.', 'Des entrées cohérentes gardent statistiques et planning fiables.'],
    callouts: [{ title: 'Type d’utilisation', text: 'Choisissez l’activité réalisée sur le terrain.' }, { title: 'Date et heure', text: 'Placez la charge au bon endroit dans la chronologie.' }, { title: 'Notes', text: 'Ajoutez le contexte d’une charge inhabituelle ou de son impact.' }],
  },
  'usage-list-controls': {
    title: 'Liste d’utilisation et contrôles',
    summary: 'La liste d’utilisation aide à revoir les entrées du jour, les activités à venir et l’historique.',
    alt: 'Liste mobile d’utilisation et contrôles PitchOps',
    bullets: ['Utilisez Aujourd’hui, À venir et Liste lorsque ces vues sont visibles.', 'Recherche, filtres, dates et CSV aident à gérer un historique plus long.', 'La barre d’onglets inférieure reste le chemin principal du module mobile.'],
    callouts: [{ title: 'Sélecteurs de vue', text: 'Passez entre aujourd’hui, à venir et liste.' }, { title: 'Recherche, dates et export', text: 'Filtrez l’historique ou exportez des registres.' }, { title: 'Onglets inférieurs', text: 'Poursuivez le travail avec la barre fixe.' }],
  },
  'schedule-week': {
    title: 'Planning hebdomadaire',
    summary: 'Le planning hebdomadaire montre travaux prévus et utilisation du terrain dans le même rythme.',
    alt: 'Planning hebdomadaire mobile PitchOps',
    bullets: ['Lisez la semaine jour par jour.', 'Repérez la pression liée aux entraînements, matchs et travaux d’entretien.', 'Tâches et utilisation restent visibles ensemble pour relier les décisions.'],
    callouts: [{ title: 'Fenêtre de semaine', text: 'Vérifiez les jours actifs et naviguez avec dates et flèches.' }, { title: 'Éléments du planning', text: 'Tâches et utilisations apparaissent directement dans la grille.' }, { title: 'Ajout depuis un créneau libre', text: 'Touchez une zone libre pour ajouter vite une tâche ou une utilisation.' }],
  },
  'schedule-copy-move': {
    title: 'Copier et déplacer',
    summary: 'La copie et le déplacement se font par drag & drop pour ajuster vite les éléments répétés ou déplacés.',
    alt: 'Options mobiles de copie et déplacement PitchOps',
    bullets: ['Utilisez le drag & drop pour copier une entrée similaire.', 'Utilisez le drag & drop pour déplacer une entrée quand la date change.', 'Cela accélère les corrections pendant les semaines chargées.'],
    callouts: [{ title: 'Action sur l’élément', text: 'Copiez ou déplacez l’élément sélectionné par drag & drop.' }, { title: 'Correction rapide', text: 'Ajustez le plan sans recréer l’entrée.' }],
  },
  'schedule-week-filters': {
    title: 'Filtres de semaine',
    summary: 'Dans la semaine, l’utilisateur peut afficher tâches, utilisation ou tous les registres.',
    alt: 'Filtres mobiles de semaine PitchOps',
    bullets: ['Choisissez Tâches pour le planning d’entretien.', 'Choisissez Utilisation pour analyser la charge football.', 'Choisissez Tout pour une vue opérationnelle complète.'],
    callouts: [{ title: 'Tâches, Utilisation, Tout', text: 'Ce sélecteur décide quels registres sont visibles.' }, { title: 'Semaine plus lisible', text: 'Filtrez quand le planning devient dense.' }],
  },
  'schedule-month': {
    title: 'Planning mensuel',
    summary: 'Le planning mensuel donne une vue large sur le mois.',
    alt: 'Planning mensuel mobile PitchOps',
    bullets: ['Utilisez le mois pour voir le rythme d’entretien et d’utilisation.', 'Repérez pics de charge, fenêtres libres et demandes répétées.', 'Ouvrez une date précise pour plus de détail.'],
    callouts: [{ title: 'Grille mensuelle', text: 'Parcourez le mois pour voir pression et fenêtres disponibles.' }, { title: 'Entrées par date', text: 'Les repères aident à trouver les jours avec travail ou usage.' }],
  },
  'schedule-multiday': {
    title: 'Ajouter un événement multi-jours',
    summary: 'Cette fenêtre s’ouvre avec le “+” de la fenêtre de date et sert aux événements de plusieurs jours.',
    alt: 'Fenêtre mobile d’événement multi-jours PitchOps',
    bullets: ['Définissez le nom ou le type pour rendre le plan lisible.', 'Choisissez les dates de début et de fin.', 'Ajoutez des notes si l’événement affecte accès, charge ou planning.'],
    callouts: [{ title: 'Réglages de l’événement', text: 'Commencez par la couleur et le nom.' }, { title: 'Début et fin', text: 'Les dates définissent toute la période.' }, { title: 'Contexte planning', text: 'Ajoutez les notes utiles avant d’enregistrer.' }],
  },
  'stats-overview': {
    title: 'Vue statistiques',
    summary: 'Un seul écran résume les opérations avec KPI, période, filtres, graphiques et export PDF.',
    alt: 'Vue mobile des statistiques PitchOps',
    bullets: ['Les cartes KPI montrent les principaux totaux.', 'Période et filtres définissent les registres inclus.', 'Les graphiques révèlent des tendances de travail, d’utilisation ou d’autres catégories.', 'L’export PDF produit une vue partageable.'],
    callouts: [{ title: 'Cartes KPI', text: 'Commencez par les totaux pour comprendre la période.' }, { title: 'Période et filtres', text: 'Ajustez la période avant analyse ou export.' }, { title: 'Graphiques et PDF', text: 'Les graphiques montrent les tendances et le PDF soutient le reporting.' }],
  },
  'agronomy-overview': {
    title: 'Vue agronomie',
    summary: 'La zone agronomie sert à suivre fertilisation et nutriments sur la chronologie opérationnelle.',
    alt: 'Vue mobile agronomie PitchOps',
    bullets: ['Utilisez la table ou liste principale pour revoir l’historique de fertilisation.', 'Les filtres réduisent les registres par date, site, produit ou critère visible.', 'La vue soutient la traçabilité des applications et nutriments.'],
    callouts: [{ title: 'Historique de fertilisation', text: 'Revoyez les applications dans une liste structurée.' }, { title: 'Filtres', text: 'Réduisez l’historique avant revue ou reporting.' }],
  },
  'agronomy-chart': {
    title: 'Graphique agronomique',
    summary: 'Le graphique aide à analyser l’historique nutritif et les tendances sans prétendre fournir des recommandations automatiques.',
    alt: 'Graphique mobile des nutriments PitchOps',
    bullets: ['Passez entre N, P, K et les autres nutriments visibles.', 'Utilisez les tendances pour comprendre l’historique enregistré.', 'Considérez le graphique comme aide d’analyse, pas comme recommandation automatique.'],
    callouts: [{ title: 'Sélecteur nutriments', text: 'Passez entre N, P, K et autres catégories visibles.' }, { title: 'Graphique de tendance', text: 'Les lignes ou barres montrent l’historique enregistré.' }],
  },
  'mobile-menu': {
    title: 'Navigation du menu mobile',
    summary: 'Le menu mobile est utile pour atteindre rapidement les zones moins fréquentes du module.',
    alt: 'Navigation menu mobile PitchOps',
    bullets: ['Utilisez le menu comme navigation secondaire.', 'Le travail quotidien reste centré sur tableau de bord, onglets et planning.'],
    callouts: [{ title: 'Entrée menu', text: 'Ouvrez le menu pour accéder aux zones de soutien.' }, { title: 'Liste de navigation', text: 'Choisissez la destination du prochain travail.' }],
  },
  'settings-token-links': {
    title: 'Paramètres, listes et liens token',
    summary: 'Les paramètres contrôlent les options pratiques du reporting mobile: équipements, personnel, sites et liens token.',
    alt: 'Paramètres mobiles équipements personnel et liens token PitchOps',
    bullets: ['Les types d’équipement définissent les options disponibles dans les tâches.', 'La liste du personnel définit les intervenants disponibles.', 'La liste des sites contient les liens token à envoyer aux équipes.', 'Les liens token permettent de consigner du travail ou mettre à jour des entrées selon les droits.'],
    callouts: [{ title: 'Équipements et personnel', text: 'Maintenez les choix visibles dans les formulaires.' }, { title: 'Liste des sites', text: 'Retrouvez ici paramètres de site et liens token.' }, { title: 'Liens token', text: 'Envoyez un accès de reporting pratique sans administration.' }],
  },
});

const stepsPt = localizeSteps(stepsEn, {
  'home-dashboard': {
    title: 'Painel inicial',
    summary: 'Este é o ponto de partida das operações móveis no relvado. O utilizador móvel vê aqui os principais acessos antes de registar trabalho.',
    alt: 'Painel inicial móvel do PitchOps',
    bullets: ['Use os cartões visíveis como atalhos para os fluxos principais.', 'A previsão meteorológica de 48 horas aparece depois de permitir acesso à localização no navegador.', 'Deslize os cartões da previsão na horizontal para ver horas seguintes.'],
    callouts: [{ title: 'Cartões principais', text: 'Abra áreas operacionais a partir do painel.' }, { title: 'Previsão 48 h', text: 'Deslize para rever condições mais tarde.' }, { title: 'Menu móvel', text: 'Use o cabeçalho para voltar ao início ou abrir o menu.' }],
  },
  'task-add-modal': {
    title: 'Registar tarefa',
    summary: 'Este modal abre ao registar uma tarefa. Use-o para trabalhos de manutenção ou operação concluídos ou planeados no relvado.',
    alt: 'Formulário móvel de tarefa no PitchOps',
    bullets: ['Preencha tipo de tarefa, equipamento, tempo, equipa, notas, data, estado e fotos.', 'O botão de nuvem é útil porque obtém os dados meteorológicos atuais.', 'Use o estado para indicar se a tarefa está planeada, em curso ou concluída.', 'Adicione notas enquanto o contexto do trabalho ainda está fresco.'],
    callouts: [{ title: 'Detalhes da tarefa', text: 'Selecione o tipo de trabalho a registar.' }, { title: 'Botão do tempo', text: 'Obtenha o tempo atual para guardar o contexto correto.' }, { title: 'Notas e horário', text: 'Registe contexto, data e hora antes de guardar.' }],
  },
  'task-photos': {
    title: 'Adicionar fotos à tarefa',
    summary: 'As tarefas podem incluir fotos, transformando o trabalho diário num registo operacional mais claro.',
    alt: 'Área móvel de fotos de tarefa no PitchOps',
    bullets: ['Adicione fotos na área de upload do formulário.', 'Use fotos para documentar trabalho concluído, condição da superfície ou problemas visíveis.', 'As fotos ficam ligadas à tarefa em vez de se perderem em mensagens.'],
    callouts: [{ title: 'Área de fotos', text: 'Toque aqui para adicionar imagens ao registo.' }, { title: 'Evidência operacional', text: 'As fotos facilitam a verificação posterior.' }],
  },
  'task-list-controls': {
    title: 'Lista de tarefas e controlos',
    summary: 'Depois de guardar uma tarefa, a lista permite pesquisar, filtrar e continuar o trabalho pelas abas móveis.',
    alt: 'Lista móvel de tarefas e controlos no PitchOps',
    bullets: ['Use pesquisa e filtros para reduzir a lista.', 'A exportação CSV ajuda a levar o histórico para revisão ou relatório.', 'Estado e indicadores de foto mostram conclusão e evidência.', 'Continue pela barra inferior; é a navegação principal no móvel.'],
    callouts: [{ title: 'Pesquisa e filtros', text: 'Encontre rapidamente as tarefas certas.' }, { title: 'Estado e fotos', text: 'Veja o que está concluído e documentado.' }, { title: 'Abas inferiores', text: 'Mude entre painel, tarefas, utilização, calendário e outras áreas.' }],
  },
  'usage-add-modal': {
    title: 'Registar utilização',
    summary: 'Este modal abre ao registar utilização. Use-o para carga do relvado por treinos, jogos, aquecimentos ou outro uso.',
    alt: 'Formulário móvel de utilização no PitchOps',
    bullets: ['Tarefa significa trabalho de manutenção ou operação no relvado.', 'Utilização significa carga futebolística: treino, jogo, aquecimento ou outra atividade.', 'Registe tipo de utilização, data, hora, contexto do recinto e notas úteis.', 'Entradas consistentes mantêm estatísticas e calendário fiáveis.'],
    callouts: [{ title: 'Tipo de utilização', text: 'Escolha a atividade realizada no relvado.' }, { title: 'Data e hora', text: 'Coloque a carga no ponto correto da linha operacional.' }, { title: 'Notas', text: 'Acrescente contexto sobre carga invulgar ou impacto na superfície.' }],
  },
  'usage-list-controls': {
    title: 'Lista de utilização e controlos',
    summary: 'A lista de utilização ajuda a rever registos de hoje, próximos eventos e histórico após guardar entradas.',
    alt: 'Lista móvel de utilização e controlos no PitchOps',
    bullets: ['Se Hoje, Próximos e Lista estiverem visíveis, use-os para mudar o contexto.', 'Pesquisa, filtros, datas e CSV ajudam com históricos mais longos.', 'A barra inferior continua a ser o caminho principal no módulo móvel.'],
    callouts: [{ title: 'Controlos de vista', text: 'Alterne entre hoje, próximos e lista.' }, { title: 'Pesquisa, datas e exportação', text: 'Filtre o histórico ou exporte registos.' }, { title: 'Abas inferiores', text: 'Continue pela barra fixa no fundo.' }],
  },
  'schedule-week': {
    title: 'Calendário semanal',
    summary: 'O calendário semanal mostra trabalhos planeados e utilização do campo no mesmo ritmo de planeamento.',
    alt: 'Calendário semanal móvel do PitchOps',
    bullets: ['Leia a semana dia a dia e veja a posição de tarefas e utilização.', 'A vista ajuda a entender pressão de treinos, jogos e manutenção.', 'Tarefas e utilização ficam juntas para manter decisões ligadas.'],
    callouts: [{ title: 'Janela semanal', text: 'Veja os dias ativos e navegue pelo intervalo de datas e setas.' }, { title: 'Elementos do calendário', text: 'Tarefas e utilização aparecem diretamente na grelha.' }, { title: 'Adicionar num espaço livre', text: 'Toque num espaço livre para adicionar rapidamente tarefa ou utilização.' }],
  },
  'schedule-copy-move': {
    title: 'Copiar e mover elementos',
    summary: 'Copiar e mover é feito por drag & drop, ajudando a ajustar itens repetidos ou deslocados sem os recriar.',
    alt: 'Opções móveis para copiar e mover no PitchOps',
    bullets: ['Use drag & drop para copiar uma entrada quando algo semelhante se repete.', 'Use drag & drop para mover uma entrada quando a data muda.', 'Isto acelera ajustes em semanas operacionais intensas.'],
    callouts: [{ title: 'Ação do elemento', text: 'Copie ou mova a posição selecionada por drag & drop.' }, { title: 'Ajuste rápido', text: 'Mude planos sem reconstruir o registo.' }],
  },
  'schedule-week-filters': {
    title: 'Filtros da semana',
    summary: 'Na vista semanal pode escolher mostrar tarefas, utilização ou todos os registos.',
    alt: 'Filtros móveis da semana no PitchOps',
    bullets: ['Escolha Tarefas quando o foco é o plano de manutenção.', 'Escolha Utilização ao analisar carga futebolística.', 'Escolha Tudo para ver o quadro operacional completo.'],
    callouts: [{ title: 'Tarefas, Utilização, Tudo', text: 'Este seletor decide quais registos aparecem.' }, { title: 'Semana mais legível', text: 'Filtre quando o calendário fica cheio.' }],
  },
  'schedule-month': {
    title: 'Calendário mensal',
    summary: 'O calendário mensal dá uma visão ampla do planeamento ao longo do mês.',
    alt: 'Calendário mensal móvel do PitchOps',
    bullets: ['Use a vista mensal para ver o ritmo de manutenção e utilização.', 'Procure picos de carga, janelas livres e procura recorrente do campo.', 'Abra datas específicas quando precisar de mais detalhe.'],
    callouts: [{ title: 'Grelha mensal', text: 'Analise o mês em busca de pressão e janelas disponíveis.' }, { title: 'Entradas nas datas', text: 'Marcas ajudam a encontrar dias com trabalho ou uso.' }],
  },
  'schedule-multiday': {
    title: 'Adicionar evento de vários dias',
    summary: 'Este modal abre ao premir “+” na janela da data e serve para eventos com mais de um dia.',
    alt: 'Modal móvel de evento de vários dias no PitchOps',
    bullets: ['Defina nome ou tipo para que o plano fique claro.', 'Escolha datas de início e fim.', 'Adicione notas quando o evento afeta acesso, carga ou planeamento.'],
    callouts: [{ title: 'Configuração do evento', text: 'Comece pela cor e nome do evento.' }, { title: 'Início e fim', text: 'Os campos de data definem todo o intervalo.' }, { title: 'Contexto do plano', text: 'Adicione notas úteis antes de guardar.' }],
  },
  'stats-overview': {
    title: 'Resumo de estatísticas',
    summary: 'Um ecrã resume operações com cartões KPI, intervalo de tempo, filtros, gráficos e exportação PDF.',
    alt: 'Resumo móvel de estatísticas no PitchOps',
    bullets: ['Cartões KPI mostram os principais totais operacionais.', 'Intervalo de tempo e filtros definem quais registos entram no resumo.', 'Gráficos ajudam a ver padrões de trabalho, utilização e outras categorias.', 'Exportação PDF cria uma vista partilhável como relatório.'],
    callouts: [{ title: 'Cartões KPI', text: 'Veja primeiro os totais para entender o período.' }, { title: 'Intervalo e filtros', text: 'Ajuste o período antes da análise ou exportação.' }, { title: 'Gráficos e PDF', text: 'Gráficos mostram padrões e o PDF apoia relatórios.' }],
  },
  'agronomy-overview': {
    title: 'Resumo de agronomia',
    summary: 'A área de agronomia serve para histórico de fertilização e registos de nutrientes ligados à linha operacional.',
    alt: 'Resumo móvel de agronomia no PitchOps',
    bullets: ['Use a tabela ou lista principal para rever histórico de fertilização.', 'Filtros reduzem registos por data, recinto, produto ou critérios visíveis.', 'A vista apoia rastreabilidade de aplicações e nutrientes.'],
    callouts: [{ title: 'Histórico de fertilização', text: 'Reveja aplicações numa lista operacional estruturada.' }, { title: 'Filtros', text: 'Reduza o histórico antes de revisão ou relatório.' }],
  },
  'agronomy-chart': {
    title: 'Vista de gráfico agronómico',
    summary: 'O gráfico ajuda a analisar histórico de nutrientes e tendências sem afirmar recomendações automáticas.',
    alt: 'Gráfico móvel de nutrientes no PitchOps',
    bullets: ['Alterne entre N, P, K e outros nutrientes visíveis quando disponíveis.', 'Use tendências para entender o histórico registado ao longo do tempo.', 'Trate o gráfico como apoio de análise, não como recomendação agronómica automática.'],
    callouts: [{ title: 'Seletor de nutrientes', text: 'Alterne entre N, P, K ou outras categorias visíveis.' }, { title: 'Gráfico de tendência', text: 'Linhas ou barras mostram o histórico registado.' }],
  },
  'mobile-menu': {
    title: 'Navegação do menu móvel',
    summary: 'O menu móvel é útil para chegar rapidamente a áreas menos frequentes do módulo.',
    alt: 'Navegação móvel do menu PitchOps',
    bullets: ['Use o menu móvel como navegação secundária.', 'O trabalho diário fica sobretudo no painel, abas e calendário.'],
    callouts: [{ title: 'Entrada do menu', text: 'Abra o menu para chegar a áreas de apoio.' }, { title: 'Lista de navegação', text: 'Escolha o destino para o próximo passo.' }],
  },
  'settings-token-links': {
    title: 'Definições, listas e links token',
    summary: 'As definições controlam opções práticas de reporte móvel: equipamentos, equipa, recintos e links token.',
    alt: 'Definições móveis de equipamento equipa e links token no PitchOps',
    bullets: ['Tipos de equipamento definem opções disponíveis ao registar tarefas.', 'A lista de equipa define trabalhadores disponíveis.', 'A lista de recintos inclui links token que podem ser enviados à equipa.', 'Links token permitem registar trabalho ou atualizar entradas planeadas conforme permissões.'],
    callouts: [{ title: 'Equipamento e equipa', text: 'Mantenha as opções que aparecem nos formulários.' }, { title: 'Lista de recintos', text: 'Encontre aqui definições do recinto e links token.' }, { title: 'Links token', text: 'Envie acesso prático de reporte sem criar administração.' }],
  },
});

const en: ManualContent = {
  meta: {
    title: 'PitchOps Manuals | Mobile Pitch Operations',
    description:
      'Guided mobile manuals for the Pitch Operations module in PitchOps, with annotated workflows for tasks, usage, schedules, stats, agronomy and token links.',
  },
  hero: {
    eyebrow: 'PitchOps Manuals',
    title: 'Mobile workflows for real pitch operations.',
    lead:
      'A guided visual manual for teams using the Pitch Operations module on phones: what to tap, what each area records and how daily work becomes reliable operational history.',
    primaryButton: 'Open PitchOps',
    secondaryButton: 'View manual flow',
  },
  overview: {
    eyebrow: 'Manuals overview',
    title: 'Built for people working from the pitch, not for a documentation portal.',
    text:
      'Use these manuals as a practical path through the mobile module. Each screen explains the workflow, the important controls and the operational reason for the record.',
    cards: [
      { title: 'Mobile-first', text: 'Screens and notes are sized for narrow phones and fast reading on site.' },
      { title: 'Operational', text: 'The focus is maintenance, load, schedule, reporting and agronomy workflows.' },
      { title: 'Visual', text: 'Annotations point to the controls that matter for each screen.' },
    ],
  },
  labels: {
    contents: 'Manual sections',
    workflow: 'Workflow',
    visualGuide: 'Visual guide',
    missingImage: 'Screenshot placeholder',
    missingImageText: 'Add this exact file to public/images/manuals/mobile/ to replace the placeholder.',
    exactFile: 'Expected file',
    missingReportTitle: 'Missing screenshots',
    missingReportText: 'These placeholders are intentional until the exact source files are added.',
    tokenUsers: 'Token-user limitations',
  },
  groups: groupsEn,
  steps: stepsEn,
  tokenSection: {
    eyebrow: 'Access and token links',
    title: 'Token access is for day-to-day reporting, not system administration.',
    text:
      'Token users should be treated as practical mobile reporters. They can record work and update selected entries within clear limits.',
    points: [
      'Token users can add tasks and usage.',
      'Token users can add new entries from yesterday onward into the future.',
      'Token users can edit only their own entries and only selected fields available in the modal.',
      'Token users cannot edit the task name.',
      'Token users can change status from planned to completed.',
      'Token users can delete only their own entries and only on the same day they created them.',
      'Token users use token links from Venue List.',
      'Token access supports practical daily reporting, not project or system administration.',
    ],
  },
};

const pl: ManualContent = {
  meta: {
    title: 'Instrukcje obsługi PitchOps | Mobilne operacje na murawie',
    description:
      'Wizualne instrukcje mobilnego modułu operacji na murawie w PitchOps: zadania, użycie, harmonogramy, statystyki, agronomia i linki tokenowe.',
  },
  hero: {
    eyebrow: 'Instrukcje obsługi PitchOps',
    title: 'Mobilne przepływy pracy dla realnych operacji na murawie.',
    lead:
      'Wizualna instrukcja dla zespołów korzystających z modułu operacji na murawie na telefonie: co dotknąć, co zapisuje dany obszar i jak codzienna praca staje się wiarygodną historią operacyjną.',
    primaryButton: 'Otwórz PitchOps',
    secondaryButton: 'Zobacz instrukcję',
  },
  overview: {
    eyebrow: 'Przegląd instrukcji',
    title: 'Instrukcje dla osób pracujących przy murawie, nie portal dokumentacyjny.',
    text:
      'Traktuj tę stronę jako praktyczną ścieżkę po module mobilnym. Każdy ekran wyjaśnia przepływ pracy, ważne kontrolki i operacyjny sens zapisu.',
    cards: [
      { title: 'Mobilnie', text: 'Ekrany i opisy są przygotowane do wąskich telefonów oraz szybkiego czytania na obiekcie.' },
      { title: 'Operacyjnie', text: 'Najważniejsze są prace pielęgnacyjne, obciążenie boiska, planowanie, raportowanie i agronomia.' },
      { title: 'Wizualnie', text: 'Adnotacje wskazują kontrolki, które mają znaczenie na danym ekranie.' },
    ],
  },
  labels: {
    contents: 'Sekcje instrukcji',
    workflow: 'Przepływ pracy',
    visualGuide: 'Wskazówki na ekranie',
    missingImage: 'Miejsce na zrzut ekranu',
    missingImageText: 'Dodaj ten dokładny plik do public/images/manuals/mobile/, aby zastąpić blok zastępczy.',
    exactFile: 'Oczekiwany plik',
    missingReportTitle: 'Brakujące zrzuty ekranu',
    missingReportText: 'Te bloki zastępcze są celowe do czasu dodania dokładnych plików źródłowych.',
    tokenUsers: 'Ograniczenia użytkowników tokenowych',
  },
  groups: groupsPl,
  steps: stepsPl,
  tokenSection: {
    eyebrow: 'Dostęp i linki tokenowe',
    title: 'Dostęp tokenowy służy do codziennego raportowania, nie do administracji systemem.',
    text:
      'Użytkownik tokenowy to praktyczny użytkownik mobilny do raportowania z obiektu. Może zapisywać pracę i aktualizować wybrane wpisy w jasno określonych granicach.',
    points: [
      'Użytkownicy tokenowi mogą dodawać zadania i użycie.',
      'Użytkownicy tokenowi mogą dodawać nowe wpisy od wczoraj włącznie oraz w przyszłość.',
      'Użytkownicy tokenowi mogą edytować tylko własne wpisy i tylko wybrane pola dostępne w modalu.',
      'Użytkownicy tokenowi nie mogą edytować nazwy zadania.',
      'Użytkownicy tokenowi mogą zmienić status z planowanego na zakończony.',
      'Użytkownicy tokenowi mogą usuwać tylko własne wpisy i tylko tego samego dnia, w którym je utworzyli.',
      'Użytkownicy tokenowi korzystają z linków tokenowych dostępnych w liście obiektów.',
      'Dostęp tokenowy wspiera praktyczne raportowanie dnia codziennego, a nie administrację projektem lub systemem.',
    ],
  },
};

const de: ManualContent = {
  meta: {
    title: 'PitchOps Anleitungen | Mobiler Platzbetrieb',
    description:
      'Visuelle mobile Anleitungen für das Modul Platzbetrieb in PitchOps: Aufgaben, Nutzung, Zeitplan, Statistiken, Agronomie und Token-Links.',
  },
  hero: {
    eyebrow: 'PitchOps Anleitungen',
    title: 'Mobile Arbeitsabläufe für reale Platzoperationen.',
    lead:
      'Eine visuelle Anleitung für Teams, die das Modul Platzbetrieb auf dem Smartphone nutzen: was angetippt wird, was jeder Bereich speichert und wie tägliche Arbeit zur verlässlichen Betriebshistorie wird.',
    primaryButton: 'PitchOps öffnen',
    secondaryButton: 'Anleitung ansehen',
  },
  overview: {
    eyebrow: 'Überblick',
    title: 'Für Menschen am Platz gebaut, nicht als Dokumentationsportal.',
    text:
      'Nutzen Sie diese Anleitung als praktischen Weg durch das mobile Modul. Jeder Bildschirm erklärt Ablauf, wichtige Bedienelemente und den operativen Zweck des Eintrags.',
    cards: [
      { title: 'Mobil zuerst', text: 'Screens und Hinweise sind für schmale Smartphones und schnelles Lesen vor Ort ausgelegt.' },
      { title: 'Operativ', text: 'Im Fokus stehen Pflege, Belastung, Planung, Reporting und Agronomie.' },
      { title: 'Visuell', text: 'Markierungen zeigen die Bedienelemente, die auf dem jeweiligen Bildschirm zählen.' },
    ],
  },
  labels: {
    contents: 'Anleitungsbereiche',
    workflow: 'Arbeitsablauf',
    visualGuide: 'Hinweise auf dem Bildschirm',
    missingImage: 'Screenshot-Platzhalter',
    missingImageText: 'Fügen Sie diese exakte Datei zu public/images/manuals/mobile/ hinzu, um den Platzhalter zu ersetzen.',
    exactFile: 'Erwartete Datei',
    missingReportTitle: 'Fehlende Screenshots',
    missingReportText: 'Diese Platzhalter bleiben sichtbar, bis die exakten Quelldateien ergänzt werden.',
    tokenUsers: 'Einschränkungen für Token-Nutzer',
  },
  groups: groupsDe,
  steps: stepsDe,
  tokenSection: {
    eyebrow: 'Zugriff und Token-Links',
    title: 'Token-Zugriff ist für tägliche Meldungen gedacht, nicht für Systemadministration.',
    text:
      'Token-Nutzer sind praktische mobile Melder. Sie können Arbeit erfassen und ausgewählte Einträge innerhalb klarer Grenzen aktualisieren.',
    points: [
      'Token-Nutzer können Aufgaben und Nutzung hinzufügen.',
      'Token-Nutzer können neue Einträge ab gestern und in die Zukunft hinzufügen.',
      'Token-Nutzer können nur eigene Einträge und nur ausgewählte Felder im Modal bearbeiten.',
      'Token-Nutzer können den Aufgabennamen nicht bearbeiten.',
      'Token-Nutzer können den Status von geplant auf abgeschlossen ändern.',
      'Token-Nutzer können nur eigene Einträge löschen und nur am Tag ihrer Erstellung.',
      'Token-Nutzer verwenden Token-Links aus der Objektliste.',
      'Token-Zugriff unterstützt praktische Tagesmeldungen, nicht Projekt- oder Systemadministration.',
    ],
  },
};

const es: ManualContent = {
  meta: {
    title: 'Manuales PitchOps | Operaciones móviles del campo',
    description:
      'Manuales móviles visuales para el módulo de operaciones de campo en PitchOps: tareas, uso, calendario, estadísticas, agronomía y enlaces token.',
  },
  hero: {
    eyebrow: 'Manuales PitchOps',
    title: 'Flujos móviles para operaciones reales del campo.',
    lead:
      'Un manual visual para equipos que usan el módulo de operaciones de campo en el teléfono: qué tocar, qué registra cada zona y cómo el trabajo diario se convierte en historial operativo fiable.',
    primaryButton: 'Abrir PitchOps',
    secondaryButton: 'Ver manual',
  },
  overview: {
    eyebrow: 'Resumen de manuales',
    title: 'Hecho para personas que trabajan en el campo, no para un portal de documentación.',
    text:
      'Usa estos manuales como una ruta práctica por el módulo móvil. Cada pantalla explica el flujo, los controles importantes y el sentido operativo del registro.',
    cards: [
      { title: 'Móvil primero', text: 'Pantallas y notas están pensadas para teléfonos estrechos y lectura rápida en el recinto.' },
      { title: 'Operativo', text: 'El foco está en cuidado, carga, planificación, reportes y agronomía.' },
      { title: 'Visual', text: 'Las anotaciones señalan los controles importantes de cada pantalla.' },
    ],
  },
  labels: {
    contents: 'Secciones del manual',
    workflow: 'Flujo de trabajo',
    visualGuide: 'Guía visual',
    missingImage: 'Marcador de captura',
    missingImageText: 'Añade este archivo exacto a public/images/manuals/mobile/ para reemplazar el marcador.',
    exactFile: 'Archivo esperado',
    missingReportTitle: 'Capturas faltantes',
    missingReportText: 'Estos marcadores son intencionales hasta añadir los archivos fuente exactos.',
    tokenUsers: 'Limitaciones de usuarios token',
  },
  groups: groupsEs,
  steps: stepsEs,
  tokenSection: {
    eyebrow: 'Acceso y enlaces token',
    title: 'El acceso token es para reportes diarios, no para administración del sistema.',
    text:
      'Los usuarios token funcionan como reporteros móviles prácticos. Pueden registrar trabajo y actualizar entradas seleccionadas dentro de límites claros.',
    points: [
      'Los usuarios token pueden añadir tareas y uso.',
      'Los usuarios token pueden añadir entradas nuevas desde ayer en adelante y hacia el futuro.',
      'Los usuarios token solo pueden editar sus propias entradas y los campos seleccionados del modal.',
      'Los usuarios token no pueden editar el nombre de la tarea.',
      'Los usuarios token pueden cambiar el estado de planificada a completada.',
      'Los usuarios token solo pueden eliminar sus propias entradas y solo el mismo día en que las crearon.',
      'Los usuarios token usan enlaces token desde la lista de recintos.',
      'El acceso token apoya el reporte diario práctico, no la administración del proyecto o sistema.',
    ],
  },
};

const fr: ManualContent = {
  meta: {
    title: 'Guides PitchOps | Opérations mobiles terrain',
    description:
      'Guides mobiles visuels pour le module opérations terrain de PitchOps: tâches, utilisation, planning, statistiques, agronomie et liens token.',
  },
  hero: {
    eyebrow: 'Guides PitchOps',
    title: 'Des flux mobiles pour les opérations réelles du terrain.',
    lead:
      'Un guide visuel pour les équipes utilisant le module opérations terrain sur téléphone: quoi toucher, ce que chaque zone enregistre et comment le travail quotidien devient un historique fiable.',
    primaryButton: 'Ouvrir PitchOps',
    secondaryButton: 'Voir le guide',
  },
  overview: {
    eyebrow: 'Vue d’ensemble',
    title: 'Conçu pour les personnes sur le terrain, pas pour un portail documentaire.',
    text:
      'Utilisez ces guides comme un parcours pratique dans le module mobile. Chaque écran explique le flux, les contrôles importants et la raison opérationnelle du registre.',
    cards: [
      { title: 'Mobile d’abord', text: 'Écrans et notes sont adaptés aux téléphones étroits et à une lecture rapide sur site.' },
      { title: 'Opérationnel', text: 'Le focus est mis sur entretien, charge, planning, reporting et agronomie.' },
      { title: 'Visuel', text: 'Les annotations indiquent les contrôles importants de chaque écran.' },
    ],
  },
  labels: {
    contents: 'Sections du guide',
    workflow: 'Flux de travail',
    visualGuide: 'Repères à l’écran',
    missingImage: 'Emplacement de capture',
    missingImageText: 'Ajoutez ce fichier exact dans public/images/manuals/mobile/ pour remplacer l’emplacement.',
    exactFile: 'Fichier attendu',
    missingReportTitle: 'Captures manquantes',
    missingReportText: 'Ces emplacements restent volontaires jusqu’à l’ajout des fichiers sources exacts.',
    tokenUsers: 'Limites des utilisateurs token',
  },
  groups: groupsFr,
  steps: stepsFr,
  tokenSection: {
    eyebrow: 'Accès et liens token',
    title: 'L’accès token sert au reporting quotidien, pas à l’administration système.',
    text:
      'Les utilisateurs token sont des reporters mobiles pratiques. Ils peuvent consigner du travail et mettre à jour certaines entrées dans des limites claires.',
    points: [
      'Les utilisateurs token peuvent ajouter des tâches et de l’utilisation.',
      'Les utilisateurs token peuvent ajouter de nouvelles entrées à partir d’hier et dans le futur.',
      'Les utilisateurs token ne peuvent modifier que leurs propres entrées et seulement certains champs du modal.',
      'Les utilisateurs token ne peuvent pas modifier le nom de la tâche.',
      'Les utilisateurs token peuvent passer le statut de planifié à terminé.',
      'Les utilisateurs token ne peuvent supprimer que leurs propres entrées et seulement le jour de création.',
      'Les utilisateurs token utilisent les liens token depuis la liste des sites.',
      'L’accès token soutient le reporting quotidien pratique, pas l’administration du projet ou du système.',
    ],
  },
};

const pt: ManualContent = {
  meta: {
    title: 'Manuais PitchOps | Operações móveis no relvado',
    description:
      'Manuais móveis visuais para o módulo de operações no relvado do PitchOps: tarefas, utilização, calendário, estatísticas, agronomia e links token.',
  },
  hero: {
    eyebrow: 'Manuais PitchOps',
    title: 'Fluxos móveis para operações reais no relvado.',
    lead:
      'Um manual visual para equipas que usam o módulo de operações no relvado no telemóvel: onde tocar, o que cada área regista e como o trabalho diário se torna histórico operacional fiável.',
    primaryButton: 'Abrir PitchOps',
    secondaryButton: 'Ver manual',
  },
  overview: {
    eyebrow: 'Resumo dos manuais',
    title: 'Feito para quem trabalha no relvado, não para um portal de documentação.',
    text:
      'Use estes manuais como um percurso prático pelo módulo móvel. Cada ecrã explica o fluxo, os controlos importantes e o motivo operacional do registo.',
    cards: [
      { title: 'Móvel primeiro', text: 'Ecrãs e notas foram pensados para telemóveis estreitos e leitura rápida no recinto.' },
      { title: 'Operacional', text: 'O foco está em manutenção, carga, planeamento, relatórios e agronomia.' },
      { title: 'Visual', text: 'As anotações apontam os controlos importantes em cada ecrã.' },
    ],
  },
  labels: {
    contents: 'Secções do manual',
    workflow: 'Fluxo de trabalho',
    visualGuide: 'Guia visual',
    missingImage: 'Marcador de captura de ecrã',
    missingImageText: 'Adicione este ficheiro exato a public/images/manuals/mobile/ para substituir o marcador.',
    exactFile: 'Ficheiro esperado',
    missingReportTitle: 'Capturas de ecrã em falta',
    missingReportText: 'Estes marcadores são intencionais até os ficheiros fonte exatos serem adicionados.',
    tokenUsers: 'Limitações de utilizadores token',
  },
  groups: groupsPt,
  steps: stepsPt,
  tokenSection: {
    eyebrow: 'Acesso e links token',
    title: 'O acesso token serve para reporte diário, não para administração do sistema.',
    text:
      'Utilizadores token são repórteres móveis práticos. Podem registar trabalho e atualizar entradas selecionadas dentro de limites claros.',
    points: [
      'Utilizadores token podem adicionar tarefas e utilização.',
      'Utilizadores token podem adicionar novas entradas desde ontem em diante e para o futuro.',
      'Utilizadores token só podem editar as suas próprias entradas e apenas campos selecionados do modal.',
      'Utilizadores token não podem editar o nome da tarefa.',
      'Utilizadores token podem mudar o estado de planeado para concluído.',
      'Utilizadores token só podem eliminar as suas próprias entradas e apenas no mesmo dia em que foram criadas.',
      'Utilizadores token usam links token da lista de recintos.',
      'O acesso token apoia reporte diário prático, não administração de projeto ou sistema.',
    ],
  },
};

export const manualsByLang: Record<Lang, ManualContent> = {
  en,
  pl,
  de,
  es,
  fr,
  pt,
};
