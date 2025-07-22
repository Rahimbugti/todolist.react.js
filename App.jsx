import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [todolist, settodolist] = useState([])
  let savetoDolist=(event)=>{
    
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let final=[...todolist,toname]
      settodolist(final)
    }
    else{
      alert("already mention this name")
    }
    event.preventDefault();
    
  }
  let list =todolist.map((value,index)=>{
   return(
    <TodolistItem value={value} key={index}
    indexnumber={index} todolist={todolist}
    settodolist={settodolist}
    />
   )
  })

  return (
    <div className='App'>
      <h1>toDoList</h1> 
      <form onSubmit={savetoDolist}>
        <input type="text" name='toname' />
        <button>Save</button>

 
      </form>
      <div className="outer">
        <ul>
      {list}
       </ul>
      </div>
    </div>
  )
}

export default App
function TodolistItem({value,todolist,settodolist,indexnumber}){
  let deleteRow=()=>{
    let finalList=todolist.filter((v,i)=>i!==indexnumber)
   settodolist(finalList)
  }
  return(
    <li>{value}<span onClick={deleteRow}>&times;</span></li>
    

  )
}

