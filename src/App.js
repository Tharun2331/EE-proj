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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";
import ContactUs from "./Components/Contact_us/Contact_us";
import ReactNotifications from 'react-notifications-component';
import Product from "./Components/Products/Product";

 const promise= loadStripe("pk_test_51HD4EoIwAVryXs1m20uDSxFq6l61GNrYKQeJJtxE9t8X5GGBqCmk5WXIN9aqRQjOZC6M1JpZvgBD13Tu1dhSkrIF00i1kVop36"); 

 function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    
  <Router>
    <div>
      <ReactNotifications />
      <product />
    </div>
    <div className="App">
        <Switch>
          <Route path="/Contacts">
          <Header />
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
             <Elements stripe={promise}>
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
