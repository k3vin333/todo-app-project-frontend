import React, { useEffect, useState } from "react";
import ToDo from "./components/ToDo.js";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/BackendConnection.js";
import PopUpError from "./components/PopUpError.js";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
    
  }

  const handleAddToDo = () => {
    if (!text.trim()) {
      setError('Text cannot be empty');
      return;
    }

    addToDo(text, setText, setToDo);
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="add" 
            onClick={isUpdating ? 
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating) 
              : handleAddToDo}>
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="list">
          {toDo.map((item) => (
            <ToDo 
            key={item._id}
            text={item.text} 
            updateMode={()=> updateMode(item._id, item.text)}
            deleteToDo={()=> deleteToDo(item._id, setToDo)}/>
          ))}
        </div>
      </div>
      <PopUpError isOpen={error !== null} onClose={handleCloseError} message={error} />
    </div>
  );
}

export default App;
