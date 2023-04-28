import { useContext, useEffect, useState } from "react";
import userContext from "./userContext";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import { LinearProgress } from "@mui/material";


function ApplicationList() {
    const { user } = useContext(userContext);
    const [jobs, setJobs] = useState({
        data: null,
        isLoading: true,
    });

    useEffect(function getJobApplications() {
        user ?
            getApplications(user.username) :
            setJobs({
                isLoading: false
            });;
    }, [user]);

    async function getApplications(username) {
        const response = await JoblyApi.getUserAppliedJobs(username);
        setJobs({
            data: response,
            isLoading: false
        });
    }
    console.log("jobs.data", jobs.data);

    if (jobs.isLoading) return <p><LinearProgress /></p>;

    return (
        <>
            <h2>Your Applications</h2>
            {jobs.data.length > 0 ? <JobCardList jobs={jobs.data}></JobCardList> :
                <div>No current applications</div>}


        </>
    );
}

export default ApplicationList;
