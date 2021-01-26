export const add_blog = (data) => {
  console.log(data);
  return {
    type: "ADD_BLOG",
    payload: data,
  };
};

export const last_blog = (data) => {
  const lastBlog = data[data.length - 1];
  console.log(lastBlog);
  return {
    type: "LAST_BLOG",
    payload: lastBlog,
  };
};
