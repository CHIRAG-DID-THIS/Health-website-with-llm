// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
// import { Provider } from 'react-redux';
// import chatbotReducer from './components/Reducer';
// import store from './components/store'; // Import the Redux store configuration



// ReactDOM.render(
//   // <Provider store={store}>
//     <App />,
//   // </Provider>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(<App />);

