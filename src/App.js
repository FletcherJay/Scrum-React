import ToDoInput from './Components/ToDoInput';
import NavBar from './Components/NavBar'
import CardToDo from './Components/CardToDo';
const App = () => {
  return (
    <div>
      <NavBar />
      <ToDoInput  />
      <CardToDo/>
    </div>
  );
}

export default App;
