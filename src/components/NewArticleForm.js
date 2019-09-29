import React, { Component } from 'react';

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      journalist: '',
      summary: '',
      content: '',
      category: ['']
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleJournalistChange = this.handleJournalistChange.bind(this);
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
  handleSummaryChange(event) {
    this.setState({ summary: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newArticle = {
      title: this.state.title,
      journalist: this.state.journalist,
      summary: this.state.summary,
      content: this.state.content,
      category: this.state.category
    };
    this.props.handleContentSubmission(newArticle);
    this.setState({
      title: '',
      journalist: '',
      summary: '',
      content: '',
      category: ''
      // category: ['']
    });
  }

  render() {
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
        <label htmlFor="summary">Summary: </label>
        <input
          id="summary"
          type="text"
          value={this.state.summary}
          onChange={this.handleSummaryChange}
        />
      </div>
      <div>
        <label htmlFor="content">Story: </label>
        <input
          id="content"
          type="text"
          value={this.state.content}
          onChange={this.handleContentSubmission}
        />
      </div>

      <div>
        <label htmlFor="category">Category: </label>
        <label>
        <input
          id="category"
          type="radio"
          value="Politics"
          checked={false}
          onChange={this.handleCategoryChange}
          />
            Politics
        </label>

        <label>
        <input
          id="category"
          type="radio"
          value="Education"
          checked={false}
          onChange={this.handleCategoryChange}
          />
            Education
        </label>

        <label>
        <input
          id="category"
          type="radio"
          value="Health"
          checked={false}
          onChange={this.handleCategoryChange}
          />
            Health
        </label>

        <label>
        <input
          id="category"
          type="radio"
          value="Tech"
          checked={false}
          onChange={this.handleCategoryChange}
          />
            Tech
        </label>

        <label>
        <input
          id="category"
          type="radio"
          value="Science"
          checked={false}
          onChange={this.handleCategoryChange}
          />
            Science
        </label>

        <label>
        <input
          id="category"
          type="radio"
          value="Crime"
          checked={false}
          onChange={this.handleCategoryChange}
          />
            Crime
        </label>
      </div>

      <div>
        <input type="submit" />
      </div>

      </form>
    )
  }

}

export default NewArticleForm;
