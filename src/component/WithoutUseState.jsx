import colors from "../utils/colordata";

const WithoutUseState = () =>{
    // change color function
    let index = 0;
    let color = colors[index].name;
    let colorCode = colors[index].hex;

    function changeColor(){
        index = (index+1)%colors.length;
        color = colors[index].name;
        colorCode = colors[index].hex;
        console.log(`from "WithoutUseState"{Component} color Name "${color}" => colorCode "${colorCode}" => indexNumber ${index}`)
    }

    // component data
    return (
        <div id="WithoutuseState">
            <h1 className="heading firstHeading">Without useState</h1>
            <div className="changecolorbox1">
                <span>
                    i love {color} color
                </span>
            </div>
            <div className="btn1 btn" onClick={changeColor}>{color}</div>
        </div>
    )
}

export default WithoutUseState;