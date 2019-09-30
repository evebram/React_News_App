import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      journalist: '',
      date: '',
      summary: '',
      content: '',
      category: ['']
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleJournalistChange = this.handleJournalistChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleJournalistChange(event) {
    this.setState({ journalist: event.target.value });
  }
  handleDateChange = date => {
  const [startDate, setStartDate] = useState(new Date());
};
  handleSummaryChange(event) {
    this.setState({ summary: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }
  handleCategoryChange = (event) => {
  const taggedCategories = event.target.value;
  this.setState({ taggedCategories });
};

  handleSubmit(event) {
    event.preventDefault();
    const newArticle = {
      title: this.state.title,
      journalist: this.state.journalist,
      date: this.state.date,
      summary: this.state.summary,
      content: this.state.content,
      category: this.state.category
    };
    this.props.handleContentSubmission(newArticle);
    this.setState({
      title: '',
      journalist: '',
      date: '',
      summary: '',
      content: '',
      category: []
      // category: ['']
    });
  }

  render() {
    const categories = ['Politics', 'Education', 'Health', 'Tech', 'Science', 'Crime'];
    return (
      <Form onSubmit={this.handleSubmit}>

      <FormGroup>
        <Label htmlFor="title">Title: </Label>
        <Input
          id="title"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="journalist">Author: </Label>
        <select>
        <option value="journalist1">Ben</option>
        <option value="journalist2">Eve</option>
        <option value="journalist3">Daniela</option>
        <option value="journalist4">Graeme</option>
        </select>
      </FormGroup>

      <FormGroup>
      <Label htmlFor="date">Date: </Label>
      <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
      </FormGroup>

      <FormGroup>
        <label htmlFor="summary">Summary: </label>
        <input
          id="summary"
          type="text"
          value={this.state.summary}
          onChange={this.handleSummaryChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleImage">Image</Label>
        <Input type="file" name="image" id="exampleImage" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="content">Story: </label>
        <input
          id="content"
          type="text"
          value={this.state.content}
          onChange={this.handleContentSubmission}
        />
      </FormGroup>

      <FormGroup>
      <label htmlFor="category">Category: </label>
          {categories.map((category, index) =>
              <label key={index}>
                {category}
                <input
                value={category}
                checked={this.state.taggedCategories === category.toUpperCase()}
                onChange={this.handleCategoryChange}
                type="radio" />
              </label>
            )}
      </FormGroup>

      <FormGroup>
        <input type="submit" />
      </FormGroup>

      </Form>
    )
  }

}

export default NewArticleForm;
