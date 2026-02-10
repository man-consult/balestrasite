// src/i18n/translations.ts

export const defaultLang = 'en';
export const languages = {
  en: 'English (US)',
  'en-gb': 'English (UK)',
};

type TranslationKey =
  | 'site.title'
  | 'site.description'
  | 'nav.about'
  | 'nav.insights'
  | 'nav.contact'
  | 'home.subtitle'
  | 'home.hero'
  | 'home.intro'
  | 'home.description'
  | 'home.cta.primary'
  | 'home.cta.secondary'
  | 'home.story.title'
  | 'home.story.description'
  | 'home.value.intelligence.title'
  | 'home.value.intelligence.desc'
  | 'home.value.patterns.title'
  | 'home.value.patterns.desc'
  | 'home.value.implementation.title'
  | 'home.value.implementation.desc'
  | 'home.value.progress.title'
  | 'home.value.progress.desc'
  | 'home.challenge.title'
  | 'home.challenge.dynamic.title'
  | 'home.challenge.dynamic.desc'
  | 'home.challenge.insights.title'
  | 'home.challenge.insights.desc'
  | 'home.challenge.sustained.title'
  | 'home.challenge.sustained.desc'
  | 'home.challenge.approach'
  | 'home.challenge.approach.desc'
  | 'home.challenge.result'
  | 'home.final.title'
  | 'home.final.desc'
  | 'about.hero.title'
  | 'about.hero.description'
  | 'about.opportunity.title'
  | 'about.opportunity.p1'
  | 'about.opportunity.p2'
  | 'about.pillar.precision.title'
  | 'about.pillar.precision.desc'
  | 'about.pillar.decisiveness.title'
  | 'about.pillar.decisiveness.desc'
  | 'about.pillar.transformation.title'
  | 'about.pillar.transformation.desc'
  | 'about.founder.title'
  | 'about.founder.name'
  | 'about.founder.role'
  | 'about.founder.bio'
  | 'about.vision.title'
  | 'about.vision.intro'
  | 'about.vision.procurevalue.title'
  | 'about.vision.procurevalue.desc'
  | 'about.vision.coming.title'
  | 'about.vision.coming.desc'
  | 'contact.hero.title'
  | 'contact.hero.description'
  | 'contact.email.title'
  | 'contact.linkedin.title'
  | 'contact.teams.title'
  | 'contact.location.title'
  | 'contact.location.description'
  | 'contact.location.city'
  | 'footer.copyright'
  | 'footer.terms'
  | 'footer.privacy';

type TranslationDict = Record<TranslationKey, string>;

