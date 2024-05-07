import React from 'react'
import JobInfoCards from './JobInfoCards'
import AllFilters from './AllFilters';
import { Grid } from '@mui/material'
import useJobListing from '../Hooks/useJobListing';
import CardShimmer from './CardShimmer';


const renderSkeletons = () => {
    return (
        <Grid container spacing={3} style={{marginTop:"44px"}}>
            {Array.from({ length: 6 }).map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <CardShimmer/>
                </Grid>
            ))}
        </Grid>
    );
};

const Listings = () => {
    const {
        loading,
        filteredJobs,
        handleFilter,
      } = useJobListing();

    

  return (
    <div>
    <h1 style={{fontWeight:300}}>Search Jobs</h1>
    <AllFilters onFilter={handleFilter}/>
    <Grid container spacing={9}>
        { 
            filteredJobs.map((job) => (
                <Grid item xs={12} sm={6} md={4} key={job.id}>
                    <JobInfoCards job={job} />
                </Grid>
            ))
        }
    </Grid>
    {loading && renderSkeletons()}
</div>
  )
}

export default Listings