import React, { Component } from 'react';

const NewJournalistForm = (props) => {

    function handleSubmit(event) {
      event.preventDefault();
      const journalist = {
        "firstName": event.target.firstName.value,
        "lastName": event.target.lastName.value
      }
      props.handleJournalistPost(journalist);
      console.log(journalist)
    }

    return (
      <div>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" name="firstName"/>
          <input type="text" placeholder="Last Name" name="lastName"/>
          <button type="submit">Save</button>
      </form>
      </div>
    )
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
