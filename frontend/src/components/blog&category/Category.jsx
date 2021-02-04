import axios from "axios";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { add_categories } from "../../redux/actions/allActions";
import "./Category.css";

const Category = ({ categories, add_categories }) => {
  useEffect(async () => {
    const result = await axios.get("https://myvicharbackend.herokuapp.com/api/category");
    console.log(result);
    add_categories(result.data);
    console.log(categories);
  }, []);
  return (
    <div>
      <h1>Category</h1>
      <div className="categories">
        {categories.map((data) => (
          <button style={{ backgroundImage: `url(${data.image})` }} className="category-button" key={data.id}>
            <div className="overlay">{data.category}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.blogsReducer.categories,
  };
};

export default connect(mapStateToProps, { add_categories })(Category);