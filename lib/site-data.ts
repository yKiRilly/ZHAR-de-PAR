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
      'A traditional steam ritual in a relaxed shared setting, featuring aromatic bath brooms and approximately 10 minutes of gentle steam for a deeply refreshing experience.',
    includes: [
      'Aromatic broom treatment',
      'Shared parilka session',
      'Cold plunge access',
      'Aromatic steam infusion',
    ],
  },

  {
    id: 'individual-steam-ritual',
    name: 'Individual Steam Ritual',
    guests: '1 guest',
    duration: '30 minutes',
    price: '€40',
    description:
      'A fully personalised steam ritual for guests seeking a traditional premium experience, guided one-to-one by a master banshchik. A deeply immersive ritual designed around your comfort.',
    includes: [
      'Private parilka session',
      'Personal broom master',
      'Herbal infusion pour',
      'Cool-down ritual',
    ],
  },

  {
    id: 'body-scrub',
    name: 'Salt & Honey Scrub',
    guests: '1 guest',
    duration: '15 minutes',
    price: '€20',
    description:
      'Natural exfoliation treatment using premium ingredients to refresh the skin and improve circulation. A warm ritual that leaves the skin renewed, nourished and beautifully soft.',
    includes: [
      'Mineral salt exfoliation',
      'Warm rinse',
      'Raw honey glaze',
      'Deep skin renewal',
    ],
  },
]

export const treatments: Service[] = [
  {
    id: 'grill',
    name: 'GRILL',
    guests: '',
    duration: '',
    price: '€40',
    description:
      'Barbecue area for a leisurely dinner outdoors. Light a fire, cook meat or vegetables, open something cold and stay for an evening in the middle of nature.',
  },

  {
    id: 'baptismal-font',
    name: 'BAPTISMAL FONT',
    guests: '',
    duration: '',
    price: '€50',
    description:
      'A cold baptismal font after the steam room helps complete the bath ritual and leaves you feeling refreshed. Hot steam, cool water and fresh nature air all around.',
  },

  {
    id: 'jacuzzi',
    name: 'JACUZZI',
    guests: '',
    duration: '',
    price: '€80',
    description:
      'A warm and relaxing jacuzzi experience designed to help release tension and slow down after the steam ritual.',
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
    description:
      'Mild fragrance, light massage and traditional bath effect. It is suitable for relaxation, improves blood circulation and leaves a pleasant feeling of lightness.',
    image: '/photos/brooms/birch.jpg',
  },

  {
    id: 'oak',
    name: 'Oak',
    price: '€15',
    description:
      'Classics of the Russian bath tradition. Dense oak leaves retain steam well, creating a deep and intense warm-up.',
    image: '/photos/brooms/oak.jpg',
  },

  {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    price: '€15',
    description:
      'It refreshes your breath, helps you relax and creates a light fragrance in the steam room. It is especially good for deep warming up and feeling fresh.',
    image: '/photos/brooms/eucalyptus.jpg',
  },

  {
    id: 'canadian',
    name: 'Canadian Oak',
    price: '€15',
    description:
      'Larger and denser than the classic oak broom. It creates thick steam and is particularly durable.',
    image: '/photos/brooms/canadian.jpg',
  },
]

export type GalleryImage = {
  src: string
  alt: string
  span?: boolean
}

export const gallery: GalleryImage[] = [
  {
    src: '/photos/galery/saunainside.PNG',
    alt: 'ZHAR de PAR sauna interior',
    span: true,
  },

  {
    src: '/photos/galery/font.PNG',
    alt: 'Cold plunge at ZHAR de PAR',
  },

  {
    src: '/photos/galery/firearea.PNG',
    alt: 'Fire area at ZHAR de PAR',
  },

  {
    src: '/photos/galery/relaxarea.PNG',
    alt: 'Relaxation area at ZHAR de PAR',
  },

  {
    src: '/photos/galery/windowview.PNG',
    alt: 'Nature view from ZHAR de PAR',
    span: true,
  },

  {
    src: '/photos/galery/grill.PNG',
    alt: 'Grill area at ZHAR de PAR',
  },

  {
    src: '/photos/ps/viewps.PNG',
    alt: 'ZHAR de PAR surrounded by nature',
  },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'It is a very beautiful place. I liked that the sauna was really surrounded by nature, and not just a "sauna with an interior". After the steam, we went to the font, then sat by the fire. The perfect evening.',
    name: 'Alina N.',
    detail: '',
  },

  {
    quote:
      'ZHAR de PAR pleasantly surprised me. Quiet, green, no fuss. A separate thrill is the atmosphere itself: wood, fire, the smell of the steam room. We spent three hours here and did not want to leave at all.',
    name: 'Michael Prohorov',
    detail: '',
  },

  {
    quote:
      'We were looking for a place where you can relax with company without feeling like an ordinary SPA. The mood here is completely different. It is very cozy, beautiful and real. We will definitely come back.',
    name: 'Ekaterina Chuiko',
    detail: '',
  },

  {
    quote:
      'It is a good sauna, but it is not even the main thing here. Nature, silence, fire, cold water after a steam bath — everything adds up to one very proper rest. It is a rare place where you really disconnect from the city.',
    name: 'Artyom Minailov',
    detail: '',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Is it possible to rent for more than 3 hours?',
    answer:
      'Yes, by prior arrangement, you can rent the sauna for more than 3 hours.',
  },

  {
    question: 'Will the sauna be ready for our arrival?',
    answer:
      'Yes. We will prepare everything in advance for your arrival: we will heat the sauna, prepare the relaxation space and take care of the necessary details. All you have to do is arrive at the appointed time and enjoy your rest. You will need to add firewood yourself, but if there is any problem, someone will be available to help you.',
  },

  {
    question: 'What should I take with me?',
    answer:
      'The main thing is a good mood. We will provide everything you need for your stay.',
  },

  {
    question: 'Is it possible to come with a large company?',
    answer:
      'Yes. Unlike many traditional bathhouses, we do not have separate men’s and women’s days, so you can enjoy the space together with a larger company.',
  },

  {
    question: 'How do I book a sauna?',
    answer:
      'Fill out the form on the website and leave your contact details. Our manager will then contact you. Prepayment is made after you speak with our manager.',
  },

  {
    question: 'Can we order food?',
    answer:
      'Yes, but it is better to arrange this in advance so that your dinner arrives on time.',
  },
]

export const serviceOptions = [
  ...services.map((s) => s.name),
  ...treatments.map((t) => t.name),
]