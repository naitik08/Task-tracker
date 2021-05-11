import Singletask from './Singletask';

const Task = ({tasks , onDelete , onToggle }) => {

    return (
        <>
          { tasks.map(( task ) => {
              return(
               <Singletask key={task.id} task={ task } onDelete= {onDelete} onToggle={ onToggle }/>
              );
          } )}
        </>
    )
}

export default Task
