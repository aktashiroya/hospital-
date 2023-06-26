import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";

export default function All_doctor() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [speciality, setspeciality] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
  const [description, setdescription] = useState("");
  const [wurl, setwurl] = useState("");
  const [img, setimg] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/hospital/All_doctor.php")
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
              <div className="col-lg-5 col-md-5 col-sm-12">
                <h2>
                  All Doctors
                  <small>Welcome to Oreo</small>
                </h2>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 text-right">
                <button
                  className="btn btn-white btn-icon btn-round d-none d-md-inline-block float-right m-l-10"
                  type="button"
                >
                  <i className="zmdi zmdi-plus" />
                </button>
                <ul className="breadcrumb float-md-right">
                  <li className="breadcrumb-item">
                    <a href="/Dashborad2">
                      <i className="zmdi zmdi-home" /> Oreo
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">Doctors</a>
                  </li>
                  <li className="breadcrumb-item active">All Doctors</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="body">
                    <ul className="nav nav-tabs padding-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#Permanent"
                        >
                          Permanent
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#Consultant"
                        >
                          Consultant
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content m-t-10">
                  <div className="tab-pane active" id="Permanent">
                    <div className="row clearfix">
                      {result.map((i) => {
                        return (
                          <>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="card xl-blue member-card doctor">
                                <div className="body">
                                  <div className="member-thumb">
                                    <img
                                      src={`http://localhost/hospital/img/${i.img}`}
                                      className="img-fluid"
                                      alt="profile-image"
                                    />
                                  </div>
                                  <div className="detail">
                                    <h4 className="m-b-0">{i.fname}</h4>
                                    <p className="text-muted">{i.speciality}</p>
                                    <ul className="social-links list-inline m-t-20">
                                      <li>
                                        <a title="facebook" href="#">
                                          <i className="zmdi zmdi-facebook" />
                                        </a>
                                      </li>
                                      <li>
                                        <a title="twitter" href="#">
                                          <i className="zmdi zmdi-twitter" />
                                        </a>
                                      </li>
                                      <li>
                                        <a title="instagram" href="#">
                                          <i className="zmdi zmdi-instagram" />
                                        </a>
                                      </li>
                                    </ul>
                                    <p className="text-muted">
                                      795 Folsom Ave, Suite 600 San Francisco,
                                      CADGE 94107
                                    </p>
                                    <a
                                      href={`/Profile/${i.id}`}
                                      className="btn btn-default btn-round btn-simple"
                                    >
                                      View Profile
                                    </a>
                                    {/* <a href="/Viewprofile" className="btn btn-default btn-round btn-simple">View Profile</a> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="tab-pane" id="Consultant">
                    <div className="row clearfix"></div>
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
