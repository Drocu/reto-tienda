import React from "react";

const Signup = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal"><i className="fa fa-user-plus me-1"> </i>Singup
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginModalLabel">REGISTRAR</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-2"><span className="fa fa-google me-2"></span>Sign in With Google</button>
                            <button className="btn btn-primary w-100 mb-2"><span className="fa fa-facebook me-2"></span>Sign in With Facebook</button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">UserName</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 Form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup; 