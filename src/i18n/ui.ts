import type { Lang } from './languages';

type Card = { title: string; text: string };
type Feature = Card & { image: string; alt: string };

type PageContent = {
  meta: { title: string; description: string };
  nav: { product: string; guide: string; roles: string; contact: string; login: string; language: string };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    description: string;
    signals: string[];
    primaryButton: string;
    secondaryButton: string;
  };
  heroCard: { eyebrow: string; title: string; text: string };
  strip: string[];
  why: { eyebrow: string; title: string; problems: string[]; solutionTitle: string; solutionText: string };
  module: { eyebrow: string; title: string; text: string };
  operations: Card[];
  guide: { eyebrow: string; title: string; steps: Card[] };
  features: { eyebrow: string; title: string; kicker: string; items: Feature[] };
  roles: { eyebrow: string; title: string; cards: Card[] };
  cta: { title: string; text: string; button: string };
  footer: {
    text: string;
    privacy: string;
    cookies: string;
    terms: string;
    contact: string;
    openApp: string;
    guide: string;
  };
  infoPages: {
    privacy: { title: string; description: string; body: string[] };
    cookies: { title: string; description: string; body: string[] };
    terms: { title: string; description: string; body: string[] };
    contact: { title: string; description: string; body: string[]; emailLabel: string; buttonLabel: string };
  };
};

