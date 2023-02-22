import React,{useState} from 'react'
import '../App.css';
export default function Calculator() {
 const [inputValue, SetinputValue] = useState("");
 const [result,setresult] = useState(0);
 const handler=(e)=>{
    SetinputValue(e.target.value)
 }
  return (
    <div className="App">
        <div className='Calculator'><h1>Calculator</h1></div>
        <div> <h3>  Result is {result}</h3></div>
        <div>
            <input type="text" value={inputValue} onChange={handler}></input><button onClick={()=>setresult(eval(inputValue))}>Calculate</button>            
        </div>
        {/* Buttons */}
        <div className='wrapper'>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'1')}>1</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'2')}>2</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'3')}>3</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'4')}>4</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'5')}>5</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'6')}>6</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'7')}>7</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'8')}>8</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'9')}>9</div>           
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'+')}>+</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'0')}>0</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'-')}>-</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'*')}>*</div>
            <div className='buttons' onClick={()=>SetinputValue(inputValue+'/')}>/</div>
            <div className='buttons' onClick={()=>SetinputValue('')}>CLR</div>      
        </div>
    </div>
  )
}
