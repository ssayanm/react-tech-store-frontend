// import url from "./URL";

//flatten
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

// pagination
export const paginate = (products) => {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);

  // const newProducts = Array.from({ length: numberOfPages }, () => {
  //   return products.splice(0, itemsPerPage);
  // });

  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });
  return newProducts;
};
