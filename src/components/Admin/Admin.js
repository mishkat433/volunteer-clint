import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import AdminForm from '../AdminForm/AdminForm';
import AdminTable from '../AdminTable/AdminTable';
import Navbar from '../Navbar/Navbar';
import "./Admin.css"
const Admin = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [clicking, setClicking] = useState(true)
    const [allData, setAllData] = useState([])
    const [spinne, setSpinner] = useState(true)

    useEffect(() => {
        fetch("https://afternoon-oasis-46092.herokuapp.com/adminPage?email=" + loginUser.email)
            .then(res => res.json())
            .then(data => {
                setAllData(data)
                setSpinner(false)
            })
    }, [loginUser.email])

    const dataTableHandle = () => {
        setClicking(true)
    }

    const addVolunteer = () => {
        setClicking(false)
    }

    return (
        <div className="">
            <div className="container">
                <Navbar></Navbar>
            </div>

            <h5 className="text-center text-success mb-4">Admin pannel <sup>({allData.length})</sup></h5>
            <div className="row">
                <div className="col-lg-3 px-4 bg-white">
                    <p onClick={dataTableHandle} className=" user mt-4"><i class="fas fa-user-friends"></i> Volunteer register list</p>
                    <p onClick={addVolunteer} className="user mt-4 "><i class="fas fa-plus"></i> Add event</p>
                </div>
                <div className="col-lg-9  gap">
                    {
                        clicking ? <AdminTable allData={allData} key={allData._id} spinner={spinne}></AdminTable> :
                            <AdminForm></AdminForm>
                    }

                </div>
            </div>
            {setLoginUser}
        </div>
    );
};

export default Admin;