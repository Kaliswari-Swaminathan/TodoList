import NewTodoItem from './components/NewTodoItem.js';
import './App.css';
import TodoTable from './components/TodoTable.js';
import React,{useState} from 'react';
function App() {

  const[showAddForm , setShowAddForm]=useState(false);

  const[todos, setTodos]= useState ([
    {rowNum:1,rowDesc:'Prepare Dinner',assign:'Kalis'},
    {rowNum:2,rowDesc:'Play',assign:'Kalis'}
    ,{rowNum:3,rowDesc:'Sleep',assign:'Kalis'}  
  ])
  const addTodo=(description,assigned)=>{
    // console.log("Add button are clicked");
    // alert("Add Button clicked");
    let rowNum=0;
    if(todos.length >0){
      rowNum=todos[todos.length-1].rowNum+1;
    }
    else{
      rowNum=1;
    }
      const newTodo={
        rowNum:rowNum,
        rowDesc:description,
        assign:assigned
      };
      //todos.push(newTodo);
      setTodos(todos =>[...todos,newTodo])

    }

    const deleteTodo=(delRowNum)=>{
      let filtered=todos.filter(function (value){
        return value.rowNum!==delRowNum;
      });
      setTodos(filtered);
    }
  
  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'> 
         <TodoTable todos={todos} deleteTodo={deleteTodo}/>
      <button 
      className='btn btn-primary'
       onClick={()=>
       setShowAddForm(!showAddForm)}>
        {showAddForm? 'Close New Todo':'New Todo'}</button>
        {
        showAddForm && 
        <NewTodoItem
         addTodo={addTodo}/>

        }
       
        </div>
      </div>
    </div>
  );
}

export default App;
