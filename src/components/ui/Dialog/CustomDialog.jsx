import { Slide } from '@mui/material';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const CustomDialog = () => {
  return <div>CustomDialog</div>;
};

export default CustomDialog;
