import { Card, Grid } from '@mui/material';
import React from 'react';
import { RHFSelect, RHFTextField } from '../../../hooks/hook-form';

const BillingTab = () => {
  return (
    <>
      <Card
        sx={{
          borderRadius: '12px',
          width: '100%',
          color: 'black',
          backgroundColor: theme => theme.color.secondary__fill,
          padding: '25px',
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <p className='text-left text-white mb-2'>Payment Type</p>
            <RHFSelect
              size='small'
              name={'payment_type'}
              // label={'Select Payment Type'}
              required={true}
              options={[
                {
                  label: 'G Pay',
                  value: 'G-Pay',
                },
                {
                  label: 'Phonepe',
                  value: 'Phonepe',
                },
                {
                  label: 'Cheque',
                  value: 'Cheque',
                },
              ]}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <p className='text-left text-white mb-2'>Transaction Type</p>
            <RHFSelect
              size='small'
              name={'transaction_type'}
              // label={'Select Transaction Type'}
              required
              options={[
                {
                  label: 'Cash',
                  value: 'Cash',
                },
                {
                  label: 'Online',
                  value: 'Online',
                },
              ]}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <p className='text-left text-white mb-2'>Transaction ID</p>
            <RHFTextField
              size='small'
              name={'transaction_ID'}
              placeholder={'Transaction ID'}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default BillingTab;
