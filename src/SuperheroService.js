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
      .then((res) => res.data.results);
  }
}

export default SuperheroService;
