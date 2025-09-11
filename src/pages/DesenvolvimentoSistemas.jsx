import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import AtividadeCanva from '../components/AtividadeCanva'
import AtividadeImg from '../components/AtividadeImg'
import AtividadeDocx from '../components/AtividadeDocx'
import ImgFigma from '../assets/img-tecnico/Figma.png'

function DesenvolvimentoSistemas() {
  return (
     <Container>
        <h1 className='bio-texto'>Primeiro Trimestre</h1>
            <AtividadeDocx
            TituloAtv="Hamburgueria - Planilha de Requisitos e Regras de Negócio"
            AssuntoAtv={
            <>
                <span className="prefixo">Assunto:</span>
                <p className="resto">Requisitos funcionais, não funcionais e regras de negócios</p>
            </>
            }
            Competencias={
            <>
                <span className="prefixo">Habilidades desenvolvidas:</span>
                <p className="resto">H4, H7, H8</p>
            </>
            }
            ObjetivoAtv={
            <>
                <span className="prefixo">Objetivo da atividade:</span>
                <p className="resto">listar e compreender Requisitos funcionais, não funcionais e Regras de negócio</p>
            </>
            }
            LinkAtv="https://docs.google.com/spreadsheets/d/e/2PACX-1vSl4GM7xT-70uWgLcvuiPSgjB8au8gNvG9Tm42e7dUO0t8a6a3zW2OB0aO-CvIWoXT1dSORXQ1wQ5aC/pubhtml"
        />
        <AtividadeCanva
        TituloAtv="S.A - Apresentação 01 (Conhecendo a marca e os requisitos do sistema)"
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H1 - H2 - H3 - H4 - H6 - H7</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Desenvolver um projeto contendo todos os conteúdos que serão estudados ao decorrer do ano</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Gostei da atividade, foi interessante falar sobre as vacinas, e ajudou o mapa mental ajudou a memorizar o conteúdo</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAGiBSdVkqA/YDclNfKuqdvpC16eWv1BtA/view?embed"
      />
      <h1 className='bio-texto'>Segundo Trimestre</h1>
        <AtividadeImg
        TituloAtv="Figma Situação de Aprendizagem"
        ImgAtv={ImgFigma}
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H1 - H2 - H3 - H4 - H6 - H7</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Fazer prototipagem no figmada do aplicativo e do site da SA</p>
          </>
        }
        LinkAtv="https://www.figma.com/design/XjsNTo38jiJkwaVvhEPuwM/EcoVigia?node-id=4-2&t=DQ7wYfmijtU2lqFk-1"
      
      />
     </Container>
  )
}

export default DesenvolvimentoSistemas
