// import url from "./URL";

//flatteb
export const flattenProducts = (data) => {
  return data.map((item) => {
    //cloudinary
    let image = (item.image && item.image.url) || null;
    //local
    // let image = `${url}${item.image.url}`;
    return { ...item, image };
  });
};
// helper functions
export const featuredProducts = (data) => {
  return data.filter((item) => {
    return item.featured === true;
  });
};
