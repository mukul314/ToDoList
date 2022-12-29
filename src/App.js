import React, { useState } from "react";
import ToDoList from "./ToDoList"

function App() {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] =  useState([]);// array return kar rahe hai as an initial element, that means that Items ke andar ek empty array

  const itemEvent = (event) =>{

    setInputList(event.target.value); 
    // iss function se event jo pass ho rha hai uski value setinput list me chali jaegi
    // event ek synthetic event hai

  };

  const listOfItems = () => {
  setItems((oldItems) =>{
      
    return [...oldItems, inputList];
  });

  setInputList("");

  };

  const deleteItems = (id) => {
    console.log("deleted")
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index)=>{
        return index !== id;
      });
    });
   };

  return <>
    <div className="main_div">

      <div className="center_div">
        <br />
        <h1>ToDo list </h1>
        <br />
        <input type="text" placeholder="Add tasks to do" onChange={itemEvent}
        value = {inputList}  />

        <button onClick={listOfItems}> + </button>

        <ol>
          
          {Items.map((itemval,index) => {
            return <ToDoList key= {index} 
            id = {index} 
            text = {itemval}
            onSelect = {deleteItems} />
          })
          }
        </ol>

      </div>

    </div>


  </>;
}

export default App;
