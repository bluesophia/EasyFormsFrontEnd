import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary,
  },
  icon: {
    margin: theme.spacing.unit,
    fontSize: 32,
    color: '#ffa91f'
  },
});

function ArrowLeftIcon(props) {
  const { classes } = props;
  return (
        <ChevronLeft className={classes.icon} />
  );
}

ArrowLeftIcon.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ArrowLeftIcon);