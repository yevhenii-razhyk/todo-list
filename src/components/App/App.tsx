import React from 'react';

import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';

import './App.scss';

const App = () => {
    return (
      <div className='wrapper'>
        <h1>Task Manager</h1>
        <TaskList/>
        <AddTask/>
      </div>
    );
}

export default App;
