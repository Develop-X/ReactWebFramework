import React, {Component} from 'react';
import './App.css';

class Registration extends Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="registration">
                    <div>
                        <input type="text"/>
                        <input type="text"/>
                        <button>Click</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registration;
