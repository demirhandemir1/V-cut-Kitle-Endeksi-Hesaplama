import styled from 'styled-components'


const Container = styled.div`
background-color: #e3ebde;
width: 1200px;
margin: 0 auto;
margin-top: 70px;
`;
const Baslik = styled.h3`
text-indent: 10px;
`;
const Icerik = styled.p`
margin-left: 60px;
`;


export default function Bminedir() {
    return (
      <Container>
        <Baslik>
          Boy kilo endeksi nedir?
        </Baslik>
        <Icerik>
          Boy Kilo Endeksi veya diğer adıyla Vücut Kitle Endeksi, vücudunuzdaki tahmini yağ oranını gösteren bir değerdir.
        </Icerik>

        <Baslik>
            Boy kilo endeksiniz nasıl hesaplanır?
        </Baslik>

        <Icerik>
          Boy Kilo Endeksi hesaplamasında boy-kilo oranı kullanılır. 
          Dolayısıyla Boy Kilo Endeksi değeri, boyunuza göre ideal kilonuzun kaç olması gerektiğini gösterir. 
          Vücut ağırlığınız, boyunuzun karesine bölünerek boy kilo cetveli üzerinde ideal kilonuz hesaplanır.
          Vücut kitle endeksi formülü, BMI = KG / (m x m) olarak özetlenebilir.
        </Icerik>

        <Baslik>
          Boy Kilo Endeksi Tablosu
        </Baslik>
        <div>
        
        <table className="bmiTablo2">
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Boy Kilo Endeksi - kg/m2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Zayıf</td>
              <td> 0 - 18,5 </td>
            </tr>
            <tr>
              <td>Normal</td>
              <td> 18,5 - 24,9 </td>
            </tr>
            <tr>
              <td>Fazla Kilolu</td>
              <td> 25 - 29,9 </td>
            </tr>
            <tr>
              <td>Şişman</td>
              <td> 30 - 34,9 </td>
            </tr>
            <tr>
              <td>Aşırı Şişman</td>
              <td> 35 + </td>
            </tr>
          </tbody>

        </table>
        </div>
        <Baslik>
          Vücut Kitle Endeksi Değeri Ne Anlama Gelir?
        </Baslik>
        <Icerik>
          <ul>
            <li>
              <b>0 ila 18,4 BMI:</b> <span style={{color: "red", fontWeight: "bold",}}>Zayıf.</span> Kişinin boyuna oranla ağırlığının yetersiz olduğunu ifade eden 
              bu değer ile karşılaşılması durumunda kişinin diyetisyen eşliğinde sağlıklı bir şekilde kilo alması önerilir.
            </li>
            <li>
              <b>18.5 ila 24.9 BMI:</b> <span style={{color: "green", fontWeight: "bold",}}>Normal.</span> Bu değer aralığı kişinin ideal kiloda olduğunu gösterir. 
              Bu değere sahip olan kişilerin düzenli, dengeli ve sağlıklı beslenmeye devam etmeleri önerilir.
            </li>
            <li>
              <b>25 ila 29.9 BMI:</b> <span style={{color: "red", fontWeight: "bold",}}>Fazla Kilolu.</span> Kişinin boyuna oranla kilosunun 
              fazla olduğunu gösteren bu değer aralığında kişinin uygun diyet ile fazla kilolarından kurtulması önerilir.
            </li>
            <li>
              <b>30 ila 34.9 BMI:</b> <span style={{color: "red", fontWeight: "bold",}}>Şişman.</span> Birinci derece obez kategorisinde değerlendiren değer aralığında, kişinin kilosunun 
              sağlık açısından risk oluşturabilecek düzeyde olduğu anlaşılır. Bu kişilerin diyetisyen yardımıyla kilo vermesi önerilir.
            </li>
            <li>
              <b>35 ve Üstü BMI:</b> <span style={{color: "red", fontWeight: "bold",}}>Aşırı Şişman.</span> İkinci derece obez olarak tanımlanan bu değerlere sahip olan kişilerde kalp ve 
              damar hastalıkları bakımından risk artar. Kişinin kilo vermek için diyetisyene başvurması önerilir.
            </li>
          </ul>
        </Icerik>


      </Container>
    );
  }