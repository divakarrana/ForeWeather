import React from 'react';
import ReactDOM from 'react-dom';
import {cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Header from './header';

describe('<Header />', () => {

  afterEach(cleanup);

  it("should render without crashing <Header />", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header></Header>, div)
  });


  it("should match snapshot <Header />", () => {
    const tree = renderer.create(<Header></Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});