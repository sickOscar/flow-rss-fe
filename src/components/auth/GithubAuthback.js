import React from 'react';
import $ from 'jquery';

// import FlowsList from './../flows/FlowsList';

class GithubAuthback extends React.Component {

  componentDidMount() {
    var urlParams = location.search.substring(1, location.search.length)
      .split('&');
    var obj = {}
    urlParams.forEach(function(param) {
      obj[param.split('=')[0]] = param.split('=')[1];
    });
    $.get({
      dataType: 'json',
      url: 'http://localhost:5000/github-authback'
    }).done(function(data) {
      console.log(data);
    })
  }

  render() {
    return (
      <div className="main">
        AUTH BACK!
      </div>
    );
  }

}

GithubAuthback.defaultProps = {};

export default GithubAuthback;
