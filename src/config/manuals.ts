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
    text: 'Use the dashboard and weather permission flow before logging work on site.',
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
    number: '01',
    title: 'Home dashboard',
    summary:
      'This is the starting point for Pitch Operations. It gives the mobile user the main entry points before work is logged.',
    screenshot: '01-home-dashboard-mobile.png',
    alt: 'PitchOps mobile home dashboard',
    bullets: [
      'Use the visible tiles and cards as shortcuts into the main workflows.',
      'The weather forecast shows the next 48 hours and supports operational awareness on site.',
      'Scroll the forecast chips horizontally to see later hours.',
      'Weather needs location access so the forecast is local to the venue.',
    ],
    callouts: [
      {
        title: 'Main entry tiles',
        text: 'Open the operational areas from the dashboard instead of hunting through menus.',
        x: 46,
        y: 24,
      },
      {
        title: '48-hour weather',
        text: 'Swipe the forecast cards sideways to check later conditions.',
        x: 54,
        y: 44,
      },
      {
        title: 'Mobile navigation',
        text: 'The lower navigation keeps the active module close to the thumb.',
        x: 50,
        y: 91,
      },
    ],
  },
  {
    id: 'geo-permission',
    group: 'getting-started',
    number: '02',
    title: 'Location permission',
    summary:
      'The phone or browser asks for location permission so PitchOps can display weather for the local venue area.',
    screenshot: '02-geo-permission-mobile.png',
    alt: 'Mobile browser location permission prompt',
    bullets: [
      'Allowing location improves the accuracy of the weather shown in the operations view.',
      'The permission is used for local weather context, not for administration workflows.',
      'If location is blocked, the weather section may be less useful on site.',
    ],
    callouts: [
      {
        title: 'Permission prompt',
        text: 'Choose the browser permission option that allows local weather to load.',
        x: 50,
        y: 43,
      },
      {
        title: 'Operational value',
        text: 'Local conditions help the team judge timing, surface risk and work windows.',
        x: 50,
        y: 62,
      },
    ],
  },
  {
    id: 'task-add-modal',
    group: 'tasks',
    number: '03',
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
        y: 24,
      },
      {
        title: 'Cloud weather button',
        text: 'Fetch current weather so the task record carries the right site context.',
        x: 82,
        y: 42,
      },
      {
        title: 'Status and photos',
        text: 'Set completion state and attach evidence before saving.',
        x: 50,
        y: 76,
      },
    ],
  },
  {
    id: 'task-photos',
    group: 'tasks',
    number: '04',
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
        y: 68,
      },
      {
        title: 'Operational evidence',
        text: 'Photos make the task easier to verify during reviews.',
        x: 50,
        y: 82,
      },
    ],
  },
  {
    id: 'task-list-controls',
    group: 'tasks',
    number: '05',
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
        y: 22,
      },
      {
        title: 'Status and photos',
        text: 'Check what is complete and which entries include photo evidence.',
        x: 52,
        y: 56,
      },
      {
        title: 'Bottom tabs',
        text: 'Move between dashboard, tasks, usage, schedule and other areas from here.',
        x: 50,
        y: 92,
      },
    ],
  },
  {
    id: 'usage-add-modal',
    group: 'usage',
    number: '06',
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
        y: 26,
      },
      {
        title: 'Date and time',
        text: 'Place the load accurately on the operational timeline.',
        x: 50,
        y: 48,
      },
      {
        title: 'Notes',
        text: 'Add context that helps explain unusual load or surface impact.',
        x: 50,
        y: 70,
      },
    ],
  },
  {
    id: 'usage-list-controls',
    group: 'usage',
    number: '07',
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
        y: 21,
      },
      {
        title: 'Search, dates and export',
        text: 'Filter the history or export records when you need a review file.',
        x: 50,
        y: 35,
      },
      {
        title: 'Bottom tabs',
        text: 'Keep moving through the mobile module from the persistent tab bar.',
        x: 50,
        y: 92,
      },
    ],
  },
  {
    id: 'schedule-week',
    group: 'schedule',
    number: '08',
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
        x: 33,
        y: 14,
      },
      {
        title: 'Schedule chips',
        text: 'Tasks and usage appear as practical plan items visible directly in the weekly grid.',
        x: 38,
        y: 37,
      },
      {
        title: 'Adding entries in an empty slot',
        text: 'Tap a free area in the selected day to quickly add a new task or usage without leaving the schedule.',
        x: 70,
        y: 64,
      },
    ],
  },
  {
    id: 'schedule-copy-move',
    group: 'schedule',
    number: '08a',
    title: 'Copy or move schedule chips',
    summary:
      'Copying and moving schedule chips helps adjust repeated or shifted operational items without recreating entries.',
    screenshot: '08a-schedule-chip-copy-move-mobile.png',
    alt: 'PitchOps mobile schedule chip copy and move controls',
    bullets: [
      'Copy an item when similar work or usage needs to be repeated.',
      'Move an item when timing changes but the entry itself should stay the same.',
      'This keeps plan adjustments quick during busy operational weeks.',
    ],
    callouts: [
      {
        title: 'Chip action',
        text: 'Open the item action to copy or move the selected schedule entry.',
        x: 54,
        y: 44,
      },
      {
        title: 'Fast adjustment',
        text: 'Shift plans without rebuilding the record from zero.',
        x: 52,
        y: 61,
      },
    ],
  },
  {
    id: 'schedule-week-filters',
    group: 'schedule',
    number: '08b',
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
        x: 50,
        y: 24,
      },
      {
        title: 'Cleaner reading',
        text: 'Filter the week when the schedule becomes busy.',
        x: 50,
        y: 38,
      },
    ],
  },
  {
    id: 'schedule-month',
    group: 'schedule',
    number: '09',
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
        y: 42,
      },
      {
        title: 'Date entries',
        text: 'Use visible markers to identify days with planned work or usage.',
        x: 50,
        y: 62,
      },
    ],
  },
  {
    id: 'schedule-multiday',
    group: 'schedule',
    number: '09b',
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
        title: 'Plus action',
        text: 'The date window plus button opens the multiday event modal.',
        x: 84,
        y: 18,
      },
      {
        title: 'Start and end',
        text: 'Use date fields to define the full event range.',
        x: 50,
        y: 48,
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
    number: '10',
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
        y: 22,
      },
      {
        title: 'Range and filters',
        text: 'Change the period before reviewing charts or exporting.',
        x: 50,
        y: 36,
      },
      {
        title: 'Charts and PDF',
        text: 'Use charts for patterns and PDF export for reporting.',
        x: 52,
        y: 65,
      },
    ],
  },
  {
    id: 'agronomy-overview',
    group: 'agronomy',
    number: '11',
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
        y: 38,
      },
      {
        title: 'Filters',
        text: 'Narrow the history before reviewing or reporting.',
        x: 50,
        y: 22,
      },
    ],
  },
  {
    id: 'agronomy-chart',
    group: 'agronomy',
    number: '12',
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
        x: 50,
        y: 25,
      },
      {
        title: 'Trend chart',
        text: 'Read the line or bars as recorded nutrient history over time.',
        x: 50,
        y: 57,
      },
    ],
  },
  {
    id: 'mobile-menu',
    group: 'settings',
    number: '13a',
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
        x: 18,
        y: 12,
      },
      {
        title: 'Navigation list',
        text: 'Choose the destination that matches the work you need to do next.',
        x: 50,
        y: 42,
      },
    ],
  },
  {
    id: 'settings-token-links',
    group: 'settings',
    number: '13b',
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
        y: 28,
      },
      {
        title: 'Venue list',
        text: 'Find venue-specific settings and token links here.',
        x: 50,
        y: 52,
      },
      {
        title: 'Token links',
        text: 'Send practical reporting access to workers without making this an admin workflow.',
        x: 50,
        y: 74,
      },
    ],
  },
];

