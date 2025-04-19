import {Box, Button, Stack, TextField, Typography, Link} from "@mui/material"
import { FiLogIn } from "react-icons/fi";

const Login = () => {
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
      <TextField id="name-filled" label="Name" variant="filled" fullWidth />
      <TextField id="password-filled" type="password" label="password" variant="filled" fullWidth  />
      <Button variant="contained" fullWidth size="large" onClick={()=> console.log("clicked")}>Sign in</Button>
      <Link href="#" textAlign={"center"} underline="hover" sx={{
        color: "gray",

      }}>Forgot your password?</Link>

    </Stack>
    <Stack spacing={2} mt={5} sx={{display: "flex", alignItems: "center"}}>
      <Typography variant="subtitle1" component="p">Don't have an Account?</Typography>
      <Button variant="contained" sx={{backgroundColor: "white", color: "gray", border: "2px black"}} fullWidth>Create an Account</Button>
    </Stack>
  </Box>
</Box>

  
  )
}

export default Login
