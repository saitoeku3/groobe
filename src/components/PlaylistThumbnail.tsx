import React from 'react'
import styled from 'styled-components'
import Thumbnail from './common/Thumbnail'
import { Playlist } from '../domains/playlist'

type Props = {
  className?: string
  playlist: Playlist
}

const PlaylistThumbnail: React.FC<Props> = ({ playlist }) => (
  <div>
    <Wrapper>
      <Time>00:00</Time>
      <StyledThummbnail src={playlist.thumbnailUrl} />
    </Wrapper>
    <Title>{playlist.title}</Title>
  </div>
)

const Wrapper = styled.div`
  cursor: pointer;
  margin-bottom: 4px;
  position: relative;
`

const StyledThummbnail = styled(Thumbnail)`
  width: 200px;
  height: 200px;
`

const Time = styled.small`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  padding: 2px 4px;
  position: absolute;
  right: 6px;
  bottom: 6px;
`

const Title = styled.div`
  width: 100%;
  font-weight: bold;
`

export default PlaylistThumbnail
