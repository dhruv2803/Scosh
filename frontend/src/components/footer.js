import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid text-light footer py-md-3">
                <p className="cr21 text-secondary ms-1">Copyright 2021</p>
            <div className="main-footer text-center">
                <div className="row">
                    <div className="col-12 col-lg-4 d-flex py-md-2 text-center scosh-dashed">
                        <span className="line"></span>
                        <h5 className="Scosh text-center mx-2">SCOSH</h5>
                        <span className="vertical-line"></span>
                    </div>
                    <div className="col-12 col-lg-4 py-md-2 d-flex text-center locationS">
                        <i className="fas fa-map-marker-alt mx-2"></i>
                        <p className="location text-center mx-1">Sardar Vallabhai Institute Of Technology</p>
                    </div>
                    <div className="social-links col-12 col-lg-4 text-center">
                        <a href="/" className="link"><i className="fab fa-facebook mx-3 fa-2x"></i></a>
                        <a href="/" className="link"><i className="fab fa-twitter mx-3 fa-2x"></i></a>
                        <a href="/" className="link"><i className="fab fa-linkedin mx-3 fa-2x"></i></a>
                        <a href="/" className="link"><i className="fab fa-instagram-square mx-3 fa-2x"></i></a>
                        <a href="/" className="link"><i className="fas fa-envelope-square mx-3 fa-2x"></i></a>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}
