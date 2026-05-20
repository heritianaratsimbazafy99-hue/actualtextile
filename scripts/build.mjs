import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const images = {
  logo: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/Actual-Textiles-LOGO-300x37.png',
  hero: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/atelier_confection.jpg',
  production: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/La-production-de-Actual-textiles.jpg',
  workshop: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/atelier_confection.jpg',
  sewing: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/atelier_confection1.jpg',
  creator: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/createur_vetements.jpg',
  quality: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/controle_qualite-min.jpg',
  fabrics: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/tissus_hautes_qualites-min.jpg',
  sustainability: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/sustainability.jpg',
  social: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/Sociale-chez-Actual-textiles.jpg',
  sales: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/departement_ventes.jpg',
  madagascar: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/Actual-textiles-Madagascar-1.jpg',
  maille: 'https://www.actualtextiles.com/wp-content/uploads/2021/11/fond-maille.png',
  newsHealth: 'https://www.actualtextiles.com/wp-content/uploads/2025/06/OIP-1-300x300.jpg',
  newsBiodiversity: 'https://www.actualtextiles.com/wp-content/uploads/2025/05/IMG_6446-930x620.jpg',
  newsForum: 'https://www.actualtextiles.com/wp-content/uploads/2025/05/media_20250430_111537_6786694289507441402-225x300.jpg'
};

