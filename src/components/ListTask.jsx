import React from 'react'
import Task from './Task'
import { connect } from 'react-redux'
import { editTask } from '../JS/action/action'

const mapStateToProps = state => {
    return {
        task: state.task
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editTheTask: todo => dispatch(editTask(todo))
    }
}


const ListTask = (props) => {
    // console.log(match)
    const getData = (txt, ID) => {
        const TEXT = (txt === "" || txt === null || txt === undefined) ? 'Please enter data' : txt 
        props.editTheTask({
            id: ID,
            text: TEXT
        })
    }

    const theTXT = (txt) => {
        return txt
    }

    const newType = (props.thisType == 'Done') ? true : (props.thisType == 'Not') ? false : undefined
    console.log(props.thisType + ' ' + newType)
    // const newTask = props.tasks.map()
    return (
        
        <div>
            {props.task.map( async (e) => {
                        console.log(theTXT, e.id);
                        <Task func={this.theTXT} text={e.text} type={e.type}/>;
                        getData(theTXT, e.id)
                })}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask)