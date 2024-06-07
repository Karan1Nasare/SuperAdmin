/* eslint-disable import/no-cycle */
import React, { useCallback, startTransition } from 'react';
import { Icon } from '@iconify/react';
import { Typography } from '@mui/material';

import { useLocation, useNavigate } from 'react-router-dom';
import { getRouteByName } from '../../../App.routes';

const SuperAdminSideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = useCallback(value => {
    startTransition(() => {
      console.log('notifications', value, getRouteByName(value.name));
      navigate(getRouteByName(value.name)?.route);
    });
  }, []);

  const menuList = [
    {
      label: 'Dashboard',
      icon: 'ic:baseline-space-dashboard',
      name: 'dashboard',
      isActive: ['/', '/dashboard'].includes(location.pathname),
    },
    {
      label: 'Question Bank',
      icon: 'hugeicons:message-multiple-01',
      name: 'questionBank',
      isActive: location.pathname === getRouteByName('questionBank')?.route,
    },
    {
      label: 'Admins',
      icon: 'flowbite:user-settings-solid',
      name: 'admins',
      isActive: location.pathname === getRouteByName('admins')?.route,
    },
    {
      label: 'Plan',
      icon: 'mage:bookmark-check-fill',
      name: 'plan',
      isActive:
        location.pathname === getRouteByName('plan')?.route ||
        location.pathname === getRouteByName('addPlan')?.route,
    },
    {
      label: 'Features',
      icon: 'icon-park-solid:bookmark-one',
      name: 'features',
      isActive:
        location.pathname === getRouteByName('features')?.route ||
        location.pathname === getRouteByName('addFeature')?.route,
    },
    {
      label: 'Material',
      icon: 'mage:file-2-fill',
      name: 'material',
      isActive: location.pathname === getRouteByName('material')?.route,
    },
    {
      label: 'Notification',
      icon: 'mdi:announcement',
      name: 'notification',
      isActive: location.pathname === getRouteByName('notification')?.route,
    },
    {
      label: 'Payment',
      icon: 'fa6-solid:clock-rotate-left',
      name: 'payment',
      isActive: location.pathname === getRouteByName('payment')?.route,
    },
  ];
  return (
    <div className='flex flex-col text-lg text-start text-white '>
      <div className='ml-8'>
        <Typography variant='sidebar_menu_h' className='uppercase'>
          Main Menu
        </Typography>
      </div>
      {menuList.map((value, index) => (
        <div
          key={index}
          className={`h-12 ml-4 p-4 items-start mt-4 w-full rounded-md cursor-pointer  ${
            value.isActive
              ? 'bg-sidebar_active text-primary'
              : 'bg-blue hover:bg-sidebar_active hover:text-primary'
          }`}
          onClick={() => handleClick(value)}
        >
          <div className='flex items-center space-x-2.5'>
            <Icon icon={value.icon} />
            <Typography variant='h6'>{value.label}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SuperAdminSideBar;
