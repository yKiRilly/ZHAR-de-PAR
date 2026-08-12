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
    includes: ['Aromatic broom treatment', 'Shared parilka session', 'Cold plunge access', 'Aromatic steam infusion'],
  },
  {
    id: 'individual-steam-ritual',
    name: 'Individual Steam Ritual',
    guests: '1 guest',
    duration: '30 minutes',
    price: '€40',
    description:
      'A fully personalised steam ritual for guests seeking a traditional premium experience, guided one-to-one by a master banshchik. A deeply immersive ritual designed around your comfort.',
    includes: ['Private parilka session', 'Personal broom master', 'Herbal infusion pour', 'Cool-down ritual'],
  },
  {
    id: 'body-scrub',
    name: 'Salt & Honey Scrub',
    guests: '1 guest',
    duration: '15 minutes',
    price: '€20',
    description:
      'Natural exfoliation treatment using premium ingredients to refresh the skin and improve circulation. A warm ritual that leaves the skin renewed, nourished and beautifully soft.',
    includes: ['Mineral salt exfoliation','Warm Rinse', 'Raw honey glaze', 'Deep skin renewal'],
  },
]

export const treatments: Service[] = [
  {
    id: '',
    name: 'GRILL',
    guests: '',
    duration: '',
    price: '€40',
    description:
      'Barbecue area for a leisurely dinner outdoors. Light a fire, cook meat or vegetables, open something cold and just stay for an evening in the middle of nature.',
  },
  {
    id: '',
    name: 'BAPTISMAL FONT',
    guests: '',
    duration: '',
    price: '€50',
    description:
      'A cold baptismal font after the steam room helps to complete the bath ritual and feel a pleasant cheerfulness. Hot steam, cool water and fresh nature air all around.',
  },
  {
    id: '',
    name: 'JACUZZI',
    guests: '',
    duration: '',
    price: '€80',
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
    description: 'Mild fragrance, light massage and traditional bath effect. It is suitable for relaxation, improves blood circulation and leaves a pleasant feeling of lightness.',
    image: '/photos/brooms/birch.jpg',
  },
  {
    id: 'oak',
    name: 'Oak',
    price: '€15',
    description: 'Classics of the Russian bath tradition. Dense oak leaves retain steam well, creating a deep and intense warm-up.',

    image: '/photos/brooms/oak.jpg',
  },
  {
    id: 'eucalyptus',
    name: 'Eucalyptus',
    price: '€15',
    description: 'It refreshes your breath, helps you relax and creates a light fragrance in the steam room. It is especially good for deep warming up and feeling fresh.',
    image: '/photos/brooms/eucalyptus.jpg',
  },
  {
    id: 'canadian',
    name: 'Сanadian oak',
    price: '€15',
    description: 'It is larger and denser than the classic oak broom. It creates thick steam and is particularly durable.',
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
    alt: '',
    span: true,
  },
  {
    src: '/photos/galery/font.PNG',
    alt: '',
  },
  {
    src: '/photos/galery/firearea.PNG',
    alt: '',
  },
  {
    src: '/photos/galery/relaxarea.PNG',
    alt: '',
  },
  {
    src: '/photos/galery/windowview.PNG',
    alt: '',
    span: true,
  },
  {
    src: '/photos/galery/grill.PNG',
    alt: '',
  },
  {
    src: '/photos/galery/jicuzzi.PNG',
    alt: '',
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
      'It is a very beautiful place. I liked that the sauna was really surrounded by nature, and not just a "sauna with an interior". After the fall, they went to the font, then sat by the fire. The perfect evening.',
    name: 'Alina N.',
    detail: '',
  },
  {
    quote:
      'Dubъ pleasantly surprised me. Quiet, green, no fuss. A separate thrill is the atmosphere itself: wood, fire, the smell of the steam room. We spent three hours here and didnt want to leave at all.',
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
      'Yes, by prior arrangement, you can rent more than 3 hours. ',
  },
  {
    question: 'Will the sauna be ready for our arrival?',
    answer:
      'Yes. We will prepare everything in advance for your arrival: we will melt the sauna, prepare a space for relaxation and take care of the necessary details. All you have to do is arrive at the appointed time and set yourself up for a rest. You will need to add firewood yourself. But if there is any problem, we have someone who can help you. ',
  },
  {
    question: 'What should I take with me?',
    answer:
      'The main thing is a good mood. We will provide everything you need for your vacation. ',
  },
  {
    question: 'Is it possible to come with a large company?',
    answer:
      'Yes. The difference between our space is that we do not have a division into mens and womens days and we can have a good rest with a large company. ',
  },
  {
    question: 'How do I book a sauna?',
    answer:
      'You need to fill out a form on the website, leave a contact for communication, and our manager will contact you. Prepayment is paid after contacting our manager!',
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