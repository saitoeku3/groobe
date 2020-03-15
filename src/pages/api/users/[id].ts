import { Request, Response } from 'express'
import { UserService } from '../../../domains/user'
import { firestore } from '../../../lib/firebase'

const usersId = async ({ query: { id } }: Request, res: Response) => {
  const userService = new UserService(firestore)
  const user = await userService.find({ id })
  res.json({ user })
}

export default usersId
