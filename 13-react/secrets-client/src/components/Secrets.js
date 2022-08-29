import React, { Component, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3001/secrets.json'; // Later: change this to the deployed URL

class Secrets extends Component {
    constructor() {
        super();
        this.state = {
            secrets: [
                {id: 1, content: 'groucho'},
                {id: 2, content: 'chico'},
                {id: 3, content: 'harpo'}
            ] // TODO: populate this via AJAX
        };
        this.saveSecret = this.saveSecret.bind(this);
    }

    // React's lifecycle methods
    componentDidMount() {
        // fetch secrets
        const fetchSecrets = () => {
            axios(SERVER_URL).then((response) => {
                this.setState({secrets: response.data});
            });
            setTimeout(fetchSecrets, 4000); // recursive setInterval: POLLING
        };

        fetchSecrets();
        // poll for secrets
        // setInterval(fetchSecrets, 4000);
    }

    saveSecret(content) {
        // save this to Rails vis AJAX
        axios.post(SERVER_URL, { content: content }).then((response) => {
            this.setState({secrets: [response.data, ...this.state.secrets]})
            // TODO: add the response to the secrets in state
        });

        // const newSecret = {content: content};
        // this.setState({secrets: [...this.state.secrets, newSecret]}); // ...: spread operator
    }
    
    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm onSubmit={ this.saveSecret } />
                <SecretsList secrets={ this.state.secrets } />
            </div>
        );
    }
}

const SecretForm = (props) => {
    const [content, setContent] = useState('');
    
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(content);
        setContent('');
        // TODO: actually handle the submit
    };

    const _handleChange = (e) => {
        setContent(e.target.value); // this.setState({content: event.target.value})
    };

    // Two way data binding:
    // if we change the input, that changes the state
    // if we change the state, that changes the input
    return (
        <form onSubmit={ _handleSubmit }>
            <textarea onChange={ _handleChange } value={ content }required></textarea>
            <input type="submit" value="Tell" />
        </form>
    );
};

const SecretsList = (props) => {
    return (
        <div>
            <p>{ props.secrets.length } secrets</p>
            { props.secrets.map((f) => <p key={ f.id }>{f.content}</p>) }
        </div>
    );
};

export default Secrets;