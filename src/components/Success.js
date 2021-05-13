import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success" />
                <h1>Success thank You For Your Submission</h1>
            <p>You will get an email with further instructi.</p>
            </React.Fragment>
        </MuiThemeProvider>
    );
  }
}

export default Success;