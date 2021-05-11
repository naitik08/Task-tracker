import { useState } from 'react';

const AddTasks = ({onAdd}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text | !day ){
            alert('Add task or day');
            return
        }
        onAdd({text,day,reminder})
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className='add-form' onSubmit={ onSubmit }>
            <div className='form-control'>
                <label>Add Task</label>
                <input type="text" value={text}  onChange ={ (e) => setText(e.target.value) } placeholder="Add task" />
            </div>
            <div className='form-control'>
                <label>Add Day and Time</label>
                <input type="text" value={day}  onChange ={ (e) => setDay(e.target.value) } placeholder="Add day and time" />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox"  value={reminder}  onChange ={ (e) => setReminder(e.currentTarget.checked) } checked={reminder}/>
            </div>
            <input type="submit" value="Save"  className="btn btn-block"/>
        </form>
    )
}

export default AddTasks
