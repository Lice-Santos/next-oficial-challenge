import Link from "next/link";
import { DivBanner, DivBannerEquipe } from "../styles";
import { BannerProps} from "../types";

export default function BannerEquipe() {
    return (
        <DivBannerEquipe style={{ backgroundImage: "url('../image/triaEquipe.png') " }}>
            <h1>TRIA</h1>
            <p>Quem somos nós?</p>
            
        </DivBannerEquipe>
    )
}