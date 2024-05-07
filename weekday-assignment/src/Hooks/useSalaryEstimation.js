
const useSalaryEstimation = ({job}) => {
   const salary =  job.minJdSalary && job.maxJdSalary 
    ? `${job.minJdSalary}k - ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
    : job.minJdSalary 
    ? `${job.minJdSalary}k ${job.salaryCurrencyCode} +`
    : job.maxJdSalary 
    ? `upto ${job.maxJdSalary}k ${job.salaryCurrencyCode}`
    : "market standards";

    return salary

}

export default useSalaryEstimation