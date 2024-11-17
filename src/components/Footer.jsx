import { Icon } from "@iconify/react";
import React from "react";

const Footer = ({ sharedBasicInfo }) => {

    console.log("sharedBasicInfo : ", sharedBasicInfo);

    const networks = sharedBasicInfo?.map((network) => (
        <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
                <i className={network.class}></i>
                <Icon
                    icon={network.class}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                />
            </a>
        </span>
    ));

    return (
        <footer style={{ height: "3vh !important", minHeight: "3vh" }}>
            <small>
                Copyright &copy; {sharedBasicInfo?.name || "Akdemir Software"}
            </small>
        </footer>
    );
};

export default Footer;
