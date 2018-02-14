import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'material-ui/styles/withStyles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import PickerTitle from './PickerTitle';

const dialogWidth = 310;
const styles = {
  dialogRoot: {
    minWidth: dialogWidth,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    margin: 0,
    overflowY: 'visible',
  },
  dialogContentRoot: {
    margin: '0 32px',
    overflowY: 'auto',
  },
  dialog: {
    width: dialogWidth,

    '&:first-child': {
      padding: 0,
    },
  },
  dialogActions: {
    '&:first-child': {
      marginRight: 'auto',
    },
  },
};

const ModalDialog = ({
  children,
  classes,
  onAccept,
  onDismiss,
  onClear,
  okLabel,
  cancelLabel,
  clearLabel,
  dialogContentClassName,
  clearable,
  baTitle,
  ...other
}) => (
  <Dialog onClose={onDismiss} classes={{ paper: classes.dialogRoot }} {...other}>
    { baTitle && <PickerTitle>{ baTitle }</PickerTitle> }
    <Paper className={classes.dialogContentRoot} elevation={24}>
      <DialogContent className={classnames(classes.dialog, dialogContentClassName)}>
        { children }
      </DialogContent>

      <DialogActions
        classes={{
          action: clearable && classes.dialogActions,
        }}
      >

        { clearable &&
          <Button
            color="primary"
            onClick={onClear}
            aria-label={clearLabel}
          >
            { clearLabel }
          </Button>
        }
        <Button
          color="primary"
          onClick={onDismiss}
          aria-label={cancelLabel}
        >
          { cancelLabel }
        </Button>

        <Button
          color="primary"
          onClick={onAccept}
          aria-label={okLabel}
        >
          { okLabel }
        </Button>
      </DialogActions>
    </Paper>
  </Dialog>
);


ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dialogContentClassName: PropTypes.string,
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  clearLabel: PropTypes.string,
  clearable: PropTypes.bool.isRequired,
  baTitle: PropTypes.node,
};

ModalDialog.defaultProps = {
  dialogContentClassName: '',
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  baTitle: undefined,
};

export default withStyles(styles, { name: 'MuiPickersModal' })(ModalDialog);
