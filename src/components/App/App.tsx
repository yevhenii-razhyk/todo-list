import React from 'react';

import TaskList from '../TaskList/TaskList';
import AddTask from '../AddTask/AddTask';

import './App.scss';

const App = () => {
    return (
      <div className='wrapper'>
        <AddTask/>
        <TaskList/>
      </div>
    );
}

export default App;
