import { addTask } from '../../store/taskSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import './AddTask.scss'
import { useAppDispatch } from '../../hook';

const schema = yup.object().shape({
    taskText: yup.string().required().min(5).max(100),
}).required();

const AddTask: React.FC = () => {

    const dispatch = useAppDispatch();

    const { register, handleSubmit, reset} = useForm({
        resolver: yupResolver(schema),
    });
    const addTodoTask = (data: any) => {
        const task = {
            id: Date.now(),
            text: data.taskText,
            isComplete: false,
        }
        dispatch(addTask(task));
        reset()
    }

    return (
        <form className='form' onSubmit={handleSubmit(d => addTodoTask(d))}>
            <input 
                className='form__input' 
                type="text" 
                placeholder="Enter your task"
                {...register("taskText")}
            />
            <button 
                className='form__button' 
                type="submit"
            >+</button>
        </form>
      );
}

export default AddTask;