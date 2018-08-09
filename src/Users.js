import React, {Component} from 'react';

class Users extends Component {
    render() {
        return (
            <div>
                {
                    this.props.results = (test) => {
                        let {users} = test.name;
                        return (
                            <label>{users}</label>
                        )
                    }
                }
            </div>
        )
    }
}

export default Users;
