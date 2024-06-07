import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicDetails from './BasicDetails';
import Videos from './Videos';
import Images from './Images';
import ThreedModel from './ThreedModel';
import Documents from './Documents';
import QuestionBank from './QuestionBank';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabContainer() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor='primary'
          indicatorColor='secondary'
          variant='scrollable'
          aria-label='basic tabs example'
        >
          <Tab label='Basic Details' {...a11yProps(0)} />
          <Tab label='Videos' {...a11yProps(1)} />
          <Tab label='Images' {...a11yProps(2)} />
          <Tab label='Documents Content' {...a11yProps(3)} />
          <Tab label='Question Bank Content' {...a11yProps(4)} />
          <Tab label='3D Models' {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <BasicDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Videos />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Images />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Documents />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <QuestionBank />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <ThreedModel />
      </CustomTabPanel>
    </Box>
  );
}