const certs = [
  { name: 'OCS / ECOCERT', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/Organic-100.png' },
  { name: 'GOTS', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/LOGO-GOTS-A-JOUR-300x297.png' },
  { name: 'BSCI', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/Business-Social-Compliance.png' },
  { name: 'ICS', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/ICS.png' },
  { name: 'SMETA / Sedex', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/SMETA.png' },
  { name: 'WRAP', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/wrap_logo.jpg' },
  { name: 'Lectra', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/Lectra.png' },
  { name: 'AGOA', image: 'https://www.actualtextiles.com/wp-content/uploads/2024/10/agoa_logo.jpg' }
];

const customers = ['Petit Bateau', 'Jacadi', 'Etam', 'Princesse Tam Tam', 'OBAIBI', 'Truworths', 'Natalys'];

const whyVisuals = [images.creator, images.production, images.quality, images.sustainability];
const processVisuals = [images.sales, images.creator, images.fabrics, images.production, images.sewing, images.workshop, images.quality, images.sustainability, images.madagascar];
const commitmentVisuals = [images.sustainability, images.fabrics, images.madagascar, images.social];
const sustainabilityVisuals = [images.sustainability, images.social, images.workshop];

const content = {
  fr: {
    code: 'fr',
    siteName: 'Actual Textiles',
    homePath: '/fr/',
    langLabel: 'EN',
    langName: 'English',
    cta: 'Parler d’un projet',
    ctaHref: '/fr/contact/',
    nav: [
      ['Accueil', '/fr/'],
      ['Production', '/fr/savoir-faire/'],
      ['Qualité', '/fr/qualite-certifications/'],
      ['Engagements', '/fr/durabilite/'],
      ['À propos', '/fr/a-propos/'],
      ['Talents', '/fr/talents/'],
      ['Contact', '/fr/contact/']
    ],
    footerGroups: [
      ['Production', [['Savoir-faire', '/fr/savoir-faire/'], ['Qualité', '/fr/qualite-certifications/'], ['Contact commercial', '/fr/contact/']]],
      ['Entreprise', [['À propos', '/fr/a-propos/'], ['Engagements', '/fr/durabilite/'], ['Talents', '/fr/talents/']]],
      ['Secondaire', [['Actualités', '/fr/actualites/'], ['Mentions légales', '/fr/contact/']]]
    ],
    cookie: {
      text: 'Nous utilisons des cookies nécessaires au fonctionnement du site et, avec votre accord, des cookies de mesure pour améliorer l’expérience.',
      manage: 'Paramétrer',
      reject: 'Refuser',
      accept: 'Accepter'
    },
    home: {
      path: 'fr/index.html',
      alternate: '/',
      title: 'Fabricant textile à Madagascar pour marques de mode | Actual Textiles',
      description: 'Actual Textiles accompagne les marques internationales dans le développement, l’échantillonnage et la production de vêtements à Madagascar.',
      h1: 'Fabricant textile à Madagascar pour les marques de mode exigeantes',
      lede: 'Actual Textiles accompagne les marques internationales dans le développement, l’échantillonnage et la production de vêtements de qualité, avec un savoir-faire malgache, une production responsable et un contrôle qualité rigoureux.',
      primary: 'Parler d’un projet',
      secondary: 'Découvrir notre savoir-faire',
      secondaryHref: '/fr/savoir-faire/',
      proofs: ['Depuis 2002', 'Basé à Antananarivo, Madagascar', 'Développement produit & production', 'Usine alimentée à l’énergie solaire', 'Export international'],
      whyTitle: 'Pourquoi choisir Actual Textiles ?',
      whyIntro: 'Une confection textile structurée pour les marques qui recherchent un partenaire clair, fiable et habitué aux exigences internationales.',
      why: [
        ['Savoir-faire textile malgache', 'Des équipes formées aux techniques de confection, de smock, de broderie main, de crochetage et de finitions soignées.'],
        ['Du prototype à l’expédition', 'Un accompagnement complet : lecture du brief, développement produit, échantillons, sourcing, production, conditionnement et logistique.'],
        ['Contrôle qualité à chaque étape', 'Des contrôleurs formés suivent la matière première, les lignes de production, la finition et les contrôles avant expédition.'],
        ['Production responsable et solaire', 'Une usine alimentée à l’énergie solaire et des initiatives de recyclage, upcycling, reforestation et santé au travail.']
      ],
      productsTitle: 'Ce que nous produisons',
      productsIntro: 'Les contenus existants confirment une spécialisation en vêtements enfants et femme, avec une expérience plus large selon les demandes clients.',
      products: [
        ['Vêtements pour enfants', 'Filles et garçons, du développement produit à la série.', images.creator],
        ['Vêtements femme', 'Blouses, chemisiers, pièces tissées ou maille selon cahier des charges.', images.fabrics],
        ['Homewear, loungewear & sleepwear', 'Vêtements de détente et de nuit pour marques internationales.', images.workshop],
        ['Robes', 'Robes femme et solutions de confection sur mesure selon brief client.', images.sewing]
      ],
      processTitle: 'De l’idée au produit fini',
      processIntro: 'Un parcours raccourci pour comprendre comment l’équipe transforme un brief en produit prêt à expédier.',
      process: ['Brief client', 'Développement produit', 'Échantillonnage', 'Sourcing', 'Coupe', 'Couture', 'Finition', 'Contrôle qualité', 'Expédition'],
      qualityTitle: 'Qualité & conformité',
      qualityIntro: 'Le contrôle qualité est intégré au fonctionnement de l’usine, depuis la matière première jusqu’au produit fini.',
      qualityBullets: [
        'Suivi qualité des matières premières, de la production et des produits finis.',
        'Sessions de formation et retours réguliers pour les contrôleurs qualité.',
        'Inspections pendant la production, en finition et avant expédition.',
        'Collaboration avec des laboratoires externes citée dans les contenus existants.',
        'Références AQL mentionnées sur le site actuel, à valider dans les documents qualité.'
      ],
      commitmentsTitle: 'Engagements responsables',
      commitmentsIntro: 'Des engagements présentés par preuves concrètes, sans promesse absolue non documentée.',
      commitments: [
        ['Énergie solaire', 'Le site actuel indique que l’usine fonctionne à l’énergie solaire.'],
        ['Réduction de l’impact', 'Collaborations locales pour recycler et upcycler des déchets de production.'],
        ['Environnement local', 'Espaces verts, potager collaboratif, programmes de reforestation et de décarbonation cités.'],
        ['Santé & sécurité', 'Nettoyage quotidien, désinfections, premiers secours, formation annuelle et équipe médicale sur site.']
      ],
      refsTitle: 'Références & certifications',
      refsIntro: 'Des standards pensés pour les marques internationales.',
      newsTitle: 'Actualités',
      newsIntro: 'Les dernières activités restent disponibles, mais ne coupent plus la compréhension de l’offre principale.',
      finalTitle: 'Vous recherchez un partenaire textile fiable à Madagascar ?',
      finalText: 'Notre équipe vous accompagne du développement produit à l’expédition.',
      finalButton: 'Contacter l’équipe commerciale'
    }
  },
  en: {
    code: 'en',
    siteName: 'Actual Textiles',
    homePath: '/',
    langLabel: 'FR',
    langName: 'Français',
    cta: 'Talk about a project',
    ctaHref: '/contact/',
    nav: [
      ['Home', '/'],
      ['Production', '/production/'],
      ['Quality', '/quality-certifications/'],
      ['Commitments', '/sustainability/'],
      ['About', '/about-us/'],
      ['Talents', '/talents/'],
      ['Contact', '/contact/']
    ],
    footerGroups: [
      ['Production', [['Know-how', '/production/'], ['Quality', '/quality-certifications/'], ['Sales contact', '/contact/']]],
      ['Company', [['About', '/about-us/'], ['Commitments', '/sustainability/'], ['Talents', '/talents/']]],
      ['Secondary', [['News', '/news/'], ['Legal notice', '/contact/']]]
    ],
    cookie: {
      text: 'We use cookies required for the site to work and, with your consent, measurement cookies to improve the experience.',
      manage: 'Manage',
      reject: 'Reject',
      accept: 'Accept'
    },
    home: {
      path: 'index.html',
      alternate: '/fr/',
      title: 'Textile manufacturer in Madagascar for fashion brands | Actual Textiles',
      description: 'Actual Textiles supports international fashion brands with product development, sampling and garment production in Madagascar.',
      h1: 'Textile manufacturer in Madagascar for demanding fashion brands',
      lede: 'Actual Textiles supports international brands in product development, sampling and quality garment production, combining Malagasy know-how, responsible production and rigorous quality control.',
      primary: 'Talk about a project',
      secondary: 'Explore our know-how',
      secondaryHref: '/production/',
      proofs: ['Since 2002', 'Based in Antananarivo, Madagascar', 'Product development & production', 'Solar-powered factory', 'International export'],
      whyTitle: 'Why choose Actual Textiles?',
      whyIntro: 'A structured garment manufacturing partner for brands that need clarity, reliability and international-standard execution.',
      why: [
        ['Malagasy textile know-how', 'Teams trained in garment construction, smocking, hand embroidery, crochet and precise finishing.'],
        ['From prototype to shipment', 'A complete service: brief review, product development, samples, sourcing, production, packing and logistics.'],
        ['Quality control at every stage', 'Trained controllers follow raw materials, production lines, finishing and pre-shipment checks.'],
        ['Responsible solar production', 'A solar-powered factory with recycling, upcycling, reforestation and workplace health initiatives.']
      ],
      productsTitle: 'What we produce',
      productsIntro: 'Existing content confirms a focus on children’s and women’s garments, with broader experience depending on customer briefs.',
      products: [
        ['Children’s clothing', 'Girls’ and boys’ apparel, from product development to production runs.', images.creator],
        ['Women’s apparel', 'Blouses, shirts, woven or knitted pieces according to each specification.', images.fabrics],
        ['Homewear, loungewear & sleepwear', 'Relaxed and nightwear garments for international brands.', images.workshop],
        ['Dresses', 'Women’s dresses and made-to-brief garment solutions.', images.sewing]
      ],
      processTitle: 'From idea to finished product',
      processIntro: 'A shorter path for buyers to understand how the team turns a brief into a product ready to ship.',
      process: ['Client brief', 'Product development', 'Sampling', 'Sourcing', 'Cutting', 'Sewing', 'Finishing', 'Quality control', 'Shipment'],
      qualityTitle: 'Quality & compliance',
      qualityIntro: 'Quality control is built into factory operations, from raw materials to finished garments.',
      qualityBullets: [
        'Quality follow-up on raw materials, production and finished garments.',
        'Regular training and feedback sessions for quality controllers.',
        'Inspections during production, finishing and before shipment.',
        'Collaboration with external laboratories is cited in existing content.',
        'AQL references are mentioned on the current site and should be validated against quality documents.'
      ],
      commitmentsTitle: 'Responsible commitments',
      commitmentsIntro: 'Concrete proof points, without absolute claims that are not documented.',
      commitments: [
        ['Solar energy', 'The current site states that the factory is powered by solar energy.'],
        ['Lower impact', 'Local collaborations recycle and upcycle production waste.'],
        ['Local environment', 'Green spaces, a collaborative vegetable garden, reforestation and decarbonization programs are cited.'],
        ['Health & safety', 'Daily cleaning, sanitization, first aid, annual training and an on-site medical team.']
      ],
      refsTitle: 'References & certifications',
      refsIntro: 'Standards designed for international fashion brands.',
      newsTitle: 'News',
      newsIntro: 'Recent activities remain visible lower on the page without interrupting the main offer.',
      finalTitle: 'Looking for a reliable textile partner in Madagascar?',
      finalText: 'Our team supports you from product development through shipment.',
      finalButton: 'Contact the sales team'
    }
  }
};

const pages = [
  {
    lang: 'fr',
    path: 'fr/savoir-faire/index.html',
    alternate: '/production/',
    navKey: '/fr/savoir-faire/',
    title: 'Production & savoir-faire textile à Madagascar | Actual Textiles',
    description: 'Développement produit, échantillonnage, sourcing, coupe, couture, finition, contrôle qualité et expédition à Madagascar.',
    h1: 'Production & savoir-faire textile',
    lede: 'Une organisation complète pour transformer un brief de marque en vêtement prêt à expédier.',
    heroImage: images.production,
    type: 'production'
  },
  {
    lang: 'en',
    path: 'production/index.html',
    alternate: '/fr/savoir-faire/',
    navKey: '/production/',
    title: 'Garment production & textile know-how in Madagascar | Actual Textiles',
    description: 'Product development, sampling, sourcing, cutting, sewing, finishing, quality control and shipment in Madagascar.',
    h1: 'Garment production & textile know-how',
    lede: 'A complete organization that turns a fashion brand brief into garments ready to ship.',
    heroImage: images.production,
    type: 'production'
  },
  {
    lang: 'fr',
    path: 'fr/qualite-certifications/index.html',
    alternate: '/quality-certifications/',
    navKey: '/fr/qualite-certifications/',
    title: 'Qualité & certifications textile | Actual Textiles Madagascar',
    description: 'Contrôle qualité textile, inspections, laboratoires externes et certifications citées par Actual Textiles Madagascar.',
    h1: 'Qualité & certifications',
    lede: 'Des contrôles structurés et des référentiels cités pour répondre aux exigences des marques internationales.',
    heroImage: images.quality,
    type: 'quality'
  },
  {
    lang: 'en',
    path: 'quality-certifications/index.html',
    alternate: '/fr/qualite-certifications/',
    navKey: '/quality-certifications/',
    title: 'Textile quality & certifications | Actual Textiles Madagascar',
    description: 'Textile quality control, inspections, external laboratories and certifications cited by Actual Textiles Madagascar.',
    h1: 'Quality & certifications',
    lede: 'Structured controls and cited standards for international fashion brand requirements.',
    heroImage: images.quality,
    type: 'quality'
  },
  {
    lang: 'fr',
    path: 'fr/durabilite/index.html',
    alternate: '/sustainability/',
    navKey: '/fr/durabilite/',
    title: 'Engagements responsables | Actual Textiles Madagascar',
    description: 'Énergie solaire, réduction de l’impact, recyclage, santé et sécurité au travail chez Actual Textiles Madagascar.',
    h1: 'Engagements responsables',
    lede: 'Des initiatives environnementales, sociales et de santé au travail présentées avec des preuves concrètes.',
    heroImage: images.sustainability,
    type: 'sustainability'
  },
  {
    lang: 'en',
    path: 'sustainability/index.html',
    alternate: '/fr/durabilite/',
    navKey: '/sustainability/',
    title: 'Responsible commitments | Actual Textiles Madagascar',
    description: 'Solar energy, impact reduction, recycling, workplace health and safety at Actual Textiles Madagascar.',
    h1: 'Responsible commitments',
    lede: 'Environmental, social and workplace health initiatives presented through concrete proof points.',
    heroImage: images.sustainability,
    type: 'sustainability'
  },
  {
    lang: 'fr',
    path: 'fr/a-propos/index.html',
    alternate: '/about-us/',
    navKey: '/fr/a-propos/',
    title: 'À propos d’Actual Textiles | Fabricant textile Madagascar',
    description: 'Actual Textiles, entreprise de confection en zone franche à Antananarivo depuis 2002.',
    h1: 'À propos d’Actual Textiles',
    lede: 'Une entreprise de confection basée en zone franche à Antananarivo, au service des marques internationales depuis 2002.',
    heroImage: images.madagascar,
    type: 'about'
  },
  {
    lang: 'en',
    path: 'about-us/index.html',
    alternate: '/fr/a-propos/',
    navKey: '/about-us/',
    title: 'About Actual Textiles | Garment manufacturer Madagascar',
    description: 'Actual Textiles is a garment company based in the Antananarivo free zone since 2002.',
    h1: 'About Actual Textiles',
    lede: 'A garment company based in the Antananarivo free zone, serving international brands since 2002.',
    heroImage: images.madagascar,
    type: 'about'
  },
  {
    lang: 'fr',
    path: 'fr/talents/index.html',
    alternate: '/talents/',
    navKey: '/fr/talents/',
    title: 'Talents & recrutement | Actual Textiles Madagascar',
    description: 'Découvrez la culture d’entreprise et les opportunités de recrutement chez Actual Textiles Madagascar.',
    h1: 'Talents',
    lede: 'Rejoindre une équipe textile structurée autour du savoir-faire, de la qualité et de la sécurité au travail.',
    heroImage: images.social,
    type: 'talents'
  },
  {
    lang: 'en',
    path: 'talents/index.html',
    alternate: '/fr/talents/',
    navKey: '/talents/',
    title: 'Talents & recruitment | Actual Textiles Madagascar',
    description: 'Explore company culture and recruitment opportunities at Actual Textiles Madagascar.',
    h1: 'Talents',
    lede: 'Join a textile team built around know-how, quality and workplace safety.',
    heroImage: images.social,
    type: 'talents'
  },
  {
    lang: 'fr',
    path: 'fr/contact/index.html',
    alternate: '/contact/',
    navKey: '/fr/contact/',
    title: 'Contact Actual Textiles | Projet textile à Madagascar',
    description: 'Contactez Actual Textiles pour un projet de production, développement produit, qualité ou recrutement.',
    h1: 'Contact',
    lede: 'Un point d’entrée simple pour parler production, développement produit, qualité ou recrutement.',
    heroImage: images.sales,
    type: 'contact'
  },
  {
    lang: 'en',
    path: 'contact/index.html',
    alternate: '/fr/contact/',
    navKey: '/contact/',
    title: 'Contact Actual Textiles | Textile project in Madagascar',
    description: 'Contact Actual Textiles for production, product development, quality or recruitment topics.',
    h1: 'Contact',
    lede: 'One clear entry point for production, product development, quality or recruitment topics.',
    heroImage: images.sales,
    type: 'contact'
  },
  {
    lang: 'fr',
    path: 'fr/actualites/index.html',
    alternate: '/news/',
    navKey: '/fr/actualites/',
    title: 'Actualités | Actual Textiles Madagascar',
    description: 'Actualités et initiatives récentes d’Actual Textiles à Madagascar.',
    h1: 'Actualités',
    lede: 'Les activités récentes d’Actual Textiles, désormais en complément de l’offre principale.',
    heroImage: images.newsBiodiversity,
    type: 'news'
  },
  {
    lang: 'en',
    path: 'news/index.html',
    alternate: '/fr/actualites/',
    navKey: '/news/',
    title: 'News | Actual Textiles Madagascar',
    description: 'Recent news and initiatives from Actual Textiles in Madagascar.',
    h1: 'News',
    lede: 'Recent Actual Textiles activities, now supporting the main offer instead of replacing it.',
    heroImage: images.newsBiodiversity,
    type: 'news'
  }
];

const text = {
  fr: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    talk: 'Parler d’un projet',
    contact: {
      addressTitle: 'Adresse',
      address: 'Ambohipanja – Ilafy, Antananarivo 103, Madagascar',
      phoneTitle: 'Téléphone',
      phone: '+261 20 23 277 66',
      faxTitle: 'Fax',
      fax: '+261 20 23 290 50',
      emailTitle: 'Email',
      email: 'info@actualtextiles.com'
    },
    labels: {
      name: 'Nom',
      company: 'Entreprise',
      email: 'Email',
      phone: 'Téléphone',
      subject: 'Sujet',
      message: 'Message',
      files: 'CV ou documents',
      consent: 'J’accepte qu’Actual Textiles utilise ces informations pour répondre à ma demande.',
      send: 'Envoyer'
    },
    subjects: ['Production', 'Développement produit', 'Qualité', 'Talents', 'Autre'],
    certNote: 'Certifications et référentiels cités sur le site actuel. Les documents, périmètres produits et dates de validité sont à valider avant publication finale.',
    readMore: 'Lire la suite',
    footerAbout: 'Entreprise de confection basée en zone franche à Antananarivo, Madagascar. Spécialisée dans les vêtements enfants, femme, homewear, loungewear et sleepwear.',
    copyright: '© 2026 Actual Textiles. Refonte statique de présentation.'
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    talk: 'Talk about a project',
    contact: {
      addressTitle: 'Address',
      address: 'Ambohipanja – Ilafy, Antananarivo 103, Madagascar',
      phoneTitle: 'Telephone',
      phone: '+261 20 23 277 66',
      faxTitle: 'Fax',
      fax: '+261 20 23 290 50',
      emailTitle: 'Email',
      email: 'info@actualtextiles.com'
    },
    labels: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      subject: 'Subject',
      message: 'Message',
      files: 'CV or documents',
      consent: 'I agree that Actual Textiles may use this information to respond to my request.',
      send: 'Send'
    },
    subjects: ['Production', 'Product development', 'Quality', 'Talents', 'Other'],
    certNote: 'Certifications and standards cited on the current site. Documents, product scopes and validity dates should be validated before final publication.',
    readMore: 'Read more',
    footerAbout: 'Garment company based in the free zone in Antananarivo, Madagascar. Specialized in children’s clothing, women’s apparel, homewear, loungewear and sleepwear.',
    copyright: '© 2026 Actual Textiles. Static presentation redesign.'
  }
};

const news = {
  fr: [
    ['Textile Madagascar : Actual Textiles célèbre la Journée mondiale sans tabac', '2 juin 2025', 'Initiative de sensibilisation aux dangers du tabac et promotion d’un environnement de travail plus sain.', images.newsHealth],
    ['Actual Textiles s’engage pour la biodiversité et la planète', '26 mai 2025', 'Réaffirmation des engagements environnementaux et sociétaux à l’occasion de la Journée mondiale de la biodiversité.', images.newsBiodiversity],
    ['Actual Textiles au Forum Mondial des Femmes Chefs d’Entreprise', '5 mai 2025', 'Participation à un événement dédié à l’entrepreneuriat féminin à Antananarivo.', images.newsForum]
  ],
  en: [
    ['Actual Textiles marks World No Tobacco Day', '2 June 2025', 'An awareness initiative on the dangers of tobacco and a healthier work environment.', images.newsHealth],
    ['Actual Textiles commits to biodiversity and the planet', '26 May 2025', 'Environmental and social commitments reaffirmed on International Day for Biological Diversity.', images.newsBiodiversity],
    ['Actual Textiles at the World Forum of Women Entrepreneurs', '5 May 2025', 'Participation in an event dedicated to women entrepreneurs in Antananarivo.', images.newsForum]
  ]
};

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const hrefFor = (path) => path.startsWith('/') ? path : `/${path}`;

function write(path, html) {
  const file = join(root, path);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

function header(locale, currentPath, alternate) {
  const lang = content[locale];
  const t = text[locale];
  const nav = lang.nav.map(([label, href]) => {
    const current = href === currentPath ? ' aria-current="page"' : '';
    return `<li><a href="${href}"${current}>${esc(label)}</a></li>`;
  }).join('');

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${lang.homePath}" aria-label="Actual Textiles">
          <img src="${images.logo}" alt="Actual Textiles" width="300" height="37">
        </a>
        <nav class="site-nav" aria-label="${esc(t.menu)}" data-site-nav>
          <ul>${nav}</ul>
        </nav>
        <div class="header-actions">
          <a class="lang-switch" href="${alternate}" hreflang="${lang.langLabel.toLowerCase()}" aria-label="${lang.langName}">${lang.langLabel}</a>
          <a class="button small" href="${lang.ctaHref}">${esc(lang.cta)}</a>
          <button class="menu-toggle" type="button" aria-label="${esc(t.menu)}" aria-expanded="false" data-menu-toggle>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;
}

function footer(locale) {
  const lang = content[locale];
  const t = text[locale];
  const groups = lang.footerGroups.map(([title, links]) => `
    <div>
      <h3>${esc(title)}</h3>
      <ul>${links.map(([label, href]) => `<li><a href="${href}">${esc(label)}</a></li>`).join('')}</ul>
    </div>
  `).join('');

  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h2>Actual Textiles</h2>
            <p>${esc(t.footerAbout)}</p>
          </div>
          ${groups}
        </div>
        <div class="footer-bottom">
          <span>${esc(t.copyright)}</span>
          <span>${esc(t.contact.email)} · ${esc(t.contact.phone)}</span>
        </div>
      </div>
    </footer>`;
}

function cookie(locale) {
  const c = content[locale].cookie;
  return `
    <aside class="cookie-consent" data-cookie-consent hidden>
      <p>${esc(c.text)}</p>
      <div class="cookie-actions">
        <button class="button ghost small" type="button" data-cookie-choice="managed">${esc(c.manage)}</button>
        <button class="button ghost small" type="button" data-cookie-choice="rejected">${esc(c.reject)}</button>
        <button class="button small" type="button" data-cookie-choice="accepted">${esc(c.accept)}</button>
      </div>
    </aside>`;
}

function layout(page, main) {
  const locale = page.lang;
  const t = text[locale];
  const currentPath = page.navKey || (locale === 'fr' ? '/fr/' : '/');
  const alternate = page.alternate || (locale === 'fr' ? '/' : '/fr/');
  const canonical = `https://www.actualtextiles.com${currentPath}`;
  const altFr = locale === 'fr' ? canonical : `https://www.actualtextiles.com${alternate}`;
  const altEn = locale === 'en' ? canonical : `https://www.actualtextiles.com${alternate}`;

  return `<!doctype html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="fr" href="${altFr}">
  <link rel="alternate" hreflang="en" href="${altEn}">
  <link rel="alternate" hreflang="x-default" href="https://www.actualtextiles.com/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Actual Textiles">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:image" content="${page.heroImage || images.hero}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="https://www.actualtextiles.com/wp-content/uploads/2021/11/cropped-favicon-actual-textile-32x32.jpg">
  <link rel="preconnect" href="https://www.actualtextiles.com">
  <link rel="stylesheet" href="/assets/site.css?v=20260513-ui6">
  <script defer src="/assets/site.js?v=20260513-ui6"></script>
</head>
<body>
  <a class="skip-link" href="#main">${esc(t.skip)}</a>
  ${header(locale, currentPath, alternate)}
  <main id="main">
    ${main}
  </main>
  ${footer(locale)}
  ${cookie(locale)}
</body>
</html>`;
}

function hero({ h1, lede, eyebrow = 'Actual Textiles', image = images.hero, primary, primaryHref, secondary, secondaryHref, proofs = [], page = false }) {
  const proofHtml = proofs.length ? `<ul class="proof-strip">${proofs.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>` : '';
  const ctas = primary ? `
    <div class="cta-row">
      <a class="button" href="${primaryHref}">${esc(primary)}</a>
      ${secondary ? `<a class="button secondary" href="${secondaryHref}">${esc(secondary)}</a>` : ''}
    </div>` : '';

  return `
    <section class="hero ${page ? 'page-hero' : ''}" style="--hero-image: url('${image}')">
      <div class="container hero-content">
        <div class="hero-copy">
          <p class="eyebrow">${esc(eyebrow)}</p>
          <h1>${esc(h1)}</h1>
          <p class="hero-lede">${esc(lede)}</p>
          ${ctas}
        </div>
        ${proofHtml}
      </div>
    </section>`;
}

function sectionHead(title, intro) {
  return `
    <div class="section-head" data-reveal>
      <h2>${esc(title)}</h2>
      <p>${esc(intro)}</p>
    </div>`;
}

function cardGrid(items, columns = 'four') {
  return `<div class="grid ${columns}">${items.map(([title, body]) => `
    <article class="card" data-reveal>
      <h3>${esc(title)}</h3>
      <p>${esc(body)}</p>
    </article>`).join('')}</div>`;
}

function mediaCardGrid(items, media = [], columns = 'four') {
  return `<div class="grid ${columns} media-card-grid">${items.map(([title, body], index) => `
    <article class="card enhanced-card" data-reveal>
      <figure class="card-media">
        <img src="${media[index % media.length]}" alt="${esc(title)}" loading="lazy">
      </figure>
      <div class="enhanced-card-body">
        <h3>${esc(title)}</h3>
        <p>${esc(body)}</p>
      </div>
    </article>`).join('')}</div>`;
}

function productGrid(items) {
  return `<div class="grid four">${items.map(([title, body, image]) => `
    <article class="card product-card" data-reveal>
      <img src="${image}" alt="${esc(title)} chez Actual Textiles" loading="lazy">
      <div class="product-content">
        <h3>${esc(title)}</h3>
        <p>${esc(body)}</p>
      </div>
    </article>`).join('')}</div>`;
}

function timeline(steps) {
  return `<div class="timeline" aria-label="Process">${steps.map((step) => `
    <div class="timeline-step" data-reveal>
      <strong>${esc(step)}</strong>
    </div>`).join('')}</div>`;
}

function processRail(steps) {
  return `<div class="process-rail" aria-label="Process">${steps.map((step, index) => `
    <article class="process-card" data-reveal>
      <img src="${processVisuals[index % processVisuals.length]}" alt="${esc(step)}" loading="lazy">
      <div>
        <strong>${esc(step)}</strong>
      </div>
    </article>`).join('')}</div>`;
}

function list(items) {
  return `<ul class="check-list">${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
}

function certGrid(locale) {
  const note = text[locale].certNote;
  return `
    <!-- TODO: Valider les documents, périmètres produits et dates de validité des certifications citées avant mise en ligne finale. -->
    <div class="cert-grid">
      ${certs.map((cert) => `
        <article class="cert-card" data-reveal>
          <img src="${cert.image}" alt="${esc(cert.name)}" loading="lazy">
          <strong>${esc(cert.name)}</strong>
        </article>`).join('')}
    </div>
    <p class="note">${esc(note)}</p>`;
}

function references(locale) {
  const c = content[locale].home;
  return `
    <section class="section alt">
      <div class="container">
        ${sectionHead(c.refsTitle, c.refsIntro)}
        <div class="stack">
          <ul class="badge-rail" aria-label="Références clients">
            ${customers.map((customer) => `<li class="client-pill">${esc(customer)}</li>`).join('')}
          </ul>
          ${certGrid(locale)}
        </div>
      </div>
    </section>`;
}

function visualIntro(locale) {
  const fr = locale === 'fr';
  const chips = fr
    ? ['Confection textile Madagascar', 'Développement produit', 'Contrôle qualité', 'Export']
    : ['Garment manufacturing Madagascar', 'Product development', 'Quality control', 'Export'];

  return `
    <section class="visual-intro">
      <div class="container visual-intro-grid">
        <div class="visual-copy" data-reveal>
          <p class="eyebrow">Actual Textiles</p>
          <h2>${fr ? 'Une usine claire, humaine et tournée vers l’export' : 'A clear, human factory built for export'}</h2>
          <p>${fr ? 'Le parcours se lit plus vite : savoir-faire, produits, qualité, engagements et contact apparaissent dans une narration courte, appuyée par les images de production existantes.' : 'The journey is faster to understand: know-how, products, quality, commitments and contact appear in a short story supported by existing production imagery.'}</p>
          <ul class="badge-rail">${chips.map((chip) => `<li>${esc(chip)}</li>`).join('')}</ul>
        </div>
        <div class="image-collage" aria-label="${fr ? 'Images de production Actual Textiles' : 'Actual Textiles production images'}" data-reveal>
          <img class="collage-main" src="${images.workshop}" alt="${fr ? 'Atelier de confection à Madagascar' : 'Garment workshop in Madagascar'}" loading="lazy">
          <img class="collage-small top" src="${images.quality}" alt="${fr ? 'Contrôle qualité textile' : 'Textile quality control'}" loading="lazy">
          <img class="collage-small bottom" src="${images.creator}" alt="${fr ? 'Développement produit textile' : 'Textile product development'}" loading="lazy">
        </div>
      </div>
    </section>`;
}

function commitmentCards(items) {
  return `<div class="grid four commitment-card-grid">${items.map(([title, body], index) => `
    <article class="card commitment-card tone-${index + 1}" data-reveal>
      <figure class="commitment-card-media">
        <img src="${commitmentVisuals[index % commitmentVisuals.length]}" alt="${esc(title)} Actual Textiles" loading="lazy">
      </figure>
      <div class="commitment-card-content">
        <h3>${esc(title)}</h3>
        <p>${esc(body)}</p>
      </div>
    </article>`).join('')}</div>`;
}

function sustainabilityCards(labels) {
  return `<div class="grid three sustainability-card-grid">${labels.groups.map(([title, items], index) => `
    <article class="card commitment-card tone-${index + 1}" data-reveal>
      <figure class="commitment-card-media">
        <img src="${sustainabilityVisuals[index % sustainabilityVisuals.length]}" alt="${esc(title)} Actual Textiles" loading="lazy">
      </figure>
      <div class="commitment-card-content">
        <h3>${esc(title)}</h3>
        ${list(items)}
      </div>
    </article>`).join('')}</div>`;
}

function newsCards(locale, limit = 3) {
  const t = text[locale];
  return `<div class="grid three">${news[locale].slice(0, limit).map(([title, date, body, image]) => `
    <article class="card news-card" data-reveal>
      <img src="${image}" alt="${esc(title)}" loading="lazy">
      <time>${esc(date)}</time>
      <h3>${esc(title)}</h3>
      <p>${esc(body)}</p>
      <a href="${locale === 'fr' ? '/fr/actualites/' : '/news/'}">${esc(t.readMore)}</a>
    </article>`).join('')}</div>`;
}

function finalCta(locale) {
  const c = content[locale].home;
  const href = content[locale].ctaHref;
  return `
    <section class="cta-band">
      <div class="container cta-panel">
        <div>
          <h2>${esc(c.finalTitle)}</h2>
          <p>${esc(c.finalText)}</p>
        </div>
        <a class="button" href="${href}">${esc(c.finalButton)}</a>
      </div>
    </section>`;
}

function home(locale) {
  const c = content[locale].home;
  const lang = content[locale];
  const main = `
    ${hero({
      h1: c.h1,
      lede: c.lede,
      image: images.hero,
      primary: c.primary,
      primaryHref: lang.ctaHref,
      secondary: c.secondary,
      secondaryHref: c.secondaryHref,
      proofs: c.proofs
    })}
    ${visualIntro(locale)}
    <section class="section tight">
      <div class="container">
        ${sectionHead(c.whyTitle, c.whyIntro)}
        ${mediaCardGrid(c.why, whyVisuals, 'four')}
      </div>
    </section>
    <section class="section alt visual-section">
      <div class="container">
        ${sectionHead(c.productsTitle, c.productsIntro)}
        ${productGrid(c.products)}
      </div>
    </section>
    <section class="section tight">
      <div class="container">
        ${sectionHead(c.processTitle, c.processIntro)}
        ${processRail(c.process)}
      </div>
    </section>
    <section class="section alt">
      <div class="container split">
        <div class="media-frame" data-reveal>
          <img src="${images.quality}" alt="${locale === 'fr' ? 'Contrôle qualité textile chez Actual Textiles' : 'Textile quality control at Actual Textiles'}" loading="lazy">
        </div>
        <div class="stack" data-reveal>
          <p class="eyebrow">Actual Textiles</p>
          <h2>${esc(c.qualityTitle)}</h2>
          <p>${esc(c.qualityIntro)}</p>
          ${list(c.qualityBullets)}
          <a class="button ghost" href="${locale === 'fr' ? '/fr/qualite-certifications/' : '/quality-certifications/'}">${esc(c.qualityTitle)}</a>
        </div>
      </div>
    </section>
    <section class="section alt commitments-section" id="${locale === 'fr' ? 'engagements-responsables' : 'responsible-commitments'}">
      <div class="container">
        ${sectionHead(c.commitmentsTitle, c.commitmentsIntro)}
        ${commitmentCards(c.commitments)}
      </div>
    </section>
    ${references(locale)}
    <section class="section compact">
      <div class="container">
        ${sectionHead(c.newsTitle, c.newsIntro)}
        ${newsCards(locale)}
      </div>
    </section>
    ${finalCta(locale)}
  `;

  return layout({ ...c, lang: locale, navKey: locale === 'fr' ? '/fr/' : '/', heroImage: images.hero }, main);
}

function pageHero(page) {
  return hero({
    h1: page.h1,
    lede: page.lede,
    image: page.heroImage,
    page: true,
    primary: content[page.lang].cta,
    primaryHref: content[page.lang].ctaHref
  });
}

function productionPage(page) {
  const fr = page.lang === 'fr';
  const labels = fr ? {
    introTitle: 'Une chaîne de production lisible',
    intro: 'Les informations clés sont regroupées pour éviter au visiteur de chercher entre plusieurs pages.',
    blocks: [
      ['Développement produit', 'Analyse du brief, création de modèles, recherche de matières et garnitures, propositions techniques et utilisation du système Lectra cité sur le site actuel.'],
      ['Échantillonnage', 'Prototypes, ensembles de tailles, SMS, échantillons pré-production et échantillons d’expédition selon les besoins de la marque.'],
      ['Production', 'Planification des capacités, coupe, couture, finition, inspection, étiquetage, emballage et préparation logistique.'],
      ['Technologie', 'Parc de machines industrielles cité : piqueuses, surjeteuses, boutonnières, pose boutons, snaps et repassage vapeur régulé.']
    ],
    departmentsTitle: 'Départements clés',
    departments: [
      ['Commercial & marketing', 'Dialogue client, suivi des exigences, négociation matières et trims, adaptation de la planification.'],
      ['Coupe', 'Respect des spécifications modèles avant assemblage.'],
      ['Couture', 'Assemblage étape par étape avec contrôles en cours de production.'],
      ['Finition & inspection', 'Pressage, étiquetage, emballage et inspection avant expédition.'],
      ['Logistique', 'Coordination des expéditions FOB ou CIF/LDP, avec mention des formulaires EUR1 sur le site actuel.']
    ],
    ctaTitle: 'Un projet à développer ?',
    ctaText: 'Partagez votre brief, votre catégorie produit ou vos contraintes qualité.'
  } : {
    introTitle: 'A clear production chain',
    intro: 'Key information is grouped so buyers do not have to search across several pages.',
    blocks: [
      ['Product development', 'Brief analysis, pattern creation, material and trim sourcing, technical suggestions and use of the Lectra system cited on the current site.'],
      ['Sampling', 'Prototypes, size sets, SMS, pre-production samples and shipment samples depending on brand needs.'],
      ['Production', 'Capacity planning, cutting, sewing, finishing, inspection, labeling, packing and logistics preparation.'],
      ['Technology', 'Industrial machines cited: stitchers, overlockers, buttonhole and button machines, snap fasteners and regulated steam ironing.']
    ],
    departmentsTitle: 'Key departments',
    departments: [
      ['Sales & marketing', 'Customer dialogue, requirement tracking, material and trim negotiation, production planning adaptation.'],
      ['Cutting', 'Close respect of pattern specifications before assembly.'],
      ['Sewing', 'Step-by-step garment construction with in-process controls.'],
      ['Finishing & inspection', 'Pressing, labeling, packing and inspection before shipment.'],
      ['Logistics', 'Coordination of FOB or CIF/LDP shipments, with EUR1 forms mentioned on the current site.']
    ],
    ctaTitle: 'Have a project to develop?',
    ctaText: 'Share your brief, product category or quality constraints.'
  };

  const main = `
    ${pageHero(page)}
    <section class="section tight">
      <div class="container page-section-grid">
        <div data-reveal>
          <p class="eyebrow">Actual Textiles</p>
          <h2>${esc(labels.introTitle)}</h2>
          <p>${esc(labels.intro)}</p>
          <div class="mini-visual">
            <img src="${images.fabrics}" alt="${fr ? 'Matières textiles Actual Textiles' : 'Actual Textiles textile materials'}" loading="lazy">
          </div>
        </div>
        ${cardGrid(labels.blocks, 'two')}
      </div>
    </section>
    <section class="section alt tight">
      <div class="container">
        ${sectionHead(labels.departmentsTitle, fr ? 'Un fonctionnement lisible, du contact commercial à la livraison.' : 'A readable operating model, from sales contact to delivery.')}
        ${mediaCardGrid(labels.departments, [images.sales, images.production, images.workshop, images.quality, images.madagascar], 'three')}
      </div>
    </section>
    <section class="section tight process-section">
      <div class="container split">
        <div class="stack" data-reveal>
          <h2>${fr ? 'Process complet' : 'Complete process'}</h2>
          ${processRail(content[page.lang].home.process)}
        </div>
        <div class="media-frame" data-reveal>
          <img src="${images.workshop}" alt="${fr ? 'Atelier de confection Actual Textiles' : 'Actual Textiles garment workshop'}" loading="lazy">
        </div>
      </div>
    </section>
    <section class="section alt">
      <div class="container cta-panel">
        <div>
          <h2>${esc(labels.ctaTitle)}</h2>
          <p>${esc(labels.ctaText)}</p>
        </div>
        <a class="button" href="${content[page.lang].ctaHref}">${esc(content[page.lang].cta)}</a>
      </div>
    </section>`;

  return layout(page, main);
}

function qualityPage(page) {
  const fr = page.lang === 'fr';
  const c = content[page.lang].home;
  const labels = fr ? {
    sections: [
      ['Contrôle de bout en bout', 'Le département qualité suit les produits depuis les matières premières en entrepôt jusqu’aux produits finis.'],
      ['Contrôleurs formés', 'Les contrôleurs qualité assistent à des sessions de formation et de retour d’expérience pour maintenir l’attention aux détails.'],
      ['Inspections structurées', 'Les contenus existants mentionnent des contrôles en cours de production, en finition et avant expédition.'],
      ['Laboratoires externes', 'La collaboration avec des laboratoires externes est citée pour appuyer la qualité des produits fabriqués.']
    ],
    certTitle: 'Certifications et référentiels cités',
    standardsTitle: 'Points à valider avant publication définitive',
    standards: ['Périmètre exact de chaque certification.', 'Dates de validité et organismes certificateurs.', 'Périmètre produits couvert par OCS, GOTS ou autres référentiels.', 'Documents qualité associés aux références AQL.']
  } : {
    sections: [
      ['End-to-end control', 'The quality department follows products from raw materials in the warehouse to finished garments.'],
      ['Trained controllers', 'Quality controllers attend training and feedback sessions to maintain attention to detail.'],
      ['Structured inspections', 'Existing content mentions checks during production, finishing and before shipment.'],
      ['External laboratories', 'Collaboration with external laboratories is cited to support garment quality.']
    ],
    certTitle: 'Certifications and cited standards',
    standardsTitle: 'Items to validate before final publication',
    standards: ['Exact scope of each certification.', 'Validity dates and certification bodies.', 'Product scope covered by OCS, GOTS or other standards.', 'Quality documents linked to AQL references.']
  };

  const main = `
    ${pageHero(page)}
    <section class="section tight">
      <div class="container">
        ${sectionHead(c.qualityTitle, c.qualityIntro)}
        ${mediaCardGrid(labels.sections, [images.quality, images.fabrics, images.production, images.workshop], 'four')}
      </div>
    </section>
    <section class="section alt">
      <div class="container split">
        <div class="media-frame" data-reveal>
          <img src="${images.quality}" alt="${fr ? 'Inspection qualité textile' : 'Textile quality inspection'}" loading="lazy">
        </div>
        <div class="stack" data-reveal>
          <h2>${esc(labels.standardsTitle)}</h2>
          ${list(labels.standards)}
          <p class="note">${esc(text[page.lang].certNote)}</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container stack">
        <h2>${esc(labels.certTitle)}</h2>
        ${certGrid(page.lang)}
      </div>
    </section>
    ${finalCta(page.lang)}`;

  return layout(page, main);
}

function sustainabilityPage(page) {
  const fr = page.lang === 'fr';
  const labels = fr ? {
    groups: [
      ['Environnement', ['Usine alimentée à l’énergie solaire selon le site actuel.', 'Collaborations locales pour recycler et upcycler les déchets de production.', 'Espaces verts, potager collaboratif, reforestation et décarbonation cités comme initiatives environnementales.']],
      ['Santé & sécurité', ['Nettoyage quotidien des unités de production et désinfections régulières.', 'Prévention mensuelle contre rongeurs et insectes.', 'Boîtes de premiers secours, collaborateurs formés et sessions annuelles par l’équipe médicale.']],
      ['Projets sociaux / communautés', ['Équipe médicale sur site avec consultations gratuites.', 'Soins dentaires, examens de la vision, médicaments essentiels et bilans de santé cités.', 'Sensibilisations internes sur prévention, nutrition, hygiène bucco-dentaire et eau potable.']]
    ]
  } : {
    groups: [
      ['Environment', ['Factory powered by solar energy according to the current site.', 'Local collaborations recycle and upcycle production waste.', 'Green spaces, a collaborative vegetable garden, reforestation and decarbonization are cited as environmental initiatives.']],
      ['Health & safety', ['Daily cleaning of production units and regular sanitization.', 'Monthly professional pest-control interventions.', 'First-aid kits, trained employees and annual sessions led by the medical team.']],
      ['Social projects / communities', ['On-site medical team with free consultations.', 'Dental care, vision checks, essential medication and health checks are cited.', 'Internal awareness sessions on prevention, nutrition, dental hygiene and drinking water.']]
    ]
  };

  const main = `
    ${pageHero(page)}
    <section class="section tight">
      <div class="container">
        ${sectionHead(content[page.lang].home.commitmentsTitle, content[page.lang].home.commitmentsIntro)}
        ${sustainabilityCards(labels)}
      </div>
    </section>
    <section class="section alt tight">
      <div class="container split">
        <div class="stack" data-reveal>
          <h2>${fr ? 'Des engagements formulés avec prudence' : 'Carefully stated commitments'}</h2>
          <p>${fr ? 'La refonte conserve les preuves présentes sur le site existant et évite les promesses absolues non documentées.' : 'The redesign keeps proof points from the existing site and avoids undocumented absolute claims.'}</p>
          ${list(content[page.lang].home.commitments.map(([title, body]) => `${title} — ${body}`))}
        </div>
        <div class="media-frame" data-reveal>
          <img src="${images.sustainability}" alt="${fr ? 'Engagement environnemental Actual Textiles' : 'Actual Textiles environmental commitment'}" loading="lazy">
        </div>
      </div>
    </section>
    ${finalCta(page.lang)}`;

  return layout(page, main);
}

function aboutPage(page) {
  const fr = page.lang === 'fr';
  const labels = fr ? {
    missionTitle: 'Mission',
    mission: 'Accompagner les marques de mode dans une production textile de qualité, claire dans son organisation et responsable dans ses pratiques.',
    story: [
      ['Depuis 2002', 'Actual Textiles développe sa réputation depuis sa création et travaille avec des marques internationales citées sur le site actuel.'],
      ['Madagascar comme avantage', 'La zone franche d’Antananarivo, le savoir-faire textile local et les régimes d’export cités soutiennent une production compétitive.'],
      ['Une organisation métier', 'Commercial, développement produit, coupe, couture, finition, inspection et logistique travaillent autour du même parcours client.']
    ],
    teamTitle: 'Une équipe présentée plus sobrement',
    teamText: 'La page met l’accent sur les départements et les responsabilités plutôt que sur de longs blocs biographiques.'
  } : {
    missionTitle: 'Mission',
    mission: 'Support fashion brands with quality garment production, clear organization and responsible practices.',
    story: [
      ['Since 2002', 'Actual Textiles has built its reputation since its creation and works with international brands cited on the current site.'],
      ['Madagascar as an advantage', 'The Antananarivo free zone, local textile know-how and cited export regimes support competitive production.'],
      ['A business-led organization', 'Sales, product development, cutting, sewing, finishing, inspection and logistics work around the same customer journey.']
    ],
    teamTitle: 'A more focused team story',
    teamText: 'The page emphasizes departments and responsibilities rather than long biographical sections.'
  };

  const main = `
    ${pageHero(page)}
    <section class="section tight about-story">
      <div class="container about-layout">
        <div class="mosaic-panel" data-reveal>
          <img class="mosaic-large" src="${images.madagascar}" alt="${fr ? 'Actual Textiles à Madagascar' : 'Actual Textiles in Madagascar'}" loading="lazy">
          <img class="mosaic-overlap" src="${images.workshop}" alt="${fr ? 'Atelier Actual Textiles' : 'Actual Textiles workshop'}" loading="lazy">
          <div class="mosaic-caption">
            <span>${fr ? 'Depuis 2002' : 'Since 2002'}</span>
            <strong>${fr ? 'Zone franche · Antananarivo' : 'Free zone · Antananarivo'}</strong>
          </div>
        </div>
        <div class="story-stack" data-reveal>
          <div class="mission-card">
            <p class="eyebrow">Actual Textiles</p>
            <h2>${esc(labels.missionTitle)}</h2>
            <p>${esc(labels.mission)}</p>
          </div>
          ${cardGrid(labels.story, 'one')}
        </div>
      </div>
    </section>
    <section class="section alt tight">
      <div class="container page-section-grid">
        <div data-reveal>
          <h2>${esc(labels.teamTitle)}</h2>
          <p>${esc(labels.teamText)}</p>
        </div>
        <div class="media-frame" data-reveal>
          <img src="${images.sales}" alt="${fr ? 'Équipe Actual Textiles' : 'Actual Textiles team'}" loading="lazy">
        </div>
      </div>
    </section>
    ${references(page.lang)}
    ${finalCta(page.lang)}`;

  return layout(page, main);
}

function talentsPage(page) {
  const fr = page.lang === 'fr';
  const labels = fr ? {
    cultureTitle: 'Culture d’entreprise',
    culture: [
      ['Savoir-faire transmis', 'Une culture d’atelier où les compétences textile se développent au contact des équipes.'],
      ['Qualité et précision', 'Chaque poste contribue au respect des exigences client et des standards de finition.'],
      ['Santé et sécurité', 'Des actions de prévention et un accompagnement médical sont cités dans les contenus existants.']
    ],
    offerTitle: 'Offre à confirmer',
    offer: 'Le site actuel mentionne un poste de responsable département textile. Cette offre doit être confirmée avant publication.',
    formTitle: 'Candidature spontanée'
  } : {
    cultureTitle: 'Company culture',
    culture: [
      ['Know-how transfer', 'A workshop culture where textile skills grow through team practice.'],
      ['Quality and precision', 'Every role contributes to customer requirements and finishing standards.'],
      ['Health and safety', 'Prevention actions and medical support are cited in existing content.']
    ],
    offerTitle: 'Offer to confirm',
    offer: 'The current site mentions a textile department manager role. This opening should be confirmed before publication.',
    formTitle: 'Spontaneous application'
  };

  const main = `
    ${pageHero(page)}
    <section class="section tight">
      <div class="container">
        ${sectionHead(labels.cultureTitle, fr ? 'Une page recrutement plus claire, orientée candidat.' : 'A clearer recruitment page, focused on candidates.')}
        ${mediaCardGrid(labels.culture, [images.social, images.workshop, images.sustainability], 'three')}
      </div>
    </section>
    <section class="section alt tight">
      <div class="container split">
        <div class="stack" data-reveal>
          <h2>${esc(labels.offerTitle)}</h2>
          <p>${esc(labels.offer)}</p>
          <!-- TODO métier : confirmer les postes ouverts, intitulés, profils et dates de publication. -->
          <p class="note">${fr ? 'Postes, intitulés, profils et dates de publication à confirmer avant mise en ligne.' : 'Open roles, titles, profiles and publication dates should be confirmed before go-live.'}</p>
        </div>
        ${form(page.lang, labels.formTitle, true)}
      </div>
    </section>`;

  return layout(page, main);
}

function contactPage(page) {
  const fr = page.lang === 'fr';
  const t = text[page.lang].contact;
  const main = `
    ${pageHero(page)}
    <section class="section tight">
      <div class="container split">
        <div class="stack" data-reveal>
          <h2>${fr ? 'Coordonnées' : 'Contact details'}</h2>
          <article class="card"><h3>${esc(t.addressTitle)}</h3><p>${esc(t.address)}</p></article>
          <article class="card"><h3>${esc(t.phoneTitle)}</h3><p><a href="tel:+261202327766">${esc(t.phone)}</a></p></article>
          <article class="card"><h3>${esc(t.emailTitle)}</h3><p><a href="mailto:${esc(t.email)}">${esc(t.email)}</a></p></article>
          <article class="card"><h3>${esc(t.faxTitle)}</h3><p>${esc(t.fax)}</p></article>
        </div>
        ${form(page.lang, fr ? 'Votre demande' : 'Your request')}
      </div>
    </section>`;

  return layout(page, main);
}

function form(locale, title, talent = false) {
  const l = text[locale].labels;
  const subjects = text[locale].subjects;
  const fileField = talent ? `
    <div class="field full">
      <label for="files-${locale}">${esc(l.files)}</label>
      <input id="files-${locale}" name="files" type="file" accept=".pdf,.doc,.docx,.zip">
    </div>` : '';

  return `
    <form class="card form-grid" action="mailto:info@actualtextiles.com" method="post" enctype="text/plain" data-reveal>
      <div class="field full"><h2>${esc(title)}</h2></div>
      <div class="field">
        <label for="name-${locale}">${esc(l.name)}</label>
        <input id="name-${locale}" name="name" autocomplete="name" required>
      </div>
      <div class="field">
        <label for="company-${locale}">${esc(l.company)}</label>
        <input id="company-${locale}" name="company" autocomplete="organization">
      </div>
      <div class="field">
        <label for="email-${locale}">${esc(l.email)}</label>
        <input id="email-${locale}" name="email" type="email" autocomplete="email" required>
      </div>
      <div class="field">
        <label for="phone-${locale}">${esc(l.phone)}</label>
        <input id="phone-${locale}" name="phone" type="tel" autocomplete="tel">
      </div>
      <div class="field full">
        <label for="subject-${locale}">${esc(l.subject)}</label>
        <select id="subject-${locale}" name="subject" required>
          ${subjects.map((subject) => `<option>${esc(talent && subject === 'Talents' ? subject : subject)}</option>`).join('')}
        </select>
      </div>
      ${fileField}
      <div class="field full">
        <label for="message-${locale}">${esc(l.message)}</label>
        <textarea id="message-${locale}" name="message" maxlength="1200" required></textarea>
      </div>
      <label class="consent-row field full">
        <input type="checkbox" name="consent" required>
        <span>${esc(l.consent)}</span>
      </label>
      <div class="field full">
        <button class="button" type="submit">${esc(l.send)}</button>
      </div>
    </form>`;
}

function newsPage(page) {
  const main = `
    ${pageHero(page)}
    <section class="section tight">
      <div class="container">
        ${newsCards(page.lang, 3)}
      </div>
    </section>
    ${finalCta(page.lang)}`;

  return layout(page, main);
}

function renderPage(page) {
  switch (page.type) {
    case 'production': return productionPage(page);
    case 'quality': return qualityPage(page);
    case 'sustainability': return sustainabilityPage(page);
    case 'about': return aboutPage(page);
    case 'talents': return talentsPage(page);
    case 'contact': return contactPage(page);
    case 'news': return newsPage(page);
    default: throw new Error(`Unknown page type: ${page.type}`);
  }
}

write('index.html', home('en'));
write('fr/index.html', home('fr'));

for (const page of pages) {
  write(page.path, renderPage(page));
}

write('robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://www.actualtextiles.com/sitemap.xml\n');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${['/', '/fr/', ...pages.map((page) => hrefFor(page.path.replace(/index\.html$/, '')))].map((url) => `  <url><loc>https://www.actualtextiles.com${url}</loc></url>`).join('\n')}
</urlset>
`);

console.log(`Built ${pages.length + 2} pages.`);
