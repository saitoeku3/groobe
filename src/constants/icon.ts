import { mdiCloudUpload, mdiCog, mdiLogoutVariant, mdiPlaylistMusic } from '@mdi/js'

export const icon = {
  cog: mdiCog,
  playlist: mdiPlaylistMusic,
  signOut: mdiLogoutVariant,
  upload: mdiCloudUpload
}

export type IconName = keyof typeof icon
