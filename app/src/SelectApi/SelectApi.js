import React, { Component } from 'react';
import Select from 'react-select';
import slugify from 'slugify';

class SelectApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableApis: window._env_.URLS.map(item => ({
        value: slugify(item.name).toLowerCase(),
        label: item.displayName || item.name,
        url: item.url
      })),
    }
  }

  render() {
    return (
        <Select
            className="select__api"
            autoFocus={this.props.autoFocus}
            value={this.props.value}
            onChange={this.props.onChange}
            options={this.state.availableApis}
            noOptionsMessage={() => 'No api found'}
            placeholder={'Search Api...'}
            theme={(theme) => ({
              ...theme,
              colors: {
              ...theme.colors,
                primary: window._env_.THEME_COLOR,
              },
            })}
          />
    );
  }
}

export default SelectApi;
