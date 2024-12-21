import "server-only";

export const getMovieByPath = (path, language = 'fr-FR') => {
  //on viens définir l'url
  const url = new URL(`${process.env.TMDB_API_URL}`);
  //on viens ajouter des seach params à notre url (query string dans l'url)
  url.searchParams.append('api_key', process.env.TMBD_API_KEY);
  url.searchParams.append('language', language);

  //la fonction retourne la réponse en json
  return fetch(url).then(res => res.json());
}