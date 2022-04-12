import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

function normalFunction() {}
const arrowFunction = () => {};
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }
  classMethod = () => {};

  render() {
    console.log(typeof normalFunction);
    console.log(typeof arrowFunction);
    console.log(typeof this.classMethod);

    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
