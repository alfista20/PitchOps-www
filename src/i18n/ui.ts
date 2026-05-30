import type { Lang } from './languages';

type Card = { title: string; text: string };
type Feature = Card & { image: string; alt: string };

type PageContent = {
  meta: { title: string; description: string };
  nav: { product: string; guide: string; manuals: string; roles: string; contact: string; login: string; language: string };
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
    manuals: string;
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
  nav: { product: 'Product', guide: 'How it works', manuals: 'Manuals', roles: 'Roles', contact: 'Contact', login: 'Open PitchOps', language: 'Language' },
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
    manuals: 'Manuals',
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
        'It does not use marketing cookies.',
        'If privacy-friendly analytics are added later, this policy will be updated before those tools are used.',
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
  nav: { product: 'Produkt', guide: 'Jak działa', manuals: 'Instrukcje obsługi', roles: 'Role', contact: 'Kontakt', login: 'Otwórz PitchOps', language: 'Język' },
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
    manuals: 'Instrukcje obsługi',
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
        'Nie używa marketingowych plików cookies.',
        'Jeżeli w przyszłości zostanie dodana analityka przyjazna prywatności, ta polityka zostanie zaktualizowana przed jej użyciem.',
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

const de: PageContent = {
  ...en,
  meta: {
    title: 'PitchOps | Premium-Plattform für Platzbetrieb',
    description:
      'PitchOps organisiert den Betrieb von Fußballplätzen: Pflege, Nutzung, Zeitpläne, Berichte und agronomische Aufzeichnungen.',
  },
  nav: {
    product: 'Produkt',
    guide: 'So funktioniert es',
    manuals: 'Anleitungen',
    roles: 'Rollen',
    contact: 'Kontakt',
    login: 'PitchOps öffnen',
    language: 'Sprache',
  },
  hero: {
    eyebrow: 'Kommandozentrale für Fußballplatzbetrieb',
    headline: 'Steuern Sie jeden Platzbetrieb aus einem Premium-Arbeitsbereich.',
    subheadline:
      'PitchOps hilft Fußballanlagen, Platzarbeiten mit der Klarheit moderner Sportbetriebe zu planen, zu erfassen, zu prüfen und zu berichten.',
    description:
      'Ersetzen Sie verstreute Tabellen, Chat-Updates und unstrukturierte Fotos durch einen zentralen Arbeitsbereich für Pflege, Nutzung, Zeitpläne, Statistiken und Agronomie.',
    signals: ['Jeder Platz', 'Jeden Tag', 'Bereit für den Spieltag'],
    primaryButton: 'PitchOps öffnen',
    secondaryButton: 'Platzbetrieb entdecken',
  },
  heroCard: {
    eyebrow: 'Live-Betrieb',
    title: 'Platzbereitschaft',
    text: 'Aufgaben, Nutzung, Zeitplan und Agronomie in einer Ansicht verbunden.',
  },
  strip: ['Platzbetrieb', 'Pflegehistorie', 'Nutzungserfassung', 'Zeitplanung', 'Statistiken & Berichte', 'Agronomische Aufzeichnungen'],
  why: {
    eyebrow: 'Warum PitchOps',
    title: 'Platzbetrieb gerät ins Stocken, wenn wichtiger Kontext überall verteilt ist.',
    problems: ['Verstreute Excel-Tabellen', 'WhatsApp-Updates', 'Fotos ohne Struktur', 'Schwache Pflegehistorie', 'Geringe Sichtbarkeit über Anlagen hinweg'],
    solutionTitle: 'PitchOps wird zur operativen Kommandozentrale.',
    solutionText:
      'Es verwandelt tägliche Platzarbeit in strukturierte Aufzeichnungen, gemeinsame Sichtbarkeit und verlässliche Berichte für Manager, Platzteams und Anlagenleitungen.',
  },
  module: {
    eyebrow: 'Modul Platzbetrieb',
    title: 'Der aktive Arbeitsbereich für das tägliche Platzmanagement.',
    text:
      'Das Modul Platzbetrieb verbindet Anlagen-Dashboard, Pflegeaufgaben, Platznutzung, Wochen- und Monatsplanung, Statistiken und Düngehistorie. Teams sehen, was passiert ist, was geplant ist und was vor der nächsten Einheit oder dem nächsten Spiel Aufmerksamkeit braucht.',
  },
  operations: [
    { title: 'Planen', text: 'Koordinieren Sie Aufgaben, Nutzung und Zeitfenster, bevor Druck entsteht.' },
    { title: 'Erfassen', text: 'Halten Sie Pflege, Teamnotizen, Fotos und Platzbelastung im Kontext fest.' },
    { title: 'Berichten', text: 'Machen Sie operative Historie zu belastbaren Grundlagen für Reviews und Entscheidungen.' },
  ],
  guide: {
    eyebrow: 'Geführter Überblick',
    title: 'So navigieren Sie im Platzbetrieb',
    steps: [
      { title: 'Dashboard', text: 'Starten Sie mit Anlagenstatus, aktiven Arbeiten und anstehenden operativen Signalen.' },
      { title: 'Aufgabe erfassen', text: 'Dokumentieren Sie Pflegearbeiten mit Notizen, Teamkontext und Fotos.' },
      { title: 'Nutzung erfassen', text: 'Erfassen Sie Spiele, Trainings und Aufwärmzeiten, damit die Platzhistorie zuverlässig bleibt.' },
      { title: 'Zeitplan', text: 'Prüfen Sie Arbeiten und Nutzung in Wochen- und Monatsansichten.' },
      { title: 'Statistiken', text: 'Verwandeln Sie Aufzeichnungen in operative Erkenntnisse und exportfähige Berichte.' },
      { title: 'Düngehistorie', text: 'Verfolgen Sie Anwendungen und Nährstoffprojektionen für agronomische Entscheidungen.' },
    ],
  },
  features: {
    eyebrow: 'Produkterlebnis',
    title: 'Jede Ansicht ist auf den Rhythmus der Fußballplatzarbeit ausgelegt.',
    kicker: 'Platzbetrieb',
    items: [
      { title: 'Dashboard: Kommandoansicht für den Alltag', text: 'Ein Premium-Startpunkt für Anlagenstatus, aktive Arbeiten, kommende Nutzung und Bereitschaft.', image: 'dashboard-dark.png', alt: 'Dunkles PitchOps Anlagen-Dashboard' },
      { title: 'Aufgabenliste: Pflege unter Kontrolle', text: 'Tägliche Arbeiten, Zuständigkeit und Abschlussstatus bleiben für das Platzteam sichtbar.', image: 'task-list-dark.png', alt: 'Dunkle PitchOps Aufgabenliste' },
      { title: 'Aufgabe erfassen: Nachweise sichern', text: 'Dokumentieren Sie Pflege mit Notizen, Personal, Abschlusskontext und Fotos, solange die Arbeit frisch ist.', image: 'task-modal-light.png', alt: 'PitchOps Aufgabenformular' },
      { title: 'Nutzung erfassen: Fußballbelastung verfolgen', text: 'Registrieren Sie Spiele, Trainings und Aufwärmzeiten, damit jeder Platz eine belastbare Nutzungshistorie hat.', image: 'usage-dark.png', alt: 'Dunkles PitchOps Nutzungsprotokoll' },
      { title: 'Wochenplan: Ausführung koordinieren', text: 'Prüfen Sie Aufgaben und Nutzung über die Woche, damit tägliche Entscheidungen mit dem Spieltagsdruck verbunden bleiben.', image: 'schedule-week-dark.png', alt: 'Dunkler PitchOps Wochenplan' },
      { title: 'Monatsplan: den größeren Plan sehen', text: 'Planen Sie Pflegefenster, Nutzungsrhythmus und Anlagennachfrage über den Monat.', image: 'schedule-month-light.png', alt: 'PitchOps Monatsplan' },
      { title: 'Statistiken: Aufzeichnungen in Erkenntnisse verwandeln', text: 'Machen Sie tägliche operative Daten zu Summen, Mustern und Berichtansichten für bessere Entscheidungen.', image: 'stats-dark.png', alt: 'Dunkle PitchOps Statistiken' },
      { title: 'Düngehistorie: Agronomie ohne Rätselraten', text: 'Verfolgen Sie Anwendungen, Produkte und Nährstoffprojektionen, ohne den operativen Kontext zu verlieren.', image: 'fertilizing-history-dark.png', alt: 'Dunkle PitchOps Düngehistorie' },
    ],
  },
  roles: {
    eyebrow: 'Rollen',
    title: 'Klarer Zugriff für jede operative Verantwortung.',
    cards: [
      { title: 'Regionalmanager', text: 'Koordiniert mehrere Anlagen und prüft operative Konsistenz.' },
      { title: 'Anlagenmanager', text: 'Steuert lokalen Zeitplan, Aufgaben, Nutzung und Reporting.' },
      { title: 'Platzteam', text: 'Erfasst tägliche Pflegearbeiten und hält Datensätze genau.' },
      { title: 'Viewer / nur Lesen', text: 'Prüft Status und Berichte, ohne operative Daten zu ändern.' },
    ],
  },
  cta: {
    title: 'Öffnen Sie PitchOps für strukturierten Fußballplatzbetrieb.',
    text: 'Geben Sie jeder Anlage eine Premium-Kommandozentrale für tägliche Pflege, Nutzung, Planung und Reporting.',
    button: 'PitchOps öffnen',
  },
  footer: {
    text: 'Öffentliche Premium-Website für das Modul Platzbetrieb in PitchOps.',
    privacy: 'Datenschutz',
    cookies: 'Cookies',
    terms: 'Bedingungen',
    contact: 'Kontakt',
    manuals: 'Anleitungen',
    openApp: 'PitchOps öffnen',
    guide: 'Guide',
  },
  infoPages: {
    privacy: {
      title: 'Datenschutz',
      description: 'Ein einfacher Datenschutzüberblick für die öffentliche PitchOps-Website.',
      body: [
        'Diese öffentliche Website stellt PitchOps vor und erfasst keine Kontodaten oder Anwendungsabläufe.',
        'Wenn Kontaktdaten mit PitchOps geteilt werden, werden sie nur zur Beantwortung der Anfrage und für zugehörige Geschäftskommunikation verwendet.',
        'Die PitchOps-Anwendung ist von dieser statischen Informationswebsite getrennt.',
      ],
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      description: 'Informationen zu Cookies auf der öffentlichen PitchOps-Website.',
      body: [
        'Diese Website ist derzeit eine statische Informationswebsite.',
        'Sie verwendet keine Marketing-Cookies.',
        'Wenn später datenschutzfreundliche Analysefunktionen hinzugefügt werden, wird diese Richtlinie vor deren Nutzung aktualisiert.',
      ],
    },
    terms: {
      title: 'Bedingungen',
      description: 'Einfache Bedingungen für die Nutzung der PitchOps-Website.',
      body: [
        'Die Informationen auf dieser Website dienen der allgemeinen Produktkommunikation.',
        'PitchOps kann Website-Inhalte, Funktionen und Beschreibungen mit der Weiterentwicklung des Produkts aktualisieren.',
        'Die Nutzung der PitchOps-Anwendung kann separaten Produkt- oder Servicebedingungen unterliegen.',
      ],
    },
    contact: {
      title: 'Kontakt',
      description: 'Kontaktieren Sie PitchOps zum Thema Fußballplatzbetrieb.',
      body: [
        'Für Produktfragen, Demonstrationen oder operative Gespräche kontaktieren Sie das PitchOps-Team.',
        'Die öffentliche Website ist informativ; Support- und Kontoabläufe finden in der PitchOps-Anwendung oder über vereinbarte Geschäftskanäle statt.',
      ],
      emailLabel: 'E-Mail',
      buttonLabel: 'PitchOps öffnen',
    },
  },
};

const es: PageContent = {
  ...en,
  meta: {
    title: 'PitchOps | Plataforma premium para operaciones de césped',
    description:
      'PitchOps organiza las operaciones de campos de fútbol: mantenimiento, uso, calendarios, informes y registros agronómicos.',
  },
  nav: { product: 'Producto', guide: 'Cómo funciona', manuals: 'Manuales', roles: 'Roles', contact: 'Contacto', login: 'Abrir PitchOps', language: 'Idioma' },
  hero: {
    eyebrow: 'Centro de control para operaciones de campos de fútbol',
    headline: 'Controla cada operación del campo desde un espacio premium.',
    subheadline:
      'PitchOps ayuda a los recintos de fútbol a planificar, registrar, revisar e informar el trabajo del césped con la claridad que exige la operación deportiva moderna.',
    description:
      'Deja atrás hojas de cálculo dispersas, mensajes de chat y fotos sin estructura. Reúne mantenimiento, uso, calendarios, estadísticas y agronomía en un solo centro operativo.',
    signals: ['Cada campo', 'Cada día', 'Listo para el partido'],
    primaryButton: 'Abrir PitchOps',
    secondaryButton: 'Explorar operaciones de césped',
  },
  heroCard: {
    eyebrow: 'Operaciones en vivo',
    title: 'Preparación del campo',
    text: 'Tareas, uso, calendario y agronomía conectados en una sola vista.',
  },
  strip: ['Operaciones de césped', 'Historial de mantenimiento', 'Seguimiento de uso', 'Planificación', 'Estadísticas e informes', 'Registros agronómicos'],
  why: {
    eyebrow: 'Por qué PitchOps',
    title: 'Las operaciones del campo fallan cuando el contexto clave vive en demasiados lugares.',
    problems: ['Hojas de Excel dispersas', 'Actualizaciones por WhatsApp', 'Fotos sin estructura', 'Historial de mantenimiento débil', 'Poca visibilidad entre recintos'],
    solutionTitle: 'PitchOps se convierte en el centro de control operativo.',
    solutionText:
      'Convierte el trabajo diario del césped en registros estructurados, visibilidad compartida e informes confiables para responsables, equipos de mantenimiento y líderes del recinto.',
  },
  module: {
    eyebrow: 'Módulo de operaciones de césped',
    title: 'El espacio activo para gestionar el campo día a día.',
    text:
      'El módulo de operaciones de césped conecta el panel del recinto, las tareas de mantenimiento, el uso del campo, los calendarios semanal y mensual, las estadísticas y el historial de fertilización. Los equipos ven qué ocurrió, qué está planificado y qué necesita atención antes de la próxima sesión o partido.',
  },
  operations: [
    { title: 'Planificar', text: 'Coordina tareas, uso y ventanas de calendario antes de que llegue la presión.' },
    { title: 'Registrar', text: 'Captura mantenimiento, notas del equipo, fotos y carga del campo en contexto.' },
    { title: 'Informar', text: 'Convierte el historial operativo en evidencia para revisiones y decisiones.' },
  ],
  guide: {
    eyebrow: 'Recorrido guiado',
    title: 'Cómo navegar por las operaciones de césped',
    steps: [
      { title: 'Panel', text: 'Empieza con el estado del recinto, el trabajo activo y las próximas señales operativas.' },
      { title: 'Registrar tarea', text: 'Captura el mantenimiento con notas, contexto del personal y fotos.' },
      { title: 'Registrar uso', text: 'Registra partidos, entrenamientos y calentamientos para mantener un historial fiable.' },
      { title: 'Calendario', text: 'Revisa trabajos y uso en vistas semanales y mensuales.' },
      { title: 'Estadísticas', text: 'Convierte registros en información operativa e informes listos para exportar.' },
      { title: 'Historial de fertilización', text: 'Sigue aplicaciones y proyecciones de nutrientes para decisiones agronómicas.' },
    ],
  },
  features: {
    eyebrow: 'Experiencia de producto',
    title: 'Cada pantalla está pensada para el ritmo del trabajo en campos de fútbol.',
    kicker: 'Operaciones de césped',
    items: [
      { title: 'Panel: vista de control para el día a día', text: 'Un punto de partida premium para estado del recinto, trabajo activo, uso previsto y preparación.', image: 'dashboard-dark.png', alt: 'Panel oscuro de PitchOps del recinto' },
      { title: 'Lista de tareas: mantenimiento bajo control', text: 'Mantén visibles las tareas diarias, responsabilidades y estado de finalización para el equipo.', image: 'task-list-dark.png', alt: 'Lista de tareas oscura de PitchOps' },
      { title: 'Registrar tarea: capturar la evidencia', text: 'Registra mantenimiento con notas, personal, contexto de finalización y fotos mientras el trabajo está fresco.', image: 'task-modal-light.png', alt: 'Formulario de tarea de PitchOps' },
      { title: 'Registrar uso: seguir la carga futbolística', text: 'Registra partidos, entrenamientos y calentamientos para que cada campo tenga un historial fiable.', image: 'usage-dark.png', alt: 'Registro oscuro de uso en PitchOps' },
      { title: 'Calendario semanal: coordinar la ejecución', text: 'Revisa tareas y uso durante la semana para conectar las decisiones diarias con la presión del partido.', image: 'schedule-week-dark.png', alt: 'Calendario semanal oscuro de PitchOps' },
      { title: 'Calendario mensual: ver el plan completo', text: 'Planifica ventanas de mantenimiento, ritmo de uso y demanda del recinto durante el mes.', image: 'schedule-month-light.png', alt: 'Calendario mensual de PitchOps' },
      { title: 'Estadísticas: convertir registros en información', text: 'Transforma los registros diarios en totales, patrones y vistas de informe para mejores decisiones.', image: 'stats-dark.png', alt: 'Estadísticas oscuras de PitchOps' },
      { title: 'Historial de fertilización: agronomía sin suposiciones', text: 'Sigue aplicaciones, productos y proyecciones de nutrientes sin perder el contexto operativo.', image: 'fertilizing-history-dark.png', alt: 'Historial oscuro de fertilización en PitchOps' },
    ],
  },
  roles: {
    eyebrow: 'Roles',
    title: 'Acceso claro para cada responsabilidad operativa.',
    cards: [
      { title: 'Responsable regional', text: 'Coordina varios recintos y revisa la consistencia operativa.' },
      { title: 'Responsable del recinto', text: 'Gestiona el calendario local, tareas, uso e informes.' },
      { title: 'Equipo de mantenimiento', text: 'Registra el mantenimiento diario y mantiene los datos precisos.' },
      { title: 'Visor / solo lectura', text: 'Revisa estado e informes sin cambiar datos operativos.' },
    ],
  },
  cta: {
    title: 'Abre PitchOps para operaciones de césped estructuradas.',
    text: 'Dale a cada recinto un centro operativo premium para mantenimiento diario, uso, planificación e informes.',
    button: 'Abrir PitchOps',
  },
  footer: {
    text: 'Sitio público premium para el módulo de operaciones de césped en PitchOps.',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    terms: 'Términos',
    contact: 'Contacto',
    manuals: 'Manuales',
    openApp: 'Abrir PitchOps',
    guide: 'Guía',
  },
  infoPages: {
    privacy: {
      title: 'Privacidad',
      description: 'Resumen simple de privacidad para el sitio público de PitchOps.',
      body: [
        'Este sitio público está diseñado para presentar PitchOps y no recopila datos de cuenta ni ejecuta flujos de la aplicación.',
        'Si se comparten datos de contacto con PitchOps, se usan solo para responder a la solicitud y comunicaciones comerciales relacionadas.',
        'La aplicación PitchOps es independiente de este sitio informativo estático.',
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description: 'Información sobre cookies en el sitio público de PitchOps.',
      body: [
        'Este sitio es actualmente un sitio informativo estático.',
        'No utiliza cookies de marketing.',
        'Si se añade analítica respetuosa con la privacidad más adelante, esta política se actualizará antes de usar esas herramientas.',
      ],
    },
    terms: {
      title: 'Términos',
      description: 'Términos simples para usar el sitio de PitchOps.',
      body: [
        'La información de este sitio se ofrece para comunicación general del producto.',
        'PitchOps puede actualizar contenidos, funciones y descripciones a medida que evoluciona el producto.',
        'El uso de la aplicación PitchOps puede estar cubierto por términos de producto o servicio separados.',
      ],
    },
    contact: {
      title: 'Contacto',
      description: 'Contacta con PitchOps sobre operaciones de campos de fútbol.',
      body: [
        'Para preguntas sobre el producto, demostraciones o conversaciones operativas, contacta con el equipo de PitchOps.',
        'El sitio público es informativo; el soporte y los flujos de cuenta se gestionan dentro de la aplicación PitchOps o por canales comerciales acordados.',
      ],
      emailLabel: 'Email',
      buttonLabel: 'Abrir PitchOps',
    },
  },
};

const fr: PageContent = {
  ...en,
  meta: {
    title: 'PitchOps | Plateforme premium pour les opérations de terrain',
    description:
      'PitchOps structure les opérations des terrains de football : entretien, utilisation, planning, reporting et dossiers agronomiques.',
  },
  nav: { product: 'Produit', guide: 'Fonctionnement', manuals: 'Manuels', roles: 'Rôles', contact: 'Contact', login: 'Ouvrir PitchOps', language: 'Langue' },
  hero: {
    eyebrow: 'Centre de commandement des opérations terrain',
    headline: 'Pilotez chaque opération terrain depuis un espace premium.',
    subheadline:
      'PitchOps aide les sites de football à planifier, consigner, revoir et reporter les travaux terrain avec la clarté attendue des opérations sportives modernes.',
    description:
      'Remplacez les tableurs dispersés, les messages de chat et les photos sans structure par un centre opérationnel unique pour l’entretien, l’utilisation, les plannings, les statistiques et l’agronomie.',
    signals: ['Chaque terrain', 'Chaque jour', 'Prêt pour le match'],
    primaryButton: 'Ouvrir PitchOps',
    secondaryButton: 'Explorer les opérations terrain',
  },
  heroCard: {
    eyebrow: 'Opérations en direct',
    title: 'Préparation du terrain',
    text: 'Tâches, utilisation, planning et agronomie connectés dans une seule vue.',
  },
  strip: ['Opérations terrain', 'Historique d’entretien', 'Suivi d’utilisation', 'Planification', 'Statistiques & reporting', 'Dossiers agronomiques'],
  why: {
    eyebrow: 'Pourquoi PitchOps',
    title: 'Les opérations terrain se fragilisent quand le contexte essentiel est dispersé.',
    problems: ['Fichiers Excel dispersés', 'Mises à jour WhatsApp', 'Photos sans structure', 'Historique d’entretien fragile', 'Faible visibilité entre sites'],
    solutionTitle: 'PitchOps devient le centre de commandement opérationnel.',
    solutionText:
      'Il transforme le travail quotidien du terrain en données structurées, visibilité partagée et reporting fiable pour les managers, les équipes terrain et les responsables de site.',
  },
  module: {
    eyebrow: 'Module opérations terrain',
    title: 'L’espace de travail actif pour gérer le terrain au quotidien.',
    text:
      'Le module opérations terrain connecte le tableau de bord du site, les tâches d’entretien, l’utilisation du terrain, les plannings semaine et mois, les statistiques et l’historique de fertilisation. Les équipes voient ce qui s’est passé, ce qui est prévu et ce qui demande attention avant la prochaine séance ou le prochain match.',
  },
  operations: [
    { title: 'Planifier', text: 'Coordonnez les tâches, l’utilisation et les créneaux avant l’arrivée de la pression.' },
    { title: 'Consigner', text: 'Capturez l’entretien, les notes d’équipe, les photos et la charge du terrain en contexte.' },
    { title: 'Reporter', text: 'Transformez l’historique opérationnel en éléments utiles pour les revues et décisions.' },
  ],
  guide: {
    eyebrow: 'Parcours guidé',
    title: 'Comment naviguer dans les opérations terrain',
    steps: [
      { title: 'Tableau de bord', text: 'Commencez par le statut du site, les travaux actifs et les prochains signaux opérationnels.' },
      { title: 'Consigner une tâche', text: 'Documentez l’entretien avec notes, contexte d’équipe et photos.' },
      { title: 'Consigner l’utilisation', text: 'Enregistrez matchs, entraînements et échauffements pour garder un historique fiable.' },
      { title: 'Planning', text: 'Revoyez travaux et utilisation dans les vues semaine et mois.' },
      { title: 'Statistiques', text: 'Transformez les enregistrements en insights opérationnels et rapports exportables.' },
      { title: 'Historique de fertilisation', text: 'Suivez les applications et projections nutritives pour les décisions agronomiques.' },
    ],
  },
  features: {
    eyebrow: 'Expérience produit',
    title: 'Chaque écran suit le rythme du travail sur terrain de football.',
    kicker: 'Opérations terrain',
    items: [
      { title: 'Tableau de bord : vue de commandement quotidienne', text: 'Un point de départ premium pour le statut du site, les travaux actifs, l’utilisation à venir et la préparation.', image: 'dashboard-dark.png', alt: 'Tableau de bord sombre PitchOps du site' },
      { title: 'Liste des tâches : entretien sous contrôle', text: 'Gardez visibles les travaux quotidiens, les responsabilités et l’état d’avancement pour l’équipe terrain.', image: 'task-list-dark.png', alt: 'Liste des tâches sombre PitchOps' },
      { title: 'Consigner une tâche : capturer les preuves', text: 'Enregistrez l’entretien avec notes, personnel, contexte de réalisation et photos pendant que le travail est récent.', image: 'task-modal-light.png', alt: 'Formulaire de tâche PitchOps' },
      { title: 'Consigner l’utilisation : suivre la charge football', text: 'Enregistrez matchs, entraînements et échauffements pour créer un historique fiable par terrain.', image: 'usage-dark.png', alt: 'Journal d’utilisation sombre PitchOps' },
      { title: 'Planning semaine : coordonner l’exécution', text: 'Revoyez tâches et utilisation sur la semaine afin de relier les décisions quotidiennes à la pression du match.', image: 'schedule-week-dark.png', alt: 'Planning semaine sombre PitchOps' },
      { title: 'Planning mois : voir le plan global', text: 'Planifiez les fenêtres d’entretien, le rythme d’utilisation et la demande du site sur le mois.', image: 'schedule-month-light.png', alt: 'Planning mensuel PitchOps' },
      { title: 'Statistiques : transformer les données en insights', text: 'Convertissez les enregistrements quotidiens en totaux, tendances et vues de reporting pour mieux décider.', image: 'stats-dark.png', alt: 'Statistiques sombres PitchOps' },
      { title: 'Historique de fertilisation : l’agronomie sans approximation', text: 'Suivez applications, produits et projections nutritives sans perdre le contexte opérationnel.', image: 'fertilizing-history-dark.png', alt: 'Historique de fertilisation sombre PitchOps' },
    ],
  },
  roles: {
    eyebrow: 'Rôles',
    title: 'Un accès clair pour chaque responsabilité opérationnelle.',
    cards: [
      { title: 'Responsable régional', text: 'Coordonne plusieurs sites et vérifie la cohérence opérationnelle.' },
      { title: 'Responsable de site', text: 'Pilote le planning local, les tâches, l’utilisation et le reporting.' },
      { title: 'Équipe terrain', text: 'Consigne l’entretien quotidien et maintient la précision des données.' },
      { title: 'Lecteur / lecture seule', text: 'Consulte le statut et les rapports sans modifier les données opérationnelles.' },
    ],
  },
  cta: {
    title: 'Ouvrez PitchOps pour structurer les opérations terrain.',
    text: 'Offrez à chaque site un centre opérationnel premium pour l’entretien quotidien, l’utilisation, la planification et le reporting.',
    button: 'Ouvrir PitchOps',
  },
  footer: {
    text: 'Site public premium pour le module opérations terrain de PitchOps.',
    privacy: 'Confidentialité',
    cookies: 'Cookies',
    terms: 'Conditions',
    contact: 'Contact',
    manuals: 'Manuels',
    openApp: 'Ouvrir PitchOps',
    guide: 'Guide',
  },
  infoPages: {
    privacy: {
      title: 'Confidentialité',
      description: 'Un aperçu simple de la confidentialité pour le site public PitchOps.',
      body: [
        'Ce site public présente PitchOps et ne collecte pas de données de compte ni n’exécute de parcours applicatifs.',
        'Si des coordonnées sont partagées avec PitchOps, elles servent uniquement à répondre à la demande et aux échanges commerciaux associés.',
        'L’application PitchOps est distincte de ce site d’information statique.',
      ],
    },
    cookies: {
      title: 'Politique de cookies',
      description: 'Informations sur les cookies du site public PitchOps.',
      body: [
        'Ce site est actuellement un site d’information statique.',
        'Il n’utilise pas de cookies marketing.',
        'Si des outils d’analyse respectueux de la vie privée sont ajoutés plus tard, cette politique sera mise à jour avant leur utilisation.',
      ],
    },
    terms: {
      title: 'Conditions',
      description: 'Conditions simples d’utilisation du site PitchOps.',
      body: [
        'Les informations de ce site sont fournies pour une communication produit générale.',
        'PitchOps peut mettre à jour les contenus, fonctionnalités et descriptions du site à mesure que le produit évolue.',
        'L’utilisation de l’application PitchOps peut être couverte par des conditions produit ou service séparées.',
      ],
    },
    contact: {
      title: 'Contact',
      description: 'Contacter PitchOps au sujet des opérations de terrains de football.',
      body: [
        'Pour des questions produit, des démonstrations ou des échanges opérationnels, contactez l’équipe PitchOps.',
        'Le site public est informatif ; le support et les parcours de compte se font dans l’application PitchOps ou via les canaux convenus.',
      ],
      emailLabel: 'E-mail',
      buttonLabel: 'Ouvrir PitchOps',
    },
  },
};

const pt: PageContent = {
  ...en,
  meta: {
    title: 'PitchOps | Plataforma premium para operações de relvado',
    description:
      'PitchOps organiza operações de campos de futebol: manutenção, utilização, calendários, relatórios e registos agronómicos.',
  },
  nav: { product: 'Produto', guide: 'Como funciona', manuals: 'Manuais', roles: 'Funções', contact: 'Contacto', login: 'Abrir PitchOps', language: 'Idioma' },
  hero: {
    eyebrow: 'Centro de comando das operações de futebol',
    headline: 'Controle cada operação do relvado a partir de um espaço premium.',
    subheadline:
      'PitchOps ajuda recintos de futebol a planear, registar, rever e reportar o trabalho no relvado com a clareza esperada nas operações desportivas modernas.',
    description:
      'Deixe para trás folhas de cálculo dispersas, mensagens de chat e fotografias sem estrutura. Reúna manutenção, utilização, calendários, estatísticas e agronomia num único centro operacional.',
    signals: ['Cada campo', 'Todos os dias', 'Pronto para o jogo'],
    primaryButton: 'Abrir PitchOps',
    secondaryButton: 'Explorar operações de relvado',
  },
  heroCard: {
    eyebrow: 'Operações em direto',
    title: 'Prontidão do relvado',
    text: 'Tarefas, utilização, calendário e agronomia ligados numa só vista.',
  },
  strip: ['Operações de relvado', 'Histórico de manutenção', 'Seguimento de utilização', 'Planeamento', 'Estatísticas e relatórios', 'Registos agronómicos'],
  why: {
    eyebrow: 'Porquê PitchOps',
    title: 'As operações do relvado falham quando o contexto crítico vive em demasiados lugares.',
    problems: ['Folhas Excel dispersas', 'Atualizações no WhatsApp', 'Fotografias sem estrutura', 'Histórico de manutenção fraco', 'Pouca visibilidade entre recintos'],
    solutionTitle: 'PitchOps torna-se o centro de comando operacional.',
    solutionText:
      'Transforma o trabalho diário no relvado em registos estruturados, visibilidade partilhada e relatórios fiáveis para gestores, equipas de manutenção e responsáveis do recinto.',
  },
  module: {
    eyebrow: 'Módulo de operações de relvado',
    title: 'O espaço ativo para gerir o relvado no dia a dia.',
    text:
      'O módulo de operações de relvado liga o painel do recinto, tarefas de manutenção, utilização do campo, calendários semanal e mensal, estatísticas e histórico de fertilização. As equipas veem o que aconteceu, o que está planeado e o que precisa de atenção antes da próxima sessão ou jogo.',
  },
  operations: [
    { title: 'Planear', text: 'Coordene tarefas, utilização e janelas de calendário antes de surgir a pressão.' },
    { title: 'Registar', text: 'Capture manutenção, notas da equipa, fotografias e carga do relvado em contexto.' },
    { title: 'Reportar', text: 'Transforme o histórico operacional em evidência para revisões e decisões.' },
  ],
  guide: {
    eyebrow: 'Percurso guiado',
    title: 'Como navegar nas operações de relvado',
    steps: [
      { title: 'Painel', text: 'Comece pelo estado do recinto, trabalho ativo e próximos sinais operacionais.' },
      { title: 'Registar tarefa', text: 'Registe manutenção com notas, contexto da equipa e fotografias.' },
      { title: 'Registar utilização', text: 'Registe jogos, treinos e aquecimentos para manter um histórico fiável.' },
      { title: 'Calendário', text: 'Reveja trabalho e utilização em vistas semanais e mensais.' },
      { title: 'Estatísticas', text: 'Converta registos em informação operacional e relatórios prontos a exportar.' },
      { title: 'Histórico de fertilização', text: 'Acompanhe aplicações e projeções de nutrientes para decisões agronómicas.' },
    ],
  },
  features: {
    eyebrow: 'Experiência do produto',
    title: 'Cada ecrã é construído em torno do ritmo do trabalho no relvado.',
    kicker: 'Operações de relvado',
    items: [
      { title: 'Painel: vista de comando diária', text: 'Um ponto de partida premium para estado do recinto, trabalho ativo, utilização prevista e prontidão.', image: 'dashboard-dark.png', alt: 'Painel escuro do recinto no PitchOps' },
      { title: 'Lista de tarefas: manutenção sob controlo', text: 'Mantenha tarefas diárias, responsabilidade e estado de conclusão visíveis para a equipa.', image: 'task-list-dark.png', alt: 'Lista de tarefas escura do PitchOps' },
      { title: 'Registar tarefa: guardar a evidência', text: 'Registe manutenção com notas, equipa, contexto de conclusão e fotografias enquanto o trabalho está recente.', image: 'task-modal-light.png', alt: 'Formulário de tarefa do PitchOps' },
      { title: 'Registar utilização: acompanhar a carga futebolística', text: 'Registe jogos, treinos e aquecimentos para que cada campo tenha um histórico fiável.', image: 'usage-dark.png', alt: 'Registo escuro de utilização no PitchOps' },
      { title: 'Calendário semanal: coordenar execução', text: 'Reveja tarefas e utilização ao longo da semana para ligar decisões diárias à pressão do jogo.', image: 'schedule-week-dark.png', alt: 'Calendário semanal escuro do PitchOps' },
      { title: 'Calendário mensal: ver o plano maior', text: 'Planeie janelas de manutenção, ritmo de utilização e procura do recinto ao longo do mês.', image: 'schedule-month-light.png', alt: 'Calendário mensal do PitchOps' },
      { title: 'Estatísticas: transformar registos em insight', text: 'Transforme registos diários em totais, padrões e vistas de relatório para melhores decisões.', image: 'stats-dark.png', alt: 'Estatísticas escuras do PitchOps' },
      { title: 'Histórico de fertilização: agronomia sem adivinhação', text: 'Acompanhe aplicações, produtos e projeções de nutrientes sem perder o contexto operacional.', image: 'fertilizing-history-dark.png', alt: 'Histórico escuro de fertilização do PitchOps' },
    ],
  },
  roles: {
    eyebrow: 'Funções',
    title: 'Acesso claro para cada responsabilidade operacional.',
    cards: [
      { title: 'Gestor regional', text: 'Coordena vários recintos e revê a consistência operacional.' },
      { title: 'Gestor do recinto', text: 'Gere o calendário local, tarefas, utilização e relatórios.' },
      { title: 'Equipa de manutenção', text: 'Regista a manutenção diária e mantém os dados precisos.' },
      { title: 'Visualizador / só leitura', text: 'Revê estado e relatórios sem alterar dados operacionais.' },
    ],
  },
  cta: {
    title: 'Abra o PitchOps para operações de relvado estruturadas.',
    text: 'Dê a cada recinto um centro operacional premium para manutenção diária, utilização, planeamento e relatórios.',
    button: 'Abrir PitchOps',
  },
  footer: {
    text: 'Site público premium para o módulo de operações de relvado no PitchOps.',
    privacy: 'Privacidade',
    cookies: 'Cookies',
    terms: 'Termos',
    contact: 'Contacto',
    manuals: 'Manuais',
    openApp: 'Abrir PitchOps',
    guide: 'Guia',
  },
  infoPages: {
    privacy: {
      title: 'Privacidade',
      description: 'Resumo simples de privacidade para o site público do PitchOps.',
      body: [
        'Este site público foi criado para apresentar o PitchOps e não recolhe dados de conta nem executa fluxos da aplicação.',
        'Se forem partilhados dados de contacto com o PitchOps, serão usados apenas para responder ao pedido e comunicação comercial relacionada.',
        'A aplicação PitchOps é separada deste site informativo estático.',
      ],
    },
    cookies: {
      title: 'Política de cookies',
      description: 'Informação sobre cookies no site público do PitchOps.',
      body: [
        'Este site é atualmente um site informativo estático.',
        'Não usa cookies de marketing.',
        'Se forem adicionadas análises respeitadoras da privacidade mais tarde, esta política será atualizada antes da sua utilização.',
      ],
    },
    terms: {
      title: 'Termos',
      description: 'Termos simples para usar o site PitchOps.',
      body: [
        'A informação neste site é fornecida para comunicação geral do produto.',
        'PitchOps pode atualizar conteúdos, funcionalidades e descrições do site à medida que o produto evolui.',
        'A utilização da aplicação PitchOps pode estar sujeita a termos de produto ou serviço separados.',
      ],
    },
    contact: {
      title: 'Contacto',
      description: 'Contacte o PitchOps sobre operações de campos de futebol.',
      body: [
        'Para perguntas sobre o produto, demonstrações ou conversas operacionais, contacte a equipa PitchOps.',
        'O site público é informativo; suporte e fluxos de conta acontecem na aplicação PitchOps ou em canais comerciais acordados.',
      ],
      emailLabel: 'Email',
      buttonLabel: 'Abrir PitchOps',
    },
  },
};

export const ui: Record<Lang, PageContent> = {
  en,
  pl,
  de,
  es,
  fr,
  pt,
};
