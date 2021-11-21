const useHttp = async (url) => {
  const _apiBase = 'https://api.themoviedb.org/3/';
  const _apiKey = 'api_key=a60262500ac52b0699a0d49e7f802ffa';
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }

    const data =  await response.json();
    return data;

  } catch(error) {
    throw error;
  }
};

export default useHttp;