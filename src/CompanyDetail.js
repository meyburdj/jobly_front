import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import { LinearProgress } from "@mui/material";

/**
 * Return a list of jobs related to a single company.
 * 
 * State: Company
 * 
 * RouteList -> CompanyDetail -> JobCardList
 * 
 */
function CompanyDetail({ applyToJob }) {
    const [company, setCompany] = useState({
        data: null,
        isLoading: true,
    });

    const { handle } = useParams();

    useEffect(function getCompany() {
        async function getCompanyReally() {
            const response = await JoblyApi.getCompany(handle);
            setCompany({
                data: response,
                isLoading: false,
            });
        }
        getCompanyReally();
    }, [handle]);

    if (company.isLoading) return <p><LinearProgress /></p>;

    return (
        <div className="CompanyDetail">
            <h2>{company.data.name}</h2>
            <h4 style={{ color: "gray" }}>{company.data.description}</h4>
            <JobCardList jobs={company.data.jobs} applyToJob={applyToJob} />
        </div>
    );
};


export default CompanyDetail;