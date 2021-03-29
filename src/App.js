import './App.css';
import Nav from './Nav'
import Message from './Message'
import punk11 from './punk11.png'
import Footer from './Footer'
import punk12 from './punk12.png'
function App() {
  return (
    <div className="App">
      <Nav/>
      <div style={{padding:20,width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Message sender content='by yung jake Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/>
        <Message content='current auctions'/>
        <img className='emoji-image' src={punk11} alt="punk 11"/>
        <Message content='emoji punks 1
short description short description short description LINK TO OPEN SEA'/>
        <img className='emoji-image' src={punk12} alt="punk 12"/>
        <Message sender content='emoji punks 2
short description short description short description
LINK TO OPEN SEA
'/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
