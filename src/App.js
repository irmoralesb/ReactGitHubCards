import React from 'react';
import CardList from './cardList';
import Form from './form'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      profiles: props.profileList,
      title: props.title
    };
  }

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles,profileData]
    }));
  }

  render(){
  return <div>
    <div className="header">{this.state.title}</div>
    <Form onSubmit={this.addNewProfile}/>
    <CardList profileList={this.state.profiles} />
  </div>
  }
}

export default App;