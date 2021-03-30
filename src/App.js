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
      <div style={{marginBottom:100,padding:20,width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <Message content='new yungjake project?'/>
        <Message sender content={`yea, shitty emojisyungjake is bringing his art to the hands of his fans and new collectors, with a project called “shitty emojis” <a href="https://opensea.io/collection/shitty-emojis">https://opensea.io/collection/shitty-emojis</a>`}/>
        <Footer/>
        <div style={{
          display:'flex',
        }}>
          <img className='emoji-image' src={punk11} alt="punk 11"/>
          <img className='emoji-image' src={punk12} alt="punk 12"/>
        </div>
        <div style={{
          display:'flex',
        }}>
          <img className='emoji-image' src={punk11} alt="punk 11"/>
          <img className='emoji-image' src={punk12} alt="punk 12"/>
        </div>
        <Message content='what are shitty emojis?'/>
        <Message sender content='they’re a set of 1,000 original pieces done by yungjake on his iphone app emoji.ink.'/>
        <Message content='how much is a shitty emoji?'/>
        <Message sender content='PRICING CHART HERE'/>
        <Message content='when can i get a shitty emoji?'/>
        <Message sender content='drops start on monday, march 29, at 7PM PST.'/>
        <Message content='how often will you drop shitty emojis?'/>
        <Message sender content='every day, join the discord: <a href="https://discord.gg/f2V5bXrYtR">https://discord.gg/f2V5bXrYtR</a>'/>
        <Message content='are there unique shitty emojis or are they all random?'/>
        <Message sender content='genesis ultra-shitty is a 1/1. the shittiest are 1/4. pretty shitty emojis are a 1/14. the shitty emoji team has [CHOOSE NAME] 1/40. the final shitty emojis are 991-999, 1/8. and the last shitty emoji will be on auction and is a 1/1.'/>
        <Message content='what makes up the shitty emojis?'/>
        <Message sender content='the 1-of shitty emojis are a bit more unique and shitty, and the drop shitty emojis are random but still all unique. there will be emoji make up stats on each random shitty emoji.'/>
        <Message content='is this yungjakes first nft project?'/>
        <Message sender content='no, yungjake sold his emoji portraits on foundation and zora. 
kanye - 57 ETH [LINK <a href="https://zora.co/yungjake/2206">https://zora.co/yungjake/2206</a>]
elon - 57 ETH [LINK <a href="https://zora.co/yungjake/2208">https://zora.co/yungjake/2208</a>]
daft punk - 57 ETH [LINK <a href="https://zora.co/yungjake/2209">https://zora.co/yungjake/2209</a>]
yungjake (genesis) - 13.43 ETH LINK [<a href="https://foundation.app/yungjake/yungjake-6416">https://foundation.app/yungjake/yungjake-6416</a>]
billie - 8.8 ETH LINK [<a href="https://foundation.app/yungjake/billie-11098">https://foundation.app/yungjake/billie-11098</a>]'/>
<Message content='where can i learn more about yungjake?'/>
<Message sender content='
instagram: <a href="https://www.instagram.com/yungjake">https://www.instagram.com/yungjake</a>
twitter: <a href="https://twitter.com/yungjake">https://twitter.com/yungjake</a>
discord: <a href="https://discord.gg/f2V5bXrYtR">https://discord.gg/f2V5bXrYtR</a>
opensea: <a href="https://opensea.io/collection/shitty-emojis">https://opensea.io/collection/shitty-emojis</a>
'/>
    </div>
      
    </div>
  );
}

export default App;
