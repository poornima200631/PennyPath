import { useState } from 'react'
import '../CSS/Signup.css'
import Navbar from './Navbar';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    fetch("https://686b6a81e559eba908726d59.mockapi.io/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        expenses: []
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("loggedInUser", email);
        localStorage.setItem("userId", data.id);
        window.location.href = "/expenses";
      });
  };
  
  return (
   <div >
    <Navbar/>
    <div className='box'>
    <div className='forms'>
    <form onSubmit={handleSignup}>
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

  <button type="submit" className="butta">Submit</button>
</form>

      <img src="/images/ppl.png" className='imgan' />
    </div>
    <div className='instruct'>
    <h2 className="heading">📌 How to Use <span className="brand">PennyPath</span></h2>
  <ul className="instruction-list">
    <li><span>✅</span> Click on <b>Sign up</b> to register using your email.</li>
    <li><span>➡️</span> After signing up, you will be taken to your personal expense tracker.</li>
    <li><span>📝</span> Add your expenses by entering the title, amount, and date.</li>
    <li><span>🗑️</span> Click <b>Delete</b> to remove any expense.</li>
    <li><span>☁️</span> Your data is saved online — log in anytime using the same email.</li>
  </ul>
    </div>
     
   </div>
   </div>
  );
}




export default Signup;
