import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import './App.css';

function App() {
  return (
    <div className='mainContainer'>
      <div className='flexBoxContainer'>
        <div className='leftFlexBox'>
          <img className='logo' src='/images/logo.svg' alt="Logo with the word Huddle"></img>
          <img className='heroImage' src='/images/illustration-mockups.svg' alt="Illustration of desktop and mobile view"></img>
        </div>
        <div className='rightFlexBox'>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <button className='registerButton'>Register</button>
        </div>
      </div>
      <div className='socialIcons'>
        <FaFacebookF className='icon'/>
        <FaTwitter className='icon'/>
        <FaInstagram className='icon'/>
      </div>
    </div>
  );
}

export default App;
