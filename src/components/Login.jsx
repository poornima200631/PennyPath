import { useState } from 'react'
import '../CSS/Login.css'
import Navbar from './Navbar';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    fetch("https://686b6a81e559eba908726d59.mockapi.io/api/v1/users")
      .then(res => res.json())
      .then(users => {
        const matchedUser = users.find(
          user => user.email === email && user.password === password
        );

        if (matchedUser) {
          localStorage.setItem("loggedInUser", email);
          localStorage.setItem("userId", matchedUser.id);
          window.location.href = "/expenses";
        } else {
          setError("Invalid email or password 😥");
        }
      });
  };
  
  return (
   <div >
    <Navbar/>
    <div className='form'>
    <form onSubmit={handleLogin}>
          <label htmlFor="Email">Email-address:</label>
          <input
            type="text"
            placeholder="abc@gmail.com"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />

          <label htmlFor="Password">Password:</label>
          <input
            type="text"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />

          <button type="submit" className="butt">Login</button>
        </form>
        {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
      <img src="/images/ppl.png" className='imga' />
    </div>
    
   </div>
  );
}




export default Login;
