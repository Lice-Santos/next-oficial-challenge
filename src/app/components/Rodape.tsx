import { FooterRodape } from "../styles";
import fiap from "../../../public/image/fiap.png"
import porto from "../../../public/image/porto.png"
import oxigenio from "../../../public/image/oxigenio.png"
import ajuda from "../../../public/image/duvida.png"
import Image from "next/image";
import Link from "next/link";


export default function Rodape() {

    return (
        <FooterRodape>
            <div className="parcerias">
                <Image src={fiap} alt="" width={200}></Image>
                <Image src={porto} alt="" width={200}></Image>
                <Image src={oxigenio} alt="" width={200}></Image>
            </div>
            <p>triaduvidas@gmail.com</p>
            <div className="ajuda">
                <Image src={ajuda} alt="" width={50} height={30}/>
                <p>Ajuda</p>
            </div>
        </FooterRodape>
    )
}