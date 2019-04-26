import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from '../components/TopMenu';
import InputForm from '../components/InputForm';
import 'semantic-ui-css/semantic.min.css';


class Index extends React.Component {
   
   constructor() {
      super();
      this.state = { 
         currentCount: 0,
         loading: true 
      };
   }
   render() {
      const { loading } = this.state;
      return (
         <div>
            <TopMenu
               testItem='Click me!'
            />
            <InputForm />
         </div>
      )
   }
}


ReactDOM.render(
   <Index />,
   document.getElementById('Index')
);