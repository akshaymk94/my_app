
import checkPropTypes from 'check-prop-types';

export const findByDataAttr = (component, attr) => {
    const element = component.find(`[data-test='${attr}']`)
    return element;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
    return propsErr;
}