import React, { useState } from "react";
import CKEditor from "ckeditor4-react";
const Input = () => {
  const [val, setVal] = useState("");
  const handleChange = (e, editor) => {
    const data = e.editor.getData();
    setVal(data);
  };
  return (
    <div>
      <CKEditor data={val} onChange={handleChange} />
    </div>
  );
};

export default Input;
