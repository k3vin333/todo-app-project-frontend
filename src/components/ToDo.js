import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className="todo">
        <div className="text">
            {text}
            <div className="icons">
                {/* npm i react-icons, below are react-icon packages BiEdit and AiFillDelete */}
                <BiEdit className='icon' onClick={updateMode} />
                <AiFillDelete className='icon' onClick={deleteToDo} />
            </div> 
        </div>
    </div>
  )
}

export default ToDo