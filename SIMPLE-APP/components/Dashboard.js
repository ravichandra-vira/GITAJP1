import {useContext,useEffect,useState} from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard(){
    const {user,logout}=useContext(AuthContext);

    const [time,setTime]=useState(new Date());
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000);

        return ()=> clearInterval(interval);
    },[]);

    useEffect(()=>{
        const saved=JSON.parse(localStorage.getItem("tasks"))|| [];
        setTasks(saved);
    },[]);

    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks));
    },[tasks]);

    const addTask=()=>{
        if(task.trim()==="") return;
        setTasks([...tasks,task]);
        setTask("");
    };

    const deleteTask=(index)=>{
        const updated=tasks.filter((_,i)=>i!==index);
        setTasks(updated);
    };

    return (
        <div>
            <h2>Welcome {user?.username}</h2>
            <h3>Time: {time.toLocaleTimeString()}</h3>

            <input
                type="text"
                value={task}
                onChange={(e)=> setTask(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTask}>Add</button>

            <ul>
                {tasks.map((t,index)=>(
                    <li key ={index}>
                        {t}
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default Dashboard;



