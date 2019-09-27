import React from 'react'

const SignIn = () => {
    return (
        <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn z-depth-0">Sign In</button>
                    <div className="center">
                        {/* {authError ? <p>{authError}</p> : null} */}
                    </div>
                </div>
            </form>
            <div className="logo">
                <img src="#" alt="logo" />
            </div>
        </div>
    );
}

export default SignIn
