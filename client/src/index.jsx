import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    // $.ajax({
    //   type: "POST",
    //   url: '/repos',// url api?https://api.github.com/users/${term}/repos
    //   data: term,
    //   success: function (response) {
    //     console.log("Successful AJAX post")
    //   },
    //   dataType: "application/json",
    //   error: function (data) {
    //     console.error("Ajax request error", data)
    //   }
    // });
    $.post('/repos', {username: term})
    .then(data => console.log(data, "resssssppponnnnse"))
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));