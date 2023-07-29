import React from "react";


export default function Spinner() {
    window.document.body.style.backgroundColor="white";
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                </div>
                <span className="">Loading...</span>
            </div>
        </>
    );

}