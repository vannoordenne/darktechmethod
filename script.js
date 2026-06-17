const copy = {
  nl: {
    title: 'Dark Tech Methode',
    description: 'Een overdraagbare methode voor ethische en kritische reflectie op technologie in het ICT-onderwijs — ontwikkeld aan de Hogeschool van Amsterdam.',
    p1: 'De Dark Tech Methode is voortgekomen uit een onderzoeksproject van Marise van Noordenne en Jolijn Friederichs, drie keer gefinancierd door het Centre of Expertise Creative Innovation (CoE-CI). Het doel was een nieuwe manier te ontwikkelen om ethische en kritische reflectie op een speelse en laagdrempelige manier in te bedden in het ICT-onderwijs.',
    p2: 'Dit mondde uit in de opzet van de Dark Tech Studio: een onderwijsprogramma op HBO-ICT aan de Hogeschool van Amsterdam. Een fulltime semester van 30 ECTS, dat sinds het najaar van 2025 draait. Het eerste semester telde 64 studenten, het tweede 55, en het derde aankomende semester gaat aan de slag met 105 studenten.',
    p3: 'In de Dark Tech Studio ontwikkelen studenten provocatypes, provocatieve prototypes die de schaduwkant van opkomende technologie verkennen. Zo leren ze over de ethische en maatschappelijke implicaties van technologie.',
    p4: 'De methode is een combinatie van provocative prototyping, speculative design en critical making. Alle bevindingen, formats, lesvormen en materialen uit dit onderwijs worden gebundeld in een overdraagbare Dark Tech Toolkit, zodat ook andere onderwijsinstellingen de methode kunnen implementeren.',
  },
  en: {
    title: 'Dark Tech Method',
    description: 'A transferable approach for ethical and critical reflection on technology in ICT education — developed at Amsterdam University of Applied Sciences.',
    p1: 'The Dark Tech Method emerged from a research project by Marise van Noordenne and Jolijn Friederichs, funded three times by the Centre of Expertise Creative Innovation (CoE-CI). The aim was to develop a new way to embed ethical and critical reflection in ICT education in a playful, low-threshold manner.',
    p2: 'This led to the Dark Tech Studio: an educational programme within HBO-ICT at Amsterdam University of Applied Sciences (HvA). A full-time semester of 30 ECTS, running since fall 2025. The first semester had 64 students, the second 55, and the upcoming third semester will work with 105 students.',
    p3: 'In the Dark Tech Studio, students develop provocatypes, provocative prototypes that explore the shadow side of emerging technology. This is how they learn about the ethical and societal implications of technology.',
    p4: 'The method combines provocative prototyping, speculative design and critical making. All findings, formats, teaching methods and materials from this education are bundled into a transferable Dark Tech Toolkit, so that other educational institutions can implement the method.',
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
