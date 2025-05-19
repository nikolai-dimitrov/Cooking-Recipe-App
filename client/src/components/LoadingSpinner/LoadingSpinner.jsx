import { useState } from "react";
import { FadeLoader } from "react-spinners";
const override = {
    display: "block",
    margin: "0 auto",
    position:"absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%, -50%)",
    
};

export const LoadingSpinner = ({isLoading}) => {
    return (
        <div className="sweet-loading">

            <FadeLoader
                color={"#ffffff"}
                loading={isLoading}
                cssOverride={override}
                height={30}
                margin={7}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}