import React from 'react'

const signUp = () => {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn z-depth-0">Sign Up</button>
                </div>
                <div className="center">
                    {/* {authError ? <p>{authError}</p> : null} */}
                </div>
            </form>
            <div className="logo">
                <img src="#" alt="logo" />
            </div>
        </div>
    );
}

export default signUp
