import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="rows">
                        <div className="col-md-3 item">
                            <h3>Get Started</h3>
                            <ul>
                                <p>How it Works</p>
                               <p>Create an Account</p>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Post Opportunities</h3>
                            <ul>
                                <p> How to Post a Job</p>
                                <p> Find Freelancers</p>
                            </ul>
                        </div>
                        <div className="col-md-3 item">
                            <h3>Connect with Us</h3>
                            <ul>
                                <a href="https://www.facebook.com"><img src="https://i.redd.it/7e59tvt3dpx21.jpg" alt="Facebook" /></a>
                                <a href="https://www.twitter.com"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/91/ef/67/91ef67ae-4877-1286-a4d6-fb04f6f37e9e/ProductionAppIcon-2x-4-0-0-85-220.png/1200x630bb.png" alt="Twitter" /></a>
                                <a href="https://www.instagram.com"><img src="https://pbs.twimg.com/profile_images/1526231349354303489/3Bg-2ZsT_400x400.jpg" alt="Instagram" /></a>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
