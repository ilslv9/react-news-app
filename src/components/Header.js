import React from 'react';

function Header(props) {
    const style = {
        position: "fixed",
        width: "100%",
        top: "0px",
        left: "0px",
        right: "0px",
        color: "#fff",
        padding: "20px",
        backgroundColor: "#412C84",
        display: "inline-block"
    }
    const h2 = {
        display: "inline",
        marginRight: "40px"
    }
    const searchBar = {
        display: "inline",
        width: "500px",
        padding: "5px",
        marginTop: "10px",
        margingBottom: "10px"
    }
    return (
        <div style={style}>
            <h2 style={h2}>NewsApp</h2>
            <input style={searchBar} placeholder="Search..." />
        </div>
    );
}

export default Header;