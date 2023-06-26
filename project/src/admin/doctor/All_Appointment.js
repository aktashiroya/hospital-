/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import '../../App.css';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';

export default function All_Appointment() {


    const [get, setget] = useState();
    const [check, setcheck] = useState();
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [dob, setdob] = useState('')
    const [service, setservice] = useState('')
    const [phone, setphone] = useState('')
    const [gender, setgender] = useState('')
    const [description, setdescription] = useState('')
    const [date, setdate] = useState('')
    const [result, setResult] = useState([])


    useEffect(() => {
        axios.post('http://localhost/hospital/Addapoin.php')
            .then(function (response) {
                console.log(response.data)
                setResult(response.data)
                // setLoader(true)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const handleclick = (id, status) => {
        axios.post('http://localhost/hospital/Status.php', {
            id: id,
            status: status
        })
            .then(function (response) {
                console.log(response.data)
                setcheck(true)
            })
    }
    if (check === true) {
        return (<All_Appointment />)
    }
    return (
        <>
            <div className="theme-cyan">
                <Topbar />
                <Sidebar />
                <section className="content">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12">
                                <h2>All Patients
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <button className="btn btn-primary btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                    <i className="zmdi zmdi-plus" />
                                </button>
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="index.html"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Patients</a></li>
                                    <li className="breadcrumb-item active">All Patients</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card patients-list">
                                    <div className="header">
                                        <h2><strong>Patients</strong> List</h2>
                                        <ul className="header-dropdown">
                                            <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="zmdi zmdi-more" /> </a>
                                                <ul className="dropdown-menu dropdown-menu-right slideUp">
                                                    <li><a href="javascript:void(0);">Action</a></li>
                                                    <li><a href="javascript:void(0);">Another action</a></li>
                                                    <li><a href="javascript:void(0);">Something else</a></li>
                                                </ul>
                                            </li>
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        {/* Nav tabs */}
                                        <ul className="nav nav-tabs padding-0">
                                            <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#All">All</a></li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content m-t-10">
                                            <div className="tab-pane table-responsive active" id="All">
                                                <table className="table m-b-0 table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Fname</th>
                                                            <th>Lname</th>
                                                            <th>dob</th>
                                                            <th>gender</th>
                                                            <th>service</th>
                                                            <th>date</th>
                                                            <th>email</th>
                                                            <th>phone</th>
                                                            <th>description</th>
                                                            <th>status</th>
                                                            <th>update</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            result.map((i) => {
                                                                if (i.status == 1) {
                                                                    return (
                                                                        <>
                                                                            <tr id="approved" className="padding-0 nav-tabs">
                                                                                <td><span className="list-name">{i.fname}</span></td>
                                                                                <td>{i.lname}</td>
                                                                                <td>{i.dob}</td>
                                                                                <td>{i.gender}</td>
                                                                                <td>{i.service}</td>
                                                                                <td>{i.date}</td>
                                                                                <td>{i.email}</td>
                                                                                <td>{i.phone}</td>
                                                                                <td>{i.description}</td>
                                                                                <td><span className="badge badge-success">Approved</span></td>
                                                                                <td className="nav-item"><a onClick={() => { handleclick(i.id, i.status) }} className="nav-link active">Pending</a>
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    )
                                                                }
                                                                else if (i.status == 0) {
                                                                    return (
                                                                        <>
                                                                            <tr id="pending" className="padding-0 nav-tabs">
                                                                                <td><span className="list-name">{i.fname}</span></td>
                                                                                <td>{i.lname}</td>
                                                                                <td>{i.dob}</td>
                                                                                <td>{i.gender}</td>
                                                                                <td>{i.service}</td>
                                                                                <td>{i.date}</td>
                                                                                <td>{i.email}</td>
                                                                                <td>{i.phone}</td>
                                                                                <td>{i.description}</td>
                                                                                <td><span className="badge badge-warning">Pending</span></td>
                                                                                <td className="nav-item cursor-pointer"><a onClick={() => { handleclick(i.id, i.status) }} className="nav-link active cursor-pointer" data-toggle="tab" >Approved</a>
                                                                                </td>

                                                                            </tr>
                                                                        </>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}
