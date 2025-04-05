import AppTodo from './components/AppTodo';
import AppName from './components/AppName';
import './App.css';
import TodoItems from './components/TodoItems';

function App() {
  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023',
    },
    {
      name: 'Go To College',
      dueDate: '4/10/2023',
    },
    {
      name: 'Go Run',
      dueDate: 'Right Now!',
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}
export default App;
