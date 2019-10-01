import React, { Component } from 'react';
import axios from 'axios';

class NewJournalistForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }

    handleFirstNameChange(event) {
      this.setState({ firstName: event.target.value });
    }
    handleLastNameChange(event) {
      this.setState({ lastName: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      const newJournalist = {
        "firstName": this.state.firstName,
        "lastName": this.state.lastName
      };
      console.log(newJournalist)
      props.handleJournalistPost(newJournalist);
    }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            id="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            id="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>

    )
  }
}

export default NewJournalistForm;



// export default

// componentDidMount() {
//   axios.get(`http://localhost:8080/articles`)
//     .then(res => {
//       const persons = res.data;
//       this.setState({ persons });
//     })
// }

// <ul>
//   { this.state.persons.map(person => <li>{person.name}</li>)}
// </ul>
