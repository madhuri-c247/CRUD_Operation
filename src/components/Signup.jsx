import React, { useState } from 'react';

const Signup = () => {
     
    const task2 = () =>{
       
        let payload = {
            id: 1,
            firstName: 'John',
            lastName: 'Bob',
            email: 'john.doe@yopmail.com'}

            Object.defineProperties(payload, {id: {
                writable: false //mention true for writable
            }})

        // payload.id  = 2
        console.log(payload.id)
    }

    const Task1 = () =>{
        let flag = "false";
        console.log(flag==false)
    }

    const submit = (e) =>{
        e.preventDefault();
        console.log("submit" , e);
        setSubmitted(true);
        
    }
    
    const [name, setName] = useState('')
    const [skills, setSkills] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [submitted, setSubmitted] = useState(false)


    return (
        <>
        <div className="signup-head" >
       {submitted?
       <div className='data-div'>
            <span>Name: {name}</span>
            <span>Email: {email}</span>
            <span>Number: {number}</span>
            <span>Gender: {gender}</span>
            <span>Address: {address}</span>
            <span>Skills: {skills}</span>

            <button className='submit-btn register' onClick={()=>setSubmitted(false)} style={{width:'30%'}}>Register</button>
       </div>
    :
    <form className='signup-main' onSubmit={submit} >
        <h2>Sign Up</h2>

        <div className="name input-div">


        <label htmlFor="name"> Name : </label>
        <input className='input' type="text" required onChange={(event) =>setName(event.target.value)} />            
        </div>

        <div className="email input-div">

        <label htmlFor="email"> Email : </label>
        <input className='input'  type="email" required onChange={(event)=>setEmail(event.target.value)} />            
        </div>
        <div className="password input-div">
        <label htmlFor="password"> Password : </label>
        <input className='input' type="password" required onChange={(event)=>setPassword(event.target.value)} />            
        </div>
        <div className="number input-div">

        <label htmlFor="number"> Phone : </label>
        <input type="number" className='input' required onChange={(event)=>setNumber(event.target.value)} />            
        </div>
        <div className="address input-div">

        <label htmlFor="address"> Address : </label>
        <input type="text" className='input' required onChange={(event)=>setAddress(event.target.value)} />            
        </div>

        <div className='Skills input-div'>

        <label htmlFor="skills">Skills : </label>

         <select  name="skills" id="skills" value={skills} onChange={(event)=> setSkills(event.target.value)}>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">Javascript</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
            <option value="MongoDB">MongoDB</option>
         </select>
        </div>

        <div className='radio-gender '>
        <div className="male-radio inner-radio">
        <input type="radio" name='gender' value="Male" onChange={(e)=>setGender(e.target.value)}/>            
        <label htmlFor="Male" name='Male'>Male</label> </div>
        <div className="female-radio inner-radio">
        <input type="radio" name='gender' value="Female" onChange={(e)=>{setGender(e.target.value);}}/>            
        <label htmlFor="Female">Female</label>
        </div>

        <div className="others-radio inner-radio">        
        <input type="radio" name='gender' value="Others" onChange={(e)=>setGender(e.target.value)}/>            
        <label htmlFor="Other">Others</label>
        </div> 
        </div>
{/* <div className="checkbox">
<input type="checkbox" name="terms" id="terms" />
<span>I Agree</span>
</div> */}
        <input type="button" value="Submit" onClick={(e)=>submit(e)} className='submit-btn' />
    </form>
    }
    </div>
       
        </>

    );
}

export default Signup;
