import { useRef } from "react";
import { Link, useParams ,useHistory} from "react-router-dom";
import useFetch from "./useFetch";

const Edit = () => {

    let history = useHistory();

    const {id} = useParams();

    let {data : task , pending} = useFetch("http://localhost:4000/tasks/" + id);

    let uName = useRef("");
    let uTaskName = useRef("");
    let uTaskDetail = useRef("");
    let uStartDate = useRef("");
    let uEndDate = useRef("");
    

    const handleEdit = (e)=>{
        e.preventDefault();

        let currentDate = new Date();
        let startDate = new Date(uStartDate.current.value);
        let endDate = new Date(uEndDate.current.value);
        let status = "";

        if(currentDate < startDate)
        {
            status = "Pending";
        }
        else if(currentDate>=startDate && currentDate<=endDate)
        {
            status = "Ongoing"
        }
        else
        {
            status = "Completed";
        }

        const newTask = 
        { 
            userName : uName.current.value,
            taskName : uTaskName.current.value,
            taskDetail : uTaskDetail.current.value,
            startDate : uStartDate.current.value,
            endDate : uEndDate.current.value,
            status
        }
        // console.log(newTask);
        fetch("http://localhost:4000/tasks/"+id , 
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        }
        ).then(()=>{
            alert("task edited successfully");
            history.push("/tasklist");
    })
    }


    return ( 
    <div className="edit-task">

        <h1>Edit a Task</h1>

        {task && <div>
            <form onSubmit={handleEdit}>

            <label>User Name</label> <input type="text" ref={uName}/>

            <label>Task Name</label> <input type="text" ref={uTaskName} />

            <label>Task Detail</label> <textarea ref={uTaskDetail} />

            <label>Start Date</label> <input type="date" ref={uStartDate} />

            <label>End Date</label> <input type="date" ref={uEndDate} />

            <input type="submit" value="Edit Task" />

            </form>

        <Link to="/tasklist">
            <button className="btn">Click to view all task list</button>
        </Link>
        </div>}
        
    </div> 
    );
}
export default Edit