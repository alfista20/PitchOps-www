import type { Lang } from './languages';

type Card = { title: string; text: string };
type Feature = Card & { image: string; alt: string };

export const ui: Record<Lang, {
  meta: { title: string; description: string };
  nav: {
    product: string;
    guide: string;
    roles: string;
    contact: string;
    login: string;
    language: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
  strip: string[];
  module: { eyebrow: string; title: string; text: string };
  guide: { eyebrow: string; title: string; steps: Card[] };
  features: { eyebrow: string; title: string; items: Feature[] };
  roles: { eyebrow: string; title: string; cards: Card[] };
  why: { eyebrow: string; title: string; problems: string[]; solutionTitle: string; solutionText: string };
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
    contact: { title: string; description: string; body: string[]; emailLabel: string };
  };
}> = {
  en: {
    meta: {
      title: 'PitchOps | Pitch Operations for Football Venues',
      description:
        'PitchOps helps football venues structure maintenance tasks, usage records, schedules, statistics and agronomy history in one operational workspace.',
    },
    nav: {
      product: 'Product',
      guide: 'How it works',
      roles: 'Roles',
      contact: 'Contact',
      login: 'Open PitchOps',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Premium football operations',
      headline: 'Pitch Operations, built for match-ready venues.',
      subheadline: 'PitchOps gives grounds teams and managers one structured place to plan, log, review and report pitch work.',
      description:
        'Move beyond scattered spreadsheets, chat updates and unstructured photos. PitchOps turns daily maintenance, pitch usage, schedules, stats and agronomy records into an operational system.',
      primaryButton: 'Open PitchOps',
      secondaryButton: 'Explore Pitch Operations',
    },
    strip: ['Pitch operations', 'Maintenance history', 'Pitch usage', 'Schedule planning', 'Stats and reporting', 'Agronomy records'],
    module: {
      eyebrow: 'Pitch Operations module',
      title: 'The daily workspace for football pitch management.',
      text:
        'The Pitch Operations module keeps the venue dashboard, task log, usage records, weekly and monthly schedule, statistics and fertilizing history connected. Teams can see what happened, what is planned and what needs attention before the next session or match.',
    },
    guide: {
      eyebrow: 'Guided walkthrough',
      title: 'How to navigate Pitch Operations',
      steps: [
        { title: 'Start from the venue dashboard', text: 'Review today’s status, priorities and recent operational signals.' },
        { title: 'Log daily maintenance tasks', text: 'Capture work completed with notes, staff involvement and photos.' },
        { title: 'Register pitch usage', text: 'Record match, training and warm-up load so usage history stays reliable.' },
        { title: 'Plan and review the schedule', text: 'Use week and month views to coordinate tasks, usage and maintenance windows.' },
        { title: 'Monitor stats and export reports', text: 'Turn operational records into practical evidence for managers and stakeholders.' },
        { title: 'Review fertilizing history and nutrient trends', text: 'Track applications over time and understand projected nutrient direction.' },
      ],
    },
    features: {
      eyebrow: 'Feature walkthrough',
      title: 'Built around the real flow of pitch work.',
      items: [
        { title: 'Dashboard: one place for daily operations', text: 'A focused starting point for venue status, activity and next actions.', image: 'dashboard-light.png', alt: 'PitchOps venue dashboard screenshot' },
        { title: 'Log task: capture maintenance work', text: 'Record maintenance with notes, assigned staff, completion context and photos.', image: 'task-modal-light.png', alt: 'PitchOps task modal screenshot' },
        { title: 'Log usage: record football load', text: 'Register match, training and warm-up usage so every pitch carries a clear activity history.', image: 'usage-light.png', alt: 'PitchOps usage log screenshot' },
        { title: 'Schedule: week and month planning', text: 'Review tasks and usage across weekly execution and monthly planning views.', image: 'schedule-week-light.png', alt: 'PitchOps weekly schedule screenshot' },
        { title: 'Stats: operational insight', text: 'Convert daily records into totals, patterns and reporting views for better decisions.', image: 'stats-light.png', alt: 'PitchOps statistics screenshot' },
        { title: 'Fertilizing history: agronomy records', text: 'Track applications, product history and nutrient projection without losing the operational thread.', image: 'fertilizing-history-light.png', alt: 'PitchOps fertilizing history screenshot' },
      ],
    },
    roles: {
      eyebrow: 'Roles',
      title: 'Clear access for every operational responsibility.',
      cards: [
        { title: 'Admin', text: 'Controls setup, structure and cross-venue visibility.' },
        { title: 'Area Manager', text: 'Coordinates multiple venues and reviews operational consistency.' },
        { title: 'Venue Manager', text: 'Runs the local schedule, tasks, usage and reporting flow.' },
        { title: 'Grounds Team', text: 'Logs daily maintenance and keeps records accurate from the field.' },
        { title: 'Viewer / Read-only', text: 'Reviews status and reports without changing operational data.' },
      ],
    },
    why: {
      eyebrow: 'Why PitchOps',
      title: 'Pitch work deserves a structure stronger than the tools around it.',
      problems: ['Scattered Excel sheets', 'WhatsApp updates that vanish in threads', 'Photos without structure', 'Weak maintenance history', 'Difficult multi-venue reporting'],
      solutionTitle: 'PitchOps is the structured solution.',
      solutionText:
        'It connects maintenance, usage, schedules, stats and agronomy history in a focused product experience for football pitch operations.',
    },
    cta: {
      title: 'Open PitchOps for structured football pitch operations.',
      text: 'Bring daily maintenance, usage and reporting into one trusted operational workspace.',
      button: 'Open PitchOps',
    },
    footer: {
      text: 'A public product website for the Pitch Operations module in PitchOps.',
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
          'It does not use marketing cookies unless analytics or similar services are added later.',
          'If analytics are introduced, this page should be updated before they are enabled.',
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
      },
    },
  },
  pl: {
    meta: {
      title: 'PitchOps | Operacje boisk pilkarskich',
      description:
        'PitchOps porzadkuje zadania utrzymaniowe, wykorzystanie boisk, harmonogramy, statystyki i historie agronomiczna w jednym miejscu operacyjnym.',
    },
    nav: { product: 'Produkt', guide: 'Jak dziala', roles: 'Role', contact: 'Kontakt', login: 'Otworz PitchOps', language: 'Jezyk' },
    hero: {
      eyebrow: 'Profesjonalne operacje pilkarskie',
      headline: 'Operacje boisk przygotowane pod gotowosc meczowa.',
      subheadline: 'PitchOps daje zespolom utrzymania i managerom jedno uporzadkowane miejsce do planowania, rejestrowania i raportowania pracy boisk.',
      description:
        'Zamiast rozproszonych arkuszy, wiadomosci i zdjec bez kontekstu, PitchOps laczy codzienne utrzymanie, wykorzystanie boisk, harmonogram, statystyki i historie nawozenia.',
      primaryButton: 'Otworz PitchOps',
      secondaryButton: 'Poznaj Pitch Operations',
    },
    strip: ['Operacje boisk', 'Historia utrzymania', 'Wykorzystanie boiska', 'Planowanie harmonogramu', 'Statystyki i raporty', 'Zapisy agronomiczne'],
    module: {
      eyebrow: 'Modul Pitch Operations',
      title: 'Codzienne centrum pracy dla zarzadzania boiskiem.',
      text:
        'Modul Pitch Operations laczy dashboard obiektu, rejestr zadan, wykorzystanie, harmonogram tygodniowy i miesieczny, statystyki oraz historie nawozenia. Zespol widzi, co sie wydarzylo, co jest zaplanowane i co wymaga uwagi.',
    },
    guide: {
      eyebrow: 'Przewodnik',
      title: 'Jak poruszac sie po Pitch Operations',
      steps: [
        { title: 'Zacznij od dashboardu obiektu', text: 'Sprawdz status dnia, priorytety i ostatnie sygnaly operacyjne.' },
        { title: 'Rejestruj codzienne zadania', text: 'Zapisuj wykonane prace wraz z notatkami, personelem i zdjeciami.' },
        { title: 'Dodawaj wykorzystanie boiska', text: 'Rejestruj mecze, treningi i rozgrzewki, aby historia obciazenia byla wiarygodna.' },
        { title: 'Planuj i przegladaj harmonogram', text: 'Korzystaj z widoku tygodnia i miesiaca do koordynacji zadan oraz uzycia boiska.' },
        { title: 'Monitoruj statystyki i raporty', text: 'Zamieniaj dane operacyjne w praktyczne informacje dla managerow.' },
        { title: 'Analizuj historie nawozenia', text: 'Sledz aplikacje i kierunek zmian skladnikow odzywczych.' },
      ],
    },
    features: {
      eyebrow: 'Funkcje',
      title: 'Zbudowane wokol realnego rytmu pracy boiskowej.',
      items: [
        { title: 'Dashboard: jedno miejsce na dzienne operacje', text: 'Przejrzysty start dla statusu obiektu, aktywnosci i kolejnych dzialan.', image: 'dashboard-light.png', alt: 'Zrzut ekranu dashboardu PitchOps' },
        { title: 'Zadanie: zapis pracy utrzymaniowej', text: 'Notatki, personel, kontekst wykonania i zdjecia w jednym rekordzie.', image: 'task-modal-light.png', alt: 'Zrzut ekranu zadania PitchOps' },
        { title: 'Uzycie: obciazenie pilkarskie', text: 'Rejestr meczow, treningow i rozgrzewek jako czytelna historia boiska.', image: 'usage-light.png', alt: 'Zrzut ekranu uzycia boiska PitchOps' },
        { title: 'Harmonogram: tydzien i miesiac', text: 'Planowanie zadan i wykorzystania w widokach operacyjnych.', image: 'schedule-week-light.png', alt: 'Zrzut ekranu harmonogramu PitchOps' },
        { title: 'Statystyki: wnioski operacyjne', text: 'Sumy, wzorce i widoki raportowe na podstawie codziennych zapisow.', image: 'stats-light.png', alt: 'Zrzut ekranu statystyk PitchOps' },
        { title: 'Nawozenie: historia agronomiczna', text: 'Aplikacje, produkty i projekcja skladnikow bez utraty kontekstu operacyjnego.', image: 'fertilizing-history-light.png', alt: 'Zrzut ekranu historii nawozenia PitchOps' },
      ],
    },
    roles: {
      eyebrow: 'Role',
      title: 'Dostep dopasowany do odpowiedzialnosci.',
      cards: [
        { title: 'Admin', text: 'Zarzadza konfiguracja, struktura i widocznoscia wielu obiektow.' },
        { title: 'Area Manager', text: 'Koordynuje obiekty i porownuje spojnosc operacyjna.' },
        { title: 'Venue Manager', text: 'Prowadzi lokalny harmonogram, zadania, uzycie i raporty.' },
        { title: 'Grounds Team', text: 'Rejestruje codzienne prace i utrzymuje dokladnosc danych.' },
        { title: 'Viewer / Read-only', text: 'Przeglada status i raporty bez zmiany danych.' },
      ],
    },
    why: {
      eyebrow: 'Dlaczego PitchOps',
      title: 'Praca boiskowa potrzebuje lepszej struktury niz narzedzia wokol niej.',
      problems: ['Rozproszone arkusze Excel', 'Aktualizacje ginace w WhatsApp', 'Zdjecia bez struktury', 'Slaba historia utrzymania', 'Trudne raportowanie wielu obiektow'],
      solutionTitle: 'PitchOps porzadkuje caly proces.',
      solutionText: 'Laczy utrzymanie, uzycie, harmonogramy, statystyki i agronomie w jednym produkcie dla operacji boisk pilkarskich.',
    },
    cta: { title: 'Otworz PitchOps dla uporzadkowanych operacji boisk.', text: 'Polacz utrzymanie, uzycie i raportowanie w jednym zaufanym miejscu.', button: 'Otworz PitchOps' },
    footer: { text: 'Publiczna strona produktu dla modulu Pitch Operations.', privacy: 'Polityka prywatnosci', cookies: 'Polityka cookies', terms: 'Regulamin', contact: 'Kontakt', openApp: 'Otworz PitchOps', guide: 'Przewodnik' },
    infoPages: {
      privacy: { title: 'Polityka prywatnosci', description: 'Prosty opis prywatnosci strony PitchOps.', body: ['Ta publiczna strona prezentuje PitchOps i nie obsluguje kont ani procesow aplikacji.', 'Dane kontaktowe przekazane PitchOps sa uzywane do odpowiedzi i komunikacji biznesowej.', 'Aplikacja PitchOps jest oddzielna od tej statycznej strony informacyjnej.'] },
      cookies: { title: 'Polityka cookies', description: 'Informacje o cookies na stronie PitchOps.', body: ['Ta strona jest obecnie statyczna strona informacyjna.', 'Nie uzywa cookies marketingowych, chyba ze w przyszlosci zostana dodane narzedzia analityczne.', 'Po dodaniu analityki ta strona powinna zostac zaktualizowana przed jej wlaczeniem.'] },
      terms: { title: 'Regulamin', description: 'Proste zasady korzystania ze strony PitchOps.', body: ['Informacje na stronie sluza ogolnej komunikacji produktowej.', 'PitchOps moze aktualizowac tresci, funkcje i opisy wraz z rozwojem produktu.', 'Korzystanie z aplikacji PitchOps moze podlegac oddzielnym warunkom.'] },
      contact: { title: 'Kontakt', description: 'Kontakt w sprawie PitchOps.', body: ['W sprawach produktu, prezentacji lub rozmow operacyjnych skontaktuj sie z zespolem PitchOps.', 'Ta strona ma charakter informacyjny; wsparcie i procesy kont odbywaja sie w aplikacji lub uzgodnionych kanalach.'], emailLabel: 'Email' },
    },
  },
  de: {} as any,
  es: {} as any,
  fr: {} as any,
  pt: {} as any,
};

