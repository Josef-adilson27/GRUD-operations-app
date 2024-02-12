import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserAdd: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [active, setActive] = useState(true);

  const [nameIsFill, setNameIsFill] = useState(false);

  const addingElement = { id, name, email, phone, active };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addingElement),
    })
      .then(() => {
        alert("all were added");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
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
          required
          value={name}
          onMouseDown={() => setNameIsFill(true)}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
        />
        {name.length === 0 && nameIsFill && (
          <span style={{ color: "red" }}>Имя обьязательно</span>
        )}
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
  );
};
export default UserAdd;
