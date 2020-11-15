import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import App from './App';

describe('<App />', () => {

  afterEach(cleanup);

  it("should render without crashing <App />", () => {
    const div = document.createElement('div');
    ReactDOM.render(<App></App>, div)
  });

  it("should match snapshot <App />", () => {
    const tree = renderer.create(<App></App>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
