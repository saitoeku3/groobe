import { firestore } from 'firebase-admin'
import { User, Profile } from './model'

export class UserRepository {
  private ref: firestore.CollectionReference

  constructor(firestore: firestore.Firestore) {
    this.ref = firestore.collection('users')
  }

  async find({ id }: { id: User['id'] }): Promise<User | undefined> {
    const { docs } = await this.ref.where('id', '==', id).get()
    const user = docs.length ? (docs[0].data() as User) : undefined
    return user
  }

  async create({ profile, type }: { profile: Profile; type: User['type'] }): Promise<User> {
    const user: User = {
      id: profile.id,
      name: '',
      type,
      imageUrl: ''
    }
    await this.ref.add(user)
    return user
  }
}
