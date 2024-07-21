import './App.css';
// import Navigation from './component/Navigation/Navigation.js';
import Footer from './component/Footer/Footer.js';
import DetailUI from './component/DetailUI/DetailUI.js';
import { Link, Route, Routes } from 'react-router-dom';
import NavigationUI from './component/NavigationUI/NavigationUI.js';
import About from './component/About/About.js';
import Contact from './component/Contact/Contact.js';
import News from './component/News/News.js';
import OrchidsUI from './component/OrchidsUI/OrchidsUI.js';


import { useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode"
import { Button, Icon } from 'react-materialize';
import { ThemeContext } from './component/ThemeContext';
import Add from './component/Add/Add';


function App() {



  const [APIData, setAPIData] = useState([])

  const { theme, toggle, dark } = useContext(ThemeContext)

  const [user, setUser] = useState({})

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    var decoded = jwtDecode(response.credential);
    console.log(decoded);
    setUser(decoded);
    document.getElementById('buttonDiv').hidden = true;
  }
  const handleLogOut = (e) => {
    setUser({});
    document.getElementById('buttonDiv').hidden = false;
  }
  useEffect(() => {
    /* global google*/
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "445671209507-ttfcqdr2jogd8laupl5dg38d6h8fe3a2.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }
      );
      google.accounts.id.prompt();
    }
  }, []);

  return (
    <>
      <div style={{ width: '100%', marginTop: '60px', backgroundColor: theme.backgroundColor, color: theme.color, display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
        <div id='buttonDiv' style={{ margin: '20px 0 10px 500px', width: '30%' }}></div>
        {Object.keys(user).length !== 0 &&
          <Button style={{ marginTop: '15px', marginLeft: '320px', color: theme.color }}
            className='btn-logout'
            onClick={handleLogOut}>
            <Icon left>exit_to_app</Icon>Logout
          </Button>
        }
        {user &&
          <div style={{ width: '70%' }}>
            <h6 style={{ padding: '10px', marginBottom: '0' }}>
              {user.name ? <Icon left style={{ fontSize: '1cm' }}>account_circle</Icon> : ''} {user.name}
              {user.name ? <Button className='add-btn'>
                <Icon left style={{ fontSize: '0.8cm', marginLeft: '20px' }}>add</Icon>
                <Link to='/add' className='add-btn-name'>Add ORCHIDS</Link>
              </Button> : ''}
            </h6>
          </div>
        }
      </div>

      <div>
        {/* <Navigation/> */}
        <NavigationUI />
        <Routes>
          {/* <Route path='/' element={<Orchids/>}> </Route> */}
          <Route path='/' element={<OrchidsUI user={user}/>}> </Route>
          <Route path='/detail/:id' element={<DetailUI user={user}/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/add' element={<Add/>}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
