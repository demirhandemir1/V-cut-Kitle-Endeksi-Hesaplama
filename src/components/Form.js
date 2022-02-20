import { useState } from "react";
import styled from 'styled-components';
import name from '../icon/name.png';
import kg from '../icon/kg.png';
import height from '../icon/height.png';


const Container = styled.div`
background-color: #B4C6A6;
height: 450px;
width: 600px;
margin: 0 auto;
margin-top: 120px;
`;
const Isim = styled.p `
font-weight: bold;
`;
const Kilo = styled.p `
font-weight: bold;
`;
const Boy = styled.p `
font-weight: bold;
`;

export default function Form() {
  const [resultBmi, setresultBmi] = useState(null);
  

  const [form, setbmiForm] = useState ({adsoyad: "", kilo: "", boy: ""})

  const onChangeInput = (e) => {
    setbmiForm({...form, [e.target.name]: e.target.value });   
  };

  const onSubmit = (e) => {
    e.preventDefault(); // sayfa yenilenmesin 

    if (form.adsoyad === '' || form.kilo === '' || form.boy === '') {
      return false;
    } 
    console.log(form);

    let bmi = Number(form.kilo / (form.boy / 100) ** 2).toFixed(2);
    setresultBmi(bmi);
    console.log(bmi);
    let bmiData = JSON.parse(localStorage.getItem('bmiData')) || [];
    bmiData.push({
      adsoyad: form.adsoyad, 
      resultBmi: bmi
    });
    localStorage.setItem('bmiData', JSON.stringify(
      bmiData
    ))

  };

    return (
      <Container>
        <form onSubmit={onSubmit}>
        <ul style={{listStyle: "none"}}>
          <li>
            <div style={{display:"flex" }}>
              <img src={name} className="icon" alt="name" />
              <Isim className="bilgiS">İsminizi Giriniz:</Isim>
            </div>
            <input type="text" name="adsoyad" onChange={onChangeInput}></input>
          </li>
          <br />
          <li>
          <div style={{display:"flex" }}>
            <img src={kg} className="icon" alt="kg" />
            <Kilo className="bilgiS">Kilonuzu Giriniz:</Kilo>
           </div>
            <input type="number" name="kilo" onChange={onChangeInput}></input>
          </li>
          <br />
          <li>
          <div style={{display:"flex" }}>
            <img src={height} className="icon" alt="height"/>
            <Boy className="bilgiS">Boynuzu Giriniz:</Boy>
           </div>
            <input type="number" name="boy" onChange={onChangeInput}></input>
          </li>
        </ul>

        <button id="btnHesapla">Hesapla</button>
        </form>
        <hr></hr> 
        <div style={{marginLeft: "15px", fontWeight: "bolder"}}>
        Sonucunuz: {resultBmi} 
        </div>
      </Container>
      
      
      
    );
}