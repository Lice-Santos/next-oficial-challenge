import Link from "next/link";
import logo from "../../../public/image/logo.png"
import Image from "next/image";
import { NavMenu } from "../styles";

export default function Menu() {

    return (
        <NavMenu>
            <ul>
                <li>
                    <Image src={logo} alt="" width={100}></Image>
                </li>
                <div className="lado2">
                    <li><Link href={'/'}><i className="fa-solid fa-house">Home</i></Link></li>
                    <li><Link href={'/diagnostico'}>Diagnóstico</Link></li>
                    <li><Link href={'/revisao'}>Revisão</Link></li>
                    <li><Link href={'/historico'}>Histórico</Link></li>
                    <li><Link href={'/login'}>Entrar</Link></li>
                    <li><Link href={'/perfil'}><i className="fa-regular fa-user"></i></Link></li>
                </div>
            </ul>
        </NavMenu>
    )
}