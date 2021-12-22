import React, { memo } from 'react';
import { Link } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PeerGroup from 'components/NavBar/PeerGroup';
import ShareButton from 'components/NavBar/ShareButton';
import NetworkButton from 'components/NavBar/NetworkButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      flexGrow: 1,
      backgroundColor: 'black',
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      fontWeight: 'bold',
      color: theme.palette.primary.main,
      marginRight: theme.spacing(1),
    },
    yorkie: {
      '& > a': {
        textDecoration: 'none',
        color: '#b5b0a1',
        fontSize: 12,
      },
    },
    items: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

function MenuAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link href="/" underline="none">CodePair</Link>
        </Typography>
        <Typography className={classes.yorkie}>
          <a href="https://yorkie.dev" target="_blank" rel="noreferrer">Powered by Yorkie</a>
        </Typography>
        <NetworkButton />
        <div className={classes.grow} />
        <div className={classes.items}>
          <ShareButton />
          <PeerGroup />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default memo(MenuAppBar);