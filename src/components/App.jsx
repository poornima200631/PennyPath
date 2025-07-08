import {Routes,Route} from 'react-router-dom'
import Home_Page from './Home_Page'
import Login from './Login'
import Expense_Tracker from './Expense_Tracker'
import Signup from './Signup'

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Home_Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/expenses" element={<Expense_Tracker />} />
      <Route path="/signup" element={<Signup />} /> 
    </Routes>
  )
}
export default App;

