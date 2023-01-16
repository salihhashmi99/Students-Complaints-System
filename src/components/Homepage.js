import React from "react";
import "./Navbar.css";
import './bootstrap.min.css';
import img1 from '../images/comp.png'
import img3 from '../images/feed.png'
import img2 from '../images/sugg.png'
import Signup from "./Signup";
import { Link } from "react-router-dom";
const homepage = () => {
    return (
        <>
            
            <div className="container">
            <div className="heading">
                <h3 >Smart Problem is a system where you can register your complaints & provide your valuable Feedback & Suggestion now <Link to={'/signup'}>create your account</Link> and then <Link to={'/signin'}>Register your complaints.</Link></h3>
            </div>
                <div className="row " id="rowbar">
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={img1} className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Complaints</h5>
                                <p className="card-text">Expression of grief, pain, or dissatisfaction She did her chores without complaint.</p>
                                <a href="https://www.merriam-webster.com/dictionary/complaint" className="btn btn-primary">For More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={img2} className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Suggestion</h5>
                                <p className="card-text"> The process by which one thought leads to another especially through association of ideas.</p>
                                <a href="https://www.merriam-webster.com/dictionary/suggestion" className="btn btn-primary">For More Info</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={img3} className="card-img-top" alt="..." height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">Feedback</h5>
                                <p className="card-text">Information about reactions to a product, a person's performance of a task, etc. which is used as a basis for improvement.</p>
                                <a href="https://www.merriam-webster.com/dictionary/feedback" className="btn btn-primary">For More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default homepage;
