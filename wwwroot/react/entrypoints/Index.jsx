import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../components/Counter';
import Weather from '../components/Weather';
ReactDOM.render(
   <Counter />,
   document.getElementById('basicreactcomponent')
);

ReactDOM.render(
   <Weather />,
   document.getElementById('reactcomponentwithapidata')
);