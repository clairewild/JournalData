import React from 'react';

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.deactivateButton = this.deactivateButton.bind(this);
  }

  deactivateButton(e) {
    e.target.classList.toggle("inactive");
  }

  render() {
    return (
      <div className="file-upload-box">
        <h3>Upload Day One JSON</h3>

        <form action="upload" method="post" encType="multipart/form-data">
          <label onClick={ this.deactivateButton } className="button label-button">
            <input type="file" name="file" />
            Choose file
          </label>

          <input className="button" type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}

export default FileUpload;

// class File extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null
//     }
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(e) {
//     let data = new FormData();
//     data.append("file", e.target.files[0]);
//     debugger;
//     this.setState({
//       data: data
//     });
//   }
//
//   handleSubmit(e) {
//     debugger;
//     this.props.uploadFile(this.state.data); // wrap in an object?
//   }
//
//   render() {
//     return (
//       <form action="" enctype="multipart/form-data">
//         <input onChange={this.handleChange} type="file" name="file"></input>
//         <input onClick={this.handleSubmit} type="button" value="Upload File"></input>
//       </form>
//     );
//   }
// }
