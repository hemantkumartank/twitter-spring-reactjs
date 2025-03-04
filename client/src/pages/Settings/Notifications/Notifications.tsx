import React, {FC, ReactElement} from 'react';
import {Link} from 'react-router-dom';
import {List, ListItem, Typography} from "@material-ui/core";

import {ArrowRightIcon, FiltersIcon, PreferencesIcon,} from "../../../icons";
import {useGlobalStyles} from "../../../util/globalClasses";

const Notifications: FC = (): ReactElement => {
    const globalClasses = useGlobalStyles();

    return (
        <>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    Select the kinds of notifications you get about your activities, interests, and recommendations.
                </Typography>
            </div>
            <div className={globalClasses.listItemWrapper}>
                <List component="nav" aria-label="main mailbox folders">
                    <Link to={"/settings/notification/filters"}>
                        <ListItem>
                            <div className={globalClasses.listIconWrapper}>
                                {FiltersIcon}
                            </div>
                            <div>
                                <Typography variant={"body1"} component={"div"}>
                                    Filters
                                </Typography>
                                <Typography variant={"subtitle2"} component={"div"}>
                                    Choose the notifications you’d like to see — and those you don’t.
                                </Typography>
                            </div>
                            <div className={globalClasses.arrowIcon}>
                                {ArrowRightIcon}
                            </div>
                        </ListItem>
                    </Link>
                    <Link to={"/settings/notification/preferences"}>
                        <ListItem>
                            <div className={globalClasses.listIconWrapper}>
                                {PreferencesIcon}
                            </div>
                            <div>
                                <Typography variant={"body1"} component={"div"}>
                                    Preferences
                                </Typography>
                                <Typography variant={"subtitle2"} component={"div"}>
                                    Select your preferences by notification type.
                                </Typography>
                            </div>
                            <div className={globalClasses.arrowIcon}>
                                {ArrowRightIcon}
                            </div>
                        </ListItem>
                    </Link>
                </List>
            </div>
        </>
    );
};

export default Notifications;
