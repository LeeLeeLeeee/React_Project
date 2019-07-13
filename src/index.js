import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import MAT from './Test/material_ui';

import {createStore} from 'redux'
import reducers from './reducers';
import {Provider} from 'react-redux';
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/*Life Cycle 확인 용..
function tick() {
    let time = new Date().toLocaleTimeString();
    ReactDOM.render(<App id={time}/>, document.getElementById('root'));
}
setInterval(tick,1000); 
//const tablenum =[1,2,3];
//ReactDOM.render(<App id={tablenum}/>,document.getElementById('root'));
//ReactDOM.render(<MAT id={1}/>,document.getElementById('root'));

ReactDOM.render(
    <MAT id={1} />, 
    document.getElementById('root')
    )

*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root')
);



serviceWorker.unregister();
