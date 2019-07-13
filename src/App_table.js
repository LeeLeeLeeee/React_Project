import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled,makeStyles,Theme ,createStyles } from '@material-ui/styles';
import { compose, spacing, palette,sizing } from '@material-ui/system';
import Life from './Test/Toknow_Life'
import Table from './restaurant/Table'
import Container from '@material-ui/core/Container';
import OutlinedButtons from './restaurant/btn';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { number } from 'prop-types';
const Box = styled('div')(
  compose(
    spacing,
    palette,
  )
);

class App extends React.Component {

  constructor(props) {
    super(props);

    this.displayData = [];

    this.state = {
      showdata : this.displayData,
      postVal : "",
      table_num:"1",
      open:false
    }
    this.appendData = this.appendData.bind(this);
    this.prependData = this.prependData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);    

  }

  componentDidUpdate() {

  }


  handleClickOpen(e) {
    this.setState({
        open: true,
        table_num:e
    });
    
}

handleClose() {
    this.setState({
        open: false,
        table_num:""
    });

}
  appendData() {
      this.displayData.push(<div>{this.state.postVal}</div>);
      this.setState({
        showdata:this.displayData,
        postVal : ""
      });
  }
  prependData() {
    this.displayData.unshift(<div>{this.state.postVal}</div>);
    this.setState({
      showdata:this.displayData,
      postVal : ""
    });
  }
  handleChange(e) {
    let getTextAreaValue = e.target.value;
    this.setState({
      postVal : getTextAreaValue
    });


    }
  render() {
    return (
      <React.Fragment>
      <Container fixed={true} >
        
          {this.props.id ? this.props.id.map(c=>{
              return <OutlinedButtons x={this.props.id} c={this.handleClickOpen(this.props.id)} />
            })
            :
            <div>없어요~</div>
          }
      </Container>

      <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>주문 하기 - 테이블 {this.state.table_num}</DialogTitle>
                    <DialogContent>
                        <DialogActions>
                            <input  type="button" onClick={this.handleClose} value="닫기" />
                        </DialogActions>
                    </DialogContent>
                </Dialog>
      <Container fixed={true}>
        
          <textarea rows="4" cols="50" value={this.state.postVal} onChange={this.handleChange} ></textarea>
          <input  type="submit" className="button" onClick={this.appendData}  value="Append"/>
          <input  type="submit" className="button" onClick={this.prependData}   value="Prepend"/>          
          <div id="display-datas">
          {this.displayData}
          </div>
      </Container>
      
  
      </React.Fragment>
    );
  }

}


export default App;
