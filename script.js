const copy = {
  nl: {
    prompt: 'darktechmethode ~',
    title: 'Dark Tech Methode',
    description: 'Een overdraagbare methode voor ethische en kritische reflectie op technologie in het ICT-onderwijs — ontwikkeld aan de Hogeschool van Amsterdam.',
    lede: 'Wat gebeurt er als we stoppen met oplossingen ontwerpen, en juist de systemen maken die we vrezen?',
    methodLabel: 'Methode',
    method1: 'De Dark Tech Methode is een speculative design-aanpak die ethische reflectie inbedt in het maken van technologie. In plaats van ethiek als aparte theorie te behandelen, ontwikkelen deelnemers provocatypes: provocatieve prototypes die de schaduwkant van opkomende technologie uitvergroten en bespreekbaar maken.',
    method2: 'Door macht, manipulatie, surveillance, afhankelijkheid en andere maatschappelijke gevolgen tastbaar te maken, ontstaat kritische dialoog over waarden, aannames en verantwoordelijkheid. De methode combineert provocative prototyping, speculative design en critical making.',
    method3: 'De methode kwam voort uit Tinker: Ethical TechLab, een onderzoeksproject van Marise van Noordenne en Jolijn Friederichs, meermalen gefinancierd door het Centre of Expertise Creative Innovation (CoE-CI) aan de Hogeschool van Amsterdam.',
    studioLabel: 'Dark Tech Studio',
    studio1: 'De Dark Tech Studio is de eerste concrete toepassing van de methode: een fulltime semester van 30 ECTS binnen HBO-ICT aan de Hogeschool van Amsterdam. Creative technologists, AI-engineers en embedded engineers werken interdisciplinair aan projecten die verborgen aannames, waarden en machtsstructuren in technologie zichtbaar maken.',
    studio2: 'Het programma startte in september 2025 met 64 studenten, gevolgd door 55 in het tweede semester. De derde editie loopt nu. Studenten bouwen geen ‘handige’ apps, maar systemen die laten zien wat er mis kan gaan — en leren zo beter herkennen hoe technologie gedrag en samenleving stuurt.',
    toolkitLabel: 'Toolkit',
    toolkit1: 'Alle bevindingen, formats, lesvormen en materialen worden gebundeld in een overdraagbare Dark Tech Toolkit, zodat ook andere onderwijsinstellingen, organisaties en makers met de methode aan de slag kunnen.',
    toolkit2: 'De fysieke toolbox verschijnt begin 2027. Digitaal is The Speculation Game al beschikbaar: een kaartenset om speculative systemen te bedenken en hun gevolgen te bespreken.',
    toolsLabel: 'Tools & links',
    gameLink: 'The Speculation Game',
    gameNote: 'Digitale kaartenset voor speculative design workshops.',
    orbitLink: 'or.bit',
    orbitNote: 'Practice-based research collective van Marise van Noordenne & Jolijn Friederichs.',
    tinkerLink: 'Tinker: Ethical TechLab',
    tinkerNote: 'Onderzoeksproject bij Centre of Expertise Creative Innovation.',
    paperLink: 'Publicatie (LICE 2025)',
    paperNote: 'Developing the Dark Tech Method — extended abstract.',
    footer: 'Marise van Noordenne & Jolijn Friederichs · Centre of Expertise Creative Innovation · Hogeschool van Amsterdam',
  },
  en: {
    prompt: 'darktechmethod ~',
    title: 'Dark Tech Method',
    description: 'A transferable approach for ethical and critical reflection on technology in ICT education — developed at Amsterdam University of Applied Sciences.',
    lede: 'What happens when we stop designing solutions, and deliberately design the systems we fear?',
    methodLabel: 'Method',
    method1: 'The Dark Tech Method is a speculative design approach that embeds ethical reflection in the making of technology. Rather than treating ethics as standalone theory, participants develop provocatypes: provocative prototypes that exaggerate and make discussable the shadow sides of emerging technology.',
    method2: 'By making power, manipulation, surveillance, dependency and other societal consequences tangible, the method opens critical dialogue about values, assumptions and responsibility. It combines provocative prototyping, speculative design and critical making.',
    method3: 'The method grew out of Tinker: Ethical TechLab, a research project by Marise van Noordenne and Jolijn Friederichs, funded multiple times by the Centre of Expertise Creative Innovation (CoE-CI) at Amsterdam University of Applied Sciences.',
    studioLabel: 'Dark Tech Studio',
    studio1: 'The Dark Tech Studio is the first concrete implementation of the method: a full-time 30 ECTS semester within HBO-ICT at Amsterdam University of Applied Sciences. Creative technologists, AI engineers and embedded engineers work in interdisciplinary teams on projects that make hidden assumptions, values and power structures in technology visible.',
    studio2: 'The programme launched in September 2025 with 64 students, followed by 55 in the second semester. The third edition is running now. Students do not build ‘useful’ apps — they build systems that show what can go wrong, and learn to recognise how technology shapes behaviour and society.',
    toolkitLabel: 'Toolkit',
    toolkit1: 'All findings, formats, teaching structures and materials are being bundled into a transferable Dark Tech Toolkit, so other educational institutions, organisations and makers can adopt the approach too.',
    toolkit2: 'The physical toolbox will be released in early 2027. Digitally, The Speculation Game is already available: a card deck for inventing speculative systems and discussing their consequences.',
    toolsLabel: 'Tools & links',
    gameLink: 'The Speculation Game',
    gameNote: 'A digital card deck for speculative design workshops.',
    orbitLink: 'or.bit',
    orbitNote: 'Practice-based research collective by Marise van Noordenne & Jolijn Friederichs.',
    tinkerLink: 'Tinker: Ethical TechLab',
    tinkerNote: 'Research project at the Centre of Expertise Creative Innovation.',
    paperLink: 'Publication (LICE 2025)',
    paperNote: 'Developing the Dark Tech Method — extended abstract.',
    footer: 'Marise van Noordenne & Jolijn Friederichs · Centre of Expertise Creative Innovation · Amsterdam University of Applied Sciences',
  },
};

function setLang(lang) {
  const strings = copy[lang];
  if (!strings) return;

  document.documentElement.lang = lang;
  document.title = strings.title;
  document.querySelector('meta[name="description"]').content = strings.description;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (strings[key]) el.textContent = strings[key];
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

const saved = localStorage.getItem('lang');
const browser = navigator.language?.startsWith('nl') ? 'nl' : 'en';
setLang(saved || browser);

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});
