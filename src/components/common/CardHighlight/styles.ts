'use client'
import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: var(--highlight-color);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`
export const CardTags = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  top: 0;
  gap: 8px;
  margin: 16px;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96%;
  margin: 8px;
`
export const CardDescription = styled.p`
  margin: 8px 8px 16px;
`

export const CardButton = styled.div`
  margin-bottom: 8px;
  margin-left: 8px;
  border: none;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
