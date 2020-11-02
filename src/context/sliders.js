import React, { useEffect, createContext } from "react";
import axios from "axios";
import url from "../utils/URL";
export const SliderContext = createContext();

const SliderProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [sliders, setSliders] = React.useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}/sliders`).then((response) => {
      const sliders = response.data;
      setSliders(sliders);
      setLoading(false);
    });
    return () => {};
  }, []);

  return (
    <SliderContext.Provider
      value={{
        sliders,
        loading,
      }}
    >
      {children}
    </SliderContext.Provider>
  );
};

export default SliderProvider;
