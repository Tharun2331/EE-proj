import React,{ useEffect} from "react";
import './App.css';
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home";
import {BrowserRouter as  Router,Switch,Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";

import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import ContactUs from "./Components/Contact_us/Contact_us";
import ReactNotifications from 'react-notifications-component';


//  const promise= loadStripe("pk_test_51HD4EoIwAVryXs1m20uDSxFq6l61GNrYKQeJJtxE9t8X5GGBqCmk5WXIN9aqRQjOZC6M1JpZvgBD13Tu1dhSkrIF00i1kVop36"); 

 function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
 

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[]);

  return (
    
  <Router>
    <div>
      <ReactNotifications />
      <product />
    </div>
    <div className="App">
        <Switch>
          <Route path="/Contacts">
          
          <ContactUs />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/checkout">
              <Header /> 
              <Checkout />
            </Route>
            <Route path="/payment">
             <Header /> 
             <Elements >
              <Payment />
            </Elements>
            </Route>
           <Route path="/"> 
            <Header />
            <Home /> 
            
           </Route>
        </Switch>  
       
    </div>
  </Router> 
  );
}

export default App;
