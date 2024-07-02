import TodoRowItem from "./TodoRowItem"
function TodoTable(props){
return(
    <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
                {props.todos.map(todo=>(
                    <TodoRowItem
                     
                    key={todo.rowNum}
                     rowNum={todo.rowNum}
                     rowDesc={todo.rowDesc}
                     assign={todo.assign}
                     deleteTodo={props.deleteTodo}
/>
                ))}
             
              {/* <TodoRowItem 
              rowNum={props.todos[0].rowNum} 
              rowDesc={props.todos[0].rowDesc}
              assign={props.todos[0].assign}
              />
              <TodoRowItem 
              rowNum={props.todos[1].rowNum} 
              rowDesc={props.todos[1].rowDesc}
              assign={props.todos[1].assign}
              /> */}
             </tbody>
          </table>
)
}
export default TodoTable