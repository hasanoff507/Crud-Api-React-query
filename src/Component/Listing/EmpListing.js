import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as api from '../../Api/Api'

const EmpListing = () => {

    const [empdata, setEmpdata] = useState(null)

    const navigate = useNavigate()
    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id)
    }

    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id)

    }

    const RemoveFunction = async (id) => {
        if (window.confirm("Do you want to remove")) {
            const deleteid = await api.deleteData(id);
            console.log(deleteid);
        }
        if (window.confirm("Removed successfully")) {
            window.location.reload()

        }
    }

    useEffect(() => {
        const getAllData = async () => {
            const states = await api.getAllData();
            console.log(states);
            setEmpdata(states);
        }
        getAllData();
    }, [])

    return (
        <div className="constainer">
            <div className="card">
                <div className="card-title">
                    <h2>Employe Listing</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Image</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <img style={{ width: '275px', height: '180px' }} src={item.imageData} alt="" />
                                        </td>
                                        <td>
                                            <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            {/* <a onClick={() => { RemoveFunction(item.id) }} className="btn btn-danger">Remove</a> */}
                                            <button
                                                onClick={() => {
                                                    RemoveFunction(item.id);
                                                }}
                                                className="btn btn-danger"
                                            >
                                                Remove
                                            </button>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Detailst</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListing;