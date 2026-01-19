import Image, { StaticImageData } from "next/image";
import { Text } from "../../ui/Text";
import { Button } from "../../ui/Button";
import * as S from "./styles";
import Link from "next/link";
import { categoryRoutes } from "@/data/categoryRoutes";

type CardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  rating: number;
  highlight?: string;
  category: keyof typeof categoryRoutes;
}

export function CardHighlight({ image, title, description, rating, highlight, category }: CardProps) {
  return (
    <S.Card>
      <S.CardTags>
        {highlight && <Button variant="primary">{highlight}</Button>}
        <Link href={categoryRoutes[category]}>
          <Button variant="primary">{category}</Button>
        </Link>
      </S.CardTags>

      <Image src={image} alt={title} />

      <S.CardHeader>
        <Text variant="subtitle" color="primary">{title}</Text>
        <Text variant="subtitle" color="primary">{rating} ⭐</Text>
      </S.CardHeader>

      <S.CardDescription>
        <Text variant="body" color="primary">{description}</Text>
      </S.CardDescription>

      <S.CardButton>
        <Link href={categoryRoutes[category]}>
          <Button variant="primary" fullWidth={false}>Saiba mais</Button>
        </Link>
      </S.CardButton>
    </S.Card>
  )
}
