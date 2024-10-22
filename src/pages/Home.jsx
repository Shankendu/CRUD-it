import { useEffect, useState } from "react";
import "./home.css";
import edit from "../assets/edit.png";
import deletepng from "../assets/delete.png";
import {NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import EmptyContainer from "./EmptyContainer";

const Home = () => {

  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users", { method: "GET" }).then((res) => {
      res.json().then((data) => {
        setUsers(data);
      });
    });
  }, []);

  const handleDelete = (id)=>{
    let confirm = window.confirm("Do you want to delete user?")
    if (confirm) {
     axios.delete("http://localhost:8000/users/"+ id)
      .then(()=>{
       toast.success("User Deleted Successfully!!")
       setTimeout(()=>{
        window.location.reload()
       },2000)
      })
    }
  }
  return (
    <>
      <section id="home">
        <article>
          <h2>List of Users</h2>
          <table>
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(users.length==0)? <EmptyContainer/>:users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td className="action-column">
                      <NavLink to={`/view/${user.id}`} className="btn btn-view">
                        View Detail
                      </NavLink>
                      <NavLink to={`/update/${user.id}`} className="edit">
                        <img src={edit} alt="edit" />
                        <h3>Edit</h3>
                      </NavLink>
                      <div className="delete" onClick={()=>handleDelete(user.id)}>
                        <img src={deletepng} alt="delete" />
                        <h3>Delete</h3>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
};

export default Home;
