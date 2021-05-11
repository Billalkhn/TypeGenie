import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
var Algorithmia = require("algorithmia");

const Editor = () => {
  const [PreduictData, setPredictData] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === 'Tab' && e.shiftKey) {         
      console.log("Detected Shift+Enter")
    }
    else if (e.keyCode === 27) {         
      console.log("Detected ESC")
    }
    else if (e.key === "Tab" || e.keyCode === 9) {         
      console.log("Detected Tab")
    }
    
    
  }







  useEffect(() => {
    var input = { sentence: "I" };
    Algorithmia.client("your Api")
      .algo("PetiteProgrammer/AutoComplete/0.1.2?timeout=300")
      .pipe(input)
      .then(function (response) {
        setPredictData(response.get());
      });
  });

  console.log(PreduictData);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Here we will use the data and also recommend or predict some words to complete the sentence</p>"
        onReady={(editor) => {
          console.log(
            "Here we will use the data and also recommend or predict some words to complete the sentence",
            editor
          );
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};
export default Editor;
