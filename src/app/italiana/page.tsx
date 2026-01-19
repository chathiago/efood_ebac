import { CategoryHeader } from "@/components/common/CategoryHeader";
import { GridRestaurant } from "@/components/layout/GridRestaurant";
import { italianaFoods } from "@/data/italianaFoods";
import * as S from './styles'
import { CardRestaurant } from "@/components/common/CardRestaurant";
import { Footer } from "@/components/common/Footer";

export default function CategoryPage() {
  return (
    <>
      <CategoryHeader category="italiana" />

      <S.ItalianaGrid>
        <GridRestaurant columns={3} gap="30">
          {italianaFoods.map((card, index) => (
            <CardRestaurant key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </GridRestaurant>
      </S.ItalianaGrid>

      <Footer />
    </>

  )
}
