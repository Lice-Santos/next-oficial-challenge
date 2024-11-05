import { useEffect, useState } from "react";
import { DiagnosticDtoProps } from "../types";
import { DivDiagnosticoHistorico, DivHistorico } from "../styles";
import CardRegistro from "./CardRegistro";
import AdicionarDiagnostico from "./AdicionarDiagnostico";

export default function AbaDiagnostico(){

    const [dataList, setDataList] = useState<DiagnosticDtoProps[]>([]); 

    const fetchDataAndAddToList = () => {
      const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
      };
  
      fetch('/api/cors/diagnosticos', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          
          if (result && result.diagnosticos) {
            
            setDataList(result.diagnosticos);
          }
        })
        .catch((error) => console.error('Erro ao buscar dados:', error));
    };
  

    useEffect(() => {
      fetchDataAndAddToList(); 
    }, []); 

    return(
        <DivHistorico>
            <h2>VEJA AGORA MESMO SEU HISTÓRICO!</h2>    
            <DivDiagnosticoHistorico>
            <h3>Diagnóstico</h3>
            {
                        dataList.map((reg, index) => (
                            <CardRegistro key={index} 
                                data={new Date(reg.timestamp * 1000).toLocaleString()} 
                                orcamento={reg.orcamento_previsto.toFixed(2)} 
                                carro={reg.marca + " " + reg.modelo}
                                ano={reg.ano}
                                placa={reg.placa}
                                diagnostico={reg.diagnostico}
                            />
                        ))
                    }
                <AdicionarDiagnostico/>
            </DivDiagnosticoHistorico>
        </DivHistorico>
    )
}