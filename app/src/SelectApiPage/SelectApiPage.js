import React, { Component } from 'react';
import './SelectApiPage.css';
import Logo from '../logo.png';
import AppFooter from '../AppFooter/AppFooter';
import SelectApi from '../SelectApi/SelectApi';

class SelectApiPage extends Component {

  handleChange = selectedApi => {
    this.props.history.push(selectedApi.value);
  };

  render() {
    return (
      <div>
        <div className="search-wrapper">
          <div>
            <img src={Logo} alt="Redoc" />
            <SelectApi
              autoFocus="true"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <AppFooter/>
      </div>
    );
  }
}

export default SelectApiPage;
