import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { baseURL } from '~/constants'
import { User, UsersResponse } from '~/domains/user'

export class UserService {
  private fetch: AxiosInstance

  constructor(options?: AxiosRequestConfig) {
    this.fetch = Axios.create({
      baseURL,
      ...options
    })
  }

  async find({ id }: { id: User['id'] }): Promise<User | undefined> {
    const { data } = await this.fetch.get<UsersResponse['id']>(`/api/users/${id}`)
    return data.user
  }
}
