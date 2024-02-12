import { BrowserRouter,Routes,Route} from "react-router-dom";
import UserListing from "./UserListing";
import UserDetails from "./UserDetails";
import UserEdit from "./UserEdit";
import UserAdd from "./UserAdd";

const App: React.FC = () =>{

return(
      <div className='App'>
        <h1>Примитивные GRUD операции</h1>  
             <BrowserRouter>
                <Routes>
                  <Route path="/" element={<UserListing/>}/>
                  <Route path="/user/details/:userid" element={<UserDetails/>}/>
                  <Route path="/user/edit/:userid" element={<UserEdit/>}/>
                  <Route path="user/add" element={<UserAdd/>}></Route>
                </Routes>
             </BrowserRouter>
      </div>
  )
}

export default App;