import { Text } from '@/components/ui/Text'
import { categoryRoutes } from '@/data/categoryRoutes'
import EfoodLogo from '../../../../public/logo-efood.png'
import * as S from './styles'
import Link from 'next/link'

interface CategoryHeaderProps {
  category: keyof typeof categoryRoutes
}

const categoryData: Record<keyof typeof categoryRoutes, { name: string; banner: string }> = {
  italiana: {
    name: 'La Dolce Vita Trattoria',
    banner: '/restaurants/la-dolce-vitta.png',
  },
  japonesa: {
    name: 'Hioki Sushi',
    banner: '/restaurants/hioki-sushi.png',
  },
}

export function CategoryHeader({ category }: CategoryHeaderProps) {
  const displayCategory = category.charAt(0).toUpperCase() + category.slice(1)

  const { name, banner } = categoryData[category]

  return (
    <>
      <S.CategoryHeaderStyled>
        <Text variant='subtitle' color='primary'>Restaurantes</Text>
        <Link href={'/'}><S.HeaderCategoryLogo src={EfoodLogo} alt='Efood Logo' /></Link>
        <Text variant='subtitle' color='primary'><span>0</span> produto(s) no carrinho</Text>
      </S.CategoryHeaderStyled>

      <S.CategoryBanner $bgImage={banner}>
        <S.CategoryTitle>
          <Text variant='title' color='highlight' weight='light'>{displayCategory}</Text>
          <S.CategoryRestaurant>
            <Text variant='title' color='highlight'>{name}</Text>
          </S.CategoryRestaurant>
        </S.CategoryTitle>
      </S.CategoryBanner>
    </>
  )
}
