import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Toolbar, withStyles, Typography } from 'material-ui';

const PickerTitle = (props) => {
  const {
    children, className, classes, ...other
  } = props;

  return (
    <Toolbar className={classnames(classes.toolbar, className)} {...other}>
      { children }
    </Toolbar>
  );
};

PickerTitle.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

PickerTitle.defaultProps = {
  className: '',
};

const styles = theme => ({
  toolbar: {
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
  },
});

export default withStyles(styles, { name: 'MuiPickersTitle' })(PickerTitle);
