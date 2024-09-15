import React from 'react';

import { useInfiniteHits } from 'react-instantsearch';

import { Typography, Grid, Button } from '@mui/material';

import HitView from './HitView';


const CustomInfiniteHits = () => {
  const { hits, showMore, isLastPage } = useInfiniteHits();

  const sponsoredTests = hits.filter(hit => hit.Type === 'Sponsored Tests');
  const companionDiagnostics = hits.filter(hit => hit.Type === 'Companion Diagnostics');

  return (
    <div>
      <div className="hit__details">

      {sponsoredTests.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <Typography variant='h5' className='text-secondary'>
            Sponsored Tests
          </Typography>
          <Grid container spacing={2} style={{ marginTop: '10px' }}>
            {sponsoredTests.map(hit => (
              <Grid item xs={12} key={hit.objectID}>
                <HitView hit={hit} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}

      {companionDiagnostics.length > 0 && (
        <div style={{ marginBottom: '40px' }}>
          <Typography variant='h5' className='text-secondary'>
            Companion Diagnostics
          </Typography>
          <Grid container spacing={2} style={{ marginTop: '10px' }}>
            {companionDiagnostics.map(hit => (
              <Grid item xs={12} key={hit.objectID}>
                <HitView hit={hit} />
              </Grid>
            ))}
          </Grid>
        </div>
      )}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button onClick={showMore} disabled={isLastPage} variant='outlined' color='primary'>
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomInfiniteHits;
