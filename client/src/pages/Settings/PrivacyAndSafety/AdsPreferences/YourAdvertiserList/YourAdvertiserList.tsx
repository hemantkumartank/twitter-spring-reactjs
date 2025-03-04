import React, {FC, ReactElement} from 'react';
import {Divider, Link as MuiLink, Typography} from "@material-ui/core";

import {useGlobalStyles} from "../../../../../util/globalClasses";

const YourAdvertiserList: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();

    return (
        <>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle1"} component={"div"}>
                    Tailored audiences are often built from email lists or browsing behaviors. They help advertisers
                    reach prospective customers or people who have already expressed interest in their business.
                    {" "}
                    <MuiLink
                        href={"https://help.twitter.com/safety-and-security/privacy-controls-for-tailored-ads"}
                        variant="subtitle2"
                        target="_blank"
                        rel="noopener"
                    >
                        Learn more
                    </MuiLink>
                </Typography>
            </div>
            <Divider/>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"body1"} component={"div"}>
                    You are currently a part of
                    <Typography variant={"h6"} component={"span"}>
                        {" 0 audiences"}
                    </Typography>
                    {" from "}
                    <Typography variant={"h6"} component={"span"}>
                        0 advertisers
                    </Typography>
                </Typography>
            </div>
            <Divider/>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle1"} component={"div"}>
                    You can opt out of interest-based advertising in your personalization and data settings. This will
                    change the ads you see on Twitter, however it won’t remove you from advertisers’ audiences.
                </Typography>
            </div>
        </>
    );
};

export default YourAdvertiserList;
