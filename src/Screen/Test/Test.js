import {NavBar} from "antd-mobile";
import './Test.css';



function Test() {
    return (
        <div>
            <NavBar backArrow={false}>
                <span className="bold-center-text">Test</span>
            </NavBar>
        </div>
    );
}

export default Test;