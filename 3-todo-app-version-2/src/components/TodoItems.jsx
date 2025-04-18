import TodoItem from './TodoItem';
import styles from './TodoItems.module.css';

const TodoItems = ({ todoItems }) => {
  return (
    <div className={`${styles['items-container']}`}>
      {/* <div className={styles.ItemsContainer}> */}
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
