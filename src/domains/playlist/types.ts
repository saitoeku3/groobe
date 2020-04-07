import { Playlist } from '~/domains/playlist'

export type PlaylistsResponse = {
  index: {
    playlists: Playlist[]
  }
}
