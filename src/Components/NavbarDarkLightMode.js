import {useState,useEffect} from "react";
export default function DarkMode(){
  const [theme,setThem] = useState("light-theme");
  const toggleThem =()=>{
    if(theme==="dark-theme"){
      setThem("light-theme")
    }
    else{
      setThem("dark-theme")
    }
  }
  useEffect(()=>{
    document.body.className = theme;
    
  },[theme])
return(
  <div>
    <button className="btn btn-primary" onClick={()=>toggleThem()}>Change Mode</button>
  </div>
);
}