import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="nav">
        <div id="nav-left">
          <h1>Journal Data</h1>
        </div>

        <div id="nav-right">
          <a href="https://github.com/clairewild/JournalData">
            <img className="github" src="http://res.cloudinary.com/oblaka/image/upload/v1494339247/github_lmdfrw.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Nav;
