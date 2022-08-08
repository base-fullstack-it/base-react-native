import {useState} from "react";

export default ()  => {

    const [toggleState, setToggleState] = useState(false);

    const invokeToggle = () => setToggleState(!toggleState);

    return {invokeToggle, toggleState};
}
