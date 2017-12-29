import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ModalWrapper from '../wrappers/ModalWrapper';
import TimePicker from './TimePicker';
import PickerBase from '../_shared/PickerBase';
import * as defaultUtils from '../utils/utils';

export default class TimePickerWrapper extends PickerBase {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
      PropTypes.instanceOf(Date),
    ]),
    format: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    autoOk: PropTypes.bool,
    returnMoment: PropTypes.bool,
    invalidLabel: PropTypes.string,
    utils: PropTypes.object,
    ampm: PropTypes.bool,
    minutesStep: PropTypes.number,
  }

  static defaultProps = {
    value: new Date(),
    format: undefined,
    autoOk: false,
    returnMoment: true,
    invalidLabel: undefined,
    utils: defaultUtils,
    ampm: true,
    minutesStep: 1,
  }

  default12hFormat = 'hh:mm A'
  default24hFormat = 'HH:mm'

  componentDidMount() {
    const coeff = 1000 * 60 * this.props.minutesStep;
    const { date } = this.state;
    const rounded = moment(Math.ceil(date.valueOf() / coeff) * coeff);
    this.setState({ date: rounded })
  }

  render() {
    const { date } = this.state;
    const {
      value, format, autoOk, onChange, returnMoment, invalidLabel,
      utils, ampm, minutesStep, ...other
    } = this.props;

    return (
      <ModalWrapper
        ref={(node) => { this.wrapper = node; }}
        value={value}
        format={this.getFormat()}
        onAccept={this.handleAccept}
        onChange={this.handleTextFieldChange}
        onDismiss={this.handleDismiss}
        invalidLabel={invalidLabel}
        {...other}
      >
        <TimePicker
          date={date}
          onChange={this.handleChange}
          utils={utils}
          ampm={ampm}
          minutesStep={minutesStep}
        />
      </ModalWrapper>
    );
  }
}
