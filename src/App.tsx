import { useEffect, useRef, useState } from "react"
import { Checkbox } from "./components/Checkbox"




function App() {

  const [slidervalue, setslidervalue] = useState(8);
  const [numberallowed,setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
 const [password, setPassword] =useState("");
 const passwordRef = useRef(null);
 const [copy,setcopy]= useState("Copy"); 
 
 
 const copyPassword = () =>{
  passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setcopy("Copied");
  }

  const passwordGenerator = () =>{
    let str:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 

    if (numberallowed) str+="1234567890";
    if (charallowed)   str+= "!@#$%^&*_";
    let pass:string = "";
    for (let i =0 ; i<slidervalue; i++){
      const x:number = Math.floor((Math.random()*str.length));
      
      pass += str[x];
    }

    
    setPassword(pass);
  }

  useEffect(passwordGenerator,[numberallowed,charallowed,slidervalue]);
  useEffect(()=>{setcopy("Copy")},[numberallowed,slidervalue,charallowed])

  return (
    <div className="bg-black w-screen h-screen flex flex-col gap-2 justify-center items-center">
      <div>
        <div className="text-white text-4xl pb-2 border-b-2 border-white shadow-xs shadow-white text-center ">Password Generator</div>

        <div className="flex gap-2 pt-3 justify-center ">
          <input className="justify-center pl-3 w-full  font-semibold text-lg" readOnly value={password} ref={passwordRef} />
          <button className="bg-white rounded-md min-w-16 min-h-10" onClick={copyPassword}>{copy}</button>
        </div>


        <div className="flex justify-center gap-5 pt-5">

          <div className="flex gap-1">
            <div className="flex gap-1">
              <div className="flex flex-col justify-center">
              <div className="text-white">{slidervalue}</div>
              </div>
              
              <div className="flex flex-col justify-center">
              <input type="range" min={0} max={15} value={slidervalue} onChange={(e) => { setslidervalue(e.target.value) }} className="  w-full h-1 bg-gray-200 rounded-lg  cursor-pointer " />
              </div>
             
            </div>




            <div className=" flex flex-col justify-center text-white">Length</div>
          </div>
          
          <Checkbox type="checkbox" label="Numeric" onChange={()=>{setnumberallowed(!numberallowed)}} />
          <Checkbox type="checkbox" label="Special Character" onChange={()=>{setcharallowed(!charallowed)}} />
        </div>




      </div>
    </div>

  )
}

export default App
