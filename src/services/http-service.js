export const httpService = () => {

  const request = async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
    try {
      const response = await fetch(url, {method, body, headers});
      if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch(e) {
      throw e;
    }
  };

  return {request};
}

export const _apiBase = 'https://api.themoviedb.org/3/';
export const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';