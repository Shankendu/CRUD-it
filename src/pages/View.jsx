import { useParams } from 'react-router-dom'
import "./view.css"
import { useEffect, useState } from 'react';
import axios from 'axios';


const View = () => {
    let {id} = useParams()
    const [users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/users/"+id)
        .then((res)=>{
            setUsers(res.data)
        })
    },[])
    
  return (
    <>
      <div className="container">
        <div className="card">
            <section className="upper">
                <div className="imgDiv">
                    <div className="avatar"></div>
                </div>
            </section>
            <section className="lower">
                <div className="descDiv">
                    <h1 className="heading">{users.name}</h1>
                    <div className='line'></div>
                    <p className='para-head'>Email</p>
                    <p className="para">{users.email}</p>
                    <p className='para-head'>Phone No.</p>
                    <p className="para">{users.phone}</p>
                </div>
            </section>
        </div>
      </div>
    </>
  )
}

export default View
