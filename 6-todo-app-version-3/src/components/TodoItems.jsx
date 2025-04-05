import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={`${styles['items-container']}`}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
