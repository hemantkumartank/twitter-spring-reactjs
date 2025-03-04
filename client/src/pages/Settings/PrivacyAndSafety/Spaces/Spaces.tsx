import React, {FC, ReactElement} from 'react';
import {Link as MuiLink, Switch, Typography} from "@material-ui/core";

import {useSpacesStyles} from "./SpacesStyles";
import {useGlobalStyles} from "../../../../util/globalClasses";

const Spaces: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useSpacesStyles();

    return (
        <>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    Manage who can see your Spaces listening activity
                </Typography>
            </div>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"h6"} component={"div"} className={classes.title}>
                    Allow followers to see which Spaces you’re listening to
                    <span className={globalClasses.switch}>
                        <Switch defaultChecked/>
                    </span>
                </Typography>
            </div>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    {`Keep in mind that even with this setting turned off you will be visible to everyone when you’re in a
                        Space. Your followers can always see what Spaces you’re hosting, co-hosting or speaking in. `}
                    <MuiLink
                        href="https://help.twitter.com/using-twitter/spaces"
                        variant="subtitle2"
                        target="_blank"
                        rel="noopener"
                    >
                        Learn more
                    </MuiLink>
                </Typography>
            </div>
        </>
    );
};

export default Spaces;
