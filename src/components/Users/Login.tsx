import {Box, Button, Stack, TextField, Typography, Link, CircularProgress} from "@mui/material"
import { FiLogIn } from "react-icons/fi";
import * as Yup from "yup"
import {useFormik} from "formik"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {useMutation} from "@tanstack/react-query"
import { loginAPi } from "../../Service/Admin/adminService";
import { useDispatch } from "react-redux";
import { loginAction } from "../../redux/slice/authSlice";

const validationSchema = Yup.object({
  email: Yup.string().email("invalid email").required("Email is reaquired"),
  password: Yup.string().min(5, "Password must be at least five character long").required("Password is required")
})

const Login = () => {
  // navigate instance
  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [error, setError] = useState<null | string>(null);
  const {mutateAsync, isError, isSuccess, isPending} = useMutation({
    mutationFn: loginAPi,
    mutationKey: ["login"]
  })
  console.log(error, isError, isSuccess)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values)=> {
      mutateAsync(values).then(data=> {
        dispatch(loginAction({ user: data.user, role: data.role }))
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate(`/${data.admin.role}`)
      }).catch(err=> setError(err))

    }
  })

  // TODO: the isError display
  
  if (isPending) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress size="7rem" />
      </Box>
    )
  }
  
  return (
    <Box
  sx={{
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }}
>

  <Box sx={{
    width: "300px"
  }}>
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>

      <FiLogIn style={{fontSize: "30px", color: "#3e29aa"}} />
    </Box>
    <Typography variant="h5" sx={{textAlign: "center", marginTop: "10px"}} mb={4.5}>Sign In</Typography>
    <Stack spacing={2}>
      <TextField id="email-filled" label="Email" variant="filled" fullWidth {...formik.getFieldProps("email")} />
      <TextField id="password-filled" type="password" label="password" variant="filled" fullWidth {...formik.getFieldProps("password")}  />
      <Button variant="contained" fullWidth size="large" onClick={formik.handleSubmit}>Sign in</Button>
      <Link href="#" textAlign={"center"} underline="hover" sx={{
        color: "gray",

      }}>Forgot your password?</Link>

    </Stack>
    <Stack spacing={2} mt={5} sx={{display: "flex", alignItems: "center"}}>
      <Typography variant="subtitle1" component="p">Don't have an Account?</Typography>
      <Button variant="contained" sx={{backgroundColor: "white", color: "gray", border: "2px black"}} fullWidth >Create an Account</Button>
    </Stack>
  </Box>
</Box>

  
  )
}

export default Login
