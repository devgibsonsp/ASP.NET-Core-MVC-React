import React from 'react';
import ReactDOM from 'react-dom';
import Counter from 'ui/components/counter';
import Weather from 'ui/components/weather';
ReactDOM.render(
   <Counter />,
   document.getElementById('basicreactcomponent')
);

ReactDOM.render(
   <Weather />,
   document.getElementById('reactcomponentwithapidata')
);