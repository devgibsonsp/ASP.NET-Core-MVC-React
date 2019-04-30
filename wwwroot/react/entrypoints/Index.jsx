import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from '../components/TopMenu';
import InputForm from '../components/InputForm';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'osprey-component-library';

class Index extends React.Component {
   
   constructor() {
      super();
      this.state = { 
         currentCount: 0,
         loading: true 
      };
   }

   componentDidMount = () => {
      this.setState({
         loading: false,
      })
   }
   render() {
      const { loading } = this.state;
      return (
         <div>
         {
            loading 
            ? 
               <div>loading...</div>
            : 
            <div>
               <TopMenu
                  testItem='Click me!'
               />
               <InputForm />
               <Button primary> Hello!</Button>
            </div>
         }
         </div>
      )
   }
}


ReactDOM.render(
   <Index />,
   document.getElementById('Index')
);