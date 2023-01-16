import React from "react";
import "./Navbar.css";
import './bootstrap.min.css';
import complaint1 from '../images/complaint.png'
import submitted from '../images/sugg.png'

const complaint = () => {
    return (
        <>
            <div className="container">
                <div className="row " id="rowbar">
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={complaint1} className="card-img-top" alt="..." height="300px" />
                            <div className="card-body">
                                <h3 className="card-title">Register Your Complaints</h3>
                                <h6 className="card-text">Click the below link and and register your Complaints</h6>
                                <a href="#" className="btn btn-primary">Register Complaint</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={submitted} className="card-img-top" alt="..." height="300px" />
                            <div className="card-body">
                                <h3 className="card-title">Submitted Complaints</h3>
                                <h6 className="card-text">Click the below link and check your register complaints</h6>
                                <a href="#" className="btn btn-primary">Submitted Complaints</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default complaint;
