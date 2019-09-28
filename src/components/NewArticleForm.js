import React { Component } from 'react';

class NewArticleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      summary: '',
      content: '',
      journalist: '',
      category: ['']
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleJournalistChange = this.handleJournalistChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSummaryChange(event) {
    this.setState({ summary: event.target.value });
  }
  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }
  handleJournalistChange(event) {
    this.setState({ journalist: event.target.value });
  }
  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newArticle = {
      title: this.state.title,
      summary: this.state.summary,
      content: this.state.content,
      journalist: this.state.journalist,
      category: this.state.category
    };
    this.props.handleContentSubmission(newArticle);
    this.setState({
      title: '',
      summary: '',
      content: '',
      journalist: '',
      category: ['']
    });
  }
}
