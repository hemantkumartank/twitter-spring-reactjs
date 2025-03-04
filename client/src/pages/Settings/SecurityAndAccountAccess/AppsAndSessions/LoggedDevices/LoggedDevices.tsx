import React, {FC, ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {Divider, Link as MuiLink, Typography} from "@material-ui/core";
import classnames from "classnames";

import {useLoggedDevicesStyles} from "./LoggedDevicesStyles";
import {useGlobalStyles} from "../../../../../util/globalClasses";

const LoggedDevices: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useLoggedDevicesStyles();

    return (
        <>
            <div className={classnames(classes.infoItemWrapper, globalClasses.itemInfoWrapper)}>
                <Typography variant={"subtitle2"} component={"div"}>
                    These are browsers, devices, and information Twitter uses to personalize your experience.
                    This includes devices and browsers you haven’t used to log in to Twitter, as well as email
                    addresses and phone numbers like those linked to your Twitter account. <MuiLink
                    href="https://help.twitter.com/about-personalization-across-your-devices"
                    variant="subtitle2"
                    target="_blank"
                    rel="noopener"
                >
                    Learn more
                </MuiLink>
                </Typography>
            </div>
            <Divider/>
            <div className={classnames(classes.infoItemWrapper, globalClasses.itemInfoWrapper)}>
                <Typography variant={"h6"} component={"div"}>
                    Browsers
                </Typography>
                <Typography variant={"subtitle2"} component={"div"}>
                    {`You can remove this information by disabling “Personalize based on your inferred identity” in your `}
                    <MuiLink component={Link} variant="subtitle2" to={"/settings/privacy_and_safety/off_twitter_activity"}>
                        Off-Twitter activity
                    </MuiLink> settings.
                </Typography>
            </div>
            <Divider/>
            <div className={classnames(classes.infoItemWrapper, globalClasses.itemInfoWrapper)}>
                <Typography variant={"h6"} component={"div"}>
                    Mobile Devices
                </Typography>
                <Typography variant={"subtitle2"} component={"div"}>
                    {`You can remove this information by disabling “Personalize based on your inferred identity” in your `}
                    <MuiLink component={Link} variant="subtitle2" to={"/settings/privacy_and_safety/off_twitter_activity"}>
                        Off-Twitter activity
                    </MuiLink> settings.
                </Typography>
            </div>
            <Divider/>
            <div className={classnames(classes.infoItemWrapper, globalClasses.itemInfoWrapper)}>
                <Typography variant={"h6"} component={"div"}>
                    Email addresses
                </Typography>
                <Typography variant={"subtitle2"} component={"div"}>
                    {`There are inferred hashes of email addresses that share common components with the email
                        address you have provided to Twitter. You can remove this information by disabling
                        “Personalize based on your inferred identity” in your `}
                    <MuiLink component={Link} variant="subtitle2" to={"/settings/privacy_and_safety/off_twitter_activity"}>
                        Off-Twitter activity
                    </MuiLink> settings.
                </Typography>
            </div>
        </>
    );
};

export default LoggedDevices;
