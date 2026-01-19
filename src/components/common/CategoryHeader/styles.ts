'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const CategoryHeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-content: center;
  align-items: center;
  padding: 0 170px;
  height: 164px;
  background-color: var(--secondary-color);
  background-image: url('/bg-01-efood.png');
  background-size: cover;
  background-repeat: no-repeat;

  & > :first-child {
    text-align: left;
  }

  & > :last-child {
    text-align: right;
  }
`
export const HeaderCategoryLogo = styled(Image)`
  margin-top: 44px;
  margin-bottom: 64px;
`

export const CategoryBanner = styled.div<{ $bgImage: string }>`
  height: 280px;
  background-image: url(${(props) => props.$bgImage});
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(props) => props.$bgImage});
  background-size: cover;
  background-repeat: no-repeat;
`

export const CategoryTitle = styled.div`
  padding-top: 24px;
  padding-bottom: 220px;
  padding-left: 170px;
`
export const CategoryRestaurant = styled.div`
  padding-top: 156px;
  padding-bottom: 32px;
`
