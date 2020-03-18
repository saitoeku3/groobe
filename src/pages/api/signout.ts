import { Request, Response } from 'express'

const signOut = async (req: Request, res: Response) => {
  req.logOut()
  res.redirect('/')
}

export default signOut
