import styled from 'styled-components'
import { useState } from 'react';
import "../css/App.css"

const Container = styled.div`
background-color: #B4C6A6;
margin: 0 auto;
min-height: 200px;
width: 600px;
margin-top: 120px;
`;
const Baslik = styled.h3`
text-align: center;
`;

export default function Sonuclar() {
  const [removeItem, setRemoveItem] = useState(false)
  const clearStorage = () => {
    localStorage.removeItem("bmiData");
    setRemoveItem(true);
  }

    return (
      <Container>
        <Baslik>
          Sonuçlarınız
        </Baslik>
        <table id="kayit">
                <tbody>
                    <tr>
                    <th>Ad Soyad</th>
                    <th>BMI Sonucunuz</th>
                    </tr>
                    {( !removeItem && localStorage.getItem("bmiData")) && JSON.parse(localStorage.getItem("bmiData")).map(data =>
                    <tr>
                    <td>{data.adsoyad}</td>
                    <td>{data.resultBmi}</td>
                    </tr>
                    )}
                </tbody>
            </table>
          <br />  
        <input type="button" id="btnTemizle" value="Sonuçları Temizle" onClick={clearStorage} />
        <br />  
      </Container>
    );
}