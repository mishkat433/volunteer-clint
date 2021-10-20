import React, { useContext, useState } from 'react';
import "./Register.css";
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import { useHistory} from 'react-router-dom';



const Register = (props) => {
  
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [formData, setFormData] = useState({
        name:'',
        email: loginUser.email,
        work:loginUser.selectWork,
        date:''
    })
    let history = useHistory();
    let { from } = { from: { pathname: "/author" } };
    const sendHandle = (even) => {
        if (formData.name && formData.date){
            fetch("https://afternoon-oasis-46092.herokuapp.com/addNwtwork", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert("register successfull");
                    history.replace(from)
                }
            })
        }
        even.preventDefault()
    }
    
    const changeHandle=(e)=>{
        const newData = { ...formData }
        newData[e.target.name] = e.target.value
        setFormData(newData)

    }
console.log(formData)
    return (
        <div className="container">
            <div className="mb-4 bg-light">
                <Navbar></Navbar>
            </div>
            <div className="popUp">
            <form action="" className="form-group inp">
                <h3>Register as a volunteer</h3>
                <input onBlur={changeHandle} className="form-control mt-4" type="text" name="name" required placeholder="Full Name"/>
                <input onBlur={changeHandle} value={loginUser.email} className="form-control mt-4" type="email"  name="email" placeholder="Email"/>
                <input onBlur={changeHandle} className="form-control mt-4" type="date" required name="date" placeholder="date"/>
                <input onChange={changeHandle} className="form-control mt-4" type="text" required name="description" placeholder="Description"/>
                <input onBlur={changeHandle} className="form-control mt-4" value={loginUser.selectWork} type="text" name="work" />
                <button className="btn btn-primary  mt-4 w-50" onClick={sendHandle}>Registration</button>
            </form>
            </div>
        </div>
    );
};

export default Register;