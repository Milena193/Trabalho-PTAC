import { useState } from "react";
import "./index.css";
 export default function App(){
  const[ideias, setIdeias] = useState([]);
  const[novaIdeia, setNovaIdeia] = useState("");
  const[erro, setErro] = useState("");

  function adicionar(event){
    event.preventDefault();
    if(novaIdeia.trim()==""){
      setErro("Difite sua ideia antes de adicionar.");
      return;
    }
    setErro("");
    console.log("Enviado:", novaIdeia);

    const ideia = {
      id:Date.now(),
      texto:novaIdeia,
      feita: false
    };
    setIdeias((atual)=> [...atual, ideia]);
    setNovaIdeia("");
    setErro("");
  }
  
 }