import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHTMlParser from "react-html-parser";
const Input = () => {
  const [val, setVal] = useState("");
  const [showData, setShowData] = useState(0);
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setVal(data);
  };
  const handleShowData = (e) => {
    setShowData(!showData);
  };
  return (
    <div>
      <button onClick={handleShowData}>{showData ? "Hide Data" : "Show Data"}</button>
      <CKEditor editor={ClassicEditor} data={val} onChange={handleChange} />
      <div>{showData ? ReactHTMlParser(val) : ""}</div>
    </div>
  );
};

export default Input;
