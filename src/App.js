import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Sonuclar from "./components/Sonuclar";
import Bminedir from "./components/Bminedir";
import Form from "./components/Form";
import Nav from "./components/Nav";

export default function App() {
return (
  <>
  <Nav />

    <Routes>
        <Route path="/" element={<Form />} />
          <Route path="/bminedir" element={<Bminedir />} />
          <Route path="/sonuclar" element={<Sonuclar />} />
            
            <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
              }
            />
      </Routes>
    
  </>
  
  
);
}
