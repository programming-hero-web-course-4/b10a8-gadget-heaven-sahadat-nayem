import React from 'react';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10">
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <form className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">First Name</span>
                </label>
                <input type="text" placeholder="Enter Your First Name" className="input input-bordered" required />
                <label className="label">
                    <span className="label-text">Last Name</span>
                </label>
                <input type="text" placeholder="Enter Your Last name" className="input input-bordered" required />
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input type="number" placeholder="Enter Phone Number" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Registration</button>
                </div>
            </form>
        </div>
    );
};

export default Registration;