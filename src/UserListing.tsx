import React, { useEffect, useState } from "react";
import { DataType } from "./Types";
import { Link, useNavigate } from "react-router-dom";


const UserListing: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((res2) => setData(res2))
      .catch((err) => console.log(err));
  }, []);

  const Delete = (id: number) => {
    fetch("http://localhost:3000/users/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const Edit = (id: number) => {
    navigate("/user/edit/" + id);
  };
  const Details = (id: number) => {
    navigate("/user/details/" + id);
  };

  return (
      <div className="tableBox ">
      <table className="table ">
        <thead>
          <tr>
            <td>ID</td>
            <td>Имя</td>
            <td>Email</td>
            <td>Телефон</td>
            <td>Действия</td>
          </tr>
        </thead>
        <tbody>
         {
         
         data.length?data.map(item=>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td className="tableBtns">

              <div className="btnWrapper">
                <button className="btn" onClick={()=>Edit(item.id)}>
                  <span>Edit user</span> 
                </button>
              </div>

              <div className="btnWrapper">
                <button className="btn" onClick={()=>Details(item.id)}>
                  <span>Details</span> 
                </button>
              </div>
              
              <div className="btnWrapper">
                <button className="btn" onClick={()=>Delete(item.id)}>
                  <span>Delete</span> 
                </button>
              </div>
                
              </td>        
            </tr>
            
          )):<h2 style={{width:'', textAlign:'center'}}>
              <span>Запустите: json-server data/dataBase.json  --watch 3000</span>
             </h2>
         }
        </tbody>       
      </table>  

      <div className="tableFooter">
          <Link className="link" to="user/add">
           <button className="addBtn">
               Добавить пользователя
           </button>
            </Link>                     
      </div>

      </div>   
  );
};

export default UserListing;
