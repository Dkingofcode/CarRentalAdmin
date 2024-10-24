// import React from 'react'
import Logo from "../../ui/Logo"; "../../ui/Logo";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";



const Sidebar = () => {
  const navigate = useNavigate();
  
    return (
    <div>
       <Logo />  

       <div onClick={navigate("/dashboard")}>
        <img  />
        <p>Dashboard</p>
       </div>

       <div onClick={navigate("/drivers")}>
        <img  />
        <p>Drivers</p>
       </div>

       <div onClick={navigate("/bookings")}>
        <img  />
        <p>Bookings</p>
       </div>

       <div onClick={navigate("/notifications")}>
        <img  />
        <p>Notifications</p>
       </div>

       <div onClick={navigate("/settings")}>
        <img  />
        <p>Settings</p>
       </div>

       <hr />

       <p>Report</p>

       <div onClick={navigate("/paymentdetails")}>
        <img  />
        <p>Payment Details</p>
       </div>

       <div onClick={navigate("/transactions")}>
        <img  />
        <p>Transactions</p>
       </div>

       <div onClick={navigate("/car-report")}>
        <img  />
        <p>Car Report</p>
       </div>


       <Button>
        <img  />
         Logout 
       </Button>
    </div>
  )
}

export default Sidebar;
