import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {SetUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault() 
        SetUser({userName, password})
    }

  return (
   
   <div>

    <h2>Log In</h2>

    <input type="text"
    placeholder='username'
    value={userName}
    onChange={(e) => setUsername(e.target.value)}
    />
     {" "}
     
    <input type="text"
    placeholder='password'
    value={password}
    onChange={(e) => setPassword(e.target.value)}

    />

    <button onClick={handleSubmit}>Submit</button>
</div>
  )
}

export default Login