import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationsEn = {
  inputPlaceholder: 'Movie search',
  toggleBtnsPopMovies: 'Popular',
  toggleBtnsTopMovies: 'Top rated',
  toggleBtnsUpMovies: 'Upcoming',
  searchResl: 'Search results',
  actor: {
    birth: 'Birthday:',
    place: 'Place of birth:',
    bio: 'Biography:',
    photos: 'Photos',
    known: 'Known by'
  },
  movie: {
    title: 'Title:',
    overview: 'Overview:',
    release: 'Release date:',
    revenue: 'Revenue:',
    duration: 'Duration:',
    showAllCast: 'Show all',
    hideAllCast: 'Hide all',
    cast: 'Top Billed Cast',
    images: 'Images',
    recommend: 'Recommendations'
  }
}
const translationsRu = {
  inputPlaceholder: 'Поиск фильмов',
  toggleBtnsPopMovies: 'Популярные',
  toggleBtnsTopMovies: 'Топовые',
  toggleBtnsUpMovies: 'Ожидаемые',
  searchResl: 'Результаты поиска',
  actor: {
    birth: 'Дата рождения:',
    place: 'Место рождения:',
    bio: 'Биография:',
    photos: 'Фотографии',
    known: 'Роли в фильмах'
  },
  movie: {
    title: 'Название:',
    overview: 'Описание:',
    release: 'Дата релиза:',
    revenue: 'Бюджет:',
    duration: 'Продолжительность:',
    showAllCast: 'Показать всех',
    hideAllCast: 'Скрыть всех',
    cast: 'Популярные актёры',
    images: 'Кадры фильма',
    recommend: 'Рекомендации'
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {translation: translationsEn},
      ru: {translation: translationsRu}
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {escapeValue: false}
  })

export default i18n;