import React from "react";
import PropTypes from "prop-types";
import InlineError from "../messages/InlineError";
import { Form,Button, Message } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = {
    data: {
      user_name: "",
      password: ""
      
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: false });
      this.props
        .submit(this.state.data)
       
    }
  
  };

  validate = data => {
    const errors = {};
    if (!data.user_name) errors.name = "Username cannot be blank";
    if (!data.password) errors.password = "Password cannot be blank";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <div className="left_align_tb">
       <Form onSubmit={this.onSubmit} loading={loading}>
      {errors.global && (
        <Message negative>
          <Message.Header>Something went wrong</Message.Header>
          <p>{errors.global}</p>
        </Message>
      )}
      <Form.Field style={divStyle} error={!!errors.name}>
        <label  style={lableStyle1} htmlFor="email">USERNAME</label><br/>
        <input style={inputStyle}
          type="text"
          id="user_name"
          name="user_name"
          placeholder="USERNAME"
          value= {data.user_name}
          onChange={this.onChange}
        />
       
{errors.name && <InlineError text={errors.name} />
}
      </Form.Field>
      <Form.Field style={divStyle} error={!!errors.password}>
        <label style={lableStyle} htmlFor="password">PASSWORD</label><br/>
        <input style={inputStyle}
          type="password"
          id="password"
          name="password"
          placeholder="PASSWORD"
          value={data.password}
          onChange={this.onChange}
        />

        {errors.password && <InlineError text={errors.password} />}
      </Form.Field>
      <Button style={buttomStyle}>Login</Button>
    </Form>
      </div>
    );
  }
}
const divStyle = {
    marginLeft: '30%',
    position: "relative",
    width:'45%'
   };
   const buttomStyle = {
   color:'#604f3e' ,
   marginLeft:'30%',
   width:'45%'
   
   
   };
  const inputStyle = {
    
    background:'#604f3e' ,
    opacity:'.8',
    color:'white',
  
     
   };
   const lableStyle = {
    float:'left',
    fontSize:'1.2em'
     
   };
   const lableStyle1 = {
    marginTop:'20%',
    float:'left',
    fontSize:'1.2em'
     
   };

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
