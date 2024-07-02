function TodoRowItem(props){
    // const rowNum=3;
    // const rowDesc="Prepare Dinner";
    // const assign='Kalis';
return(
    <tr onClick={() =>props.deleteTodo(props.rowNum)}>
    <th scope='row'>{props.rowNum}</th> 
    <td>{props.rowDesc}</td>  
    <td>{props.assign}</td> 
    </tr>
)
}
export default TodoRowItem