export const translations = {
  en: {
    language: 'English',
    bookNow: 'Book Now',
    reserve: 'Reserve',
    addToRitual: 'Add to ritual',

    philosophy: 'Philosophy',
    rituals: 'Rituals',
    brooms: 'Brooms',
    gallery: 'Gallery',
    journal: 'Journal',
  },

  es: {
    language: 'Español',
    bookNow: 'Reservar',
    reserve: 'Reservar',
    addToRitual: 'Añadir al ritual',

    philosophy: 'Filosofía',
    rituals: 'Rituales',
    brooms: 'Escobas',
    gallery: 'Galería',
    journal: 'Preguntas',
  },

  ru: {
    language: 'Русский',
    bookNow: 'Забронировать',
    reserve: 'Забронировать',
    addToRitual: 'Добавить в ритуал',

    philosophy: 'Философия',
    rituals: 'Ритуалы',
    brooms: 'Веники',
    gallery: 'Галерея',
    journal: 'Вопросы',
  },

  uk: {
    language: 'Українська',
    bookNow: 'Забронювати',
    reserve: 'Забронювати',
    addToRitual: 'Додати до ритуалу',

    philosophy: 'Філософія',
    rituals: 'Ритуали',
    brooms: 'Віники',
    gallery: 'Галерея',
    journal: 'Питання',
  },
}

export type Language = keyof typeof translations