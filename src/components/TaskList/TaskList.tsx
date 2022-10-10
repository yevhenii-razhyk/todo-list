import { useAppSelector } from '../../hook';
import Task from '../Task/Task'

import './TaskList.scss' 

const TaskList: React.FC = () => {

  const tasks = useAppSelector(store => store.tasks.tasks);

  return (
    <section className='content'>
        {tasks.map(task => (
            <Task key={task.id} {...task}/>
        ))}
    </section>
  );
}

export default TaskList;