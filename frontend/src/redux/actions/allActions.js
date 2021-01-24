export const add_blog = (data) => {
  console.log(data);
  return {
    type: "ADD_BLOG",
    payload: data,
  };
};
