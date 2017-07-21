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
          <label onClick={this.deactivateButton} className="button label-button">
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
