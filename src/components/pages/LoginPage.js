import React from "react";
import LoginForm from "../forms/LoginForm";
import '../css/employee.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }


  
  submit = data => {
   console.log(data);
   if(data.user_name ==="hruday@gmail.com" && data.password ==="hruday123" ){
    this.props.history.push("/employee");

   }else{
    toast.error("Please give correct mail id and password");
      return ;
    //    console.log("username and password is wrong.")
   }

  }
 
  render() {
      
    return (
        <div className="scene_login">
         <ToastContainer />

        <div >
          <LoginForm submit={this.submit} />
        </div>
      </div>
    );
  }
}


export default (LoginPage);

