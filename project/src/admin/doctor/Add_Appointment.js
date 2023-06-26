import React, { useEffect, useState } from "react";
import axios from "axios";
// import { faFemale } from '@fortawesome/free-solid-svg-icons'
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";

export default function Add_Appointment() {
  const [result, setResult] = useState([]);
  // const [service, setservice] = useState('')

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [service, setservice] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const status = 0;
  function submit(e) {
    e.preventDefault();
    const blogData = new FormData();
    blogData.append("fname", fname);
    blogData.append("lname", lname);
    blogData.append("email", email);
    blogData.append("dob", dob);
    blogData.append("description", description);
    blogData.append("phone", phone);
    blogData.append("gender", gender);
    blogData.append("service", service);
    blogData.append("date", date);
    blogData.append("status", status);
    axios
      .post("http://localhost/hospital/Addapoin.php", blogData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload(true);
  }

  useEffect(() => {
    axios
      .get("http://localhost/hospital/Addapoin.php")
      .then(function (response) {
        console.log(response);
        setResult(response.data);
        // setLoader(true)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="theme-cyan">
        <Topbar />
        <Sidebar />
        <section className="content">
          <div className="block-header">
            <div className="row">
              <div className="col-lg-7 col-md-5 col-sm-12">
                <h2>
                  Book Appointment
                  <small>Welcome to Oreo</small>
                </h2>
              </div>
              <div className="col-lg-5 col-md-7 col-sm-12">
                <ul className="breadcrumb float-md-right">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <i className="zmdi zmdi-home" /> Oreo
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">Appointment</a>
                  </li>
                  <li className="breadcrumb-item active">Book Appointment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card">
                  <div className="header">
                    <h2>
                      <strong>Book</strong> Appointment
                      <small>Description text here...</small>{" "}
                    </h2>
                    <ul className="header-dropdown">
                      <li className="remove">
                        <a role="button" className="boxs-close">
                          <i className="zmdi zmdi-close" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <div className="row clearfix">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            name="fname"
                            value={fname}
                            onChange={(e) => setfname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lname"
                            value={lname}
                            onChange={(e) => setlname(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Date of Birth"
                            name="dob"
                            value={dob}
                            onChange={(e) => setdob(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <select
                          className="form-control show-tick"
                          onChange={(e) => setgender(e.target.value)}
                          name="gender"
                          value={gender}
                        >
                          <option value>- Gender -</option>
                          <option value="male" name="gender">
                            Male
                          </option>
                          <option value="female" name="gender">
                            Female
                          </option>
                        </select>
                      </div>
                      <div className="col-sm-3">
                        <select
                          className="form-control show-tick"
                          name="service"
                          value={service}
                          onChange={(e) => setservice(e.target.value)}
                        >
                          <option value>- Service -</option>
                          <option value="Select Service" name="service">
                            Select Service
                          </option>
                          <option value="Dental Checkup" name="service">
                            Dental Checkup
                          </option>
                          <option value="Full Body Checkup" name="service">
                            Full Body Checkup
                          </option>
                          <option value="ENT Checkup" name="service">
                            ENT Checkup
                          </option>
                          {/* {result.map((i) => {
                            return (
                              <>
                                <option
                                  selected="selected"
                                  name="service"
                                  value={service}
                                >
                                  {i.service}
                                </option>
                              </>
                            );
                          })} */}
                        </select>
                      </div>
                      <div className="col-sm-3">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-calendar" />
                          </span>
                          <input
                            type="text"
                            className="form-control datetimepicker"
                            placeholder="Please choose date & time..."
                            name="date"
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Email"
                            name="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            rows={4}
                            className="form-control no-resize"
                            placeholder="Please type what you want..."
                            defaultValue={""}
                            name="description"
                            value={description}
                            onChange={(e) => setdescription(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-round"
                          onClick={submit}
                        >
                          Submit
                        </button>
                        <button
                          type="submit"
                          className="btn btn-default btn-round btn-simple"
                        >
                          Cancel
                        </button>
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
  );
}
