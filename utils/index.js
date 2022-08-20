
export const findByDataAttr = (component, attr) => {
    const element = component.find(`[data-test='${attr}']`)
    return element;
}