import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return ( 
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-4">About Us</h1>
                        <p className="lead  mb-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis placeat obcaecati officiis, molestias harum maxime dolorem adipisci veniam amet non quam odio maiores qui vitae labore sapiente, aperiam libero! Reprehenderit soluta consequatur laudantium natus labore eligendi id, ea doloremque. Officia, mollitia blanditiis debitis enim provident nisi placeat voluptas molestias beatae, modi, dolorem quibusdam commodi. Tenetur temporibus delectus numquam suscipit explicabo incidunt consequatur provident dolorem facere! Nemo, dolorem vero aut quod nesciunt excepturi quas! Ut corrupti odio amet, doloribus tempore neque perspiciatis aspernatur cumque nesciunt repellendus expedita eaque iure illo obcaecati ducimus a placeat eius ratione quos commodi animi culpa modi!
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/about.svg" alt="About Us" height="400px" width="400px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;