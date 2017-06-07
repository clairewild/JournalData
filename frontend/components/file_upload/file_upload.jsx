import React from 'react';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.uploadFile(this.state.file);
    // TODO: make this match the expected request format
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="upload" encType="multipart/form-data">
        <input onChange={this.handleChange} type="file" name="file"></input>
        <input type="submit" value="Upload File"></input>
      </form>
    );
  }
}

export default FileUpload;
