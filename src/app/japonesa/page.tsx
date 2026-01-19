import { CategoryHeader } from "@/components/common/CategoryHeader";
import { Footer } from "@/components/common/Footer";
import { Grid } from "@/components/layout/Grid";
import { japonesaFoods } from "@/data/japonesaFoods";
import { CardRestaurant } from "@/components/common/CardRestaurant";
import * as S from './styles'

export default function CategoryPage() {
  return (
    <>
      <CategoryHeader category="japonesa" />

      <S.JaponesaGrid>
        <Grid columns={3} gap="30">
          {japonesaFoods.map((card, index) => (
            <CardRestaurant key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </Grid>
      </S.JaponesaGrid>

      <Footer />
    </>
  )
}
