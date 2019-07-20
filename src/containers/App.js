import React, { Component } from 'react';
import MenuListContainer from './MenuListContainer'
import MarketBox from './MarketBoxContainer'
import StoreBox from './StoreBoxContainer'
import '../components/Menu.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: theme.palette.background.paper,
    },

}))

function Home() {
    return (
        <div className="App">
            <div style={{ textAlign: 'center' }}>
                <h2>스타벅스<br />메뉴판</h2>
                <img src='./logo.png' alt='없당' ></img>
            </div>
        </div>
    );
}


function toVisitor() {
    return (


        <Grid className="App" container sppacing={2}>        
            <Grid item xs={6}>
                <h3>메뉴판</h3>
                <MenuListContainer />
            </Grid>
            <Grid item xs={6}>
                <h3>장바구니</h3>
                <MarketBox />
            </Grid>
        </Grid>
    )
}
function toMaster() {
    return (
        <div className="App">
            <StoreBox />
        </div>
    )
}


class App extends Component {
    render() {

        return (
            <Router>
                <Container fixed>
                    <List component="nav" style={{ position: 'absolute', top: '1px', left: '50px' }} aria-label="Mailbox folders">
                        <ListItem component={Link} to='/'>
                            Home
                        </ListItem>
                        <Divider />
                        <ListItem component={Link} to='/Visitor'>
                            Visitor
                        </ListItem>
                        <Divider />
                        <ListItem component={Link} to='/Master'>
                            Master
                        </ListItem>
                    </List>
                    <Route exact path="/" component={Home} />
                    <Route path="/Visitor" component={toVisitor} />
                    <Route path="/Master" component={toMaster} />
                </Container>
            </Router>
        )
    }
}


export default App;
