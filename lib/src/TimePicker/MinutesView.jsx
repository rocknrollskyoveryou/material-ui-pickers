import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import { MINUTES } from '../constants/clock-types';
import ClockNumber from './ClockNumber';
import * as defaultUtils from '../utils/utils';

export default class MinutesView extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    utils: PropTypes.object,
    step: PropTypes.number,
  }

  static defaultProps = {
    utils: defaultUtils,
    step: 1,
  }

  handleChange = (minutes, isFinish) => {
    const updatedDate = this.props.date.clone().minutes(minutes);
    this.props.onChange(updatedDate, isFinish);
  }

  render() {
    const { date, step, utils } = this.props;
    const f = utils.formatNumber;

    const value = Math.ceil(date.get('minutes')/step)*step

    return (
      <Clock
        type={MINUTES}
        onChange={this.handleChange}
        value={value}
        minutesStep={step}
      >
        <ClockNumber label={f('00')} visible={0 % step === 0} selected={value === 0} index={12} />
        <ClockNumber label={f('05')} visible={5 % step === 0} selected={value === 5} index={1} />
        <ClockNumber label={f('10')} visible={10 % step === 0} selected={value === 10} index={2} />
        <ClockNumber label={f('15')} visible={15 % step === 0} selected={value === 15} index={3} />
        <ClockNumber label={f('20')} visible={20 % step === 0} selected={value === 20} index={4} />
        <ClockNumber label={f('25')} visible={25 % step === 0} selected={value === 25} index={5} />
        <ClockNumber label={f('30')} visible={30 % step === 0} selected={value === 30} index={6} />
        <ClockNumber label={f('35')} visible={35 % step === 0} selected={value === 35} index={7} />
        <ClockNumber label={f('40')} visible={40 % step === 0} selected={value === 40} index={8} />
        <ClockNumber label={f('45')} visible={45 % step === 0} selected={value === 45} index={9} />
        <ClockNumber label={f('50')} visible={50 % step === 0} selected={value === 50} index={10} />
        <ClockNumber label={f('55')} visible={55 % step === 0} selected={value === 55} index={11} />
      </Clock>
    );
  }
}
