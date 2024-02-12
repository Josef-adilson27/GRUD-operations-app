import React,{useEffect, useState} from 'react'
import { DataType } from './Types';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';


const UserDetails: React.FC = () =>{

  const [user,setUser] = useState<DataType>()
  console.log(user);
  const {userid} = useParams()
  useEffect(()=>{
    fetch("http://localhost:3000/users/"+userid)
    .then(res=>res.json())
    .then(res2=>setUser(res2))
    .catch(err=>console.log(err))
},[])

  return(
      <div>
       {
        <div>
          <h1>userName: {user?.name}</h1>
          <h2>userPhone {user?.phone}</h2>
          <h2>userPhone {user?.email}</h2>
          <h2>users     {user?.active.toString()}</h2>
        </div>
       }
       <div style={{width:'60px'}}>
          <div className="btnWrapper">
            <Link to="/">
              <button className="btn" type="submit">
                <span>Back</span>
              </button>
            </Link>
          </div>
       </div>

      </div>
  )
}

export default UserDetails;