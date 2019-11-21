import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


it('renders without crashing', () => {
  const div = document.createElement('div');
  const profileList = testData;
  ReactDOM.render(<App title="The GitHub Cards App" profileList={profileList} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Dan Abramov user render', () => {
  const div = document.createElement('div');
  const profileList = testData;
  const renderResult = ReactDOM.render(<App title="The GitHub Cards App" profileList={profileList} />, div);
  console.log(renderResult);
  ReactDOM.unmountComponentAtNode(div);
  expect(renderResult.getByText('Dan Abramov')).toBeInTheDocument();
});

