import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import APIURL from '../helpers/environments';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup =(props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
      event.preventDefault();
      fetch(`${APIURL}/user/signup`, {
          method: 'POST',
          body: JSON.stringify({email: email, password: password}),
          headers: new Headers ({
              'Content-Type':'application/json'
          })
      }).then (
          (response) => response.json()
      ).then ((data)=>{
          props.updateToken(data.sessionToken)

      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit = {handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                input onChange={(e)=>setEmail(e.target.value)}  
                value= {email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                input onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            id="signupbutton"
           
          >
            Sign Up
          </Button>
          
        </form>
      </div>
    </Container>
  );
}

export default Signup;


// const Signup = (props) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

// const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch("http://localhost:3000/user/register", {
//         method: 'POST',
//         body: JSON.stringify({username: username, password: password}),
//         headers: new Headers ({
//             'Content-Type':'application/json'
//         })
//     }).then (
//         (response) => response.json()
//     ).then ((data)=>{
//         props.updateToken(data.sessionToken)
//     })
// }

//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <Form onSubmit={handleSubmit}>
//                 <FormGroup>
//                     <Label htmlFor ="username">Username</Label>
//                     <Input onChange={(e)=>setUsername(e.target.value)} name = "username" value= {username} /> 
//                 </FormGroup>
//                 <FormGroup><Label htmlFor="password">Password</Label>
//                 <Input onChange ={(e) => setPassword(e.target.value)} name= "password" value = {password} type="password" />
//                 </FormGroup>
//                 <Button type = "submit">Sign Up</Button>
//             </Form>
//         </div>
//     )
// }

// export default Signup; 