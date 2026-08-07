export type Service = {
  id: string
  name: string
  guests: string
  duration: string
  price: string
  description: string
  includes?: string[]
}

export const services: Service[] = [
  {
    id: 'group-steam-ritual',
    name: 'Shared Steam Ritual',
    guests: 'Up to 4 guests',
    duration: '45 minutes',
    price: '€60',
    description:
      'Designed for guests who want to experience traditional steam rituals without booking a complete individual session. Guests enjoy approximately 10 minutes under aromatic bath brooms in a relaxing steam environment.',
    includes: ['Aromatic broom treatment', 'Shared parilka session', 'Cold plunge access'],
  },
  {
    id: 'individual-steam-ritual',
    name: 'Individual Steam Ritual',
    guests: '1 guest',
    duration: '30 minutes',
    price: '€40',
    description:
      'A fully personalised steam ritual for guests seeking a traditional premium experience, guided one-to-one by a master banshchik.',
    includes: ['Private parilka session', 'Personal broom master', 'Herbal infusion pour', 'Cool-down ritual'],
  },
  {
    id: 'body-scrub',
    name: 'Salt & Honey Scrub',
    guests: '1 guest',
    duration: '15 minutes',
    price: '€20',
    description:
      'Natural exfoliation treatment using premium ingredients to refresh the skin and improve circulation.',
    includes: ['Mineral salt exfoliation', 'Raw honey glaze', 'Warm rinse'],
  },
]

export const treatments: Service[] = [
  {
    id: 'honey-wrap',
    name: 'Warm Honey Body Wrap',
    guests: '1 guest',
    duration: '40 minutes',
    price: '€50',
    description:
      'A deeply nourishing wrap of raw forest honey and botanical oils, sealing in heat and softening the skin after the steam.',
  },
  {
    id: 'signature-ritual',
    name: 'Signature Ember Ritual',
    guests: '1 guest',
    duration: '60 minutes',
    price: '€60',
    description:
      'Our complete flagship journey — layered steam, double broom treatment, cold plunge, and a restorative herbal tea service.',
  },
  {
    id: 'aroma-massage',
    name: 'Aroma Oil Massage',
    guests: '1 guest',
    duration: '45 minutes',
    price: '€40',
    description:
      'A slow, warming massage with house-blended aromatic oils to release tension held deep in the body.',
  },
]

export type Broom = {
  id: string
  name: string
  price: string
  description: string
  image: string
}

export const brooms: Broom[] = [
  {
    id: 'birch',
    name: 'Birch',
    price: '€15',
    description: 'Traditional choice with deep, penetrating heat.',
    image: '/images/broom-birch.png',
  },
  {
    id: 'oak',
    name: 'Oak',
    price: '€15',
    description: 'Soft aroma and gentle, enveloping steam.',
    image: '/images/broom-oak.png',
  },
  {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    price: '€15',
    description: 'Refreshing aroma that supports easier breathing.',
    image: '/images/broom-eucalyptus.png',
  },
  {
    id: 'herbal',
    name: 'Wild Herb',
    price: '€15',
    description: 'Relaxing herbal fragrance of linden and meadow flowers.',
    image: '/images/broom-herbal.png',
  },
  {
    id: 'fir',
    name: 'Fir & Juniper',
    price: '€15',
    description: 'Premium dense needles with exceptional heat retention.',
    image: '/images/broom-fir.png',
  },
]

export type MenuItem = {
  name: string
  description: string
  price: string
}

export type MenuCourse = {
  course: string
  image: string
  items: MenuItem[]
}

