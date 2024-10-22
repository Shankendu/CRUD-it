import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./create.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/users/" + id)
      .then((res) => {
        console.log(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name == "") {
      toast.warning("Enter your name!")
  }else if (email == "") {
      toast.warning("Enter your email!")
  } else if (phone == "") {
      toast.warning("Enter your phone!")
  }else{
    let payload = { name, email, phone };
    axios
      .put("http://localhost:8000/users/" + id, payload)
      .then(() => {
        toast.success("User Updated Successfully")
        navigate("/");
      })
      .catch(() => {
        toast.error("User Not Updated!");
      });
  }
    
  };
  return (
    <section id="formBlock">
      <article>
        <h2>Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="formgroup">
            <label>Username </label>
            <input
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="formgroup">
            <label>Email </label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="formgroup">
            <label>Phone No </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              maxLength={10}
              minLength={10}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="formgroup">
            <input type="submit" value="Update User" />
          </div>
        </form>
      </article>
    </section>
  );
};

export default Update;
