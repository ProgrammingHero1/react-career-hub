import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    }, [])
    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a>All</a></li>
                    <li><a>Remote</a></li>
                    <li><a>onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite} </span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;