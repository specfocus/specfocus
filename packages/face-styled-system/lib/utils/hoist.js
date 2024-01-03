import { ForwardRef } from "react-is";
const REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDerivedStateFromProps: true,
    propTypes: true,
    type: true
};
const KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
const TYPE_STATICS = {
    [ForwardRef]: {
        $$typeof: true,
        render: true
    }
};
const { defineProperty, getOwnPropertyNames, getOwnPropertySymbols = () => [], getOwnPropertyDescriptor, getPrototypeOf, prototype: objectPrototype } = Object;
const { prototype: arrayPrototype } = (Array);
export default function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        const inheritedComponent = getPrototypeOf(sourceComponent);
        if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
        const keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent), getOwnPropertySymbols(sourceComponent));
        const targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;
        const sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;
        let i = keys.length;
        let descriptor;
        let key;
        while (i--) {
            key = keys[i];
            if (!KNOWN_STATICS[key] &&
                !(blacklist && blacklist[key]) &&
                !(sourceStatics && sourceStatics[key]) &&
                !(targetStatics && targetStatics[key])) {
                descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                if (descriptor) {
                    try {
                        defineProperty(targetComponent, key, descriptor);
                    }
                    catch (e) {
                        /* fail silently */
                    }
                }
            }
        }
    }
    return targetComponent;
}
