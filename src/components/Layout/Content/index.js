import React from 'react';


export default function Content(props) {
    return (
        <div style={{
            width: "100%",
            height: "calc(100vh - 90px)"
        }}>
            {props.children}
        </div>
    );
};