export const menu: MenuCourse[] = [
  {
    course: 'To Begin',
    image: '/images/food-starter.png',
    items: [
      {
        name: 'Cured River Trout',
        description: 'House-cured trout, pickled cucumber, dill oil, rye crisp.',
        price: '€18',
      },
      {
        name: 'Forest Mushroom Broth',
        description: 'Slow-simmered wild mushrooms, smoked cream, toasted barley.',
        price: '€14',
      },
      {
        name: 'Beetroot & Aged Cheese',
        description: 'Charred beetroot, cellar-aged cheese, walnut, honey.',
        price: '€16',
      },
    ],
  },
  {
    course: 'Main Fire',
    image: '/images/food-main.png',
    items: [
      {
        name: 'Ember-Grilled Lamb',
        description: 'Coal-grilled lamb, roasted roots, juniper jus.',
        price: '€34',
      },
      {
        name: 'Whole Baked Pike-Perch',
        description: 'Butter-basted pike-perch, brown butter, herbs, lemon.',
        price: '€30',
      },
      {
        name: 'Root Vegetable Roast',
        description: 'Fire-roasted seasonal roots, smoked yoghurt, seeds.',
        price: '€24',
      },
    ],
  },
  {
    course: 'To Finish',
    image: '/images/food-dessert.png',
    items: [
      {
        name: 'Honey & Berry Tart',
        description: 'Forest honey custard, wild berries, cultured cream.',
        price: '€12',
      },
      {
        name: 'Warm Rye Cake',
        description: 'Spiced rye sponge, sea-buckthorn, burnt caramel.',
        price: '€11',
      },
      {
        name: 'Herbal Tea Service',
        description: 'A selection of house-dried herbs and honeycomb.',
        price: '€9',
      },
    ],
  },
]

export type GalleryImage = {
  src: string
  alt: string
  span?: boolean
}

export const gallery: GalleryImage[] = [
  {
    src: '/images/gallery-steam.png',
    alt: 'Interior of the steam room with dense atmospheric steam and dark oak benches',
    span: true,
  },
  { src: '/images/gallery-pool.png', alt: 'Dark stone cold plunge pool reflecting candlelight' },
  { src: '/images/gallery-fire.png', alt: 'Wood-burning sauna stove with glowing embers and rising steam' },
  { src: '/images/gallery-lounge.png', alt: 'Warm relaxation lounge with linen daybeds and lanterns' },
  {
    src: '/images/gallery-exterior.png',
    alt: 'Exterior of the bathhouse at twilight nestled in a misty forest',
    span: true,
  },
  { src: '/images/gallery-tea.png', alt: 'Herbal tea ritual laid out on a dark wooden tray' },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The most restorative evening I have had in years. Every detail — the light, the scent of birch, the silence — felt considered. We arrived tense and left weightless.',
    name: 'Eleonora V.',
    detail: 'Private booking · 4 guests',
  },
  {
    quote:
      'Not a spa, a sanctuary. The broom master guided the ritual with real craft, and the dinner prepared before we arrived was extraordinary. Worth every minute.',
    name: 'Marcus D.',
    detail: 'Signature Ember Ritual',
  },
  {
    quote:
      'We booked the full three hours and could have stayed all night. Cinematic, intimate, and genuinely authentic. This is how wellness should feel.',
    name: 'Sofia & Lena',
    detail: 'Shared Steam Ritual',
  },
  {
    quote:
      'The attention to authenticity is remarkable — from the fir brooms to the herbal infusions poured over the stones. A rare, exclusive escape.',
    name: 'Henrik L.',
    detail: 'Individual Steam Ritual',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'How long is a reservation?',
    answer:
      'Every private booking is reserved for a minimum of three hours. This ensures you never feel rushed — time to steam, plunge, rest, and repeat the ritual at your own pace. Longer sessions can be arranged on request.',
  },
  {
    question: 'How many guests can join a private session?',
    answer:
      'Our private house comfortably hosts up to eight guests. Steam rituals are tailored to your group, whether that is an intimate visit for one or a celebration with friends.',
  },
  {
    question: 'Can we order food and drinks?',
    answer:
      'Yes. Guests may order from our restaurant-style menu during their visit, or arrange a complete lunch or dinner to be prepared before arrival so it is ready the moment you step out of the steam.',
  },
  {
    question: 'What are bath brooms and do I need one?',
    answer:
      'The bath broom, or venik, is central to the traditional steam ritual — bundles of aromatic leaves used to gently massage the body and circulate heat. We offer birch, oak, eucalyptus, wild herb, and fir & juniper, each €15. Your broom master will recommend the right one for you.',
  },
  {
    question: 'What should I bring?',
    answer:
      'Simply bring yourself. We provide robes, linens, slippers, and all ritual essentials. Arrive fifteen minutes early to settle in and be welcomed with a warm herbal infusion.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Reservations may be rescheduled or cancelled free of charge up to 48 hours before your session. Within 48 hours, a 50% fee applies as our private house is reserved exclusively for you.',
  },
]

export const serviceOptions = [
  ...services.map((s) => s.name),
  ...treatments.map((t) => t.name),
]