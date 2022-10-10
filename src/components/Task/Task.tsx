import { useAppDispatch } from '../../hook';
import { changeIsComplete, removeTask } from '../../store/taskSlice';
import './Task.scss';

interface TaskProps {
    id: number, 
    text: string,
    isComplete: boolean,
}

const Task: React.FC<TaskProps> = ({id, text, isComplete}) => {

    const dispatch = useAppDispatch();

    return (
        <div className='task'>
            <label className='task__text'>
                <input 
                    className='task__input visually-hidden'
                    type="checkbox" 
                    checked={isComplete} 
                    onChange={() => dispatch(changeIsComplete(id))}/>
                <p className='task__description'>
                    {text}
                    {isComplete 
                    ?   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="17px" height="17px">
	                        <path fill="#008000" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/>
                        </svg>
                    : <></>
                    }
                </p>
            </label>
            <button 
                className='task__button' 
                type="button"onClick={() => dispatch(removeTask(id))}>
                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="25px" height="25px">
                        <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/>
                    </svg>
            </button>
        </div>
    );
}
  
export default Task;