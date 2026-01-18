import Image, { StaticImageData } from "next/image";
import { Text } from "../../ui/Text";
import { Button } from "../../ui/Button";

import styles from './card.module.css';

type CardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  rating: number;
  highlight?: string;
  category: string;
}

export function CardHighlight({ image, title, description, rating, highlight, category }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTags}>
        {highlight && <Button variant="primary">{highlight}</Button>}
        <Button variant="primary">{category}</Button>
      </div>
      <Image src={image} alt={title} className={styles.image} />
      <div className={styles.cardHeader}>
        <Text variant="subtitle" color="primary">{title}</Text>
        <Text variant="subtitle" color="primary">{rating} ⭐</Text>
      </div>
      <Text className={styles.cardDescription} variant="body" color="primary">{description}</Text>
      <Button className={styles.cardButton} variant="primary" fullWidth={false}>Saiba mais</Button>
    </div>
  )
}
