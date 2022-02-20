import { Outlet, NavLink, } from "react-router-dom";
import '../css/App.css'
import styled from 'styled-components';
import bmi from '../icon/bmi.png'

const Container = styled.div`
display: flex;
background-color: #FFF1AF;
height: 70px;
width: 100%;
position: fixed;
top: 0;
overflow: hidden;
border-bottom: 1px dotted black;
`;

const Header = styled.h3`
margin-left: 10px;
color: #66806A;
font-weight: bolder;
`;

const Btn = styled.button`
font-size: 15px;
background-color: #FFF1AF;
height: 30px;
border: none;
color: #66806A;
font-weight: bolder;
font-family: 'Poppins', sans-serif;
`;

export default function Nav() {
  return (
    <>
      <Container className="nav">
      <img src={bmi} style={{height: "50px", marginLeft: "15px", marginTop: "5px"}} alt="bmi"/>
        <Header> BMI - VÜCUT KİTLE ENDEKSİ HESAPLAMA</Header>
        <ul className="btnC">
          <li className="btn">
          <Btn className="btnS">
            <NavLink exact to="/" >BMI Hesapla</NavLink> 
          </Btn>
          </li>
        
          <li className="btn">
          <Btn className="btnS">
            <NavLink to="/bminedir">BMI Nedir</NavLink> 
          </Btn>
          </li>
        
          <li className="btn">
          <Btn className="btnS">
            <NavLink to="/sonuclar">Sonuclarınız</NavLink>
          </Btn>
          </li>
        </ul>
      </Container>
     <Outlet />
    </>
  );
    

};