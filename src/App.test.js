import React from "react";
import App from "./App";
import { shallow } from 'enzyme'
import { findByTestAttr, testStore } from "../Utils";

const setUp = (initialState = {}) => {
    const store = testStore(initialState)
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper
}

describe('App component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            },{
                title: 'Example title 2',
                body: 'Some text'
            },{
                title: 'Example title 3',
                body: 'Some text'
            },]
        }
        wrapper = setUp(initialState)
    });

    it('Should render without errors',() => {
        const component = findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1)
    });
})