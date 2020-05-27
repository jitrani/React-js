import React from "react";
import '../css/employee.css';

class EmployeeListPage extends React.Component{
state ={
user:[{
"id":1,
"name":"test1",
"age" : "11",
"gender":"male",
"email" : "test1@gmail.com",
"phoneNo" : "9415346313"
},
{
"id" : 2,
"name":"test2",
"age" : "12",
"gender":"male",
"email" : "test2@gmail.com",
"phoneNo" : "9415346314"
},
{
"id":3,
"name":"test3",
"age" : "13",
"gender":"male",
"email" : "test3@gmail.com",
"phoneNo" : "9415346315"
},
{
"id":4,
"name":"test4",
"age" : "14",
"gender":"male",
"email" : "test4@gmail.com",
"phoneNo" : "9415346316"
},
{
"id":5,
"name":"test5",
"age" : "15",
"gender":"male",
"email" : "test5@gmail.com",
"phoneNo" : "9415346317"
},
{
"id":6,
"name":"test6",
"age" : "16",
"gender":"male",
"email" : "test6@gmail.com",
"phoneNo" : "9415346318"
},

]
}
createTable(user){
    let table= [];
    for (let j = 0; j < user.length; j++) {
      var data = user[j];
      table.push(
             <tr>
                  <td >{data.id}</td>
                  <td >{data.name}</td>
                  <td >{data.age}</td>
                  <td >{data.gender}</td>
                  <td >{data.email}</td>
                  <td >{data.phoneNo}</td>
                </tr>
      );
  }
  return table;
}
render() {
      
    return (
        <div style={divCss}>
       <table >
       <caption><b>Employee List Table</b></caption>
                <thead>
                <tr >
                <th >Id</th>
                <th >Name</th>
                <th >Age</th>
                <th >Gender</th>
                <th >Email</th>
                <th >Telephone</th>
                </tr>
                </thead>
                <tbody>
                {this.createTable(this.state.user)}
                </tbody>
              </table>
              </div>
     
    );
  }
}
const divCss={
    justifyContent:'center',
    // backgroundImage:"url(" + newImage + ")",
    alignItems:'center',
    display:'flex'
}

export default (EmployeeListPage);
