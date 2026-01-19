import { CategoryHeader } from "@/components/common/CategoryHeader";
import { Footer } from "@/components/common/Footer";
import * as S from './styles'
import { GridRestaurant } from "@/components/layout/GridRestaurant";
import { japonesaFoods } from "@/data/japonesaFoods";
import { CardRestaurant } from "@/components/common/CardRestaurant";

export default function CategoryPage() {
  return (
    <>
      <CategoryHeader category="japonesa" />

      <S.JaponesaGrid>
        <GridRestaurant columns={3} gap="30">
          {japonesaFoods.map((card, index) => (
            <CardRestaurant key={index} image={card.image} title={card.title} description={card.description} />
          ))}
        </GridRestaurant>
      </S.JaponesaGrid>

      <Footer />
    </>
  )
}
