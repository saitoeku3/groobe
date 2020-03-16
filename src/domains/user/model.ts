export type User = {
  id: string
  name: string
  type: 'apple' | 'spotify'
  imageUrl: string
}

export type AppleProfile = {
  id: string
  email?: string
  emailVerified?: boolean
  name: {
    firstName: string
    lastName: string
  }
}

export type SpotifyProfile = {
  provider: 'spotify'
  id: string
  username: string
  displayName: string
  profileUrl: string
  photos: string[]
  country: unknown | null
  followers: number
  product: unknown | null
  _raw: string
  _json: {
    display_name: string
    external_urls: { spotify: string }
    followers: { href: null | unknown; total: number }
    href: string
    id: string
    images: string[]
    type: 'user'
    uri: string
  }
}

export type Profile = AppleProfile | SpotifyProfile

export type CurrentUser = User & { sccessToken: string }
