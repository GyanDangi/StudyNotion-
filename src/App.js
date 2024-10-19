import { Routes,Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Navbar from './Components/Common/Navbar'
import Forgotpassword from "./Pages/Forgotpassword";
import UpdatePassword from "./Pages/UpdatePassword";
import VerifyEmail from "./Pages/VerifyEmail";
import MyProfile from "./Components/Cors/Dashboard/MyProfile";
// import OpenRoute from './Components/Cors/AuthPage/OpenRoute';
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./Components/Cors/AuthPage/PrivateRoute";
// import Sidebar from "./Components/Cors/Dashboard/Sidebar";
import Error from './Pages/Error';
import Settings from './Components/Cors/Dashboard/Settings/index';
import Contact from "./Pages/Contact";
import EnrolledCourses from "./Components/Cors/Dashboard/EnrolledCourses";
import Cart from "./Components/Cors/Dashboard/Cart";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useDispatch, useSelector } from "react-redux";


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user}= useSelector((state)=>state.auth);

  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/about" element={<About/>}/> 
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/forgot-password" element={<Forgotpassword/>}/> 
          <Route path="/update-password/:id" element={<UpdatePassword/>}/> 
          <Route path="/verify-email" element={<VerifyEmail/>}/> 

          <Route  element={<PrivateRoute><Dashboard/></PrivateRoute> }>
            <Route path="/dashboard/my-profile" element={ <MyProfile/>}/> 
            <Route path="/dashboard/settings" element={ <Settings/>}/> 
            
            {
              user?.accountType === ACCOUNT_TYPE.STUDENT  &&(
                  <>
                  {/* instructor can't be enrolled in course */}
                  <Route path="/dashboard/cart" element={ <Cart/>}/> 
                  <Route path="/dashboard/enrolled-courses" element={ <EnrolledCourses/>}/> 

                  </>
              )
            }
          </Route>
         
          {/* <Route path="*" element={ <Error/>}/>  */}
        </Routes>
    </div>
  );
}

export default App;
