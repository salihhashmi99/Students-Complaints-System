import React from "react";
import "./Navbar.css";
import './bootstrap.min.css';
import siyam from '../images/sayam.jpg'
import salih from '../images/salih.jpg'
import hasham from '../images/hasham.jpg'
const about = () => {
    return (
        <>
            
            <div className="container">
                <div className="row " id="rowbar">
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={siyam} className="card-img-top" alt="..." height="300px" />
                            <div className="card-body">
                                <h3 className="card-title">Siyam Waheed</h3>
                                <h6 className="card-text">Android App Developer | Front End Developer | Graphics Designer</h6>
                                <a href="https://www.facebook.com/sayam.satti.786" className="btn btn-primary">For More About Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={salih} className="card-img-top" alt="..." height="300px" />
                            <div className="card-body">
                                <h3 className="card-title">Salih Tanveer</h3>
                                <h6 className="card-text">Youtuber | MernStack Developer | Heavy Programmer</h6>
                                <a href="https://www.facebook.com/profile.php?id=100072420228025" className="btn btn-primary">For More About Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card" >
                            <img src={hasham} className="card-img-top" alt="..." height="300px" width="50px"/>
                            <div className="card-body">
                                <h3 className="card-title">Hasham Sabir</h3>
                                <h6 className="card-text">Block Chain Professional | Anonymous Hacker  | Gattarist</h6>
                                <a href="https://www.facebook.com/profile.php?id=100008187858038" className="btn btn-primary">For More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default about;
