import { Track } from '../track/model'

export type Playlist = {
  id: string
  name: string
  description: string
  tracks: Track[]
  thumbnailUrl: string
  userId: string
}
