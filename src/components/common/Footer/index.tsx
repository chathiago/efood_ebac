import Image from "next/image"
import efoodLogo from "../../../../public/logo-efood.png"
import socialLogos from "../../../../public/redes-sociais.png"
import styles from "./styles.module.css";
import { Text } from "@/components/ui/Text";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Image className={styles.logo} src={efoodLogo} alt="Logo Efood" />
        <Image className={styles.social} src={socialLogos} alt="Redes Sociais" />
        <Text variant="small" color="primary">A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,<br /> qualidade dos produtos é toda do estabelecimento contratado. </Text>
      </footer>
    </>
  )
}
