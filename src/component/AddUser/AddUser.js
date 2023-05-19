import { useState } from "react"
import './AddUser.css';

const AddUser = () => {
   const [email, setEmail ] = useState('');
   const [password, setPassword] = useState ('');

   const AddNewUser = () => {
          const newUser = {
            email,
            password, 
            id: Math.random(),
            Date: new Date()
          }
         console.table (
            newUser
         )

         setEmail('');
         setPassword('')

   }
       return(
       <div className="form-group">
         <h1>Add New Data</h1>
        <div className="form-control">
          <lable html for = 'email'>Email</lable>
         <input
          type='text' 
          value={email} 
          onChange={e =>setEmail(e.target.value)} 
          />
       </div>

       <div className="form-control">
          <lable html for = 'password'>Password</lable>
         <input
            type='password' 
             value={password} 
            onChange={e =>setPassword(e.target.value)} 
           />

            </div>
   
            <button className="bt-add" onclick ={AddNewUser}> Add </button>
       </div>
   )

}

export default AddUser;