import { NextFunction, Request, Response, Router } from 'express';
import passport from 'passport';

const router = Router();




router.get('/logout', (req: Request, res: Response, next: NextFunction)=>{
  req.logOut();
  return res.json({ message: `Logout successful!` });
})



router.post('/login', (req: Request, res: Response, next: NextFunction)=>{
  passport.authenticate('local-login', (err, user, info)=>{
    if(err) return res.json(err);
    console.log(`User on the req obj: `, user)
    
    req.logIn(user, (err)=>{
      if(err) return res.json({ error: true, message: err.message || `Oops, something went wrong!` })

      return res.status(200).json(user);
    })
  })(req, res, next);
})


export default router;