import React, {useState} from 'react';
import './styles/Task.css';
import { connect } from 'react-redux';
import { addTask } from '../JS/action/action'




const Task = (props) => {
    const [theNewEdit, setTheNewEdit] = useState("")
    const [inputBool, setInputBool] = useState(false)
    const inputVisible = () => {
        const input = document.querySelector("#edit")
        if (inputBool === false) {
            input.style.visibility = "hidden"
            props.func(theNewEdit)
            setInputBool(true)
        } else if (inputVisible === true) {
            input.style.visibility = "visible"
            setInputBool(false)
        }
    }
    return (
        <div>
            <div className="task">
                {(props.type == true || props.type == 'true') ? <i class="fas fa-check-square"></i> : <i class="fas fa-times-circle"></i>}
                <p className="task-text">{props.text}</p>
                <div className="inputEdit">
                    {(inputBool === false) ? <i classNames="fas fa-edit"></i> : <i class="fas fa-times"></i> }
                    <input type="text" className="Edit" id="edit" name="edit" placeholder="Edit your todo task" onChange={e => setTheNewEdit(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Task;