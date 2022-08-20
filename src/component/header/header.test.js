import React from 'react';
import { shallow} from 'enzyme';
import Header from './index';
import { findByDataAttr } from '../../../utils/index';

const setUp = (props = {}) => {

    const component = shallow(<Header />)
    return component;

}

describe("Header Component", () => {

    let component;
    beforeEach(() => {
        component = setUp();
    })
    
    it("should render without errors", () => {
        const header = findByDataAttr(component, 'headerComponent')
        expect(header.length).toBe(1)
    });

    it("Should render a logo", () => {
        const logo = findByDataAttr(component, 'logoIMG')
        expect(logo.length).toBe(1)
    })

});