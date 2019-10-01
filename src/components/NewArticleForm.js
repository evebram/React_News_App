import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";
import axios from 'axios';

import "react-datepicker/dist/react-datepicker.css";

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      journalist: '',
      date: new Date,
      summary: '',
      image: null,
      content: '',
      category: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleJournalistChange = this.handleJournalistChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleJournalistChange(event) {
    this.setState({ journalist: event.target.value });
  }
  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }
  handleChange = newDate => {
    this.setState({date: newDate  });
  };
  handleSummaryChange(event) {
    this.setState({ summary: event.target.value });
  }
  handleImageChange(event) {
    this.setState({ image: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  handleCategoryChange(event) {
  const { value } = event.target.value;
  this.setState(prevState => ({
      category: {
        ...prevState.category,
        [value]: !prevState.category[value]
      }
    }));
    };

  handleSubmit(event) {
    event.preventDefault();
    axios.post(`http://localhost:8080/articles`, this.state)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    const newArticle = {
      title: this.state.title,
      journalist: this.state.journalist,
      date: this.state.date,
      summary: this.state.summary,
      image: this.state.image,
      content: this.state.content,
      category: this.state.category
    };
    this.props.handleContentSubmission(newArticle);
    this.setState({
      title: '',
      journalist: '',
      date: '',
      summary: '',
      image: '',
      content: '',
      category: []
    });
  }

  render() {
    const categories = ['Politics', 'Education', 'Health', 'Tech', 'Science', 'Crime'];
    return (
      <form onSubmit={this.handleSubmit}>

      <div>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
      </div>

      <div>
        <label htmlFor="journalist">Author: </label>
        <select>
        <option value="journalist1">Ben</option>
        <option value="journalist2">Eve</option>
        <option value="journalist3">Daniela</option>
        <option value="journalist4">Graeme</option>
        </select>
      </div>

      <div>
      <label htmlFor="date">Date: </label>
        <DatePicker
          selected={this.state.date}
          onChange={this.handleChange}
          showTimeSelect
          dateFormat="Pp"
        />
      </div>

      <div>
        <label htmlFor="summary">Summary: </label>
        <input
          id="summary"
          type="text"
          value={this.state.summary}
          onChange={this.handleSummaryChange}
        />
      </div>

      <div>
        <label htmlFor="exampleImage">Image: </label>
        <input type="url" name="image" id="exampleImage" />
      </div>

      <div>
        <label htmlFor="content">Story: </label>
        <input
          id="content"
          type="text"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
      </div>

      <div tag="fieldset">
        <label htmlFor="category">Category: </label>
          <div check>
            {categories.map((category, index) =>
                <label check key={index} >
                  {category}
                  <input
                  value={category}
                  name= 'category[]'
                  checked={this.state.taggedCategories === category}
                  onChange={this.handleCategoryChange}
                  type="checkbox"
                  />
                </label>
              )}
          </div>
      </div>

      <div>
        <input type="submit" />
      </div>

      </form>
    )
  }

}

export default NewArticleForm;
