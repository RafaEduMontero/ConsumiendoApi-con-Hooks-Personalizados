import {
    useState
} from 'react';
export default initState => {
    const [state, setState] = useState(initState);
    const handler = evt => {
        const {
            name,
            value,
            type
        } = evt.target;
        const typeValue = Object.prototype.toString.call(initState);
        const isObject = typeValue === '[object Object]' ? true : false;
        if (isObject) setState({
            ...state,
            [name]: value
        });
        else setState(state);
    };
    return [state, handler];
};