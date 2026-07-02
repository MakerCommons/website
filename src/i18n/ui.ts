/**
 * Translation dictionaries for the site.
 * Add a locale by adding a key to LOCALES and a matching entry in `t`.
 * Count-dependent strings are functions so pluralization stays per-language.
 */

export const LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABEL: Record<Locale, string> = { en: 'EN', fr: 'FR' };
export const LOCALE_NAME: Record<Locale, string> = { en: 'English', fr: 'Français' };

export const t = {
  en: {
    meta: {
      tagline: 'Small tools for real problems — free, forever, built in the open.',
      description:
        'A collective of makers using modern tools, including AI, to solve real everyday problems for free and open source.',
      projectsTitle: 'Projects',
      teamTitle: 'Makers',
    },
    nav: {
      how: 'How it works',
      projects: 'Projects',
      makers: 'Makers',
      manifesto: 'Manifesto',
      bring: 'Bring a problem',
      toggleTheme: 'Toggle dark mode',
      language: 'Language',
    },
    hero: {
      eyebrow: 'A makers’ collective · est. 2026',
      h1a: 'Small tools.',
      h1b: 'Real problems.',
      h1pre: 'Given away ',
      h1riso: 'free',
      h1post: '.',
      sub: 'MakerCommons is a collective of makers using modern tools — including AI — to solve the everyday problems ordinary people actually have, and release every solution open source. No paywalls. No rent. Just useful things, kept useful.',
      ctaBring: 'Bring a problem →',
      ctaManifesto: 'Read the manifesto',
      lblStatus: 'status',
      lblTools: 'tools',
      lblMakers: 'makers',
      lblLicense: 'license',
      status: 'commons founded',
      tools: (n: number) =>
        n === 0 ? '0 tools shipped — bring the first problem' : `${n} tool${n > 1 ? 's' : ''} shipped`,
      makers: (n: number) => (n === 0 ? 'open to new makers' : `${n} maker${n > 1 ? 's' : ''}`),
    },
    story: {
      eyebrow: 'Where this comes from',
      headingA: 'Be greedy for the craft,',
      headingB: 'not the invoice.',
      paragraphs: [
        'I didn’t arrive here from a manifesto. I arrived here from projects.',
        'Over years of building software — my own things, client work, alongside other developers — I kept noticing the same pattern. Too many of the people around me were hungrier for money than for craft. Quicker to ship something just-good-enough to charge for than to understand the problem or care whether it worked.',
        'The tools kept getting better. AI made it possible to build in a weekend what used to take a team a quarter. And instead of that abundance reaching the people with the problems, I watched it get wrapped in a subscription and sold back to them.',
        'So this is the opposite bet. Be greedy for the craft, not the invoice. Point the same powerful tools at real everyday annoyances, and give the results away.',
      ],
      signoff: '— the founder',
    },
    how: {
      eyebrow: 'The loop',
      title: 'How the commons works',
      sub: 'One repeatable loop, run in the open. That’s the whole thing.',
      steps: [
        { n: '01', title: 'Someone brings a problem', body: 'A real, small, concrete annoyance shared by many people — not a roadmap item, a lived one.' },
        { n: '02', title: 'The collective picks it up', body: 'We scope it small. Something useful that can ship fast beats a grand plan that never does.' },
        { n: '03', title: 'We build it in the open', body: 'Using whatever gets it done well, including AI. You own what you ship: it has to actually work.' },
        { n: '04', title: 'We give it away', body: 'Released under a copyleft license, so any improvement or hosted version comes back to the commons.' },
        { n: '05', title: 'The next person improves it', body: 'Nobody gets to quietly close what the community built. The commons grows with every hand.' },
      ],
    },
    projects: {
      eyebrow: 'The board',
      title: 'Tools on the pegboard',
      sub: 'Every tool the collective has hung up — free, open, and built for a real problem.',
      all: (n: number) => `All ${n} projects →`,
      emptyTitle: 'The board is empty — for now.',
      emptyBody:
        'Empty pegs are just problems waiting for a tool. Bring the first one and we’ll build the first solution, in the open, for free.',
      emptyCta: 'Hang the first tool →',
      pageTitle: 'Projects',
      pageSub:
        'Every tool the collective has hung on the pegboard. Free, open source under AGPL-3.0, and built for a real problem someone actually had.',
      pageEmptyTitle: 'Nothing on the board yet.',
      pageEmptyBody:
        'The commons is brand new. The first tool starts with a real problem — bring one and we’ll build it in the open.',
      pageEmptyCta: 'Bring the first problem →',
      cardNoDesc: 'No description yet — open the repo to see what it does.',
      tryIt: 'Try it →',
      code: 'Code →',
      repository: 'Repository',
    },
    principles: {
      eyebrow: 'What we believe',
      title: 'Four non-negotiables',
      items: [
        { tag: 'Usefulness', title: 'Useful beats impressive', body: 'A tiny tool that saves one person ten minutes a week is worth more than a slick landing page selling a promise.' },
        { tag: 'Honesty', title: 'AI is a tool, not a paywall', body: 'We use AI to build more useful things faster and give them away — never as a smokescreen for rent.' },
        { tag: 'The commons', title: 'Free and open, or it doesn’t count', body: 'Everything is copyleft. Improvements come back to everyone. Nobody quietly closes what the community built.' },
        { tag: 'Craft', title: 'Greedy for the craft, not the invoice', body: '“Free” is no excuse for junk. We build things we’d be proud to use ourselves, maintained and documented.' },
      ],
    },
    makers: {
      eyebrow: 'The makers',
      title: 'People building the commons',
      sub: 'No gatekeeping. Anyone who brings a problem or helps solve one belongs here.',
      all: (n: number) => `All ${n} makers →`,
      emptyTitle: 'Be one of the first.',
      emptyBody:
        'The collective is brand new. Bring a problem, build a tool, or help out — and your name goes on the board.',
      emptyCta: 'How to join →',
      pageTitle: 'The makers',
      pageSub:
        'The people who show up and build. No degree, startup, or permission required — just a real problem or the will to help solve one.',
      pageEmptyTitle: 'The roster is just starting.',
      pageEmptyBody:
        'Makers appear here once they join the GitHub org and make their membership public. Want to be one of the first?',
      pageEmptyCta: 'How to join →',
    },
    cta: {
      titleA: 'Got a small problem the world',
      titleB: 'keeps overcharging you for?',
      sub: 'Tell us about it. If it’s real and shared, the commons will build the fix — free, open, and yours to keep.',
      ctaBring: 'Bring a problem →',
      ctaExplore: 'Explore the org on GitHub',
    },
    footer: {
      collective: 'The collective',
      takePart: 'Take part',
      manifesto: 'Manifesto',
      contributing: 'Contributing',
      org: 'GitHub org',
      bring: 'Bring a problem',
      propose: 'Propose a tool',
      browse: 'Browse projects',
      built: 'built by the commons',
      rights: 'Free & open under AGPL-3.0.',
      motto: 'Point powerful tools at real problems. Give the results away.',
    },
  },

  fr: {
    meta: {
      tagline: 'De petits outils pour de vrais problèmes — gratuits, pour toujours, en open source.',
      description:
        'Un collectif de makers qui utilisent les outils modernes, dont l’IA, pour résoudre gratuitement les vrais problèmes du quotidien, en open source.',
      projectsTitle: 'Projets',
      teamTitle: 'Makers',
    },
    nav: {
      how: 'Comment ça marche',
      projects: 'Projets',
      makers: 'Makers',
      manifesto: 'Manifeste',
      bring: 'Proposer un problème',
      toggleTheme: 'Basculer le mode sombre',
      language: 'Langue',
    },
    hero: {
      eyebrow: 'Un collectif de makers · depuis 2026',
      h1a: 'Des outils simples.',
      h1b: 'De vrais problèmes.',
      h1pre: 'Donnés ',
      h1riso: 'gratuitement',
      h1post: '.',
      sub: 'MakerCommons est un collectif de makers qui utilisent les outils modernes — dont l’IA — pour résoudre les problèmes que les gens ont vraiment au quotidien, et libèrent chaque solution en open source. Aucun paywall. Aucune rente. Juste des choses utiles, qui le restent.',
      ctaBring: 'Proposer un problème →',
      ctaManifesto: 'Lire le manifeste',
      lblStatus: 'statut',
      lblTools: 'outils',
      lblMakers: 'makers',
      lblLicense: 'licence',
      status: 'commun fondé',
      tools: (n: number) =>
        n === 0 ? '0 outil publié — proposez le premier problème' : `${n} outil${n > 1 ? 's' : ''} publié${n > 1 ? 's' : ''}`,
      makers: (n: number) => (n === 0 ? 'ouvert aux nouveaux makers' : `${n} maker${n > 1 ? 's' : ''}`),
    },
    story: {
      eyebrow: 'D’où ça vient',
      headingA: 'Avide du travail bien fait,',
      headingB: 'pas de la facture.',
      paragraphs: [
        'Je ne suis pas arrivé ici par un manifeste. J’y suis arrivé par mes projets.',
        'Au fil des années à construire des logiciels — mes propres projets, des missions clients, aux côtés d’autres développeurs — j’ai remarqué le même schéma. Trop de gens autour de moi étaient plus avides d’argent que de savoir-faire. Plus pressés de livrer un truc juste-assez-bon pour le facturer que de comprendre le problème ou de vérifier qu’il fonctionne.',
        'Les outils, eux, n’ont cessé de s’améliorer. L’IA permet de construire en un week-end ce qui demandait un trimestre à une équipe. Et au lieu que cette abondance atteigne les gens qui ont les problèmes, je l’ai vue emballée dans un abonnement et revendue à ces mêmes gens.',
        'Alors voici le pari inverse. Être avide du travail bien fait, pas de la facture. Pointer ces mêmes outils puissants sur les vraies contrariétés du quotidien, et en donner les résultats.',
      ],
      signoff: '— le fondateur',
    },
    how: {
      eyebrow: 'La boucle',
      title: 'Comment fonctionne le commun',
      sub: 'Une boucle répétable, menée à ciel ouvert. C’est tout.',
      steps: [
        { n: '01', title: 'Quelqu’un apporte un problème', body: 'Une contrariété réelle, petite et concrète, partagée par beaucoup — pas une ligne de roadmap, du vécu.' },
        { n: '02', title: 'Le collectif s’en empare', body: 'On le cadre petit. Un truc utile qui sort vite vaut mieux qu’un grand plan qui ne sort jamais.' },
        { n: '03', title: 'On le construit à ciel ouvert', body: 'Avec ce qui fait le job, IA comprise. Tu assumes ce que tu livres : ça doit vraiment marcher.' },
        { n: '04', title: 'On le donne', body: 'Publié sous licence copyleft, pour que toute amélioration ou version hébergée revienne au commun.' },
        { n: '05', title: 'La personne suivante l’améliore', body: 'Personne ne referme en douce ce que la communauté a bâti. Le commun grandit à chaque main.' },
      ],
    },
    projects: {
      eyebrow: 'Le tableau',
      title: 'Les outils sur le pegboard',
      sub: 'Tous les outils que le collectif a accrochés — gratuits, ouverts, et faits pour un vrai problème.',
      all: (n: number) => `Voir les ${n} projets →`,
      emptyTitle: 'Le tableau est vide — pour l’instant.',
      emptyBody:
        'Les trous vides ne sont que des problèmes qui attendent leur outil. Apportez le premier et on construira la première solution, à ciel ouvert et gratuitement.',
      emptyCta: 'Accrocher le premier outil →',
      pageTitle: 'Projets',
      pageSub:
        'Tous les outils que le collectif a accrochés au pegboard. Gratuits, open source sous AGPL-3.0, et faits pour un vrai problème que quelqu’un avait vraiment.',
      pageEmptyTitle: 'Rien sur le tableau pour l’instant.',
      pageEmptyBody:
        'Le commun vient de naître. Le premier outil part d’un vrai problème — apportez-en un et on le construira à ciel ouvert.',
      pageEmptyCta: 'Apporter le premier problème →',
      cardNoDesc: 'Pas encore de description — ouvrez le dépôt pour voir ce que ça fait.',
      tryIt: 'Essayer →',
      code: 'Code →',
      repository: 'Dépôt',
    },
    principles: {
      eyebrow: 'Ce en quoi on croit',
      title: 'Quatre non-négociables',
      items: [
        { tag: 'Utilité', title: 'Utile plutôt qu’impressionnant', body: 'Un petit outil qui fait gagner dix minutes par semaine à une personne vaut mieux qu’une belle page qui vend une promesse.' },
        { tag: 'Honnêteté', title: 'L’IA est un outil, pas un paywall', body: 'On utilise l’IA pour construire plus de choses utiles, plus vite, et les donner — jamais comme paravent d’une rente.' },
        { tag: 'Le commun', title: 'Gratuit et ouvert, ou ça ne compte pas', body: 'Tout est copyleft. Les améliorations reviennent à tout le monde. Personne ne referme en douce ce que la communauté a bâti.' },
        { tag: 'Savoir-faire', title: 'Avide du travail, pas de la facture', body: '« Gratuit » n’excuse pas la camelote. On construit des choses qu’on serait fiers d’utiliser, maintenues et documentées.' },
      ],
    },
    makers: {
      eyebrow: 'Les makers',
      title: 'Celles et ceux qui bâtissent le commun',
      sub: 'Aucun gatekeeping. Quiconque apporte un problème ou aide à le résoudre a sa place ici.',
      all: (n: number) => `Voir les ${n} makers →`,
      emptyTitle: 'Soyez parmi les premiers.',
      emptyBody:
        'Le collectif vient de naître. Apportez un problème, construisez un outil, ou donnez un coup de main — et votre nom rejoint le tableau.',
      emptyCta: 'Comment rejoindre →',
      pageTitle: 'Les makers',
      pageSub:
        'Celles et ceux qui viennent et construisent. Ni diplôme, ni startup, ni permission — juste un vrai problème ou l’envie d’aider à le résoudre.',
      pageEmptyTitle: 'La liste ne fait que commencer.',
      pageEmptyBody:
        'Les makers apparaissent ici une fois qu’ils rejoignent l’org GitHub et rendent leur adhésion publique. Envie d’être parmi les premiers ?',
      pageEmptyCta: 'Comment rejoindre →',
    },
    cta: {
      titleA: 'Un petit problème pour lequel',
      titleB: 'on vous fait payer trop cher ?',
      sub: 'Parlez-nous-en. S’il est réel et partagé, le commun construira la solution — gratuite, ouverte, et à vous pour de bon.',
      ctaBring: 'Proposer un problème →',
      ctaExplore: 'Explorer l’org sur GitHub',
    },
    footer: {
      collective: 'Le collectif',
      takePart: 'Participer',
      manifesto: 'Manifeste',
      contributing: 'Contribuer',
      org: 'Org GitHub',
      bring: 'Proposer un problème',
      propose: 'Proposer un outil',
      browse: 'Parcourir les projets',
      built: 'bâti par le commun',
      rights: 'Gratuit & ouvert sous AGPL-3.0.',
      motto: 'Pointez des outils puissants sur de vrais problèmes. Donnez-en les résultats.',
    },
  },
} as const;

export type Dict = (typeof t)['en'];
