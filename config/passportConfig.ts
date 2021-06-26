import passport from 'passport';

import LoginStrategy from './passportStrategies/LoginStrategy';



// serialize and deserialize users
passport.serializeUser<any,any>((user, done:any)=>{
  console.log(`Serializing user!`);
  done(user);
});

passport.deserializeUser((id, done)=>{
  console.log(`Deserialize user!`);
  done('user DESERIALIZED');
});









// ------------passport config
passport.use('local-login', LoginStrategy);

