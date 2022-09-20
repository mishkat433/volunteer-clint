import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import AuthorCard from '../AuthorCard/AuthorCard';
import Navbar from '../Navbar/Navbar';
import "./Author.css"

const Author = () => {
    const [loginUser, setLoginUser] = useContext(UserContext)
    const [workList, setWorkList] = useState([])

    useEffect(() => {
        fetch("https://afternoon-oasis-46092.herokuapp.com/showWorkList?email=" + loginUser.email, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => setWorkList(data))
    }, [])

    return (
        <div className="container">
            <Navbar></Navbar>
            <h4 className="text-center text-success"> All activities <sup>({workList.length})</sup></h4>
            <div className="row car" style={{ margin: "0 auto", width: "700px" }}>
                {
                    workList.map(parces => <AuthorCard parcesHistory={parces} key={workList._id} ></AuthorCard>)
                }
            </div>
            {setLoginUser}

        </div>
    );
};

export default Author;