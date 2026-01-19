'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const RestaurantCard = styled.div`
  display: flex;
  height: 338px;
  flex-direction: column;
  background-color: var(--primary-color);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`
export const RestaurantImage = styled(Image)`
  height: 167px;
  width: 100%;
  padding: 8px 8px 0 8px;
`
export const RestaurantText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 8px;
`
export const RestaurantButton = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 8px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
