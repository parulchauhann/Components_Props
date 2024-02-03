import './App.css';

import GallaryFooter from './components/GallaryFooter';
// import imageData from './components/Data';
import Header from './components/Header';
import Body from './components/Body';
function App(props) {
  return (
    <div>
      <Header/>
      {/* adding footer component */}
      <Body Data = {props.Data}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
