import React, {ReactElement, useState} from 'react';
import {Divider, Typography} from "@material-ui/core";
import classnames from "classnames";
import {Link} from "react-router-dom";

import {useGlobalStyles} from "../../../../util/globalClasses";
import {useContentPreferencesStyles} from "./ContentPreferencesStyles";
import {ArrowRightIcon} from "../../../../icons";
import ExploreModal from "./ExploreModal/ExploreModal";
import RecommendationsModal from "./RecommendationsModal/RecommendationsModal";

const ContentPreferences = (): ReactElement => {
    const globalClasses = useGlobalStyles();
    const classes = useContentPreferencesStyles();
    const [visibleExploreModal, setVisibleExploreModal] = useState<boolean>(false);
    const [visibleRecommendationsModal, setVisibleRecommendationsModal] = useState<boolean>(false);
    const [isSearchModal, setIsSearchModal] = useState<boolean>(true);

    const onOpenBlockUserModal = (condition: boolean): void => {
        setVisibleExploreModal(true);
        setIsSearchModal(condition);
    };

    const onOpenVisibleRecommendationsModal = (): void => {
        setVisibleRecommendationsModal(true);
    };

    const onCloseModal = (): void => {
        setVisibleExploreModal(false);
        setVisibleRecommendationsModal(false);
        setIsSearchModal(true);
    };

    return (
        <>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"h5"} component={"div"}>
                    Explore
                </Typography>
            </div>
            <div className={globalClasses.contentLink} onClick={() => onOpenBlockUserModal(true)}>
                <Typography variant={"body1"} component={"span"}>
                    Search settings
                </Typography>
                {ArrowRightIcon}
            </div>
            <div className={globalClasses.contentLink} onClick={() => onOpenBlockUserModal(false)}>
                <Typography variant={"body1"} component={"span"}>
                    Explore settings
                </Typography>
                {ArrowRightIcon}
            </div>
            <Divider/>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"h5"} component={"div"}>
                    Languages
                </Typography>
            </div>
            <div className={globalClasses.contentLink} onClick={onOpenVisibleRecommendationsModal}>
                <Typography variant={"body1"} component={"span"}>
                    Recommendations
                </Typography>
                {ArrowRightIcon}
            </div>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"subtitle2"} component={"div"}>
                    Select which languages you want recommended Tweets, people, and trends to include.
                </Typography>
            </div>
            <Divider/>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"h5"} component={"div"}>
                    Safety
                </Typography>
            </div>
            <Link to={"/settings/privacy_and_safety/muted"} className={globalClasses.linkWrapper}>
                <div className={globalClasses.contentLink}>
                    <Typography variant={"body1"} component={"span"}>
                        Muted
                    </Typography>
                    {ArrowRightIcon}
                </div>
            </Link>
            <Link to={"/settings/privacy_and_safety/blocked"} className={globalClasses.linkWrapper}>
                <div className={globalClasses.contentLink}>
                    <Typography variant={"body1"} component={"span"}>
                        Blocked accounts
                    </Typography>
                    {ArrowRightIcon}
                </div>
            </Link>
            <Divider/>
            <div className={globalClasses.itemInfoWrapper}>
                <Typography variant={"h5"} component={"div"}>
                    Personalization and data
                </Typography>
            </div>
            <Link to={"/settings/account/personalization"} className={globalClasses.linkWrapper}>
                <div className={classnames(classes.personalizationLink, globalClasses.contentLink)}>
                    <div className={classes.personalizationInfo}>
                        <Typography variant={"body1"} component={"div"}>
                            Personalization and data
                        </Typography>
                        <Typography variant={"subtitle2"} component={"div"}>
                            Allow some
                        </Typography>
                    </div>
                    {ArrowRightIcon}
                </div>
            </Link>
            <ExploreModal
                visible={visibleExploreModal}
                onClose={onCloseModal}
                isSearchModal={isSearchModal}
            />
            <RecommendationsModal
                visible={visibleRecommendationsModal}
                onClose={onCloseModal}
            />
        </>
    );
};

export default ContentPreferences;