import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGif = (category) => {
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const getImgs = async () => {
    const newImgs = await getGifs(category);
    setImg(newImgs);
    setLoading(false);
  };

  useEffect(() => {
    getImgs();
  },[category]);

  return {
    img,
    loading,
  };
};
