import React, { useState } from 'react';

const AdminTable = ({allData}) => {

    const deleteVolunteer=(id)=>{
        fetch(`https://afternoon-oasis-46092.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                alert("delete successfull")
            }
        })
    }


    return (
        <div>
            <table className="table table-borderless bg-white">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">email ID</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Voluteer list</th>
                        <th scope="col">action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allData.map((items, index) =>

                            <tr>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{items.date}</td>
                                <td>{items.work}</td>
                                <td onClick={()=>deleteVolunteer(items._id)} className="cursor"><i className="fas fa-trash"></i></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;