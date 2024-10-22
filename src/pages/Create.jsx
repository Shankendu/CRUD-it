import { useState } from 'react';
import { toast } from 'react-toastify';
import "./create.css"
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const[name,setName] =useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");

    const navigate = useNavigate();

    const handleSubmit=event=>{
        event.preventDefault();
        if (name == "") {
            toast.warning("Enter your name!")
        }else if (email == "") {
            toast.warning("Enter your email!")
        } else if (phone == "") {
            toast.warning("Enter your phone!")
        }else{
            let payload = {name ,email,phone};
            fetch("http://localhost:8000/users",{
                method:"POST",
                body:JSON.stringify(payload)
            })
            .then(()=>{
                toast.success("User Created Successfully");
                navigate("/");
            })
            .catch(()=>toast.error("User Not Created"))
        }
        
    }
  return (
    <section id='formBlock'>
        <article>
            <h2>Create User</h2>
            <form onSubmit={handleSubmit}>
                <div className="formgroup">
                    <label>Username </label>
                    <input type="text" placeholder='Enter username'
                    onChange={(event)=>setName(event.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <label>Email </label>
                    <input type="email" placeholder='Enter email'
                    onChange={(event)=>setEmail(event.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <label>Phone No </label>
                    <input type="tel" placeholder='Enter phone number' maxLength={10} minLength={10}
                    onChange={(event)=>setPhone(event.target.value)}
                    />
                </div>
                <div className="formgroup">
                    <input type="submit" value="Create User"/>
                </div>
            </form>
        </article>
    </section>
  )
}

export default Create