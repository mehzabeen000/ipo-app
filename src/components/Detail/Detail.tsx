import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ipoData } from '../../data/ipo';
import { Box, Button, Typography, Stepper, Step, StepLabel, useMediaQuery, Grid } from '@mui/material';

const IPODetails: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();
  const ipo = ipoData.find(item => item.id === parseInt(id));

  const isMobile = useMediaQuery('(max-width:768px)'); // Adjust breakpoint as per your design needs

  if (!ipo) {
    return <div>IPO not found</div>;
  }

  const steps = [
    { label: 'Bidding Starts', date: ipo.start_date },
    { label: 'Listing Starts', date: ipo.start_date },
    { label: 'Listing End', date: ipo.end_date },
  ];

  return (
    <Box sx={{ padding: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="outlined" onClick={() => navigate('/')}>
            ◀
          </Button>
          <img src={ipo.img} alt={ipo.name} className="logo" style={{ width: '50px', height: '50px', marginRight: '10px' }} onClick={() => navigate('/')} />
          <Typography variant="h4">{ipo.name}</Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <Button variant="outlined">Download</Button>
            <Button variant="outlined">Apply</Button>
          </Box>
        )}
      </Box>

      <Box sx={{ border: '1px solid #ddd', padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5">IPO details</Typography>
        <Box sx={{ border: '1px solid #ddd', padding: '20px', marginTop: '20px' }}>

          <Grid container spacing={2}>
            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Issue size</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">₹{ipo.issue_size}</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Price range</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">₹{ipo.range}</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Minimum Amount</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">₹{ipo.min_amt}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Lot Size</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{ipo.min_invest}shares/lots</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Date</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{ipo.start_date} - ${ipo.end_date}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Listed On</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">{ipo.start_date}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Listed Price</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">₹150</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Grid container display={'flex'} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body1">Listing gains</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">₹10</Typography>
                </Grid>
              </Grid>

            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ border: '1px solid #ddd', padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5">IPO timeline</Typography>
        <Stepper activeStep={0} alternativeLabel={!isMobile} orientation={isMobile ? 'vertical' : 'horizontal'}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography variant="body1">{step.label}</Typography>
                <Typography variant="body2">{step.date}</Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Box sx={{ border: '1px solid #ddd', padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" pb={2}>About the company</Typography>
        <Typography variant="body1">{ipo.details}</Typography>
      </Box>
    </Box>
  );
};

export default IPODetails;
