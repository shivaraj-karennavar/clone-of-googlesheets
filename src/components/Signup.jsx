import {useState , useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Signup = () => {

    let history = useHistory();

    // const [userName, setuserName] = useState(""); insted we are using ref
    let uName  = useRef("");
    const [mailid, setmailid] = useState("");
    const [password, setpassword] = useState("");

    const [gender, setgender] = useState("")

    const handlesubmit = (e)=>{
        e.preventDefault();
        let userName = uName.current.value;
        const newUser = {userName, mailid ,password ,gender};

        fetch("http://localhost:4000/users" , 
        {method:"POST" , 
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newUser)}
        )
        .then(()=>{ alert("Account created successfully");
        history.push("/login")

    })
    }

    return (
    <div className="signup">
        <h1>Create your Account</h1>
        <form onSubmit={handlesubmit}>
            <div>
                <input type="text" placeholder="Enter your Full Name" ref={uName}/>


                <input type="email"  placeholder="Enter your Mail id" onChange={(e)=>{setmailid(e.target.value)}}/>
                <input type="password" placeholder="Enter your Password" onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>

            <fieldset>
                <legend>Enter you Gender</legend>

                <input type="radio" value="Male"   id="m" name="gender" onClick={(e)=>{setgender(e.target.value)}}/> <label htmlFor="m">Male</label>
                <input type="radio" value="Female" id="f" name="gender" onClick={(e)=>{setgender(e.target.value)}} /> <label htmlFor="f">Female</label>
                <input type="radio" value="Others" id="o" name="gender" onClick={(e)=>{setgender(e.target.value)}} /> <label htmlFor="o">Others</label>
            
            </fieldset>
            <input type="submit" value="Create new account" />
        </form>
        <Link to="/login"> Login page</Link>
    </div>
    );
}
export default Signup;