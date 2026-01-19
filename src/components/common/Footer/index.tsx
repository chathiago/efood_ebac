import Image from "next/image"
import efoodLogo from "../../../../public/logo-efood.png"
import socialLogos from "../../../../public/redes-sociais.png"
import * as S from "./styles"
import { Text } from "@/components/ui/Text";
import Link from "next/link";

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterLogo>
        <Link href={'/'}><Image src={efoodLogo} alt="Logo Efood" /></Link>
      </S.FooterLogo>

      <S.FooterSocial>
        <Image src={socialLogos} alt="Redes Sociais" />
      </S.FooterSocial>

      <Text variant="small" color="primary">A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,<br /> qualidade dos produtos é toda do estabelecimento contratado. </Text>
    </S.FooterContainer>
  )
}
