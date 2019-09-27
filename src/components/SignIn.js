import React from 'react'

const signIn = () => {
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
                    <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                    <div className="red-text center">
                        {/* {authError ? <p>{authError}</p> : null} */}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default signIn
