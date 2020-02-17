const apiKey = 'ef3d682c4cae3eee2c9b35b5f3dacc3b';
const baseURL = 'https://gateway.marvel.com';

class SuperheroService {
  static getHeroes() {
    return fetch(`${baseURL}/v1/public/characters?series=9085&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((res) => res.data.results);
  }

  static getHero(id) {
    return fetch(`${baseURL}/v1/public/characters/${id}?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((res) => res.data.results[0])
      .then((res) => Promise.all(
        [SuperheroService.getSeriesForHero(id),
          SuperheroService.getComicsForHero(id)],
      ).then(([series, comics]) => ({
        name: res.name,
        image: `${res.thumbnail.path}.${res.thumbnail.extension}`,
        series,
        comics,
      })));
  }

  static getSeriesDetails(id) {
    return fetch(`${baseURL}/v1/public/series/${id}?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((res) => res.data.results[0])
      .then((res) => SuperheroService.getComicsInSeries(id).then((comics) => ({
        title: res.title,
        description: res.description,
        rating: res.rating,
        run: `${res.startYear} - ${res.endYear === 2099 ? 'On going' : res.endYear}`,
        image: `${res.thumbnail.path}.${res.thumbnail.extension}`,
        comics,
      })));
  }

  static getSeriesForHero(heroId) {
    return fetch(`${baseURL}/v1/public/characters/${heroId}/series?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((res) => res.data.results);
  }

  static getComicsForHero(heroId) {
    return fetch(`${baseURL}/v1/public/characters/${heroId}/comics?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((res) => res.data.results);
  }

  static getComicsInSeries(seriesId) {
    return fetch(`${baseURL}/v1/public/series/${seriesId}/comics?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((res) => res.data.results);
  }
}

export default SuperheroService;
