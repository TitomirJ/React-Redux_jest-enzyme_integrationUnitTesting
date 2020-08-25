import React from "react";
import { shallow } from 'enzyme'
import Headline from "./index";

import { findByTestAttr, checkProps } from "../../../Utils";

const setUp = (props={}) =>  {
    const component = shallow(<Headline {...props} />);
    return component
}

describe('Headline Component', () => {

    describe('Checking PropTypes', () => {

        it('It should not throw a warning', () => {

            const expectedProps = {
                header: 'Test header',
                description: 'Test description',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'test@gmail.com',
                    age: 23,
                    onlineStatus: false
                }]
            }

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBeUndefined()

        });

    })

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                description: 'Test Description'
            };
            wrapper = setUp(props)
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(1)
        })

        it('Should render H1', () => {
            const h1 = findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })

        it('Should render description', () => {
            const description = findByTestAttr(wrapper, 'description')
            expect(description.length).toBe(1)
        })
    })

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp()
        })

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent')
            expect(component.length).toBe(0)
        })

    })
})