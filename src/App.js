import React,{useState} from 'react';
import "./App.css"

function App() {
  //hooks for deciding hover or not hover
const [focus, setFocus] = useState(false);
//hooks for setting position
const [position, setPosition] = useState("top")

const hoverIn=()=>{
setFocus(true);
}
const hoverOut=()=>{
  setFocus(false);
  }
  const visible={display:focus?"block":"none"}
  function handleClick(e){

    setPosition(e.target.value
    )
  }
  return (
    <div className="App">
      <h1>Tooltip</h1>
      <div className='btns'>
        <div className='btn'><button onClick={handleClick} value="top">Top</button></div>
        <div className='btn'><button onClick={handleClick} value="bottom">Bottom</button></div>
        <div className='btn'><button onClick={handleClick} value="right">Right</button></div>
        <div className='btn'><button onClick={handleClick} value="left">Left</button></div>
      </div>
      <div className='hover'>
        <button onMouseOver={hoverIn} onMouseOut={hoverOut}>Hover over me</button>
        <div className={position} style={visible}>Thanks for Hovering! I am in {position} tooltip</div>
      </div>
    </div>
  );
}

export default App;
