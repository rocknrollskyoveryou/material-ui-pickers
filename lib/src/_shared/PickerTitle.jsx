import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Toolbar, withStyles, Typography } from 'material-ui';

const PickerTitle = (props) => {
  const {
    children, className, classes, text, ...other
  } = props;

  return (
    <Toolbar className={classnames(classes.toolbar, className)} {...other}>
      <Typography type="display1" color="inherit">
        { text }
      </Typography>
    </Toolbar>
  );
};

PickerTitle.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
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
