import { Card, CardContent } from '@mui/material';
import currency from "currency.js";

/**
 * JobCard: renders an individual job card.
 * 
 * Props:
 * - job: object for a single job
 * 
 * State: N/A
 * 
 * JobCardList -> [JobCard, JobCard, ... ]
 */
function JobCard({ job }) {

    return (
        <Card variant="outlined">
            <CardContent>
                <p><b>{job.title}</b></p>
                <p>{job.companyName}</p>
                <p>
                    <small>Salary: {currency(job.salary, { seperator: "," }).format()}</small>
                </p>
                {(job.equity !== "0") && <p>
                    <small>Equity: {job.equity}</small>
                </p>}
            </CardContent>
        </Card>
    );
}


export default JobCard;

/*
return (
        <div className="JobCard">
            <p><b>{job.title}</b></p>
            <p>{job.companyName}</p>
            <p>
                <small>Salary: {job.salary}</small>
            </p>
            <p>
                <small>Equity: {job.equity}</small>
            </p>
        </div>
    )
*/