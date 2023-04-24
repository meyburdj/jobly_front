import { useContext } from "react";
import userContext from "./userContext";

function Homepage() {
    const { user } = useContext(userContext);
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
                <p>Welcome {user.username}!</p>
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
