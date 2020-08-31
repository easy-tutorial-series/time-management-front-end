import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Typography,
    ButtonGroup,
} from "@material-ui/core"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useEffectOnce } from "react-use"
import { urlPath } from "route/path"
import { lsGet } from "util/local-storage"
import { userLogin } from "../../service/user"
import { useStyles } from "./index.style"

type FormValues = {
    name: string
    pwd: string
}
type LoginPageProps = {}
const LoginPage = (p: LoginPageProps) => {
    /* -------------------------------------------------------------------------- */
    /*                                 declaration                                */
    /* -------------------------------------------------------------------------- */
    const history = useHistory()
    const styles = useStyles()
    const { register, handleSubmit, errors } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = async (d) => {
        const user = await userLogin(d)
        if (user) history.push(urlPath.home)
    }

    const registerRequiredField = (name: keyof FormValues) =>
        register(name, {
            required: {
                value: true,
                message: "this field is required",
            },
        })

    /* -------------------------------------------------------------------------- */
    /*                                   effects                                  */
    /* -------------------------------------------------------------------------- */
    useEffectOnce(() => {
        if (lsGet("access-token")) history.goBack()
    })

    /* -------------------------------------------------------------------------- */
    /*                                     JSX Element                                    */
    /* -------------------------------------------------------------------------- */
    return (
        <Box mt={5} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h3">Welcome !</Typography>
            <Card className={styles.card}>
                <CardHeader title="Login" />
                <CardContent>
                    <Box>
                        <TextField
                            className={styles.input}
                            name="name"
                            role="name-field"
                            error={!!errors.name?.message}
                            helperText={errors.name?.message}
                            placeholder="name"
                            inputRef={registerRequiredField}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            className={styles.input}
                            name="pwd"
                            error={!!errors.pwd?.message}
                            helperText={errors.pwd?.message}
                            role="password-field"
                            placeholder="password"
                            inputRef={registerRequiredField}
                        />
                    </Box>
                    <ButtonGroup>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit(onSubmit)}
                        >
                            sign in
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => alert("sing up not implemented")}
                        >
                            sign up
                        </Button>
                    </ButtonGroup>
                </CardContent>
            </Card>
        </Box>
    )
}
export default LoginPage
