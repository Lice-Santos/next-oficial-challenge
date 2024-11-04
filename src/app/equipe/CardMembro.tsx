import Image from "next/image";
import { DivCardMembro } from "../styles";
import { CardMembroProps } from "../types";


export default function CardMembro({foto, nome, linkGithub, github, linkLinkedin, linkedin, rm, turma}: CardMembroProps) {

    return (
        <DivCardMembro>
            <Image layout="responsive" quality={70} src={foto} alt="" width={200} height={100}/>
            <h3>{nome}</h3>
            <div className="container">
                <div className="social">
                    <i className="fa-brands fa-github"></i>
                    <a href={linkGithub}>{github}</a>
                </div>
                <div className="social">
                    <i className="fa-brands fa-linkedin"></i>
                    <a href={linkLinkedin}>{linkedin}</a>
                </div>
                <p>RM: <strong>{rm}</strong></p>
                <p>Turma: <strong>{turma}</strong></p>
            </div>
        </DivCardMembro>
    )
}