import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../JS/action/action'
import './styles/Task.css' 

const mapStateToProps = state => {
    return {
        task: state.task
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTheTask: task => dispatch(addTask(task))
    }
}

const AddTask = (props) => {
    const [text, setText] = useState('')
    const [type, setType] = useState('');

    const handleSubmit = (e) => {
        // e.preventDefault()
        (text == '' || text == null || text == undefined) ? alert('Enter your todo task!') : (props.task.find(e => e.text === props.task.text))? alert('You already have this task!') : props.addTheTask({
            id: props.task.length,
            text,
            type
        })
        console.log(text + ' ' + type)
        e.preventDefault()
    }
    const [theBool, setTheBool]= useState(false)
    const formActive = () => {
        const theForm = document.querySelector('.form')


        if (theBool== true) {
            theForm.style.transform = 'translateY(-100%)'
            theForm.style.visibility = 'hidden'
            setTheBool(false)
        } else  {
            theForm.style.transform = 'translateY(0%)'
            theForm.style.visibility = 'visible'
            setTheBool(true)
        }
    
            // console.log('is Working', icon, theForm, theBool)
        }
    return (
        <div className="Adding">
            <div className="PlusIcon" onClick={formActive}>
                <i class="fas fa-plus-circle"></i>
            </div>
            <div className="theForm">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="info">
                        <div>
                            <label htmlFor="text">Text:</label>
                            <input type="text" name="text" id="text" onChange={e => setText(e.target.value)} />
                        </div>
                        <div>
                            <select name="type" id="type" onChange={e => setType(e.target.options[e.target.selectedIndex].value)}>
                                <option value={true}>Done</option>
                                <option selected value={false}>Not</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input className="btn btn-primary" type="submit" name="submit" id="submit" value="Add"/>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);