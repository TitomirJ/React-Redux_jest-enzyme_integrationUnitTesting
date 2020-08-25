import React from "react";
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from "../../../Utils";
import ListItem from "./index";

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                description: 'Some text'
            };
            const propsErr= checkProps(ListItem, expectedProps);
            expect(propsErr).toBeUndefined();
        })

    })

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                description: 'Some text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Should renders without errors', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1)
        });

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle')
            expect(title.length).toBe(1)
        })

        it('Should render a description',() => {
            const desc = findByTestAttr(wrapper, 'componentDescription')
            expect(desc.length).toBe(1)
        });

    })

    describe('Should NOT render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                description: 'Some text'
            }
            wrapper = shallow(<ListItem {...props}/>)
        })

        it('Component is not render ',() => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0)
        });

    })
})
