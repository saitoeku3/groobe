import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '~/components/common/Icon'
import TextField from '~/components/common/TextField'

type Props = {
  className?: string
}

const SearchBox: React.FC<Props> = ({ className }) => {
  const [word, setWord] = useState('')

  const handleChangeSearchField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value)
  }

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Wrapper className={className} onSubmit={search}>
      <SearchIcon name="search" />
      <SearchField type="search" value={word} onChange={handleChangeSearchField} />
    </Wrapper>
  )
}

const Wrapper = styled.form`
  height: 40px;
  position: relative;
`

const SearchIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0 auto 8px;
`

const SearchField = styled(TextField)`
  width: 500px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.gray};
  padding-left: 36px;
`

export default SearchBox
