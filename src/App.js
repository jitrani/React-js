import React from 'react';
import LoginPage from "./components/pages/LoginPage";
import EmployeeListPage from "./components/pages/EmployeeListPage";
import { Route } from "react-router-dom";
import GuestRoute from "./components/routes/GuestRoute";
import './App.css';


const App = ({ location, isAuthenticated }) => (
  <div >
{isAuthenticated}
<Route 
location={location}
path="/"
exact
component={LoginPage}
/>
<GuestRoute 
location={location}
path="/login"
exact
component={LoginPage}
/>
<GuestRoute 
location={location}
path="/employee"
exact
component={EmployeeListPage}
/>
</div>
  );


export default App;
