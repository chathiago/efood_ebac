import { Text } from "@/components/ui/Text";
import styles from "./page.module.css";
import { GridHighlight } from "@/components/layout/GridHighlight";
import { CardHighlight } from "@/components/common/CardHighlight";
import Image from "next/image";
import efoodLogo from "../../public/logo-efood.png"
import { restaurantsData } from "@/data/restaurants";
import { Footer } from "@/components/common/Footer";

export default function Page() {

  return (
    <>
      <header className={styles.header}>
        <Image src={efoodLogo} alt="Logo Efood" className={styles.logo} />
        <Text variant="title" color="primary" className={styles.title}>Viva experiências gastronômicas<br />no conforto da sua casa</Text>
      </header>
      <main className={styles.grid}>
        <GridHighlight columns={2} gap="80">{restaurantsData.map((card, index) => (
          <CardHighlight key={index} {...card} />
        ))}</GridHighlight>
      </main>
      <Footer />
    </>
  );
}
