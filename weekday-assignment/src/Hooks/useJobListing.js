import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../utils/jobSlice";
import debounce from "lodash.debounce";


const useJobListing = () => {
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.jobs);
    const loading = useSelector((state) => state.jobs.loading);
    const totalCount = useSelector((state) => state.jobs.totalCount);

    const [filterParams, setFilterParams] = useState({
        minExperience: "",
        companyName: "",
        location: "",
        remote: false,
        techStack: "",
        jobRole: "",
        minBasePay: "",
      });


    const [page, setPage] = useState(1);
    
    const delayedFetchJobs = useCallback(
        debounce((params) => dispatch(fetchJobs(params)), 500),
        [dispatch]
    );
    

    useEffect(() => {
        // Fetch initial set of jobs
        delayedFetchJobs({ offset: 0, filters: filterParams });
        return delayedFetchJobs.cancel;
      }, [delayedFetchJobs, filterParams]);

    useEffect(() => {
        dispatch(fetchJobs({ offset: 0, filters: filterParams }));
        }, [dispatch, filterParams]);

    const handleFilter = (filters) => {
        // Reset page count when filters change
        setPage(1);
        setFilterParams(filters);
    };

    // infinite scrolling logic implementation

    const handleScroll = useCallback(() => {
        const handleScrollLogic = () => {
          if (
            window.innerHeight + window.scrollY >=
              document.documentElement.scrollHeight - 100 &&
            jobs.length < totalCount &&
            !loading
          ) {
            dispatch(fetchJobs({ offset: jobs.length, filters: filterParams }));
          }
         };
            // Debounce the scroll event for performance optimization
            const debouncedHandleScroll = debounce(handleScrollLogic, 500); 

            // Add event listener for scroll
            window.addEventListener("scroll", debouncedHandleScroll);

            // Cleanup function to remove event listener
            return () => {
            window.removeEventListener("scroll", debouncedHandleScroll);
            };
        }, [dispatch, jobs.length, totalCount, loading, filterParams]);

        useEffect(() => {
            handleScroll(); // Call the handleScroll function once on initial render
            }, [handleScroll]);


        
  useEffect(() => {
    if (page > 1) {
      // Fetch more jobs when page changes
      delayedFetchJobs({ offset: jobs.length, filters: filterParams });
    }
  }, [delayedFetchJobs, filterParams, jobs.length, page]);

  const applyFilters = useCallback(() => {
    return jobs.filter((job) => {
      // Convert minExp to a number for comparison
      const minExpNumber = parseFloat(job.minExp);

      // Convert minJdSalary to a number for comparison
      const minSalaryNumber = parseFloat(job.minJdSalary);

      // Check if job roles match any of the selected job role(s)
      const jobRoleMatched =
        filterParams.jobRole.length === 0 ||
        filterParams.jobRole.some((selectedRole) =>
          job.jobRole.toLowerCase().includes(selectedRole.toLowerCase())
        );

      // Apply filters based on filterParams
      return (
        (!filterParams.minExperience ||
          minExpNumber <= parseFloat(filterParams.minExperience)) &&
        (!filterParams.companyName ||
          job.companyName
            .toLowerCase()
            .includes(filterParams.companyName.toLowerCase())) &&
        (!filterParams.location ||
          job.location.toLowerCase().includes(filterParams.location.toLowerCase())) &&
        (!filterParams.remote || job.location.toLowerCase() === "remote") &&
        (!filterParams.minBasePay ||
          minSalaryNumber >= parseFloat(filterParams.minBasePay)) &&
        jobRoleMatched
      );
    });
  }, [jobs, filterParams]);

   const filteredJobs = applyFilters();

  return {
    filterParams,
    loading,
    totalCount,
    handleFilter,
    filteredJobs,
  };
};
export default useJobListing;