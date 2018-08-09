import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap'
import Gallery from './Gallery';
import Users from "./Users";

class Global extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            items: [],
            results: ''
        }
    }

    search() {
        const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
        fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
            .then(Response => Response.json())
            .then(json => {
                let {items} = json;
                this.setState({items})
            });
    }

    user() {
        const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
        fetch(`${BASE_URL}`, {method: 'GET'})
            .then(Response => Response.json())
            .then(json => {
                let {results} = json;
                this.setState({results})
            });
    }

    render() {
        return (
            <div>
                <h2 className="align-content-sm-center">Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a book"
                            onChange={event => this.setState({query: event.target.value})}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.search();
                                }
                            }}
                        />
                        <div>
                            <button className="btn btn-primary" onClick={() => this.search()}>Search</button>
                            <button className="btn btn-primary" onClick={() => this.user()}>User</button>
                        </div>
                    </InputGroup>
                </FormGroup>
                <Gallery items={this.state.items}/>
                <Users user={this.state.results}/>
            </div>
        )
    }
}

export default Global;
