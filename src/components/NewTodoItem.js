import React,{useState} from "react"

function NewTodoItem(props){
const [rowDesc,setDesc]=useState('');
const [assign,setAssign]=useState('');

const submitTodo = () =>{
    if(rowDesc!==''&&assign!=''){
        props.addTodo(rowDesc,assign)
        setAssign('');
        setDesc('');
    }
}
    // const desChange=(event)=>{
    //     console.log(event.target.value);
    //     setDesc(event.target.value);
    // }
    const assignChange=(event)=>{
        console.log(event.target.value);
        setAssign(event.target.value)
    }
return(
    <div className="mt-5">
        <form>
            <div className="mb-3">
                <label className="form-label">Assigned</label>
                <input type='text'
                 className="form-control"
                  required 
                  onChange={assignChange} value={assign}></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type='text'
                 className="form-control" 
                 rows={3} required
                  onChange={e => setDesc(e.target.value)}
                 value={rowDesc}></input>
            </div>
            <button className='btn btn-primary' onClick={submitTodo}>Add Todo</button>

        </form>
    </div>
)
}
export default NewTodoItem