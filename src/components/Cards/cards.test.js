import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Cards from './cards';

describe('<Cards />', () => {

    afterEach(cleanup);

    it("should render without crashing <Cards />", () => {
        const div = document.createElement('div');
        ReactDOM.render(<Cards></Cards>, div);
    });

    it("should renders <Cards /> correctly", () => {
        const {getByTestId} = render(<Cards weatherData={[
            {
            "dt": 1605430800, 
            "main": {"temp": 31.37,"feels_like": 32.42,"temp_min": 30.17,"temp_max": 31.37,"pressure": 1011,"sea_level": 1011,"grnd_level": 1008,"humidity": 53,"temp_kf": 1.2},
            "weather": [{"id": 802,"main": "Clouds","description": "scattered clouds","icon": "03d"}],
            "clouds": {"all": 36},
            "wind": {"speed": 4.21,"deg": 313},
            "visibility": 10000,
            "pop": 0,
            "sys": {"pod": "d"},
            "dt_txt": "2020-11-15 09:00:00"
            }]}></Cards>);

            expect(getByTestId('card')).toBeInTheDocument();
    });

    it("should match snapshot <Cards />", () => {
        const tree = renderer.create(<Cards weatherData={[
            {
            "dt": 1605430800, 
            "main": {"temp": 31.37,"feels_like": 32.42,"temp_min": 30.17,"temp_max": 31.37,"pressure": 1011,"sea_level": 1011,"grnd_level": 1008,"humidity": 53,"temp_kf": 1.2},
            "weather": [{"id": 802,"main": "Clouds","description": "scattered clouds","icon": "03d"}],
            "clouds": {"all": 36},
            "wind": {"speed": 4.21,"deg": 313},
            "visibility": 10000,
            "pop": 0,
            "sys": {"pod": "d"},
            "dt_txt": "2020-11-15 09:00:00"
            }]}></Cards>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});