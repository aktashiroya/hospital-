import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../Sidebar'
import Topbar from '../Topbar'

export default function Add_doctor() {
    const [fname, setfname] = useState('')
    const [lname, setlname] = useState('')
    const [email, setemail] = useState('')
    const [dob, setdob] = useState('')
    const [speciality, setspeciality] = useState('')
    const [phone, setphone] = useState('')
    const [gender, setgender] = useState('')
    const [description, setdescription] = useState('')
    const [wurl, setwurl] = useState('')
    const [img, setimg] = useState('')
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')


    function submit(e) {
        e.preventDefault()
        const blogData = new FormData()
        blogData.append('fname', fname)
        blogData.append('lname', lname)
        blogData.append('email', email)
        blogData.append('img', img)
        blogData.append('dob', dob)
        blogData.append('speciality', speciality)
        blogData.append('description', description)
        blogData.append('phone', phone)
        blogData.append('gender', gender)
        blogData.append('wurl', wurl)
        blogData.append('username', username)
        blogData.append('password', password)
        blogData.append('cpassword', cpassword)
        axios.post('http://localhost/hospital/Add_doctor.php', blogData)
            .then(function (response) {
                console.log(response)
                if (response.data === false) {
                    alert("error");
                }
                else {
                    alert("success");
                    window.location.href = "/All_doctor";
                }
            })
            .catch(function (error) {
                console.log(error)
            })
        // window.location.reload(true)
    }
    function cancel() {
        window.location.href = "/Add_doctor";
    }
    return (
        <>
            <div className="theme-cyan">
                <Sidebar />
                <Topbar />
                <section className="content">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-5 col-sm-12">
                                <h2>Add Doctors
                                    <small className="text-muted">Welcome to Oreo</small>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <button className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10" type="button">
                                    <i className="zmdi zmdi-plus" />
                                </button>
                                <ul className="breadcrumb float-md-right">
                                    <li className="breadcrumb-item"><a href="/Dashborad2"><i className="zmdi zmdi-home" /> Oreo</a></li>
                                    <li className="breadcrumb-item"><a href="javascript:void(0);">Doctors</a></li>
                                    <li className="breadcrumb-item active">Add Doctors</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Basic</strong> Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <form encType="multipart/form-data" method='post'>
                                        <div className="body">
                                            <div className="row clearfix">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="First Name" name='fname' value={fname} onChange={(e) => setfname(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Last Name" name='lname' value={lname} onChange={(e) => setlname(e.target.value)} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row clearfix">
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Date of Birth" name='dob' value={dob} onChange={(e) => setdob(e.target.value)} /></div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <select className="form-control show-tick" name='gender' value={gender} onChange={(e) => setgender(e.target.value)}>
                                                        <option value>- Gender -</option>
                                                        <option value="male" name='gender'>Male</option>
                                                        <option value='female' name='gender'>Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Speciality" name='speciality' value={speciality} onChange={(e) => setspeciality(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Phone" name='phone' value={phone} onChange={(e) => setphone(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Enter Your Email" name='email' value={email} onChange={(e) => setemail(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" placeholder="Website URL" name='wurl' value={wurl} onChange={(e) => setwurl(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <form action="https://thememakker.com/" id="frmFileUpload" className="dropzone" method="post" encType="multipart/form-data">
                                                        <div className="dz-message">
                                                            <div className="drag-icon-cph"> <i className="material-icons">touch_app</i> </div>
                                                            <h3>Drop files here or click to upload.</h3>
                                                            <em>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</em> </div>
                                                        <div className="fallback">
                                                            <input name="file" type="file" onChange={(e) => setimg(e.target.files[0])} />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <textarea rows={4} className="form-control no-resize" placeholder="Please type what you want..." defaultValue={""} onChange={(e) => setdescription(e.target.value)} name='description' value={description} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12">
                                                    <button type="submit" className="btn btn-primary btn-round" onClick={submit} name='submit'>Submit</button>
                                                    <button type="submit" name="cancel" className="btn btn-default btn-round btn-simple" >Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Doctor's</strong> Account Information <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="User Name" name='username' value={username} onChange={(e) => setusername(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Password" name='password' value={password} onChange={(e) => setpassword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Confirm Password" name='cpassword' value={cpassword} onChange={(e) => setcpassword(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" className="btn btn-primary btn-round" name='submit' onClick={submit}>Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple" onClick={cancel}>Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="header">
                                        <h2><strong>Doctor</strong> Social Media Info <small>Description text here...</small> </h2>
                                        <ul className="header-dropdown">
                                            <li className="remove">
                                                <a role="button" className="boxs-close"><i className="zmdi zmdi-close" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="body">
                                        <div className="row clearfix">
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-facebook" /></span>
                                                    <input type="text" className="form-control" placeholder="Facebook" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-twitter" /></span>
                                                    <input type="text" className="form-control" placeholder="Twitter" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-google-plus" /></span>
                                                    <input type="text" className="form-control" placeholder="Google Plus" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-linkedin" /></span>
                                                    <input type="text" className="form-control" placeholder="LinkedIN" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-behance" /></span>
                                                    <input type="text" className="form-control" placeholder="Behance" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-group">
                                                    <span className="input-group-addon"><i className="zmdi zmdi-dribbble" /></span>
                                                    <input type="text" className="form-control" placeholder="dribbble" />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <p> <b>With Search Bar</b> </p>
                                                <select className="form-control z-index show-tick" data-live-search="true">
                                                    <option>Hot Dog, Fries and a Soda</option>
                                                    <option>Burger, Shake and a Smile</option>
                                                    <option>Sugar, Spice and all things nice</option>
                                                </select>
                                                <button type="submit" className="btn btn-primary btn-round">Submit</button>
                                                <button type="submit" className="btn btn-default btn-round btn-simple" onClick={cancel}>Cancel</button>
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
