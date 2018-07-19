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
    margin: 0,
    fontSize: 40,
    color: '#ffa91f'
  },
});

function ArrowRightIcon(props) {
    const { classes } = props;
    return (
          <ChevronRight className={classes.icon} />
    );
  }
  
  ArrowRightIcon.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ArrowRightIcon);