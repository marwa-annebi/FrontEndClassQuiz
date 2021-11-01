import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import './Inscription.css'
import {LinkContainer} from 'react-router-bootstrap'
import { Nav} from 'react-bootstrap'
const FormPage = () => {
return (
<MDBContainer className="body">
  <MDBRow>
    <MDBCol md="6">
      <form style={{fontFamily:"Harmattan",textAlign:"right"}}>
        <h2 className="h2 text-center mb-2" style={{ color :"#8AE3FB",fontSize:"70px"}}>تسجيل الدخول</h2>
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
        البريد الإلكتروني
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text" >
        كلمه السر
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
     
        <div className="text-center mt-4">
          <button className="btn3"   type="submit">
          تسجيل الدخول
          </button>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};
export default FormPage