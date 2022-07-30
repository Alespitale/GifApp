import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import PropTypes from "prop-types";

export const useFetchGif = (category) => {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const getImgs = async () => {
    const newImgs = await getGifs(category);
    setImg(newImgs);
    setLoading(false);
  };

  useEffect(() => {
    getImgs(); // eslint-disable-next-line
  }, []);

  return {
    img,
    loading,
  };
};

useFetchGif.propTypes = {
  category: PropTypes.string.isRequired,
};
