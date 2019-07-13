import React from 'react'
import { styled,makeStyles,Theme ,createStyles } from '@material-ui/styles';
import { compose, spacing, palette } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import {Func} from '../Test/Group_Function'
import OutlinedButtons from './btn';


class Tables extends React.Component{   
    
    constructor(props) {
        super(props);
        this.state = {
            table_num: "",
            open : false
        }
        
        console.log("Table"+props.id+"ready~!");
    }
    
    componentDidMount() {
        console.log("Table"+this.props.id+" Finish-!");
        
    }

    callMaster = (x) => {
        this.props.handleClickOpens(x);
    }

    render(){
        return(
            //<div className='table_form' onClick={this.callMaster(this.props.id)} >{this.props.id}</div> => 이건 왜 시작과 동시에 alert이 뜨던거지?
              //<div className='table_form' onClick={(e) => this.callMaster(this.props.id)} >{this.props.id}</div>
                <OutlinedButtons x={this.props.id} c={this.callMaster(this.props.id)} />
        )
    }

}


export default Tables