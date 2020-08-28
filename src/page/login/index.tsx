import { Box, Button, TextField } from "@material-ui/core"
import React, { useEffect, useCallback } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type FormValues = {
    name: string
    pwd: string
}
type LoginPageProps = {}
const LoginPage = (p: LoginPageProps) => {
    const { register, handleSubmit, errors, setValue } = useForm<FormValues>()

    const onSubmit: SubmitHandler<FormValues> = (d) => {
        console.log(d)
        console.log(d.name)
        console.log(d.pwd)
    }

    const registerRequiredField = useCallback(
        (name: keyof FormValues) =>
            register(name, {
                required: {
                    value: true,
                    message: "this field is required",
                },
            }),
        [register]
    )

    useEffect(() => {
        registerRequiredField("name")
        registerRequiredField("pwd")
    }, [registerRequiredField])

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
                    onChange={(e) => setValue("name", e.target.value)}
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
                    onChange={(e) => setValue("pwd", e.target.value)}
                />
            </Box>
            <Button onClick={handleSubmit(onSubmit)}>submit</Button>
        </Box>
    )
}
export default LoginPage
