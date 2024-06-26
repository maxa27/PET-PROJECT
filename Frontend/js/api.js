const api_key = "6759826979521ff9e502e8f1b48b2541";
const header = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzU5ODI2OTc5NTIxZmY5ZTUwMmU4ZjFiNDhiMjU0MSIsInN1YiI6IjY2M2I3OThmOTM2YTc5ZTM5NTBiNTMyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rpTVNbFW8w272Tp-b-7HwCYZiARxxeW8gZHEqOWhT4s";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/**
 * fetch data from a server using the "url" and passes
 * the result in JSON data to a "callback" function,
 * along with an optional parameter if has "optionalParam".
 */
async function fetchDataFromServer(url, callback, optionalParam) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': `Bearer ${header}`
      }
    });
    const data = await response.json();
    if (callback) {
      callback(data, optionalParam);
    }
  } catch (e) {
    console.error(e);
  }
}

export { api_key, imageBaseURL, fetchDataFromServer };


