import React from 'react';

import { useInfiniteHits } from 'react-instantsearch';

import { Typography, Grid, Button, CircularProgress } from '@mui/material';

import HitView from './HitView';


const CustomInfiniteHits = () => {
  const { hits, showMore, isLastPage } = useInfiniteHits();

  const sponsoredTests = hits.filter(hit => hit.Type === 'Sponsored Tests');
  const companionDiagnostics = hits.filter(hit => hit.Type === 'Companion Diagnostics');

  return (
    <>
      <div className="hit__details">
        {hits.length === 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CircularProgress  color="inherit" size={30} />
          </div>
        )}
        {sponsoredTests.length > 0 && (
          <div style={{ marginBottom: '40px', width: '100%'}}>
            <Typography variant='h5' className='text-secondary'>
              Sponsored Tests
            </Typography>
            <Grid container spacing={2} direction="column" style={{ marginTop: '10px' }}>
              {sponsoredTests.map(hit => (
                <Grid item xs={12} key={hit.objectID}>
                  <HitView hit={hit} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}

        {companionDiagnostics.length > 0 && (
          <div style={{ marginBottom: '40px', width: '100%' }}>
            <Typography variant='h5' className='text-secondary'>
              Companion Diagnostics
            </Typography>
            <Grid container spacing={2} direction="column" style={{ marginTop: '10px' }}>
              {companionDiagnostics.map(hit => (
                <Grid item xs={12} key={hit.objectID}>
                  <HitView hit={hit} />
                </Grid>
              ))}
            </Grid>
          </div>
        )}

    </div>
    {!isLastPage && (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', marginTop: '20px' }}>
        <Button onClick={showMore} disabled={isLastPage} variant='outlined' color='primary'>
          Load More
        </Button>
      </div>
    )}
    </>
  );
};

export default CustomInfiniteHits;
