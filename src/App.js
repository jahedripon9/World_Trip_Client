import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
// import Book from "./Pages/BookingNow/Book/Book";
import AddTrips from "./Pages/AddTrips/AddTrips";
import Booking from "./Pages/BookingNow/Booking/Booking";
import BookingInfo from "./Pages/BookingInfo/BookingInfo";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Calendar from "./Pages/DashBoard/Calendar";
import TeamMember from "./Pages/DashBoard/TeamMember";
import NotFound from "./Pages/NotFound";
import Tips from "./Pages/Hero Sections/Tips";
import Blog from "./Pages/Blog/Blog";


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/> 
      <Route path="/register" element={<Register />}/> 
      {/* <Route path="/book" element={<Book />}/>  */}
      <Route path="/booking" element={<Booking />}/> 
      <Route path="/addtrips" element={<AddTrips />}/> 
      <Route path="/bookinginfo" element={<BookingInfo />}/> 
      <Route path="/deshboard" element={<DashBoard />}/> 
      <Route path="/calendar" element={<Calendar />}/> 
      <Route path="/team" element={<TeamMember />}/> 
      <Route path="/tips" element={<Tips />}/> 
      <Route path="/blog" element={<Blog />}/> 
      <Route path="*" element={<NotFound />}/> 
    </Routes>
  </BrowserRouter>
  </AuthProvider>
    </div>
  );
}

export default App;
