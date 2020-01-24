import React from 'react';




class Footer extends React.Component{
render(){
    return(
        <div id="foot">
    <div className="footer">
      <a className="links">ABOUT US</a>
      <a className="links">CULTURE & Traditional</a>
      <a className="links">HELP</a>
      <a className="links">CAREERS</a>
      <a className="links">PRESS</a>


    </div>
    <div className="footer">
    
    <a className="links">TERMS & CONDITIONS</a>
    <a className="links">PRIVACY</a>
    <a className="links">SECURITY</a>
    <a className="links">MODERN SLAVERY STATEMENT</a>
    <a className="links">COOKIE SETTINGS</a>
  
</div>
<div className="footer">

   <img className="links" src={require('../assets/insta.png')}/>
   <img className="links" src={require('../assets/gmail.png')}/>
   <img className="links" src={require('../assets/phone.png')}/>
   <img className="links" src={require('../assets/fb.png')}/>
   <img className="links" src={require('../assets/twiter.png')}/>
   <img className="links" src={require('../assets/chrome.png')}/>
</div>
        </div>
    )


    
}
}
  export default Footer;