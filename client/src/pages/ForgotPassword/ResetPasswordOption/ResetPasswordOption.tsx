import React, {FC, FormEvent, ReactElement, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import {Button, Link as MuiLink, Radio, Typography} from "@material-ui/core";

import {AuthApi} from "../../../services/api/authApi";
import {useResetPasswordOptionStyles} from "./ResetPasswordOptionStyles";

const ResetPasswordOption: FC = (): ReactElement => {
    const classes = useResetPasswordOptionStyles();
    const history = useHistory();
    const location = useLocation<{ email: string }>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendResetCode = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setIsLoading(true);
        AuthApi.sendPasswordResetCode({email: location.state.email})
            .then(() => {
                history.push("/account/forgot/confirm_pin_reset");
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    };

    return (
        <>
            <Typography variant={"h3"} component={"div"}>
                How do you want to reset your password?
            </Typography>
            <Typography variant={"body1"} component={"div"} className={classes.text}>
                You can use the information associated with your account.
            </Typography>
            <form className={classes.formWrapper} onSubmit={sendResetCode}>
                <div className={classes.emailWrapper}>
                    <Radio className={classes.radio} checked={true} color="primary"/>
                    <Typography variant={"body1"} component={"span"}>
                        {"Send an email to "}
                    </Typography>
                    <Typography variant={"h6"} component={"span"}>
                        {location.state.email}
                    </Typography>
                </div>
                <Button
                    className={classes.button}
                    disabled={isLoading}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                >
                    Next
                </Button>
            </form>
            <MuiLink
                href="https://help.twitter.com/forms/account-access/regain-access"
                variant="subtitle2"
                target="_blank"
                rel="noopener"
            >
                Don’t have access to these?
            </MuiLink>
        </>
    );
};

export default ResetPasswordOption;
