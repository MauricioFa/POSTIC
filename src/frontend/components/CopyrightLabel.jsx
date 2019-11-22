import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Copyright = ({ title, name, linkTo, date }) => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {`${title}  `}
      <Link color='inherit' to={linkTo}>
        {name}
      </Link>
      {`  ${date}.`}
    </Typography>
  );
};

export default Copyright;
