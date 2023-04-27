import { useContext, useEffect } from "react";
import userContext from "./userContext";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";

function Homepage() {
    const { user } = useContext(userContext);
    const [jobs, setJobs] = useState({
        data: null,
        isLoading: true,
    });
    useEffect(function getJobApplications() {
        getApplications(user.username);
    }, []);

    async function getApplications(username) {
        const response = await JoblyApi.getUserAppliedJobs(username);
        setJobs({
            data: response,
            isLoading: false
        });
    }

    const containerStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
    };

    const imgStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        objectFit: "contain",
    };

    return (
        <>
            {user ? (
                <JobCardList jobs={jobs.data}></JobCardList>
                // <p>Welcome {user.username}!</p>
            ) : (
                <div style={containerStyle}>
                    <img
                        style={imgStyle}
                        src="/jobly-low-resolution-logo-black-on-white-background.png"
                        alt="Jobly"
                    />
                </div>
            )}
        </>
    );
}

export default Homepage;
