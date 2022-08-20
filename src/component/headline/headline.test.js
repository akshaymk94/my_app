import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByDataAttr, checkProps } from '../../../utils/index';
const setUp = (props={}) => {

    const component = shallow(<Headline {...props} />)
    return component;

}

describe("Headline", () => {

    describe('Checking PropTypes', () =>  {
        it('should not throw a warning', () => {

            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'test fname',
                    lName: 'test lname',
                    email: 'email@email.com',
                    age: 44,
                    onlineStatus: true
                }]
            }

            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined()
        })
    })

    describe("with props", () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "test header",
                desc: "test desc",
            }
            wrapper = setUp(props);
        })

        it("should render without errors", () => {
            const component = findByDataAttr(wrapper, 'headlineComponent')
            expect(component.length).toBe(1)
        })

        it("should render a H1", () => {
            const h1 = findByDataAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })

        it("should render a p for desc", () => {
            const desc = findByDataAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })

    })

    describe("with no props", () => {
        
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('should not render', () => {
            const component = findByDataAttr(wrapper, 'headlineComponent')
            expect(component.length).toBe(0)
        })
    })

})