import React from 'react';
import debounce from 'lodash.debounce';

import './SearchInput.css';

export class SearchInput extends React.PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      value: props.value || ''
    };

    this.isDebouncing = false;
  }

  componentWillMount() {
    const debouncedChangeFunc = debounce(event => {
      this.isDebouncing = false;
      const { onChange } = this.props;
      onChange(event);
    }, this.props.debounceTimeout);

    this.notify = event => {
      this.isDebouncing = true;
      debouncedChangeFunc(event);
    };
  }


  onChange = event => {
    event.persist();

    this.setState({ value: event.target.value }, () => {
      const { value } = this.state;

      if (value.length < this.props.minLength) return;
      this.notify(event);
    });
  };

  render() {
    const {
      onChange,
      value,
      minLength,
      debounceTimeout,
      ...props
    } = this.props;

    return (
      <div id="search">
        <input
          {...props}
          type="search"
          className="form-control"
          placeholder="type keyword(s) here"
          onChange={this.onChange}
          value={this.state.value}
        />
      </div>
    )
  }
}