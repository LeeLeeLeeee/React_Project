import React from 'react'
import {Func} from './Group_Function'


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        console.log("First Start..."+this.props.id);
    }
    componentDidMount() {
        console.log("Page Render Finish...");
    }
    componentWillUpdate() {
        Func.talk("Update!!");
    }
    componentWillUnmount () {
        console.log("Page Deadㅠㅠ..");
    }
    render(){
        return(
            <div>
                <h2>HELLO~{this.props.id}</h2>
            </div>
        )
    }
}


export default LifeCycle