/** Editorial copy for the site — kept in one place, in the collective's voice. */

export const SITE = {
  name: 'MakerCommons',
  tagline:
    'Small tools for real problems — free, forever, built in the open.',
  description:
    'A collective of makers using modern tools, including AI, to solve real everyday problems for free and open source.',
  org: 'https://github.com/MakerCommons',
  manifesto: 'https://github.com/MakerCommons/.github/blob/main/MANIFESTO.md',
  contributing:
    'https://github.com/MakerCommons/.github/blob/main/CONTRIBUTING.md',
  newIssue: 'https://github.com/MakerCommons/.github/issues/new/choose',
  license: 'AGPL-3.0',
  est: '2026',
};

/** The 5-step loop — a real sequence, so it's numbered. */
export const STEPS = [
  {
    n: '01',
    title: 'Someone brings a problem',
    body: 'A real, small, concrete annoyance shared by many people — not a roadmap item, a lived one.',
  },
  {
    n: '02',
    title: 'The collective picks it up',
    body: 'We scope it small. Something useful that can ship fast beats a grand plan that never does.',
  },
  {
    n: '03',
    title: 'We build it in the open',
    body: 'Using whatever gets it done well, including AI. You own what you ship: it has to actually work.',
  },
  {
    n: '04',
    title: 'We give it away',
    body: 'Released under a copyleft license, so any improvement or hosted version comes back to the commons.',
  },
  {
    n: '05',
    title: 'The next person improves it',
    body: 'Nobody gets to quietly close what the community built. The commons grows with every hand.',
  },
];

/** Core beliefs, pulled from the manifesto and trimmed to the essentials. */
export const PRINCIPLES = [
  {
    tag: 'Usefulness',
    title: 'Useful beats impressive',
    body: 'A tiny tool that saves one person ten minutes a week is worth more than a slick landing page selling a promise.',
  },
  {
    tag: 'Honesty',
    title: 'AI is a tool, not a paywall',
    body: 'We use AI to build more useful things faster and give them away — never as a smokescreen for rent.',
  },
  {
    tag: 'The commons',
    title: 'Free and open, or it doesn’t count',
    body: 'Everything is copyleft. Improvements come back to everyone. Nobody quietly closes what the community built.',
  },
  {
    tag: 'Craft',
    title: 'Greedy for the craft, not the invoice',
    body: '“Free” is no excuse for junk. We build things we’d be proud to use ourselves, maintained and documented.',
  },
];

/** The founder note — first person, the same story as the org profile. */
export const STORY = {
  eyebrow: 'Where this comes from',
  paragraphs: [
    'I didn’t arrive here from a manifesto. I arrived here from projects.',
    'Over years of building software — my own things, client work, alongside other developers — I kept noticing the same pattern. Too many of the people around me were hungrier for money than for craft. Quicker to ship something just-good-enough to charge for than to understand the problem or care whether it worked.',
    'The tools kept getting better. AI made it possible to build in a weekend what used to take a team a quarter. And instead of that abundance reaching the people with the problems, I watched it get wrapped in a subscription and sold back to them.',
    'So this is the opposite bet. Be greedy for the craft, not the invoice. Point the same powerful tools at real everyday annoyances, and give the results away.',
  ],
  signoff: '— the founder',
};
