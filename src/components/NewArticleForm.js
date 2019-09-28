import React { Component } from 'react';

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
      category: ['']
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <label htmlFor="journalist">Author: </label>
        <input
          id="journalist"
          type="text"
          value={this.state.journalist}
          onChange={this.handleJournalistChange}
        />
        <label htmlFor="summary">Summary: </label>
        <input
          id="summary"
          type="text"
          value={this.state.summary}
          onChange={this.handleSummaryChange}
        />
        <label htmlFor="content">Story: </label>
        <input
          id="content"
          type="text"
          value={this.state.content}
          onChange={this.handleContentSubmission}
        />
      </form>
    )
  }

}
