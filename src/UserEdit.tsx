import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UserEdit: React.FC = () => {
  const { userid } = useParams();

  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(true);

  const addingElement = { id, name, email, phone, active };

  useEffect(() => {
    fetch("http://localhost:3000/users/" + userid)
      .then((res) => res.json())
      .then((res) => {
        setId(res.id);
        setEmail(res.email);
        setName(res.name);
        setPhone(res.phone);
        setActive(res.active);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/users/" + userid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addingElement),
    })
      .then((res) => {
        console.log(res);
        alert("all were added");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="userCreateBox">
      <form onSubmit={handleSubmit}>
        <div className="fieldBox">
          <label htmlFor="id">ID</label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            id="id"
            type="text"
          />
        </div>

        <div className="fieldBox">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
          />
        </div>

        <div className="fieldBox">
          <label htmlFor="phone">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="text"
          />
        </div>

        <div className="fieldBox">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
          />
        </div>

        <div className="fieldBox">
          <label htmlFor="act">Active</label>
          <input
            checked={active}
            onChange={(e) => setActive(e.target.checked)}
            id="act"
            type="checkbox"
          />
        </div>

        <div className="fieldBox">
          <div className="fieldBoxBtns">
            
          <div className="btnWrapper">    
              <button className="btn" type="submit">
                <span>Add</span>
              </button>  
          </div>

          <div className="btnWrapper">
            <Link to="/">
              <button className="btn" type="submit">
                <span>Back</span>
              </button>
            </Link>
          </div>
          
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserEdit;
