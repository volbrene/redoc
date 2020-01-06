import React, { Component } from 'react';
import './RedocPage.css';
import Logo from '../logo.png';
import { RedocStandalone } from 'redoc';
import slugify from 'slugify';
import { Link } from 'react-router-dom'
import SelectApi from '../SelectApi/SelectApi';

class RedocPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableApis: window._env_.URLS.map(item => ({ value: slugify(item.name).toLowerCase(), label: item.name, url: item.url })),
      activeApi: {
        url: ''
      }
    }
    
    const activeApiFromQuery = this.state.availableApis.find(element => element.value === this.props.match.params.api);

    if (activeApiFromQuery) {
      this.state.activeApi = activeApiFromQuery
    } else {
      this.props.history.push('/');
    }
  }

  handleChange = selectedApi => {
    this.setState({
      activeApi: selectedApi
    })

    this.props.history.push(selectedApi.value);
  };

  render() {
    return (
      <div>
        <header className="RedocPage-header">
          <Link to={'/'}> 
            <img src={Logo} alt="Redoc" />
          </Link>

          <SelectApi
            className="select"
            value={this.state.activeApi}
            onChange={this.handleChange}
          />
        </header>
        <section className="container__redoc">
          <RedocStandalone
            specUrl={this.state.activeApi.url}
            options={{
              nativeScrollbars: true,
              scrollYOffset: 60,
              theme: { colors: { primary: { main: window._env_.THEME_COLOR } } },
            }}
          />
        </section>
      </div>
    );
  }
}

export default RedocPage;
