import { Strategy } from 'passport-local';


export default new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done)=>{
    console.log({email, password});
    done(null, 'logging strategy user');
  }
)