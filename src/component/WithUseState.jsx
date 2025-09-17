import { useState } from "react";
import colors from "../utils/colordata";

const WithUseState = () => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("Deep Blue");
  const [colorCode, setColorCode] = useState("#003f5c");
  function changeColor() {
    const nextIndex = (index + 1) % colors.length;
    setIndex(nextIndex);
    setColor(colors[nextIndex].name);
    setColorCode(colors[nextIndex].hex);
    console.log(`from "useState"{Component} color Name "${colors[nextIndex].name}" => colorCode "${colors[nextIndex].hex}" => indexNumber ${nextIndex}`)
  }
  return (
    <div id="WithuseState">
      <h1 className="heading SecondHeading">With useState</h1>
      <div className="changecolorbox2">
        <span>i love <strong style={{color:colorCode}}>{color}</strong> color</span>
      </div>
      <div className="btn2 btn" onClick={changeColor} style={{color:colorCode}}>
        {color}
      </div>
    </div>
  );
};

export default WithUseState;
