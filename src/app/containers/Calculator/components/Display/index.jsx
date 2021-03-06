import { Record } from 'immutable';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

export class Display extends Component {

  static propTypes = {
    Calculator: PropTypes.instanceOf(Record)
  };

  render () {
    /* eslint  react/jsx-no-bind: 0 */
    const cx = classNames.bind(styles);
    const display = this.props.Calculator.display;

    const classDisplay = cx({
      Fade : this.props.Calculator.resetDisplay
    });

    return (
      <div className={ styles.Display }>
        <span className={ classDisplay }>{ display }</span>
      </div>
    );
  }}

export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Display);
