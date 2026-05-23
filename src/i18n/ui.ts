import type { Lang } from './languages';

export const ui: Record<Lang, {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    product: string;
    modules: string;
    documentation: string;
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
    actionsLabel: string;
    readiness: string;
    usage: string;
    venue: string;
    matchday: string;
  };
  product: {
    eyebrow: string;
    title: string;
    text: string;
  };
  problem: {
    eyebrow: string;
    title: string;
    text: string;
  };
  modules: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; text: string }>;
  };
  audience: {
    eyebrow: string;
    title: string;
    cards: Array<{ title: string; text: string }>;
  };
  cta: {
    eyebrow: string;
    title: string;
    text: string;
    button: string;
  };
  footer: {
    text: string;
    openApp: string;
    documentation: string;
  };
  docs: {
    title: string;
    description: string;
    overview: string;
    gettingStarted: string;
    intro: string;
    availableDocuments: string;
    placeholderTitle: string;
    placeholderText: string;
    futureText: string;
  };
}> = {
  en: {
    meta: {
      title: 'PitchOps | Football Pitch Operations',
      description:
        'PitchOps is a practical platform for football pitch operations, maintenance history, usage tracking, readiness monitoring and multi-venue tournament coordination.',
    },
    nav: {
      product: 'Product',
      modules: 'Modules',
      documentation: 'Documentation',
      contact: 'Contact',
      login: 'Login',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Football operations platform',
      headline: 'PitchOps',
      subheadline: 'Football pitch operations. Structured, visible and ready.',
      description:
        'PitchOps is a practical platform for football pitch operations, maintenance history, usage tracking, readiness monitoring and multi-venue tournament coordination.',
      primaryButton: 'Open PitchOps',
      secondaryButton: 'View Documentation',
      actionsLabel: 'Primary actions',
      readiness: 'Readiness',
      usage: 'Usage',
      venue: 'Venue A',
      matchday: 'Matchday',
    },
    product: {
      eyebrow: 'What PitchOps is',
      title: 'A practical platform for pitch operations, maintenance history and reporting.',
      text: 'PitchOps helps teams keep football pitch activity structured and visible across schedules, tasks, usage records, readiness monitoring and multi-venue coordination. It is built for operational clarity, not noise.',
    },
    problem: {
      eyebrow: 'Why it exists',
      title: 'Pitch readiness needs shared structure before pressure arrives.',
      text: 'Football operations teams often work across changing schedules, weather windows, venue constraints and reporting needs. PitchOps gives that work a shared place: planned, tracked and ready for review across venues.',
    },
    modules: {
      eyebrow: 'Modules',
      title: 'Built around real tournament pitch-management workflows.',
      cards: [
        {
          title: 'Schedule / Gantt',
          text: 'Plan work, match use and venue preparation across operational timelines.',
        },
        {
          title: 'Tasks',
          text: 'Track pitch work, ownership and completion status in a shared workflow.',
        },
        {
          title: 'Pitch Usage',
          text: 'Keep venue usage visible across training, matches and maintenance windows.',
        },
        {
          title: 'Stats',
          text: 'Turn operational records into clear reporting for readiness and review.',
        },
        {
          title: 'Settings',
          text: 'Keep site-level configuration simple, structured and easy to maintain.',
        },
        {
          title: 'Roles & Access',
          text: 'Support different operational views for teams, managers and read-only users.',
        },
        {
          title: 'Documentation',
          text: 'Provide public guidance for website visitors and future operational docs.',
        },
      ],
    },
    audience: {
      eyebrow: 'Who it is for',
      title: 'Clear views for the people responsible for pitch readiness.',
      cards: [
        {
          title: 'Admin',
          text: 'Oversees setup, structure and operational reporting across the platform.',
        },
        {
          title: 'Area Manager',
          text: 'Coordinates multiple venues and keeps readiness visible across locations.',
        },
        {
          title: 'Venue Manager',
          text: 'Manages local schedules, usage, tasks and pitch status for a venue.',
        },
        {
          title: 'Grounds Team',
          text: 'Works from practical task and maintenance history views for daily operations.',
        },
        {
          title: 'Viewer / Read-only user',
          text: 'Reviews status, documentation and reporting without changing operational data.',
        },
      ],
    },
    cta: {
      eyebrow: 'Ready for operations',
      title: 'Open PitchOps for structured football pitch coordination.',
      text: 'Designed for football pitch operations and multi-venue readiness, with public documentation growing in the next phase.',
      button: 'Open PitchOps',
    },
    footer: {
      text: 'Public website and documentation for a practical football pitch operations platform.',
      openApp: 'Open PitchOps',
      documentation: 'Documentation',
    },
    docs: {
      title: 'PitchOps Documentation',
      description:
        'PitchOps public documentation for football pitch operations and multi-venue readiness workflows.',
      overview: 'Overview',
      gettingStarted: 'Getting started',
      intro:
        'Public documentation for PitchOps will be expanded in Phase 2. Phase 1 provides the website structure, routing and initial documentation entry points.',
      availableDocuments: 'Available documents',
      placeholderTitle: 'Getting Started',
      placeholderText: 'This is placeholder documentation for Phase 1.',
      futureText:
        'Future documentation will introduce the public PitchOps concepts, common workflows and recommended operating patterns for football pitch operations and multi-venue readiness.',
    },
  },
  pl: {
    meta: {
      title: 'PitchOps | Operacje boisk piłkarskich',
      description:
        'PitchOps to praktyczna platforma do operacji boisk piłkarskich, historii utrzymania, śledzenia wykorzystania, monitorowania gotowości i koordynacji turniejów w wielu obiektach.',
    },
    nav: {
      product: 'Produkt',
      modules: 'Moduły',
      documentation: 'Dokumentacja',
      contact: 'Kontakt',
      login: 'Logowanie',
      language: 'Język',
    },
    hero: {
      eyebrow: 'Platforma operacji piłkarskich',
      headline: 'PitchOps',
      subheadline: 'Operacje boisk piłkarskich. Uporządkowane, widoczne i gotowe.',
      description:
        'PitchOps to praktyczna platforma do operacji boisk piłkarskich, historii utrzymania, śledzenia wykorzystania, monitorowania gotowości i koordynacji turniejów w wielu obiektach.',
      primaryButton: 'Otwórz PitchOps',
      secondaryButton: 'Zobacz dokumentację',
      actionsLabel: 'Główne działania',
      readiness: 'Gotowość',
      usage: 'Wykorzystanie',
      venue: 'Obiekt A',
      matchday: 'Dzień meczowy',
    },
    product: {
      eyebrow: 'Czym jest PitchOps',
      title: 'Praktyczna platforma do operacji boisk, historii utrzymania i raportowania.',
      text: 'PitchOps pomaga zespołom utrzymać aktywność boisk piłkarskich w uporządkowanej i widocznej formie: harmonogramy, zadania, zapisy wykorzystania, monitoring gotowości i koordynacja wielu obiektów. To narzędzie do operacyjnej przejrzystości.',
    },
    problem: {
      eyebrow: 'Dlaczego istnieje',
      title: 'Gotowość boiska wymaga wspólnej struktury, zanim pojawi się presja.',
      text: 'Zespoły operacyjne pracują przy zmiennych harmonogramach, oknach pogodowych, ograniczeniach obiektów i potrzebach raportowych. PitchOps daje tej pracy wspólne miejsce: zaplanowane, śledzone i gotowe do przeglądu między obiektami.',
    },
    modules: {
      eyebrow: 'Moduły',
      title: 'Zbudowane wokół realnych procesów zarządzania boiskami turniejowymi.',
      cards: [
        { title: 'Harmonogram / Gantt', text: 'Planuj prace, wykorzystanie meczowe i przygotowanie obiektów w czasie.' },
        { title: 'Zadania', text: 'Śledź prace boiskowe, odpowiedzialność i status wykonania we wspólnym przepływie.' },
        { title: 'Wykorzystanie boiska', text: 'Utrzymuj widoczność treningów, meczów i okien utrzymaniowych.' },
        { title: 'Statystyki', text: 'Zamieniaj zapisy operacyjne w czytelne raporty gotowości i przeglądu.' },
        { title: 'Ustawienia', text: 'Utrzymuj konfigurację witryny w prostej, uporządkowanej i łatwej formie.' },
        { title: 'Role i dostęp', text: 'Wspieraj różne widoki operacyjne dla zespołów, managerów i użytkowników tylko do odczytu.' },
        { title: 'Dokumentacja', text: 'Zapewnij publiczne wskazówki dla odwiedzających i przyszłych dokumentów operacyjnych.' },
      ],
    },
    audience: {
      eyebrow: 'Dla kogo',
      title: 'Czytelne widoki dla osób odpowiedzialnych za gotowość boisk.',
      cards: [
        { title: 'Admin', text: 'Nadzoruje konfigurację, strukturę i raportowanie operacyjne w platformie.' },
        { title: 'Area Manager', text: 'Koordynuje wiele obiektów i utrzymuje widoczność gotowości lokalizacji.' },
        { title: 'Venue Manager', text: 'Zarządza lokalnymi harmonogramami, wykorzystaniem, zadaniami i statusem boisk.' },
        { title: 'Grounds Team', text: 'Pracuje na praktycznych widokach zadań i historii utrzymania na co dzień.' },
        { title: 'Użytkownik tylko do odczytu', text: 'Przegląda status, dokumentację i raporty bez zmiany danych operacyjnych.' },
      ],
    },
    cta: {
      eyebrow: 'Gotowe do operacji',
      title: 'Otwórz PitchOps dla uporządkowanej koordynacji boisk piłkarskich.',
      text: 'Platforma zaprojektowana dla operacji boisk piłkarskich i gotowości wielu obiektów, z dokumentacją publiczną rozwijaną w kolejnej fazie.',
      button: 'Otwórz PitchOps',
    },
    footer: {
      text: 'Publiczna strona i dokumentacja praktycznej platformy operacji boisk piłkarskich.',
      openApp: 'Otwórz PitchOps',
      documentation: 'Dokumentacja',
    },
    docs: {
      title: 'Dokumentacja PitchOps',
      description: 'Publiczna dokumentacja PitchOps dla operacji boisk piłkarskich i gotowości wielu obiektów.',
      overview: 'Przegląd',
      gettingStarted: 'Pierwsze kroki',
      intro: 'Publiczna dokumentacja PitchOps zostanie rozbudowana w Fazie 2. Faza 1 zapewnia strukturę strony, routing i początkowe punkty wejścia do dokumentacji.',
      availableDocuments: 'Dostępne dokumenty',
      placeholderTitle: 'Pierwsze kroki',
      placeholderText: 'To jest tymczasowa dokumentacja dla Fazy 1.',
      futureText: 'Przyszła dokumentacja przedstawi publiczne koncepcje PitchOps, typowe przepływy pracy i zalecane wzorce operacyjne dla boisk piłkarskich oraz gotowości wielu obiektów.',
    },
  },
  de: {
    meta: {
      title: 'PitchOps | Betrieb von Fußballplätzen',
      description:
        'PitchOps ist eine praktische Plattform für Fußballplatzbetrieb, Wartungshistorie, Nutzungsverfolgung, Bereitschaftsmonitoring und die Koordination von Turnieren mit mehreren Spielorten.',
    },
    nav: {
      product: 'Produkt',
      modules: 'Module',
      documentation: 'Dokumentation',
      contact: 'Kontakt',
      login: 'Login',
      language: 'Sprache',
    },
    hero: {
      eyebrow: 'Plattform für Fußballbetrieb',
      headline: 'PitchOps',
      subheadline: 'Fußballplatzbetrieb. Strukturiert, sichtbar und bereit.',
      description:
        'PitchOps ist eine praktische Plattform für Fußballplatzbetrieb, Wartungshistorie, Nutzungsverfolgung, Bereitschaftsmonitoring und die Koordination von Turnieren mit mehreren Spielorten.',
      primaryButton: 'PitchOps öffnen',
      secondaryButton: 'Dokumentation ansehen',
      actionsLabel: 'Hauptaktionen',
      readiness: 'Bereitschaft',
      usage: 'Nutzung',
      venue: 'Spielort A',
      matchday: 'Spieltag',
    },
    product: {
      eyebrow: 'Was PitchOps ist',
      title: 'Eine praktische Plattform für Platzbetrieb, Wartungshistorie und Reporting.',
      text: 'PitchOps hilft Teams, Aktivitäten auf Fußballplätzen über Zeitpläne, Aufgaben, Nutzungsdaten, Bereitschaftsmonitoring und Koordination mehrerer Spielorte strukturiert und sichtbar zu halten. Es ist für operative Klarheit gebaut.',
    },
    problem: {
      eyebrow: 'Warum es existiert',
      title: 'Platzbereitschaft braucht gemeinsame Struktur, bevor Druck entsteht.',
      text: 'Teams im Fußballbetrieb arbeiten mit wechselnden Zeitplänen, Wetterfenstern, Spielortbeschränkungen und Reporting-Anforderungen. PitchOps gibt dieser Arbeit einen gemeinsamen Ort: geplant, verfolgt und standortübergreifend prüfbar.',
    },
    modules: {
      eyebrow: 'Module',
      title: 'Auf realen Workflows für Turnier-Platzmanagement aufgebaut.',
      cards: [
        { title: 'Zeitplan / Gantt', text: 'Plane Arbeiten, Spielnutzung und Vorbereitung von Spielorten entlang operativer Zeitlinien.' },
        { title: 'Aufgaben', text: 'Verfolge Platzarbeiten, Verantwortlichkeiten und Abschlussstatus in einem gemeinsamen Workflow.' },
        { title: 'Platznutzung', text: 'Halte Training, Spiele und Wartungsfenster standortübergreifend sichtbar.' },
        { title: 'Statistiken', text: 'Wandle operative Aufzeichnungen in klare Berichte für Bereitschaft und Auswertung um.' },
        { title: 'Einstellungen', text: 'Halte die standortweite Konfiguration einfach, strukturiert und wartbar.' },
        { title: 'Rollen & Zugriff', text: 'Unterstütze verschiedene operative Ansichten für Teams, Manager und Nur-Lese-Nutzer.' },
        { title: 'Dokumentation', text: 'Biete öffentliche Orientierung für Besucher und künftige operative Dokumente.' },
      ],
    },
    audience: {
      eyebrow: 'Für wen',
      title: 'Klare Ansichten für alle, die für Platzbereitschaft verantwortlich sind.',
      cards: [
        { title: 'Admin', text: 'Überblickt Einrichtung, Struktur und operatives Reporting auf der Plattform.' },
        { title: 'Area Manager', text: 'Koordiniert mehrere Spielorte und hält Bereitschaft über Standorte hinweg sichtbar.' },
        { title: 'Venue Manager', text: 'Verwaltet lokale Zeitpläne, Nutzung, Aufgaben und Platzstatus eines Spielorts.' },
        { title: 'Grounds Team', text: 'Arbeitet täglich mit praktischen Aufgaben- und Wartungshistorie-Ansichten.' },
        { title: 'Viewer / Nur-Lese-Nutzer', text: 'Prüft Status, Dokumentation und Reporting ohne operative Daten zu ändern.' },
      ],
    },
    cta: {
      eyebrow: 'Bereit für den Betrieb',
      title: 'Öffne PitchOps für strukturierte Koordination von Fußballplätzen.',
      text: 'Entwickelt für Fußballplatzbetrieb und Bereitschaft mehrerer Spielorte, mit öffentlicher Dokumentation, die in der nächsten Phase wächst.',
      button: 'PitchOps öffnen',
    },
    footer: {
      text: 'Öffentliche Website und Dokumentation für eine praktische Plattform für Fußballplatzbetrieb.',
      openApp: 'PitchOps öffnen',
      documentation: 'Dokumentation',
    },
    docs: {
      title: 'PitchOps Dokumentation',
      description: 'Öffentliche PitchOps-Dokumentation für Fußballplatzbetrieb und Bereitschaft mehrerer Spielorte.',
      overview: 'Überblick',
      gettingStarted: 'Erste Schritte',
      intro: 'Die öffentliche Dokumentation für PitchOps wird in Phase 2 erweitert. Phase 1 stellt Website-Struktur, Routing und erste Dokumentationseinstiege bereit.',
      availableDocuments: 'Verfügbare Dokumente',
      placeholderTitle: 'Erste Schritte',
      placeholderText: 'Dies ist Platzhalterdokumentation für Phase 1.',
      futureText: 'Künftige Dokumentation stellt die öffentlichen PitchOps-Konzepte, typische Workflows und empfohlene Betriebsmuster für Fußballplätze und Multi-Venue-Bereitschaft vor.',
    },
  },
  es: {
    meta: {
      title: 'PitchOps | Operaciones de campos de fútbol',
      description:
        'PitchOps es una plataforma práctica para operaciones de campos de fútbol, historial de mantenimiento, seguimiento de uso, monitoreo de preparación y coordinación de torneos multi-sede.',
    },
    nav: {
      product: 'Producto',
      modules: 'Módulos',
      documentation: 'Documentación',
      contact: 'Contacto',
      login: 'Iniciar sesión',
      language: 'Idioma',
    },
    hero: {
      eyebrow: 'Plataforma de operaciones de fútbol',
      headline: 'PitchOps',
      subheadline: 'Operaciones de campos de fútbol. Estructuradas, visibles y listas.',
      description:
        'PitchOps es una plataforma práctica para operaciones de campos de fútbol, historial de mantenimiento, seguimiento de uso, monitoreo de preparación y coordinación de torneos multi-sede.',
      primaryButton: 'Abrir PitchOps',
      secondaryButton: 'Ver documentación',
      actionsLabel: 'Acciones principales',
      readiness: 'Preparación',
      usage: 'Uso',
      venue: 'Sede A',
      matchday: 'Día de partido',
    },
    product: {
      eyebrow: 'Qué es PitchOps',
      title: 'Una plataforma práctica para operaciones de campos, historial de mantenimiento e informes.',
      text: 'PitchOps ayuda a los equipos a mantener la actividad de los campos de fútbol estructurada y visible en calendarios, tareas, registros de uso, monitoreo de preparación y coordinación multi-sede. Está construido para claridad operativa.',
    },
    problem: {
      eyebrow: 'Por qué existe',
      title: 'La preparación del campo necesita una estructura compartida antes de que llegue la presión.',
      text: 'Los equipos de operaciones de fútbol trabajan con calendarios cambiantes, ventanas climáticas, restricciones de sede y necesidades de informes. PitchOps da a ese trabajo un lugar compartido: planificado, seguido y listo para revisión entre sedes.',
    },
    modules: {
      eyebrow: 'Módulos',
      title: 'Construido alrededor de flujos reales de gestión de campos de torneo.',
      cards: [
        { title: 'Calendario / Gantt', text: 'Planifica trabajos, uso en partidos y preparación de sedes en líneas de tiempo operativas.' },
        { title: 'Tareas', text: 'Sigue el trabajo del campo, responsables y estado de finalización en un flujo compartido.' },
        { title: 'Uso del campo', text: 'Mantén visible el uso en entrenamientos, partidos y ventanas de mantenimiento.' },
        { title: 'Estadísticas', text: 'Convierte registros operativos en informes claros para preparación y revisión.' },
        { title: 'Configuración', text: 'Mantén la configuración del sitio simple, estructurada y fácil de mantener.' },
        { title: 'Roles y acceso', text: 'Soporta distintas vistas operativas para equipos, managers y usuarios de solo lectura.' },
        { title: 'Documentación', text: 'Ofrece orientación pública para visitantes y futuros documentos operativos.' },
      ],
    },
    audience: {
      eyebrow: 'Para quién es',
      title: 'Vistas claras para las personas responsables de la preparación del campo.',
      cards: [
        { title: 'Admin', text: 'Supervisa configuración, estructura e informes operativos en la plataforma.' },
        { title: 'Area Manager', text: 'Coordina varias sedes y mantiene visible la preparación entre ubicaciones.' },
        { title: 'Venue Manager', text: 'Gestiona calendarios locales, uso, tareas y estado del campo en una sede.' },
        { title: 'Grounds Team', text: 'Trabaja con vistas prácticas de tareas e historial de mantenimiento diario.' },
        { title: 'Usuario de solo lectura', text: 'Revisa estado, documentación e informes sin cambiar datos operativos.' },
      ],
    },
    cta: {
      eyebrow: 'Listo para operar',
      title: 'Abre PitchOps para coordinar campos de fútbol de forma estructurada.',
      text: 'Diseñado para operaciones de campos de fútbol y preparación multi-sede, con documentación pública que crecerá en la siguiente fase.',
      button: 'Abrir PitchOps',
    },
    footer: {
      text: 'Sitio público y documentación para una plataforma práctica de operaciones de campos de fútbol.',
      openApp: 'Abrir PitchOps',
      documentation: 'Documentación',
    },
    docs: {
      title: 'Documentación de PitchOps',
      description: 'Documentación pública de PitchOps para operaciones de campos de fútbol y preparación multi-sede.',
      overview: 'Resumen',
      gettingStarted: 'Primeros pasos',
      intro: 'La documentación pública de PitchOps se ampliará en la Fase 2. La Fase 1 proporciona la estructura del sitio, el enrutamiento y los primeros puntos de entrada a la documentación.',
      availableDocuments: 'Documentos disponibles',
      placeholderTitle: 'Primeros pasos',
      placeholderText: 'Esta es documentación provisional para la Fase 1.',
      futureText: 'La documentación futura presentará los conceptos públicos de PitchOps, flujos de trabajo comunes y patrones operativos recomendados para operaciones de campos de fútbol y preparación multi-sede.',
    },
  },
  fr: {
    meta: {
      title: 'PitchOps | Opérations de terrains de football',
      description:
        'PitchOps est une plateforme pratique pour les opérations de terrains de football, l’historique de maintenance, le suivi d’utilisation, le suivi de préparation et la coordination de tournois multi-sites.',
    },
    nav: {
      product: 'Produit',
      modules: 'Modules',
      documentation: 'Documentation',
      contact: 'Contact',
      login: 'Connexion',
      language: 'Langue',
    },
    hero: {
      eyebrow: 'Plateforme d’opérations football',
      headline: 'PitchOps',
      subheadline: 'Opérations de terrains de football. Structurées, visibles et prêtes.',
      description:
        'PitchOps est une plateforme pratique pour les opérations de terrains de football, l’historique de maintenance, le suivi d’utilisation, le suivi de préparation et la coordination de tournois multi-sites.',
      primaryButton: 'Ouvrir PitchOps',
      secondaryButton: 'Voir la documentation',
      actionsLabel: 'Actions principales',
      readiness: 'Préparation',
      usage: 'Utilisation',
      venue: 'Site A',
      matchday: 'Jour de match',
    },
    product: {
      eyebrow: 'Ce qu’est PitchOps',
      title: 'Une plateforme pratique pour les opérations de terrain, l’historique de maintenance et le reporting.',
      text: 'PitchOps aide les équipes à garder l’activité des terrains de football structurée et visible entre calendriers, tâches, données d’utilisation, suivi de préparation et coordination multi-sites. Elle est conçue pour la clarté opérationnelle.',
    },
    problem: {
      eyebrow: 'Pourquoi elle existe',
      title: 'La préparation des terrains a besoin d’une structure partagée avant la pression.',
      text: 'Les équipes d’opérations football travaillent avec des calendriers changeants, des fenêtres météo, des contraintes de sites et des besoins de reporting. PitchOps donne à ce travail un espace commun: planifié, suivi et prêt à être revu entre sites.',
    },
    modules: {
      eyebrow: 'Modules',
      title: 'Conçue autour de vrais workflows de gestion de terrains de tournoi.',
      cards: [
        { title: 'Planning / Gantt', text: 'Planifiez travaux, utilisation match et préparation des sites sur des calendriers opérationnels.' },
        { title: 'Tâches', text: 'Suivez les travaux terrain, les responsabilités et les statuts dans un workflow partagé.' },
        { title: 'Utilisation du terrain', text: 'Gardez visibles les entraînements, matchs et fenêtres de maintenance.' },
        { title: 'Statistiques', text: 'Transformez les enregistrements opérationnels en reporting clair pour la préparation et la revue.' },
        { title: 'Paramètres', text: 'Gardez la configuration du site simple, structurée et facile à maintenir.' },
        { title: 'Rôles et accès', text: 'Prenez en charge différentes vues opérationnelles pour équipes, managers et lecteurs.' },
        { title: 'Documentation', text: 'Fournissez des repères publics pour les visiteurs et les futurs documents opérationnels.' },
      ],
    },
    audience: {
      eyebrow: 'Pour qui',
      title: 'Des vues claires pour les personnes responsables de la préparation des terrains.',
      cards: [
        { title: 'Admin', text: 'Supervise la configuration, la structure et le reporting opérationnel de la plateforme.' },
        { title: 'Area Manager', text: 'Coordonne plusieurs sites et garde la préparation visible entre emplacements.' },
        { title: 'Venue Manager', text: 'Gère les calendriers locaux, l’utilisation, les tâches et le statut terrain d’un site.' },
        { title: 'Grounds Team', text: 'Travaille au quotidien depuis des vues pratiques de tâches et d’historique de maintenance.' },
        { title: 'Utilisateur en lecture seule', text: 'Consulte statut, documentation et reporting sans modifier les données opérationnelles.' },
      ],
    },
    cta: {
      eyebrow: 'Prêt pour les opérations',
      title: 'Ouvrez PitchOps pour coordonner les terrains de football avec structure.',
      text: 'Conçue pour les opérations de terrains de football et la préparation multi-sites, avec une documentation publique qui grandira lors de la prochaine phase.',
      button: 'Ouvrir PitchOps',
    },
    footer: {
      text: 'Site public et documentation pour une plateforme pratique d’opérations de terrains de football.',
      openApp: 'Ouvrir PitchOps',
      documentation: 'Documentation',
    },
    docs: {
      title: 'Documentation PitchOps',
      description: 'Documentation publique PitchOps pour les opérations de terrains de football et la préparation multi-sites.',
      overview: 'Vue d’ensemble',
      gettingStarted: 'Bien démarrer',
      intro: 'La documentation publique de PitchOps sera développée en Phase 2. La Phase 1 fournit la structure du site, le routage et les premiers points d’entrée de documentation.',
      availableDocuments: 'Documents disponibles',
      placeholderTitle: 'Bien démarrer',
      placeholderText: 'Ceci est une documentation provisoire pour la Phase 1.',
      futureText: 'La future documentation présentera les concepts publics de PitchOps, les workflows courants et les modèles opérationnels recommandés pour les opérations de terrains de football et la préparation multi-sites.',
    },
  },
  pt: {
    meta: {
      title: 'PitchOps | Operações de campos de futebol',
      description:
        'PitchOps é uma plataforma prática para operações de campos de futebol, histórico de manutenção, acompanhamento de uso, monitoramento de prontidão e coordenação de torneios multi-sede.',
    },
    nav: {
      product: 'Produto',
      modules: 'Módulos',
      documentation: 'Documentação',
      contact: 'Contato',
      login: 'Login',
      language: 'Idioma',
    },
    hero: {
      eyebrow: 'Plataforma de operações de futebol',
      headline: 'PitchOps',
      subheadline: 'Operações de campos de futebol. Estruturadas, visíveis e prontas.',
      description:
        'PitchOps é uma plataforma prática para operações de campos de futebol, histórico de manutenção, acompanhamento de uso, monitoramento de prontidão e coordenação de torneios multi-sede.',
      primaryButton: 'Abrir PitchOps',
      secondaryButton: 'Ver documentação',
      actionsLabel: 'Ações principais',
      readiness: 'Prontidão',
      usage: 'Uso',
      venue: 'Sede A',
      matchday: 'Dia de jogo',
    },
    product: {
      eyebrow: 'O que é PitchOps',
      title: 'Uma plataforma prática para operações de campo, histórico de manutenção e relatórios.',
      text: 'PitchOps ajuda equipes a manter a atividade dos campos de futebol estruturada e visível entre calendários, tarefas, registros de uso, monitoramento de prontidão e coordenação multi-sede. Foi criado para clareza operacional.',
    },
    problem: {
      eyebrow: 'Por que existe',
      title: 'A prontidão do campo precisa de estrutura compartilhada antes da pressão.',
      text: 'Equipes de operações de futebol trabalham com calendários variáveis, janelas climáticas, restrições de sede e necessidades de relatório. PitchOps dá a esse trabalho um lugar compartilhado: planejado, acompanhado e pronto para revisão entre sedes.',
    },
    modules: {
      eyebrow: 'Módulos',
      title: 'Criado em torno de fluxos reais de gestão de campos de torneio.',
      cards: [
        { title: 'Calendário / Gantt', text: 'Planeje trabalhos, uso em jogos e preparação de sedes em linhas do tempo operacionais.' },
        { title: 'Tarefas', text: 'Acompanhe trabalhos de campo, responsáveis e status de conclusão em um fluxo compartilhado.' },
        { title: 'Uso do campo', text: 'Mantenha visíveis treinos, jogos e janelas de manutenção.' },
        { title: 'Estatísticas', text: 'Transforme registros operacionais em relatórios claros de prontidão e revisão.' },
        { title: 'Configurações', text: 'Mantenha a configuração do site simples, estruturada e fácil de manter.' },
        { title: 'Funções e acesso', text: 'Apoie diferentes visões operacionais para equipes, gestores e usuários somente leitura.' },
        { title: 'Documentação', text: 'Forneça orientação pública para visitantes e futuros documentos operacionais.' },
      ],
    },
    audience: {
      eyebrow: 'Para quem é',
      title: 'Visões claras para as pessoas responsáveis pela prontidão dos campos.',
      cards: [
        { title: 'Admin', text: 'Supervisiona configuração, estrutura e relatórios operacionais na plataforma.' },
        { title: 'Area Manager', text: 'Coordena várias sedes e mantém a prontidão visível entre locais.' },
        { title: 'Venue Manager', text: 'Gerencia calendários locais, uso, tarefas e status do campo de uma sede.' },
        { title: 'Grounds Team', text: 'Trabalha no dia a dia com visões práticas de tarefas e histórico de manutenção.' },
        { title: 'Usuário somente leitura', text: 'Revisa status, documentação e relatórios sem alterar dados operacionais.' },
      ],
    },
    cta: {
      eyebrow: 'Pronto para operações',
      title: 'Abra PitchOps para coordenação estruturada de campos de futebol.',
      text: 'Projetado para operações de campos de futebol e prontidão multi-sede, com documentação pública crescendo na próxima fase.',
      button: 'Abrir PitchOps',
    },
    footer: {
      text: 'Site público e documentação para uma plataforma prática de operações de campos de futebol.',
      openApp: 'Abrir PitchOps',
      documentation: 'Documentação',
    },
    docs: {
      title: 'Documentação do PitchOps',
      description: 'Documentação pública do PitchOps para operações de campos de futebol e prontidão multi-sede.',
      overview: 'Visão geral',
      gettingStarted: 'Primeiros passos',
      intro: 'A documentação pública do PitchOps será ampliada na Fase 2. A Fase 1 fornece a estrutura do site, o roteamento e os pontos iniciais de documentação.',
      availableDocuments: 'Documentos disponíveis',
      placeholderTitle: 'Primeiros passos',
      placeholderText: 'Esta é uma documentação provisória para a Fase 1.',
      futureText: 'A documentação futura apresentará os conceitos públicos do PitchOps, fluxos de trabalho comuns e padrões operacionais recomendados para operações de campos de futebol e prontidão multi-sede.',
    },
  },
};
