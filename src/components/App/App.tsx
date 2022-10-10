import React from 'react';
import { useState } from 'react';
import {useAppDispatch} from '../../hook';
import { addTask } from '../../store/taskSlice';

import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';

import './App.scss';

const App = () => {

    const [text, setText] =  useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        if(text.trim().length) {
            dispatch(addTask(text))
            setText('')
        }
    }

    return (
      <div className='wrapper'>
        <h1>Task Manager</h1>
        <TaskList/>
        <AddTask
            value={text}
            updateText={setText}
            handleSubmit={handleSubmit}
        />
      </div>
    );
}

export default App;
