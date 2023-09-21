import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            const jobsApplied = jobs.filter(job => ) 
        }
    }, [])
    return (
        <div>
            <h2>Jobs I applied</h2>
        </div>
    );
};

export default AppliedJobs;