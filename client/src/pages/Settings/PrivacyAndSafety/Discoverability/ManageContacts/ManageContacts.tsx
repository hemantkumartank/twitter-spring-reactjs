import React, {FC, ReactElement} from 'react';
import {Divider, Link as MuiLink, Typography} from "@material-ui/core";

import {useManageContactsStyles} from "./ManageContactsStyles";
import {useGlobalStyles} from "../../../../../util/globalClasses";

const ManageContacts: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useManageContactsStyles();

    return (
        <>
            <div className={classes.removeContacts}>
                <Typography variant={"body1"} component={"span"}>
                    Remove all contacts
                </Typography>
            </div>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    {`These are the contacts that you have imported from your mobile devices. This information is used to
                        personalize your experience on Twitter, such as suggesting accounts to follow. You can remove any
                        contacts you’ve previously uploaded and turn off syncing with Twitter on all devices. Please be
                        aware that this takes a little time. `}
                    <MuiLink
                        href="https://help.twitter.com/safety-and-security/email-and-phone-discoverability-settings"
                        variant="subtitle2"
                        target="_blank"
                        rel="noopener"
                    >
                        Learn more
                    </MuiLink>
                </Typography>
            </div>
            <Divider/>
        </>
    );
};

export default ManageContacts;
