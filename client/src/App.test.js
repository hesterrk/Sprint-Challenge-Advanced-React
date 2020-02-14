import React from 'react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import { render } from '@testing-library/react';
import Header from "./components/Header";
import PlayerList from './components/PlayerList';


test(`renders without crashing`, () => {
  render(<App />);
  
  });


  test(`it renders my Header component`, () => {
     render(<Header />);
    
    
    });

    
  test('renders my players header', () => {
    const { getByText } = render(<App />);
     getByText('Players');
   
  });

  test('gets div header text based on id and has className', () => {
    const { getByTestId } = render(<Header />);
    getByTestId("wrapper");
   
    
    })

