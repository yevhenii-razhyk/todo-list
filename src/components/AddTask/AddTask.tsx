import './AddTask.scss'

interface AddTaskProps {
    value: string,
    updateText: (string: string) => void,
    handleSubmit: () => void,
}

const AddTask: React.FC<AddTaskProps> = ({value, updateText, handleSubmit}) => {
    return (
        <form className='form'>
            <input 
                className='form__input' 
                type="text" 
                placeholder="Enter your task"
                value={value}
                onChange={(e) => updateText(e.target.value)}
            />
            <button 
                className='form__button' 
                type="button"
                onClick={handleSubmit}
            >+</button>
        </form>
      );
}

export default AddTask;