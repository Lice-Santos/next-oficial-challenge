import { HeaderCabecalho } from "./styles";
import { BannerProps } from "./types";
import Banner from "./components/Banner";
import Menu from "./components/Menu";


export default function Cabecalho({titulo, paragrafo, textoBotao}: BannerProps) {

    return (
        <HeaderCabecalho>
            <Banner titulo={titulo} paragrafo={paragrafo} textoBotao={textoBotao}/>

        </HeaderCabecalho>
    )
}