const en: PageContent = {
  meta: {
    title: 'PitchOps | Premium Pitch Operations Platform',
    description:
      'PitchOps is a premium sport-tech workspace for football pitch operations, maintenance history, usage tracking, scheduling, reporting and agronomy records.',
  },
  nav: { product: 'Product', guide: 'How it works', roles: 'Roles', contact: 'Contact', login: 'Open PitchOps', language: 'Language' },
  hero: {
    eyebrow: 'Football operations command center',
    headline: 'Control every pitch operation from one premium workspace.',
    subheadline:
      'PitchOps helps football venues plan, log, review and report pitch work with the clarity expected from modern sport operations.',
    description:
      'Move beyond scattered spreadsheets, chat updates and unstructured photos. Bring maintenance, usage, schedules, stats and agronomy records into a single operational command center.',
    signals: ['Every field', 'Every day', 'Matchday ready'],
    primaryButton: 'Open PitchOps',
    secondaryButton: 'Explore Pitch Operations',
  },
  heroCard: {
    eyebrow: 'Live operations',
    title: 'Pitch readiness',
    text: 'Tasks, usage, schedule and agronomy connected in one view.',
  },
  strip: ['Pitch operations', 'Maintenance history', 'Usage tracking', 'Schedule planning', 'Stats & reporting', 'Agronomy records'],
  why: {
    eyebrow: 'Why PitchOps',
    title: 'Pitch operations break down when critical context lives everywhere.',
    problems: ['Scattered Excel sheets', 'WhatsApp updates', 'Photos without structure', 'Weak maintenance history', 'Poor visibility across venues'],
    solutionTitle: 'PitchOps becomes the operational command center.',
    solutionText:
      'It turns daily pitch work into structured records, shared visibility and trustworthy reporting for managers, grounds teams and venue leaders.',
  },
  module: {
    eyebrow: 'Pitch Operations module',
    title: 'The active workspace for daily pitch management.',
    text:
      'The Pitch Operations module connects the venue dashboard, maintenance tasks, pitch usage, week and month schedules, statistics and fertilizing history. Teams can see what happened, what is planned and what needs attention before the next session or match.',
  },
  operations: [
    { title: 'Plan', text: 'Coordinate tasks, usage and schedule windows before pressure arrives.' },
    { title: 'Record', text: 'Capture maintenance, staff notes, photos and pitch load in context.' },
    { title: 'Report', text: 'Turn operational history into evidence for reviews and decisions.' },
  ],
  guide: {
    eyebrow: 'Guided walkthrough',
    title: 'How to navigate Pitch Operations',
    steps: [
      { title: 'Dashboard', text: 'Start with venue status, active work and upcoming operational signals.' },
      { title: 'Log task', text: 'Capture maintenance work with notes, staff context and photos.' },
      { title: 'Log usage', text: 'Record match, training and warm-up load so the pitch history stays reliable.' },
      { title: 'Schedule', text: 'Review work and usage across week and month planning views.' },
      { title: 'Stats', text: 'Convert records into operational insight and export-ready reporting.' },
      { title: 'Fertilizing history', text: 'Track applications and nutrient projection for agronomy decisions.' },
    ],
  },
  features: {
    eyebrow: 'Product experience',
    title: 'Every screen is built around the rhythm of football pitch work.',
    kicker: 'Pitch Operations',
    items: [
      { title: 'Dashboard: command view for daily operations', text: 'A premium starting point for venue status, active work, upcoming usage and readiness.', image: 'dashboard-dark.png', alt: 'PitchOps dark venue dashboard screenshot' },
      { title: 'Task list: maintenance work under control', text: 'Keep daily jobs, ownership and completion status visible across the grounds team.', image: 'task-list-dark.png', alt: 'PitchOps dark task list screenshot' },
      { title: 'Log task: capture the evidence', text: 'Record maintenance with notes, staff, completion context and photos while the work is still fresh.', image: 'task-modal-light.png', alt: 'PitchOps task modal screenshot' },
      { title: 'Log usage: track football load', text: 'Register match, training and warm-up sessions so every pitch carries a reliable activity history.', image: 'usage-dark.png', alt: 'PitchOps dark usage log screenshot' },
      { title: 'Week schedule: coordinate execution', text: 'Review tasks and usage across the week so daily decisions stay connected to matchday pressure.', image: 'schedule-week-dark.png', alt: 'PitchOps dark weekly schedule screenshot' },
      { title: 'Month schedule: see the wider plan', text: 'Plan maintenance windows, usage rhythm and venue demand across the month.', image: 'schedule-month-light.png', alt: 'PitchOps monthly schedule screenshot' },
      { title: 'Stats: convert records into insight', text: 'Turn daily operational records into totals, patterns and reporting views for better decisions.', image: 'stats-dark.png', alt: 'PitchOps dark statistics screenshot' },
      { title: 'Fertilizing history: agronomy without guesswork', text: 'Track applications, product history and nutrient projection without losing the operational thread.', image: 'fertilizing-history-dark.png', alt: 'PitchOps dark fertilizing history screenshot' },
    ],
  },
  roles: {
    eyebrow: 'Roles',
    title: 'Clear access for every operational responsibility.',
    cards: [
      { title: 'Area Manager', text: 'Coordinates multiple venues and reviews operational consistency.' },
      { title: 'Venue Manager', text: 'Runs the local schedule, tasks, usage and reporting flow.' },
      { title: 'Grounds Team', text: 'Logs daily maintenance and keeps records accurate from the field.' },
      { title: 'Viewer / Read-only', text: 'Reviews status and reports without changing operational data.' },
    ],
  },
  cta: {
    title: 'Open PitchOps for structured football pitch operations.',
    text: 'Give every venue a premium operational command center for daily maintenance, usage, planning and reporting.',
    button: 'Open PitchOps',
  },
  footer: {
    text: 'Premium public website for the Pitch Operations module in PitchOps.',
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    terms: 'Terms',
    contact: 'Contact',
    openApp: 'Open PitchOps',
    guide: 'Guide',
  },
  infoPages: {
    privacy: {
      title: 'Privacy Policy',
      description: 'A simple privacy overview for the PitchOps public website.',
      body: [
        'This public website is designed to present PitchOps and does not collect account data or run application workflows.',
        'If contact details are shared with PitchOps, they are used only to respond to the request and related business communication.',
        'The PitchOps application is separate from this static informational website.',
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      description: 'Cookie information for the PitchOps public website.',
      body: [
        'This website is currently a static informational website.',
        'It uses Google Analytics to understand aggregate website traffic and improve the public website.',
        'Google Analytics may use cookies or similar technologies to measure visits and usage patterns.',
      ],
    },
    terms: {
      title: 'Terms',
      description: 'Simple terms for using the PitchOps public website.',
      body: [
        'The information on this website is provided for general product communication.',
        'PitchOps may update website content, features and descriptions as the product evolves.',
        'Use of the PitchOps application may be covered by separate product or service terms.',
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Contact PitchOps about football pitch operations.',
      body: [
        'For product questions, demonstrations or operational discussions, contact the PitchOps team.',
        'The public website is informational; support and account workflows happen inside the PitchOps application or agreed business channels.',
      ],
      emailLabel: 'Email',
      buttonLabel: 'Open PitchOps',
    },
  },
};

const pl: PageContent = {
  ...en,
  meta: {
    title: 'PitchOps | Premium platforma operacji na murawie',
    description:
      'PitchOps porządkuje operacje na murawie: utrzymanie, wykorzystanie, harmonogramy, raporty i zapisy agronomiczne.',
  },
  nav: { product: 'Produkt', guide: 'Jak działa', roles: 'Role', contact: 'Kontakt', login: 'Otwórz PitchOps', language: 'Język' },
  hero: {
    eyebrow: 'Centrum dowodzenia operacjami na murawie',
    headline: 'Kontroluj każdą operację na murawie z jednej premium przestrzeni roboczej.',
    subheadline:
      'PitchOps pomaga obiektom piłkarskim planować, rejestrować, przeglądać i raportować pracę na murawie z nowoczesną klarownością.',
    description:
      'Zamiast rozproszonych arkuszy, wiadomości i zdjęć bez struktury, PitchOps łączy utrzymanie, użycie, harmonogramy, statystyki i agronomię w jednym centrum operacyjnym.',
    signals: ['Każda murawa', 'Każdy dzień', 'Gotowość meczowa'],
    primaryButton: 'Otwórz PitchOps',
    secondaryButton: 'Poznaj operacje na murawie',
  },
  heroCard: {
    eyebrow: 'Operacje na żywo',
    title: 'Gotowość murawy',
    text: 'Zadania, użycie, harmonogram i agronomia połączone w jednym widoku.',
  },
  strip: ['Operacje na murawie', 'Historia utrzymania', 'Śledzenie użycia', 'Planowanie harmonogramu', 'Statystyki i raporty', 'Zapisy agronomiczne'],
  why: {
    eyebrow: 'Dlaczego PitchOps',
    title: 'Operacje na murawie tracą kontrolę, gdy kluczowy kontekst żyje w wielu miejscach.',
    problems: ['Rozproszone arkusze Excel', 'Aktualizacje w WhatsApp', 'Zdjęcia bez struktury', 'Słaba historia utrzymania', 'Słaba widoczność wielu obiektów'],
    solutionTitle: 'PitchOps staje się centrum dowodzenia operacjami.',
    solutionText:
      'Zmienia codzienną pracę na murawie w uporządkowane zapisy, wspólną widoczność i wiarygodne raportowanie dla menedżerów, zespołów utrzymania i liderów obiektów.',
  },
  module: {
    eyebrow: 'Moduł operacji na murawie',
    title: 'Aktywne miejsce pracy do codziennego zarządzania murawą.',
    text:
      'Moduł operacji na murawie łączy panel obiektu, zadania utrzymaniowe, wykorzystanie boiska, harmonogram tygodnia i miesiąca, statystyki oraz historię nawożenia. Zespoły widzą, co się wydarzyło, co jest zaplanowane i co wymaga uwagi.',
  },
  operations: [
    { title: 'Planuj', text: 'Koordynuj zadania, użycie i okna harmonogramu zanim pojawi się presja.' },
    { title: 'Rejestruj', text: 'Zapisuj utrzymanie, notatki zespołu, zdjęcia i obciążenie murawy w kontekście.' },
    { title: 'Raportuj', text: 'Zmieniaj historię operacyjną w materiał do przeglądów i decyzji.' },
  ],
  guide: {
    eyebrow: 'Przewodnik',
    title: 'Jak poruszać się po operacjach na murawie',
    steps: [
      { title: 'Panel obiektu', text: 'Zacznij od statusu obiektu, aktywnych prac i nadchodzących sygnałów.' },
      { title: 'Rejestr zadań', text: 'Zapisuj prace utrzymaniowe z notatkami, personelem i zdjęciami.' },
      { title: 'Rejestr użycia', text: 'Rejestruj mecze, treningi i rozgrzewki, aby historia murawy była wiarygodna.' },
      { title: 'Harmonogram', text: 'Przeglądaj prace i użycie w widoku tygodnia oraz miesiąca.' },
      { title: 'Statystyki', text: 'Zmieniaj zapisy w wnioski operacyjne i gotowe raporty.' },
      { title: 'Historia nawożenia', text: 'Śledź aplikacje i projekcję składników dla decyzji agronomicznych.' },
    ],
  },
  features: {
    eyebrow: 'Doświadczenie produktu',
    title: 'Każdy ekran jest zbudowany wokół rytmu pracy na murawie.',
    kicker: 'Operacje na murawie',
    items: [
      { title: 'Panel obiektu: widok dowodzenia na każdy dzień', text: 'Premium punkt startowy dla statusu obiektu, aktywnych prac, nadchodzącego użycia i gotowości.', image: 'dashboard-dark.png', alt: 'Ciemny panel obiektu PitchOps' },
      { title: 'Lista zadań: utrzymanie pod kontrolą', text: 'Codzienne prace, odpowiedzialność i status wykonania pozostają widoczne dla zespołu utrzymania.', image: 'task-list-dark.png', alt: 'Ciemna lista zadań PitchOps' },
      { title: 'Rejestr zadania: zapisz dowody pracy', text: 'Notatki, personel, kontekst wykonania i zdjęcia trafiają do jednego uporządkowanego rekordu.', image: 'task-modal-light.png', alt: 'Modal zadania PitchOps' },
      { title: 'Rejestr użycia: śledź obciążenie piłkarskie', text: 'Mecze, treningi i rozgrzewki budują wiarygodną historię aktywności każdej murawy.', image: 'usage-dark.png', alt: 'Ciemny rejestr użycia PitchOps' },
      { title: 'Harmonogram tygodnia: koordynuj wykonanie', text: 'Zadania i użycie w tygodniowym widoku pomagają utrzymać decyzje blisko presji meczowej.', image: 'schedule-week-dark.png', alt: 'Ciemny harmonogram tygodnia PitchOps' },
      { title: 'Harmonogram miesiąca: zobacz szerszy plan', text: 'Okna utrzymaniowe, rytm użycia i zapotrzebowanie obiektu są widoczne w perspektywie miesiąca.', image: 'schedule-month-light.png', alt: 'Harmonogram miesiąca PitchOps' },
      { title: 'Statystyki: zmień zapisy w wnioski', text: 'Codzienne rekordy zamieniają się w sumy, wzorce i widoki raportowe dla lepszych decyzji.', image: 'stats-dark.png', alt: 'Ciemne statystyki PitchOps' },
      { title: 'Historia nawożenia: agronomia bez zgadywania', text: 'Aplikacje, produkty i projekcja składników są połączone z operacyjnym kontekstem murawy.', image: 'fertilizing-history-dark.png', alt: 'Ciemna historia nawożenia PitchOps' },
    ],
  },
  roles: {
    eyebrow: 'Role',
    title: 'Dostęp dopasowany do odpowiedzialności operacyjnej.',
    cards: [
      { title: 'Menedżer regionu', text: 'Koordynuje wiele obiektów i ocenia spójność operacyjną.' },
      { title: 'Menedżer obiektu', text: 'Prowadzi lokalny harmonogram, zadania, użycie i raporty.' },
      { title: 'Zespół utrzymania', text: 'Rejestruje codzienne prace i utrzymuje dokładność danych.' },
      { title: 'Podgląd / tylko odczyt', text: 'Przegląda status i raporty bez zmiany danych operacyjnych.' },
    ],
  },
  cta: {
    title: 'Otwórz PitchOps dla uporządkowanych operacji na murawie.',
    text: 'Daj każdemu obiektowi premium centrum operacyjne dla utrzymania, użycia, planowania i raportowania.',
    button: 'Otwórz PitchOps',
  },
  footer: {
    text: 'Publiczna strona produktu dla modułu operacji na murawie.',
    privacy: 'Polityka prywatności',
    cookies: 'Polityka cookies',
    terms: 'Regulamin',
    contact: 'Kontakt',
    openApp: 'Otwórz PitchOps',
    guide: 'Przewodnik',
  },
  infoPages: {
    privacy: {
      title: 'Polityka prywatności',
      description: 'Prosty opis prywatności strony PitchOps.',
      body: [
        'Ta publiczna strona prezentuje PitchOps i nie obsługuje kont ani procesów aplikacji.',
        'Dane kontaktowe przekazane PitchOps są używane do odpowiedzi i komunikacji biznesowej.',
        'Aplikacja PitchOps jest oddzielna od tej statycznej strony informacyjnej.',
      ],
    },
    cookies: {
      title: 'Polityka cookies',
      description: 'Informacje o cookies na stronie PitchOps.',
      body: [
        'Ta strona jest obecnie statyczną stroną informacyjną.',
        'Używa Google Analytics do zrozumienia zbiorczego ruchu i ulepszania publicznej strony.',
        'Google Analytics może używać cookies lub podobnych technologii do pomiaru wizyt i sposobu korzystania ze strony.',
      ],
    },
    terms: {
      title: 'Regulamin',
      description: 'Proste zasady korzystania ze strony PitchOps.',
      body: [
        'Informacje na stronie służą ogólnej komunikacji produktowej.',
        'PitchOps może aktualizować treści, funkcje i opisy wraz z rozwojem produktu.',
        'Korzystanie z aplikacji PitchOps może podlegać oddzielnym warunkom.',
      ],
    },
    contact: {
      title: 'Kontakt',
      description: 'Kontakt w sprawie PitchOps.',
      body: [
        'W sprawach produktu, prezentacji lub rozmów operacyjnych skontaktuj się z zespołem PitchOps.',
        'Ta strona ma charakter informacyjny; wsparcie i procesy kont odbywają się w aplikacji lub uzgodnionych kanałach.',
      ],
      emailLabel: 'E-mail',
      buttonLabel: 'Otwórz PitchOps',
    },
  },
};

const localize = (lang: Lang): PageContent => ({
  ...en,
  nav: {
    ...en.nav,
    product: lang === 'de' ? 'Produkt' : lang === 'fr' ? 'Produit' : lang === 'pt' ? 'Produto' : 'Producto',
    guide: lang === 'de' ? 'Guide' : lang === 'fr' ? 'Guide' : lang === 'pt' ? 'Como funciona' : 'Como funciona',
    roles: lang === 'de' ? 'Rollen' : lang === 'fr' ? 'Rôles' : lang === 'pt' ? 'Funções' : 'Roles',
    contact: lang === 'de' ? 'Kontakt' : lang === 'fr' ? 'Contact' : lang === 'pt' ? 'Contato' : 'Contacto',
    login: lang === 'de' ? 'PitchOps öffnen' : lang === 'fr' ? 'Ouvrir PitchOps' : lang === 'pt' ? 'Abrir PitchOps' : 'Abrir PitchOps',
    language: lang === 'de' ? 'Sprache' : lang === 'fr' ? 'Langue' : lang === 'pt' ? 'Idioma' : 'Idioma',
  },
  footer: {
    ...en.footer,
    privacy: lang === 'de' ? 'Datenschutz' : lang === 'fr' ? 'Confidentialité' : lang === 'pt' ? 'Privacidade' : 'Privacidad',
    cookies: 'Cookies',
    terms: lang === 'de' ? 'Bedingungen' : lang === 'fr' ? 'Conditions' : lang === 'pt' ? 'Termos' : 'Términos',
    contact: lang === 'de' ? 'Kontakt' : lang === 'fr' ? 'Contact' : lang === 'pt' ? 'Contato' : 'Contacto',
    openApp: lang === 'de' ? 'PitchOps öffnen' : lang === 'fr' ? 'Ouvrir PitchOps' : lang === 'pt' ? 'Abrir PitchOps' : 'Abrir PitchOps',
  },
});

export const ui: Record<Lang, PageContent> = {
  en,
  pl,
  de: localize('de'),
  es: localize('es'),
  fr: localize('fr'),
  pt: localize('pt'),
};
