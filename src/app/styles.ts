'use client'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('/bg-01-efood.png');
  background-size: cover;
  background-repeat: no-repeat;
`

export const HeaderLogo = styled.div`
  margin-top: 44px;
  margin-bottom: 138px;
`

export const HeaderTitle = styled.div`
  padding-bottom: 40px;
  background-color: transparent;
`

export const HeaderGrid = styled.div`
  max-width: 1024px;
  margin: 80px auto;
`
