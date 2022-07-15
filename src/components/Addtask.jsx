import { useRef } from "react";
import { useHistory , Link } from "react-router-dom";

const Addtask = () => {

    let history = useHistory();

    let uName = useRef("");
    let uTaskName = useRef("");
    let uTaskDetail = useRef("");
    let uStartDate = useRef("");
    let uEndDate = useRef("");

    const handleSubmit = (e)=>{
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

        let newTask = 
        { 
            userName : uName.current.value,
            taskName : uTaskName.current.value,
            taskDetail : uTaskDetail.current.value,
            startDate : uStartDate.current.value,
            endDate : uEndDate.current.value,
            status
        }
        // console.log(newTask);

        fetch("http://localhost:8000/tasks", 
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newTask)
        }
        ).then(()=>{
            alert("task added successfully");
            history.push("/tasklist");
    })
    }

    return ( 
    <div className="add-task">

        <h1>Add a Task</h1>

        <form onSubmit={handleSubmit}>

            <label>User Name</label> <input type="text" ref={uName}/>

            <label>Task Name</label> <input type="text" ref={uTaskName}/>

            <label>Task Detail</label> <textarea ref={uTaskDetail}/>

            <label>Start Date</label> <input type="date" ref={uStartDate}/>

            <label>End Date</label> <input type="date" ref={uEndDate}/>

            <input type="submit" value="Add Task" />

        </form>

    <Link to="/tasklist">
        <button className="btn">Click to view all task list</button>
    </Link>

    </div> );
}
export default Addtask;