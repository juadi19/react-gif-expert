const getGifs = async (category) => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=OQ173EYeEtTaJGy4lw5wqmaumaZTbnEm&q=${category}&limit=10`
    );
    const { data } = await response.json();
    return data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getGifs;
