// English copy — the source-of-truth resource shape. `id.ts` must match this shape.
// Structural/visual data (colors, icons, initials) stays in components; only text lives here.

const en = {
  meta: {
    title: 'Tampilo — Get Your Business Online',
    description:
      'Tampilo builds affordable, professional landing pages and online stores for small businesses. Look credible and start selling online — from just a few hundred thousand rupiah.',
  },

  common: {
    consultFree: 'Free Consultation',
    consultFreeWa: 'Free Consultation on WhatsApp',
    seePricing: 'See Pricing',
    orderWhatsapp: 'Order via WhatsApp',
    askWhatsapp: 'Ask us on WhatsApp',
    visitWebsite: 'Visit Website',
  },

  lang: {
    switch: 'Switch language',
    en: 'EN',
    id: 'ID',
  },

  nav: {
    primary: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    links: {
      services: 'Services',
      pricing: 'Pricing',
      how: 'How It Works',
      portfolio: 'Portfolio',
      work: 'Our Work',
      faq: 'FAQ',
    },
  },

  hero: {
    badge: 'Digital solutions for Indonesian small businesses',
    title: { before: 'Your business,', highlight: 'online', after: 'made effortless' },
    subtitle:
      'Get a professional <strong>landing page</strong> and <strong>online store</strong> for your business — polished, affordable, and free of confusing tech jargon.',
    stats: [
      { value: '7–14', unit: 'days', label: 'Fast turnaround' },
      { value: '350K', unit: 'from', label: 'Honest pricing' },
      { value: '100%', unit: '', label: 'Mobile-friendly' },
    ],
    ratingChip: 'Happy clients',
    socialNote: 'Sharing every day on Instagram & TikTok — @{{handle}}',
  },

  problem: {
    eyebrow: 'Common challenges',
    title: 'Business is busy — but it feels stuck?',
    subtitle:
      'Piled-up chats. Missed orders. Hesitant buyers. These three problems keep many small businesses from leveling up.',
    items: [
      {
        title: 'Hard to earn buyer trust',
        desc: 'Selling only through a regular IG account — with no website — makes buyers hesitate. Competitors with a landing page instantly look more convincing.',
      },
      {
        title: 'Orders lost in the chaos',
        desc: 'Orders pour in through WhatsApp, DMs, and comments all at once. They get missed, hard to track, and buyers get confused about how to order.',
      },
      {
        title: 'No clean way to sell',
        desc: 'Your catalog lives in Stories and every price needs a DM. No cart, no checkout — buyers who hate asking simply walk away.',
      },
    ],
    bridgeTop: 'The good news? All three have a solution —',
    bridgeBottom: 'and Tampilo is built to deliver it.',
  },

  services: {
    eyebrow: 'Two service lines',
    title: 'One partner, two ways to grow',
    subtitle:
      'Start by looking professional, then move up to selling online — or do both at once.',
    items: [
      {
        tag: 'Look Professional',
        title: 'Landing Page',
        desc: 'A single, focused web page that convinces visitors and guides them toward one action — order, contact, or sign up.',
        features: [
          'Modern, mobile-friendly design',
          'WhatsApp button wired up directly',
          'Delivered in 7–14 working days',
          'Revisions until you’re happy',
        ],
        cta: 'See Landing Page Plans',
      },
      {
        tag: 'Sell Online',
        title: 'Online Store',
        desc: 'A simple way to sell online — a tidy product catalog, shopping cart, and easy checkout. Perfect for small businesses.',
        features: [
          'Product catalog with photos & prices',
          'Shopping cart & checkout',
          'Self-serve product management',
          'Checkout via WhatsApp / transfer / COD',
        ],
        cta: 'See Online Store Plans',
      },
    ],
  },

  pricing: {
    eyebrow: 'Honest, transparent pricing',
    title: 'Starting from just a few hundred thousand',
    subtitle:
      'You don’t need a big budget to look professional. Pick the plan that fits your business.',
    tabLanding: 'Landing Page',
    tabStore: 'Online Store',
    popular: 'Most Popular',
    landing: [
      {
        name: 'Basic',
        price: 'Rp 350K – 500K',
        desc: 'Get online quickly.',
        features: [
          '1 page (1–3 sections)',
          'Mobile-friendly design',
          'WhatsApp button',
          '1 revision',
        ],
      },
      {
        name: 'Standard',
        price: 'Rp 800K – 1.5M',
        desc: 'Best for small businesses that want to look professional.',
        features: [
          '5–7 complete sections',
          'Light copywriting',
          'Order form / page',
          'Social media integration',
          '2 revisions',
        ],
      },
      {
        name: 'Premium',
        price: 'Rp 2M – 3.5M',
        desc: 'The complete package with domain & hosting.',
        features: [
          'Fully custom design',
          'Professional copywriting',
          '.com domain + 1-year hosting',
          'Animations & interactions',
          'Basic SEO',
          'Unlimited revisions',
        ],
      },
    ],
    store: [
      {
        name: 'Store Basic',
        price: 'Rp 1M – 2M',
        desc: 'Show your products neatly online.',
        features: [
          'Product catalog with photos & prices',
          'Mobile-friendly layout',
          'Checkout via WhatsApp',
          '1 revision',
        ],
      },
      {
        name: 'Store Standard',
        price: 'Rp 2.5M – 4.5M',
        desc: 'A complete online store with cart & admin panel.',
        features: [
          'Catalog + shopping cart',
          'Self-serve product management',
          'Simple shipping fees',
          'Transfer / COD checkout',
          '2 revisions',
        ],
      },
      {
        name: 'Store Premium',
        price: 'Rp 5M and up',
        desc: 'A full-featured store with a payment gateway.',
        features: [
          'Everything in Standard',
          'Payment gateway (QRIS / auto transfer)',
          'Domain + hosting',
          'Basic sales reports',
          'Unlimited revisions',
        ],
      },
    ],
    addOnsTitle: 'Add-Ons — Extra Services',
    addOns: [
      { label: 'Copywriting per page', price: 'Rp 150K' },
      { label: 'Domain + hosting setup / year', price: 'Rp 300K' },
      { label: 'Monthly maintenance', price: 'Rp 100K–300K/mo' },
      { label: 'Add / update store products', price: 'Rp 50K/batch' },
      { label: 'Logo design', price: 'Rp 250K' },
    ],
    note: '* Prices may change at any time. Start with a free consultation for the best offer.',
  },

  why: {
    eyebrow: 'Why Tampilo?',
    title: 'Built for small businesses',
    subtitle:
      'We get what small businesses go through — so every service is designed to be easy, affordable, and ready to use right away.',
    items: [
      {
        title: 'Fast Delivery',
        desc: 'Done in 7–14 working days. No waiting for months — your business gets online sooner.',
      },
      {
        title: 'Friendly Pricing',
        desc: 'Starting at Rp 350,000. Perfect for small businesses on a tight budget that still want professional results.',
      },
      {
        title: 'Professional Results',
        desc: 'Modern, mobile-friendly design that looks premium — without the premium price tag.',
      },
      {
        title: 'No Tech Jargon',
        desc: 'We speak plain language. No confusing technical terms to slow you down.',
      },
    ],
  },

  how: {
    eyebrow: 'How it works',
    title: 'Just 4 simple steps',
    subtitle:
      'The process is simple and transparent — you always know what’s being worked on. Done in 7–14 days.',
    steps: [
      {
        step: '01',
        title: 'DM / Contact Us',
        desc: 'Reach Tampilo on WhatsApp or DM us on Instagram @{{handle}}. Tell us what your business needs.',
      },
      {
        step: '02',
        title: 'Free Consultation',
        desc: 'We talk it through — which plan fits, what content to prepare, and an estimate of cost & timeline.',
      },
      {
        step: '03',
        title: 'We Get to Work',
        desc: 'Our team starts building. You can track progress and share feedback. Revisions are included in your plan.',
      },
      {
        step: '04',
        title: 'Launch & Go Live!',
        desc: 'Your website is ready, you receive the result, and your business is officially online. We support you until you’re happy.',
      },
    ],
  },

  testimonials: {
    eyebrow: 'Client testimonials',
    title: 'Small businesses that leveled up',
    subtitle:
      'One honest testimonial beats a hundred promo posts. Here are stories from small businesses now looking professional and selling online.',
    ratingLabel: 'Rating {{count}} out of 5',
    items: [
      {
        name: 'Ibu Sari',
        business: 'Homemade Cakes & Snacks',
        location: 'Surabaya',
        text: 'Orders used to slip through the cracks on WhatsApp. Now I have my own landing page where buyers can see the menu and order right away. It looks so clean and was done fast!',
      },
      {
        name: 'Mas Rizal',
        business: 'Custom T-Shirt Workshop',
        location: 'Bandung',
        text: 'The Tampilo team was incredibly patient with someone like me who isn’t tech-savvy. Fair pricing, professional results — and I landed 3 new clients in the first week my site went live!',
      },
      {
        name: 'Kak Dewi',
        business: 'Freelance MUA',
        location: 'Jakarta',
        text: 'My portfolio and bookings now live on one tidy page. Clients just click, see my work, and message me on WhatsApp. My inquiries jumped right after switching to Tampilo!',
      },
    ],
    stats: [
      { value: '50+', label: 'Projects Delivered' },
      { value: '100%', label: 'Happy Clients' },
      { value: '7–14 days', label: 'Average Turnaround' },
    ],
  },

  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Work we’ve shipped',
    subtitle:
      'A few landing pages & online stores we’ve built for small businesses. Click to see them live.',
    catLanding: 'Landing Page',
    catStore: 'Online Store',
    items: [
      { name: 'Kopi Senja', category: 'landing', desc: 'Coffee shop landing page with menu & WhatsApp order button.' },
      { name: 'Dapur Bunda Catering', category: 'store', desc: 'Catering package catalog with transfer & COD checkout.' },
      { name: 'Hijab Anaya', category: 'store', desc: 'Muslim fashion online store with cart & self-serve product management.' },
      { name: 'Studio Lumen', category: 'landing', desc: 'Photography portfolio & booking on one clean page.' },
      { name: 'Garda Barbershop', category: 'landing', desc: 'Haircut booking landing page with a results gallery.' },
      { name: 'Rotan Jaya Craft', category: 'store', desc: 'Rattan craft store with a product catalog & shipping.' },
    ],
  },

  showcase: {
    eyebrow: 'Work & Content',
    title: 'Sharing every day',
    subtitle:
      'Education, tips, showcases, and behind the scenes — we show up consistently for Indonesian small businesses.',
    follow: 'Follow @{{handle}}',
    posts: [
      'Before & After — a Tampilo client',
      'Behind the scenes — how Tampilo works',
      'Basic Landing Page plan — from Rp 350,000',
      '5 signs your business needs an online store',
      'Meet Tampilo — digital solutions for small businesses',
      'Tampilo’s 2 services: landing pages & online stores',
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Frequently asked questions',
    subtitle: 'Still have questions? Reach us directly on WhatsApp.',
    askCta: 'Ask us directly on WhatsApp',
    items: [
      {
        q: 'How long does it take?',
        a: 'Landing pages usually take 7–14 working days depending on the plan and how complete your content is. Online stores take 10–21 working days. We keep you updated on progress throughout.',
      },
      {
        q: 'I don’t have content or product photos yet — can you still help?',
        a: 'Absolutely! We offer a copywriting add-on to help write your content. For photos, we can use illustrations or placeholders first — and you can update them later. Book a free consultation to learn more.',
      },
      {
        q: 'Can I update the website myself once it’s done?',
        a: 'For Online Store plans (Standard and up), yes — you get an admin panel to manage products yourself. For landing pages, we offer periodic update add-ons or a monthly maintenance plan.',
      },
      {
        q: 'Is the website mobile-friendly?',
        a: '100% — everything we build is optimized to look perfect on phones, since most small-business visitors come from mobile.',
      },
      {
        q: 'How does payment work?',
        a: 'Payment is via bank transfer (BCA, Mandiri, BRI, BNI) or e-wallet (GoPay, OVO, Dana). We ask for a 50% deposit upfront, with the rest due once the website is finished and you’re happy.',
      },
    ],
  },

  cta: {
    title: 'Ready to get online?',
    subtitle:
      'Start with a free consultation — tell us about your business and we’ll help map out the best solution. No strings, no cost.',
    trustPoints: ['Free consultation', 'No obligation', 'Quick to respond'],
  },

  footer: {
    tagline:
      'Digital services for small businesses — helping you look professional and sell online: fast, affordable, and hassle-free.',
    navTitle: 'Navigation',
    contactTitle: 'Contact Us',
    links: {
      landing: 'Landing Page',
      store: 'Online Store',
      pricing: 'Pricing',
      portfolio: 'Portfolio',
      work: 'Work & Content',
      faq: 'FAQ',
    },
    igAria: 'Tampilo on Instagram',
    tiktokAria: 'Tampilo on TikTok',
    copyright: '© {{year}} Tampilo. Built with passion for Indonesian small businesses.',
    credits: 'Fharhan · Yana · Tfan — Entrepreneurship Final Project',
  },

  wa: {
    konsultasi: 'Hi Tampilo, I’d like a free consultation for my business',
    paket: 'Hi Tampilo, I’m interested in the {{paket}} plan',
    tanya: 'Hi Tampilo, I’d like to ask about your services',
  },
}

export default en
export type Resources = typeof en