const fallbackLangs: Lang[] = ['de', 'es', 'fr', 'pt'];
for (const lang of fallbackLangs) {
  ui[lang] = {
    ...ui.en,
    nav: {
      ...ui.en.nav,
      product: lang === 'de' ? 'Produkt' : lang === 'fr' ? 'Produit' : lang === 'pt' ? 'Produto' : 'Producto',
      guide: lang === 'de' ? 'Guide' : lang === 'fr' ? 'Guide' : lang === 'pt' ? 'Como funciona' : 'Como funciona',
      roles: lang === 'de' ? 'Rollen' : lang === 'fr' ? 'Roles' : lang === 'pt' ? 'Funcoes' : 'Roles',
      contact: lang === 'de' ? 'Kontakt' : lang === 'fr' ? 'Contact' : lang === 'pt' ? 'Contato' : 'Contacto',
      login: lang === 'de' ? 'PitchOps offnen' : lang === 'fr' ? 'Ouvrir PitchOps' : lang === 'pt' ? 'Abrir PitchOps' : 'Abrir PitchOps',
      language: lang === 'de' ? 'Sprache' : lang === 'fr' ? 'Langue' : lang === 'pt' ? 'Idioma' : 'Idioma',
    },
    footer: {
      ...ui.en.footer,
      privacy: lang === 'de' ? 'Datenschutz' : lang === 'fr' ? 'Confidentialite' : lang === 'pt' ? 'Privacidade' : 'Privacidad',
      cookies: lang === 'de' ? 'Cookies' : lang === 'fr' ? 'Cookies' : lang === 'pt' ? 'Cookies' : 'Cookies',
      terms: lang === 'de' ? 'Bedingungen' : lang === 'fr' ? 'Conditions' : lang === 'pt' ? 'Termos' : 'Terminos',
      contact: lang === 'de' ? 'Kontakt' : lang === 'fr' ? 'Contact' : lang === 'pt' ? 'Contato' : 'Contacto',
      openApp: lang === 'de' ? 'PitchOps offnen' : lang === 'fr' ? 'Ouvrir PitchOps' : lang === 'pt' ? 'Abrir PitchOps' : 'Abrir PitchOps',
    },
  };
}
