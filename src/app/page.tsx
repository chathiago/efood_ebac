import { Text } from "@/components/ui/Text";
import { CardHighlight } from "@/components/common/CardHighlight";
import { Footer } from "@/components/common/Footer";
import { Grid } from "@/components/layout/Grid";
import { restaurantsData } from "@/data/restaurants";
import Image from "next/image";
import efoodLogo from "../../public/logo-efood.png"
import Link from "next/link";
import * as S from "./styles"

export default function Page() {

  return (
    <>
      <S.Header>
        <S.HeaderLogo>
          <Link href={'/'}><Image src={efoodLogo} alt="Logo Efood" /></Link>
        </S.HeaderLogo>

        <S.HeaderTitle>
          <Text variant="title" color="primary">Viva experiências gastronômicas<br />no conforto da sua casa</Text>
        </S.HeaderTitle>
      </S.Header>

      <main>
        <S.HeaderGrid>
          <Grid columns={2} gap="80">{restaurantsData.map((card, index) => (
            <CardHighlight key={index} image={card.image} title={card.title} description={card.description} rating={card.rating} highlight={card.highlight} category={card.category as "japonesa" | "italiana"} />
          ))}</Grid>
        </S.HeaderGrid>
      </main>

      <Footer />
    </>
  );
}
