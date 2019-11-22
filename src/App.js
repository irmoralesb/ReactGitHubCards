import React from 'react';
import Card from './card';
import CardList from './cardList';
import Form from './form'
//api.github.com/users/gaearon

class App extends React.Component{

constructor(props){
  super(props);
  this.state= {
    profiles: props.profileList,
    title: props.title
  };
}

  render(){
  return <div>
    <div className="header">{this.state.title}</div>
    <Form />
    <CardList profileList={this.state.profiles} />
  </div>
  }
}

export default App;