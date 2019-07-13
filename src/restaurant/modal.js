import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';




const style = theme => ({
    hidden: {
        display: 'none'
    }
});

class modalClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price1: "2000",
        }
       
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
               
             
            </div>
        )
    }

}

export default withStyles(style)(modalClass)





