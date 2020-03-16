import { Request, Response } from 'express'
import { UserRepository, UsersResponse } from '../../../domains/user'
import { firestore } from '../../../lib/firebase'

const usersId = async ({ query: { id } }: Request, res: Response<UsersResponse['id']>) => {
  const userRepository = new UserRepository(firestore)
  const user = await userRepository.find({ id })
  res.json({ user })
}

export default usersId
