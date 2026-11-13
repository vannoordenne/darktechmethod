const copy = {
  nl: {
    prompt: 'deck ~',
    title: 'The Speculation Game',
    description: 'Bestel The Speculation Game: fysieke kaartenset voor speculative design en ethische reflectie op technologie.',
    lede: 'Fysieke kaartenset voor speculative design en ethische reflectie op technologie.',
    intro: 'Voor workshops, onderwijs en teams. Door Marise van Noordenne & Jolijn Friederichs.',
    contentsLabel: 'inhoud/',
    contents1: 'CORE-kaarten in vijf categorieën: Technology, Target, Funding, Problem, Strategy -- plus Twist.',
    contents2: 'Er zit een uitlegkaart en een informatiekaart bij.',
    boxCredit: 'The Speculation Game CORE',
    orderLabel: 'bestellen/',
    priceLine: 'Prijs: €29,95',
    shipLine: 'Verzending NL (pakket): €6,50',
    totalLine: 'Totaal NL: €36,50',
    orderCmd: './bestel',
    orderHint: '-- €36,50 NL via Mollie',
    delivery: 'Levering NL: ongeveer 5-10 werkdagen na betaling.',
    euHint: '-- EU / buiten NL, of vragen',
    alsoLabel: 'ook/',
    digitalHint: '-- digitaal gratis spelen',
    homeHint: '-- darktechmethod.com',
    footerRest: ' · or-bit · darktechmethod.com',
  },
  en: {
    prompt: 'deck ~',
    title: 'The Speculation Game',
    description: 'Order The Speculation Game: physical card deck for speculative design and ethical reflection on technology.',
    lede: 'Physical card deck for speculative design and ethical reflection on technology.',
    intro: 'For workshops, education and teams. By Marise van Noordenne & Jolijn Friederichs.',
    contentsLabel: 'contents/',
    contents1: 'CORE cards in five categories: Technology, Target, Funding, Problem, Strategy -- plus Twist.',
    contents2: 'Includes an instruction card and an information card.',
    boxCredit: 'The Speculation Game CORE',
    orderLabel: 'order/',
    priceLine: 'Price: €29.95',
    shipLine: 'Shipping NL (parcel): €6.50',
    totalLine: 'Total NL: €36.50',
    orderCmd: './order',
    orderHint: '-- €36.50 NL via Mollie',
    delivery: 'Delivery NL: about 5-10 working days after payment.',
    euHint: '-- EU / outside NL, or questions',
    alsoLabel: 'also/',
    digitalHint: '-- play free digitally',
    homeHint: '-- darktechmethod.com',
    footerRest: ' · or-bit · darktechmethod.com',
  },
};

function setLang(lang) {
  const strings = copy[lang];
  if (!strings) return;

  document.documentElement.lang = lang;
  document.title = lang === 'nl'
    ? 'The Speculation Game -- fysiek'
    : 'The Speculation Game -- physical';
  document.querySelector('meta[name="description"]').content = strings.description;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogTitle) ogTitle.content = document.title;
  if (ogDesc) ogDesc.content = strings.lede;

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