const groupsPl: ManualGroup[] = [
  {
    id: 'getting-started',
    eyebrow: 'Pierwsze kroki',
    title: 'Zacznij od mobilnego panelu operacji',
    text: 'Panel główny i zgoda na lokalizację przygotowują użytkownika do pracy na obiekcie.',
  },
  {
    id: 'tasks',
    eyebrow: 'Zadania',
    title: 'Rejestruj prace utrzymaniowe i operacyjne',
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
    number: '01',
    title: 'Panel główny',
    summary:
      'To punkt startowy modułu operacji na murawie. Mobilny użytkownik widzi tu najważniejsze wejścia do pracy operacyjnej.',
    screenshot: '01-home-dashboard-mobile.png',
    alt: 'Mobilny panel główny PitchOps',
    bullets: [
      'Widoczne kafle i karty prowadzą do głównych przepływów pracy.',
      'Prognoza pogody pokazuje najbliższe 48 godzin i wspiera decyzje na obiekcie.',
      'Karty prognozy można przewijać poziomo, aby zobaczyć dalsze godziny.',
      'Sekcja pogody wymaga dostępu do lokalizacji, żeby pokazać warunki dla danego obiektu.',
    ],
    callouts: [
      {
        title: 'Główne kafle',
        text: 'Otwieraj obszary operacyjne bez szukania ich w menu.',
        x: 46,
        y: 24,
      },
      {
        title: 'Prognoza 48h',
        text: 'Przesuń karty pogody w bok, aby sprawdzić późniejsze godziny.',
        x: 54,
        y: 44,
      },
      {
        title: 'Nawigacja mobilna',
        text: 'Dolny pasek utrzymuje najważniejsze miejsca blisko kciuka.',
        x: 50,
        y: 91,
      },
    ],
  },
  {
    id: 'geo-permission',
    group: 'getting-started',
    number: '02',
    title: 'Zgoda na lokalizację',
    summary:
      'Telefon albo przeglądarka prosi o zgodę na lokalizację, aby PitchOps mógł pokazać pogodę dla okolicy obiektu.',
    screenshot: '02-geo-permission-mobile.png',
    alt: 'Mobilne pytanie przeglądarki o zgodę na lokalizację',
    bullets: [
      'Zgoda na lokalizację zwiększa trafność pogody widocznej w operacjach.',
      'Lokalizacja służy do kontekstu pogodowego, nie do administracji systemem.',
      'Po zablokowaniu lokalizacji sekcja pogody może być mniej użyteczna na obiekcie.',
    ],
    callouts: [
      {
        title: 'Komunikat zgody',
        text: 'Wybierz opcję przeglądarki, która pozwala załadować lokalną pogodę.',
        x: 50,
        y: 43,
      },
      {
        title: 'Wartość operacyjna',
        text: 'Lokalne warunki pomagają ocenić czas prac, ryzyko dla nawierzchni i okna wykonania.',
        x: 50,
        y: 62,
      },
    ],
  },
  {
    id: 'task-add-modal',
    group: 'tasks',
    number: '03',
    title: 'Rejestracja zadania',
    summary:
      'Ten modal otwiera się po wybraniu opcji rejestracji zadania. Służy do zapisu prac utrzymaniowych lub operacyjnych na murawie.',
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
        text: 'Wybierz rodzaj pracy utrzymaniowej lub operacyjnej.',
        x: 50,
        y: 24,
      },
      {
        title: 'Przycisk z chmurą',
        text: 'Pobierz bieżącą pogodę, aby rekord miał właściwy kontekst z obiektu.',
        x: 82,
        y: 42,
      },
      {
        title: 'Status i zdjęcia',
        text: 'Ustaw stan wykonania i dołącz dowody przed zapisaniem.',
        x: 50,
        y: 76,
      },
    ],
  },
  {
    id: 'task-photos',
    group: 'tasks',
    number: '04',
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
        y: 68,
      },
      {
        title: 'Dowód operacyjny',
        text: 'Zdjęcia ułatwiają późniejszą weryfikację pracy.',
        x: 50,
        y: 82,
      },
    ],
  },
  {
    id: 'task-list-controls',
    group: 'tasks',
    number: '05',
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
        y: 22,
      },
      {
        title: 'Status i zdjęcia',
        text: 'Sprawdź, co jest zakończone i które wpisy mają dokumentację zdjęciową.',
        x: 52,
        y: 56,
      },
      {
        title: 'Dolne karty',
        text: 'Przechodź między panelem, zadaniami, użyciem, harmonogramem i innymi obszarami.',
        x: 50,
        y: 92,
      },
    ],
  },
  {
    id: 'usage-add-modal',
    group: 'usage',
    number: '06',
    title: 'Rejestracja użycia',
    summary:
      'Ten modal otwiera się po wybraniu rejestracji użycia. Służy do zapisu obciążenia murawy przez trening, mecz, rozgrzewkę albo inne użycie.',
    screenshot: '06-usage-add-modal-mobile.png',
    alt: 'Mobilny formularz użycia PitchOps',
    bullets: [
      'Zadanie oznacza pracę utrzymaniową lub operacyjną na murawie.',
      'Użycie oznacza obciążenie piłkarskie: trening, mecz, rozgrzewkę albo inną aktywność.',
      'Zapisz typ użycia, datę, godzinę, kontekst obiektu lub boiska oraz przydatne notatki.',
      'Spójne wpisy sprawiają, że przyszłe statystyki i harmonogramy pozostają wiarygodne.',
    ],
    callouts: [
      {
        title: 'Typ użycia',
        text: 'Wybierz rodzaj aktywności na murawie.',
        x: 50,
        y: 26,
      },
      {
        title: 'Data i czas',
        text: 'Umieść obciążenie dokładnie na osi operacyjnej.',
        x: 50,
        y: 48,
      },
      {
        title: 'Notatki',
        text: 'Dodaj kontekst wyjaśniający nietypowe obciążenie albo wpływ na nawierzchnię.',
        x: 50,
        y: 70,
      },
    ],
  },
  {
    id: 'usage-list-controls',
    group: 'usage',
    number: '07',
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
        y: 21,
      },
      {
        title: 'Wyszukiwanie, daty i eksport',
        text: 'Filtruj historię lub wyeksportuj rekordy do przeglądu.',
        x: 50,
        y: 35,
      },
      {
        title: 'Dolne karty',
        text: 'Kontynuuj pracę przez stały pasek kart na dole ekranu.',
        x: 50,
        y: 92,
      },
    ],
  },
  {
    id: 'schedule-week',
    group: 'schedule',
    number: '08',
    title: 'Harmonogram tygodniowy',
    summary:
      'Harmonogram tygodniowy pokazuje zaplanowane prace operacyjne i użycie boiska w jednym rytmie planowania.',
    screenshot: '08-schedule-week-mobile.png',
    alt: 'Mobilny harmonogram tygodniowy PitchOps',
    bullets: [
      'Czytaj tydzień dzień po dniu i sprawdzaj położenie zadań oraz użycia.',
      'Widok pomaga rozumieć presję treningów, meczów i prac utrzymaniowych.',
      'Zadania i użycie są widoczne razem, więc decyzje planistyczne pozostają połączone.',
    ],
    callouts: [
      {
        title: 'Okno tygodnia',
        text: 'Sprawdź aktywne dni i poruszaj się po tygodniu planowania za pomocą zakresu dat i strzałek.',
        x: 33,
        y: 14,
      },
      {
        title: 'Elementy harmonogramu',
        text: 'Zadania i użycie pojawiają się jako praktyczne pozycje planu widoczne bezpośrednio w siatce tygodnia.',
        x: 38,
        y: 37,
      },
      {
        title: 'Dodawanie wpisów w pustym polu',
        text: 'Naciśnięcie wolnego pola w wybranym dniu pozwala szybko dodać nowe zadanie lub usage bez wychodzenia z harmonogramu.',
        x: 70,
        y: 64,
      },
    ],
  },
  {
    id: 'schedule-copy-move',
    group: 'schedule',
    number: '08a',
    title: 'Kopiowanie i przenoszenie elementów',
    summary:
      'Kopiowanie i przenoszenie elementów harmonogramu pomaga obsłużyć powtarzane albo przesunięte pozycje bez tworzenia ich od początku.',
    screenshot: '08a-schedule-chip-copy-move-mobile.png',
    alt: 'Mobilne opcje kopiowania i przenoszenia elementu harmonogramu PitchOps',
    bullets: [
      'Kopiuj pozycję, gdy podobna praca lub aktywność ma zostać powtórzona.',
      'Przenieś pozycję, gdy zmienia się termin, ale sam wpis ma pozostać ten sam.',
      'To przyspiesza korekty planu w intensywnych tygodniach operacyjnych.',
    ],
    callouts: [
      {
        title: 'Akcja elementu',
        text: 'Otwórz akcje wpisu, aby skopiować albo przenieść wybraną pozycję harmonogramu.',
        x: 54,
        y: 44,
      },
      {
        title: 'Szybka korekta',
        text: 'Przesuwaj plany bez odbudowywania wpisu od zera.',
        x: 52,
        y: 61,
      },
    ],
  },
  {
    id: 'schedule-week-filters',
    group: 'schedule',
    number: '08b',
    title: 'Filtry widoku tygodnia',
    summary:
      'W widoku tygodniowym użytkownik może wybrać, czy widzi zadania, użycie czy wszystkie rekordy.',
    screenshot: '08b-schedule-week-view-filters-mobile.png',
    alt: 'Mobilne filtry harmonogramu tygodniowego PitchOps',
    bullets: [
      'Wybierz Zadania, gdy skupiasz się na planie prac utrzymaniowych.',
      'Wybierz Użycie, gdy analizujesz obciążenie piłkarskie.',
      'Wybierz Wszystko, gdy potrzebujesz pełnego obrazu operacyjnego.',
    ],
    callouts: [
      {
        title: 'Zadania, Użycie, Wszystko',
        text: 'Ten przełącznik decyduje, które rekordy są widoczne w harmonogramie.',
        x: 50,
        y: 24,
      },
      {
        title: 'Czytelniejszy tydzień',
        text: 'Filtruj widok, gdy harmonogram robi się gęsty.',
        x: 50,
        y: 38,
      },
    ],
  },
  {
    id: 'schedule-month',
    group: 'schedule',
    number: '09',
    title: 'Harmonogram miesięczny',
    summary:
      'Harmonogram miesięczny daje szerszy widok planu w całym miesiącu.',
    screenshot: '09-schedule-month-mobile.png',
    alt: 'Mobilny harmonogram miesięczny PitchOps',
    bullets: [
      'Używaj widoku miesiąca, aby zobaczyć rytm utrzymania i użycia w dłuższej perspektywie.',
      'Szukaj okresów dużego obciążenia, wolnych okien i powtarzalnego zapotrzebowania na boisko.',
      'Otwieraj konkretne daty, gdy potrzebujesz większej szczegółowości.',
    ],
    callouts: [
      {
        title: 'Siatka miesiąca',
        text: 'Skanuj miesiąc pod kątem presji i dostępnych okien.',
        x: 50,
        y: 42,
      },
      {
        title: 'Wpisy w datach',
        text: 'Widoczne oznaczenia pomagają znaleźć dni z pracami albo użyciem.',
        x: 50,
        y: 62,
      },
    ],
  },
  {
    id: 'schedule-multiday',
    group: 'schedule',
    number: '09b',
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
        title: 'Akcja plus',
        text: 'Plus w oknie daty otwiera modal wydarzenia wielodniowego.',
        x: 84,
        y: 18,
      },
      {
        title: 'Początek i koniec',
        text: 'Pola dat określają pełny zakres wydarzenia.',
        x: 50,
        y: 48,
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
    number: '10',
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
        y: 22,
      },
      {
        title: 'Zakres i filtry',
        text: 'Zmień okres przed analizą wykresów albo eksportem.',
        x: 50,
        y: 36,
      },
      {
        title: 'Wykresy i PDF',
        text: 'Wykresy pokazują wzorce, a PDF wspiera raportowanie.',
        x: 52,
        y: 65,
      },
    ],
  },
  {
    id: 'agronomy-overview',
    group: 'agronomy',
    number: '11',
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
        y: 38,
      },
      {
        title: 'Filtry',
        text: 'Zawęź historię przed przeglądem albo raportowaniem.',
        x: 50,
        y: 22,
      },
    ],
  },
  {
    id: 'agronomy-chart',
    group: 'agronomy',
    number: '12',
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
        x: 50,
        y: 25,
      },
      {
        title: 'Wykres trendu',
        text: 'Linia albo słupki pokazują zapisaną historię składników w czasie.',
        x: 50,
        y: 57,
      },
    ],
  },
  {
    id: 'mobile-menu',
    group: 'settings',
    number: '13a',
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
        x: 18,
        y: 12,
      },
      {
        title: 'Lista nawigacji',
        text: 'Wybierz miejsce, które odpowiada następnej czynności.',
        x: 50,
        y: 42,
      },
    ],
  },
  {
    id: 'settings-token-links',
    group: 'settings',
    number: '13b',
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
        y: 28,
      },
      {
        title: 'Lista obiektów',
        text: 'Tutaj znajdują się ustawienia obiektu i linki tokenowe.',
        x: 50,
        y: 52,
      },
      {
        title: 'Linki tokenowe',
        text: 'Wyślij praktyczny dostęp do raportowania bez zamieniania go w panel administracyjny.',
        x: 50,
        y: 74,
      },
    ],
  },
];

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
      { title: 'Operacyjnie', text: 'Najważniejsze są prace utrzymaniowe, obciążenie boiska, planowanie, raportowanie i agronomia.' },
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

export const manualsByLang: Record<Lang, ManualContent> = {
  en,
  pl,
  de: en,
  es: en,
  fr: en,
  pt: en,
};
