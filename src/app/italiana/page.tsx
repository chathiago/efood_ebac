import { CategoryHeader } from "@/components/common/CategoryHeader";
import { italianaFoods } from "@/data/italianaFoods";
import { CardRestaurant } from "@/components/common/CardRestaurant";
import { Footer } from "@/components/common/Footer";
import { Grid } from "@/components/layout/Grid";
import * as S from './styles'

export default function CategoryPage() {
  return (
    <>
      <CategoryHeader category="italiana" />

      <S.ItalianaGrid>
        <Grid columns={3} gap="30">
          {italianaFoods.map((card, index) => (
            <CardRestaurant key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </Grid>
      </S.ItalianaGrid>

      <Footer />
    </>

  )
}
