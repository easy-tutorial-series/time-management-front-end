import { Box, Button, TextField } from "@material-ui/core"
import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { userLogin } from "../../service/user"

type FormValues = {
    name: string
    pwd: string
}
type LoginPageProps = {}
const LoginPage = (p: LoginPageProps) => {
    const { register, handleSubmit, errors } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = async (d) => {
        const user = await userLogin(d)
        //TODO:  goto home page
    }

    const registerRequiredField = (name: keyof FormValues) =>
        register(name, {
            required: {
                value: true,
                message: "this field is required",
            },
        })

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Box width="200px">
                <TextField
                    name="name"
                    role="name-field"
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                    placeholder="name"
                    inputRef={registerRequiredField}
                />
            </Box>
            <Box width="200px">
                <TextField
                    name="pwd"
                    error={!!errors.pwd?.message}
                    helperText={errors.pwd?.message}
                    role="password-field"
                    placeholder="password"
                    inputRef={registerRequiredField}
                />
            </Box>
            <Button onClick={handleSubmit(onSubmit)}>submit</Button>
        </Box>
    )
}
export default LoginPage
