// import image from "../src/t.jpg"
import ek from "../src/ek.png"
import gx from "../src/gx.png"
import ax from "../src/ax.jpg"
import dc from "../src/dc.png"
import './App.css';

function App() {
  return (
    <div className='body'>
    <div className="App">
     <h1>Select logistics service vendor</h1> 
     {/* <img src={image} alt='Image'/> */}
     <div className='container'>  
      <button className='btn'>
        
        <div className='btn-data'>
        <div><img src={ek} alt="Ekart" className=" img-ctn"/></div>
        <div>xxx</div>
        </div>
        </button>
      <button className='btn'>
      <div className='btn-data'>
        <div><img src={gx} alt="gx express" className=" img-ctn"/></div> 
        <div>xxx</div>
        </div>
      </button>
      <button className='btn'>
      <div className='btn-data'>
       <div><img src={ax} alt="axis" className=" img-ctn"/> </div> 
       <div>xxx</div>
       </div>
      </button>

      <button className='btn'>
      <div className='btn-data'>
        <div><img src={dc} alt="DCL" className=" img-ctn"/></div>
        <div>xxx</div>
        </div> 
        </button>
      </div>
 
    
      <button className='btn'>
      <div className='btn--bottom'>
        Proceed
        </div> 
        </button>
      </div>
     </div>
  );
}

export default App;
