export type Track = {
  id: string
  name: string
  artist: Artist
  artworkUrl: string
  isrc: string
  urls: {
    apple: string
    spotify: string
  }
}

type Artist = {
  id: string
  name: string
  urls: {
    apple: string
    apotify: string
  }
}
