import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';


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

    return React.createElement('input', {
      ...props,
      onChange: this.onChange,
      value: this.state.value
    });
  }
}