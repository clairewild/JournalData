import { connect } from 'react-redux';

import FileUpload from './file_upload';
import { uploadFile } from '../../actions/actions';

const mapDispatchToProps = dispatch => ({
  uploadFile: data => dispatch(uploadFile(data))
});

export default connect(null, mapDispatchToProps)(FileUpload);
