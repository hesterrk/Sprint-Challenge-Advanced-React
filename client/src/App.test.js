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


//check they WORK!!!!

test(`renders without crashing`, () => {
  render(<App />);
  
  });


  test(`it renders my Header component`, () => {
    render(<Header />);
    
    });

    test(`it renders my PlayerList component`, () => {
      render(<PlayerList />);
      
      });


  test('renders learn football link', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Players/i);
    expect(textElement).toBeInTheDocument();
  });

  test('gets div header text based on id and has className', () => {
    const {getByTestId} = render(<Header/>);
    expect(getByTestId("wrapper"));
    expect(getByTestId("wrapper")).toHaveClass("headerWrapper");
    
    })

  
