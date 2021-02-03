export const add_blog = (data) => {
  console.log(data);
  return {
    type: "ADD_BLOG",
    payload: data,
  };
};
export const fetch_blog = (data) => {
  console.log(data);
  return {
    type: "FETCH_BLOG",
    payload: data,
  };
};

export const last_blog = (data) => {
  const lastBlog = data[data.length - 1];

  return {
    type: "LAST_BLOG",
    payload: lastBlog,
  };
};

export const add_categories = (data) => {
  return {
    type: "ADD_CATEGORIES",
    payload: data,
  };
};
