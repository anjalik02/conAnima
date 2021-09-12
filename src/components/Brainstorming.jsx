import React from "react";

function Brainstorming() {
  return (
    <div>
      <h1>Brainstorming</h1>
      <div className="note1">
        <p>
        </p>
          <textarea name="Note1TextBox" cols={27} rows={10} style={{backgroundColor: '#ffdddd', border: '3px solid #ffdddd'}} defaultValue={"        "} />
          <textarea name="Note2TextBox" cols={27} rows={10} style={{backgroundColor: '#ddffdd', border: '3px solid #ddffdd'}} defaultValue={"        "} />
          <textarea name="Note4TextBox" cols={27} rows={10} style={{backgroundColor: '#ffffcc', border: '3px solid #ffffcc'}} defaultValue={"        "} />
          <textarea name="Note3TextBox" cols={27} rows={10} style={{backgroundColor: '#e7f3fe', border: '3px solid #e7f3fe'}} defaultValue={"        "} />
          <textarea name="Note5TextBox" cols={27} rows={10} style={{backgroundColor: '#CBC3E3', border: '3px solid #CBC3E3'}} defaultValue={"        "} />
          <textarea name="Note6TextBox" cols={27} rows={10} style={{backgroundColor: '#fed8b1', border: '3px solid #fed8b1'}} defaultValue={"        "} />
          <textarea name="Note8TextBox" cols={27} rows={10} style={{backgroundColor: '#D3D3D3', border: '3px solid #D3D3D3'}} defaultValue={"        "} />
          <textarea name="Note7TextBox" cols={27} rows={10} style={{backgroundColor: '#FFB6C1', border: '3px solid #FFB6C1'}} defaultValue={"        "} />
          <br />
      </div>
    </div>
  );
}

export default Brainstorming;