export const translations: Record<'en' | 'en-gb', TranslationDict> = {
  en: {
    'site.title': 'Balestra Group',
    'site.description': 'AI-powered business insights that provides continuous monitoring, pattern recognition, and implementation guidance.',
    'nav.about': 'About',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'home.subtitle': 'Procurement Transformation',
    'home.hero': 'Precision-targeted business insights that accelerate transformation.',
    'home.intro': 'Named after the crossbow (medieval precision weapon) and the fencing move (decisive forward leap), {balestra} brings both principles to procurement transformation.',
    'home.description': 'AI-powered continuous monitoring that identifies opportunities and guides implementation\u2014 making sophisticated business insights continuously accessible to all organizations.',
    'home.cta.primary': 'Get in Touch',
    'home.cta.secondary': 'Learn More',
    'home.story.title': 'The Balestra Story',
    'home.story.description': 'The name honors both a family heritage and a philosophy: precision matters, and decisive action creates change. Like the crossbow that democratized medieval warfare and the fencing move that changes momentum, we\'re making sophisticated business insights accessible.',
    'home.value.intelligence.title': 'Continuous Insights',
    'home.value.intelligence.desc': 'AI-powered monitoring provides ongoing visibility into procurement performance and stakeholder sentiment.',
    'home.value.patterns.title': 'Pattern Recognition',
    'home.value.patterns.desc': 'Sophisticated analysis identifies dysfunction patterns and improvement opportunities across your ecosystem.',
    'home.value.implementation.title': 'Guided Implementation',
    'home.value.implementation.desc': 'Structured methodology helps you prioritize and execute high-impact transformation initiatives.',
    'home.value.progress.title': 'Sustained Progress',
    'home.value.progress.desc': 'Ongoing strategic alignment ensures momentum doesn\'t stall after initial improvements.',
    'home.challenge.title': 'The Procurement Insights Challenge',
    'home.challenge.dynamic.title': 'Dynamic Environments',
    'home.challenge.dynamic.desc': 'Procurement performance shifts constantly as stakeholders change, suppliers evolve, and market conditions fluctuate. Point-in-time assessments capture a moment, but miss the patterns.',
    'home.challenge.insights.title': 'Hidden Insights',
    'home.challenge.insights.desc': 'The most valuable business insights often live in unstructured feedback\u2014stakeholder comments, email sentiment, supplier interactions. Traditional analysis tools miss these signals.',
    'home.challenge.sustained.title': 'Sustained Improvement',
    'home.challenge.sustained.desc': 'Transformation requires ongoing attention and adjustment. Without continuous insights, organizations struggle to maintain momentum after initial improvements.',
    'home.challenge.approach': 'Our Approach:',
    'home.challenge.approach.desc': 'Continuous AI-powered monitoring combined with structured implementation guidance.',
    'home.challenge.result': 'Balestra provides the ongoing insights and methodological support that turns procurement from a transactional function into a strategic asset.',
    'home.final.title': 'Let\'s Explore Possibilities',
    'home.final.desc': 'Interested in how continuous monitoring and AI-powered insights could support your procurement goals? Let\'s have a conversation about your specific challenges.',
    'about.hero.title': 'The {balestra} Story',
    'about.hero.description': 'After 25 years in procurement across diverse industries, I saw an opportunity: use AI to make sophisticated business insights continuously accessible to organizations.',
    'about.opportunity.title': 'The Opportunity',
    'about.opportunity.p1': 'Procurement has evolved dramatically\u2014from transactional purchasing to strategic value creation. But the tools available to organizations haven\'t kept pace.',
    'about.opportunity.p2': 'Enterprise-level insight platforms are too expensive. Point-in-time assessments miss the ongoing patterns. Meanwhile, AI has made sophisticated analysis accessible and affordable.',
    'about.pillar.precision.title': 'Medieval Precision',
    'about.pillar.precision.desc': 'The crossbow (balestra) revolutionized warfare by delivering precision and power without years of training. It was the ultimate force multiplier.',
    'about.pillar.decisiveness.title': 'Modern Decisiveness',
    'about.pillar.decisiveness.desc': 'In fencing, the balestra is the explosive forward leap that changes tempo, disrupts rhythm, and creates the opening for a winning strike.',
    'about.pillar.transformation.title': 'AI-Powered Transformation',
    'about.pillar.transformation.desc': 'Balestra brings both meanings to organizational change: precision-targeted interventions executed with explosive, decisive momentum.',
    'about.founder.title': 'Founder Background',
    'about.founder.name': 'Brian Mangano',
    'about.founder.role': 'Founder & CEO',
    'about.founder.bio': 'With extensive experience across automotive manufacturing, telecommunications, utilities, infrastructure, technology, and government sectors, I\'ve developed expertise in procurement transformation and a vision for how AI can democratize sophisticated business insights.',
    'about.vision.title': 'The Vision',
    'about.vision.intro': '{balestra} is building a suite of AI-powered platforms that make sophisticated business insights accessible through continuous monitoring and analysis.',
    'about.vision.procurevalue.title': 'ProcureValue',
    'about.vision.procurevalue.desc': 'Our flagship product: continuous procurement insights that identify dysfunction patterns and deliver targeted recommendations\u2014making expert-level analysis accessible.',
    'about.vision.coming.title': 'Coming Soon',
    'about.vision.coming.desc': 'We will be bringing the same precision-targeted approach to other business disciplines.',
    'contact.hero.title': 'Let\'s {connect}',
    'contact.hero.description': 'Interested in how continuous monitoring and AI-powered insights could support your procurement goals? Let\'s have a conversation about your specific challenges.',
    'contact.email.title': 'Email',
    'contact.linkedin.title': 'LinkedIn',
    'contact.teams.title': 'Microsoft Teams',
    'contact.location.title': 'Based in New Zealand',
    'contact.location.description': 'Operating primarily remotely with digital collaboration tools. Available for critical on-site workshops, negotiations, and stakeholder briefings across Australia and New Zealand as required.',
    'contact.location.city': 'Cambridge, New Zealand',
    'footer.copyright': '\u00a9 {year} Balestra Group Limited.',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
  },

  'en-gb': {
    'site.title': 'Balestra Group',
    'site.description': 'AI-powered business insights that provides continuous monitoring, pattern recognition, and implementation guidance continously accessible for all organisations.',
    'nav.about': 'About',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'home.subtitle': 'Procurement Transformation',
    'home.hero': 'Precision-targeted business insights that accelerate transformation.',
    'home.intro': 'Named after the crossbow (medieval precision weapon) and the fencing move (decisive forward leap), {balestra} brings both principles to procurement transformation.',
    'home.description': 'AI-powered continuous monitoring that identifies opportunities and guides implementation\u2014 making sophisticated business insights continuously accessible to organisations.',
    'home.cta.primary': 'Get in Touch',
    'home.cta.secondary': 'Learn More',
    'home.story.title': 'The Balestra Story',
    'home.story.description': 'The name honours both a family heritage and a philosophy: precision matters, and decisive action creates change. Like the crossbow that democratised medieval warfare and the fencing move that changes momentum, we\'re making sophisticated business insights accessible.',
    'home.value.intelligence.title': 'Continuous Insights',
    'home.value.intelligence.desc': 'AI-powered monitoring provides ongoing visibility into procurement performance and stakeholder sentiment.',
    'home.value.patterns.title': 'Pattern Recognition',
    'home.value.patterns.desc': 'Sophisticated analysis identifies dysfunction patterns and improvement opportunities across your ecosystem.',
    'home.value.implementation.title': 'Guided Implementation',
    'home.value.implementation.desc': 'Structured methodology helps you prioritise and execute high-impact transformation initiatives.',
    'home.value.progress.title': 'Sustained Progress',
    'home.value.progress.desc': 'Ongoing strategic alignment ensures momentum doesn\'t stall after initial improvements.',
    'home.challenge.title': 'The Procurement Insights Challenge',
    'home.challenge.dynamic.title': 'Dynamic Environments',
    'home.challenge.dynamic.desc': 'Procurement performance shifts constantly as stakeholders change, suppliers evolve, and market conditions fluctuate. Point-in-time assessments capture a moment, but miss the patterns.',
    'home.challenge.insights.title': 'Hidden Insights',
    'home.challenge.insights.desc': 'The most valuable business insights often live in unstructured feedback\u2014stakeholder comments, email sentiment, supplier interactions. Traditional analysis tools miss these signals.',
    'home.challenge.sustained.title': 'Sustained Improvement',
    'home.challenge.sustained.desc': 'Transformation requires ongoing attention and adjustment. Without continuous insights, organisations struggle to maintain momentum after initial improvements.',
    'home.challenge.approach': 'Our Approach:',
    'home.challenge.approach.desc': 'Continuous AI-powered monitoring combined with structured implementation guidance.',
    'home.challenge.result': 'Balestra provides the ongoing insights and methodological support that turns procurement from a transactional function into a strategic asset.',
    'home.final.title': 'Let\'s Explore Possibilities',
    'home.final.desc': 'Interested in how continuous monitoring and AI-powered insights could support your procurement goals? Let\'s have a conversation about your specific challenges.',
    'about.hero.title': 'The {balestra} Story',
    'about.hero.description': 'After 25 years in procurement across diverse industries, I saw an opportunity: use AI to make sophisticated business insights continuously accessible to  organisations.',
    'about.opportunity.title': 'The Opportunity',
    'about.opportunity.p1': 'Procurement has evolved dramatically\u2014from transactional purchasing to strategic value creation. But the tools available to organisations haven\'t kept pace.',
    'about.opportunity.p2': 'Enterprise-level insight platforms are too expensive. Point-in-time assessments miss the ongoing patterns. Meanwhile, AI has made sophisticated analysis accessible and affordable.',
    'about.pillar.precision.title': 'Medieval Precision',
    'about.pillar.precision.desc': 'The crossbow (balestra) revolutionised warfare by delivering precision and power without years of training. It was the ultimate force multiplier.',
    'about.pillar.decisiveness.title': 'Modern Decisiveness',
    'about.pillar.decisiveness.desc': 'In fencing, the balestra is the explosive forward leap that changes tempo, disrupts rhythm, and creates the opening for a winning strike.',
    'about.pillar.transformation.title': 'AI-Powered Transformation',
    'about.pillar.transformation.desc': 'Balestra brings both meanings to organisational change: precision-targeted interventions executed with explosive, decisive momentum.',
    'about.founder.title': 'Founder Background',
    'about.founder.name': 'Brian Mangano',
    'about.founder.role': 'Founder & CEO',
    'about.founder.bio': 'With extensive experience across automotive manufacturing, telecommunications, utilities, infrastructure, technology, and government sectors, I\'ve developed expertise in procurement transformation and a vision for how AI can democratise sophisticated business insights.',
    'about.vision.title': 'The Vision',
    'about.vision.intro': '{balestra} is building a suite of AI-powered platforms that make sophisticated business insights accessible through continuous monitoring and analysis.',
    'about.vision.procurevalue.title': 'ProcureValue',
    'about.vision.procurevalue.desc': 'Our flagship product: continuous procurement insights that identify dysfunction patterns and deliver targeted recommendations\u2014making expert-level analysis accessible.',
    'about.vision.coming.title': 'Coming Soon',
    'about.vision.coming.desc': 'We will be bringing the same precision-targeted approach to other business disciplines.',
    'contact.hero.title': 'Let\'s {connect}',
    'contact.hero.description': 'Interested in how continuous monitoring and AI-powered insights could support your procurement goals? Let\'s have a conversation about your specific challenges.',
    'contact.email.title': 'Email',
    'contact.linkedin.title': 'LinkedIn',
    'contact.teams.title': 'Microsoft Teams',
    'contact.location.title': 'Based in New Zealand',
    'contact.location.description': 'Operating primarily remotely with digital collaboration tools. Available for critical on-site workshops, negotiations, and stakeholder briefings across Australia and New Zealand as required.',
    'contact.location.city': 'Cambridge, New Zealand',
    'footer.copyright': '\u00a9 {year} Balestra Group Limited.',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy',
  },
};

export function getTranslations(lang: 'en' | 'en-gb' = 'en') {
  return function t(key: TranslationKey, replacements?: Record<string, string>): string {
    const translation = translations[lang][key as TranslationKey] || translations[defaultLang][key as TranslationKey] || key;

    if (!replacements) return translation;

    return Object.entries(replacements).reduce((text, [replaceKey, value]) => {
      return text.replace(new RegExp(`\\{${replaceKey}\\}`, 'g'), value);
    }, translation);
  };
}
