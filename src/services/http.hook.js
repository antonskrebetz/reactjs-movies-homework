const getResource = async (url) => {
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    const data = await response.json();
    return data;
  } catch (error) {
      return error.message;
    }
}

export default getResource;