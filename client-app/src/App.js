import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import { jwtDecode } from 'jwt-decode';
import Signup from './pages/sign/Sign Up/Signup';
import Signin from './pages/sign/Sign In/Signin';
import Chat from './pages/chat/Chat'
import Contact from './pages/contact/Contact'
import Messages from './pages/chat/MessagesBlock'

// {isAuthenticated()? <Signup />: "You are Allowed to access this page"}

function App() {
  const isAuthenticated = () => {
    // Check if the authentication token is present and not expired
    const token = localStorage.getItem('authToken'); // Assuming you store the token in localStorage
    if (token) {
      // Decode the token and check expiration if needed
      // You might use a library like jwt-decode for this
      const decodedToken = jwtDecode(token);
  
      // Check if the token is expired
      const isTokenExpired = decodedToken.exp < Date.now() / 1000;
      console.log(decodedToken)
      return !isTokenExpired;
    }
    return false;
  };
  
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signin/>} />
            <Route path='chat' element={<Chat/>}>
              <Route path='messages' element={<Messages/>} />
              <Route path='contact' element= {<Contact/>}/>
            </Route>
            
        </Routes>
      </BrowserRouter>

    </>
    
  );
}

export default App;
