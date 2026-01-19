import { Button } from "@/components/ui/Button";
import { Text } from "@/components/ui/Text";
import { StaticImageData } from "next/image"
import * as S from './styles'

type CardRestaurantProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
}

export function CardRestaurant({ image, title, description }: CardRestaurantProps) {
  return (
    <S.RestaurantCard>
      <S.RestaurantImage src={image} alt={title} />

      <S.RestaurantText>
        <Text variant="subtitle" color="secondary">{title}</Text>
        <Text variant="body" color="secondary" weight="normal">{description}</Text>
      </S.RestaurantText>

      <S.RestaurantButton>
        <Button variant="secondary" fullWidth={true}>Adicionar ao carrinho</Button>
      </S.RestaurantButton>
    </S.RestaurantCard>
  )
}
