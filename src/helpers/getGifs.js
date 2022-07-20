import PropTypes from "prop-types";

export const getGifs = async (category) => {
  const API_KEY = "8qUeVcS0xJkgNHdnO7RCqnIrohsbULUl";

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit&offset=0&rating=g&lang=en`;

  const response = await fetch(url);

  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.url,
  }));

  return gifs;
};

getGifs.propTypes = {
  category: PropTypes.string.isRequired,
};
