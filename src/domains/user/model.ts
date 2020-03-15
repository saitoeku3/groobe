export type User = {
  id: string
  name: string
  type: 'apple' | 'spotify'
  imageUrl: string
}

export type Profile = {
  id: string
  accessToken: string
}

export type CurrentUser = User & Profile['accessToken']
