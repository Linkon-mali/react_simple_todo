import React from 'react';
import './assets/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoList from './components/todo/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
