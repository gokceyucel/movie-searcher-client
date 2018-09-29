import React from 'react';
import debounce from 'lodash.debounce';

import './styles.css';

export default class SearchInput extends React.PureComponent {

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.onChange = debounce(
      this.onChange.bind(this),
      this.props.debounceTimeout
    );
  }

  onChange = event => {
    const value = this.inputRef.current.value;

    // FUNCTIONAL_REQUIREMENT_FRONTEND_4
    if (value.length < this.props.minLength) return;

    this.props.onChange(value);
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
          ref={this.inputRef}
          type="search"
          className="form-control"
          placeholder="type keyword(s) here"
          onChange={this.onChange}
          defaultValue={this.props.defaultValue}
        />
      </div>
    )
  }
}
