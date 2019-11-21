import React from 'react';
import Card from './card';
import CardList from './cardList';

//api.github.com/users/gaearon

class App extends React.Component{
  render(){
  return <div>
    <div className="header">{this.props.title}</div>
    <CardList profileList={this.props.profileList} />
  </div>
  }
}

export default App;