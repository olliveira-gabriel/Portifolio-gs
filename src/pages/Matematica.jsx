import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import AtividadeCanva from '../components/AtividadeCanva'
import AtividadeImg from '../components/AtividadeImg'
import AtividadeDocx from '../components/AtividadeDocx'


function Matematica() {
  return (
    <div>   
        <Container>
            <h1 className='bio-texto'>Primeiro Trimestre</h1>
            <AtividadeDocx
                TituloAtv="Atividade - Filme Quebrando a banca"
                AssuntoAtv={
                <>
                    <span className="prefixo">Assunto:</span>
                    <p className="resto">probabilidade</p>
                </>
                }
                Competencias={
                <>
                    <span className="prefixo">Habilidades desenvolvidas:</span>
                    <p className="resto">C5 - H31 e H32</p>
                </>
                }
                ObjetivoAtv={
                <>
                    <span className="prefixo">Objetivo da atividade:</span>
                    <p className="resto">Mostrar como a matemática pode ser aplicada na vida real, usando o filme para aprender sobre probabilidade e estatística.</p>
                </>
                }
                LinkAtv="https://docs.google.com/document/d/e/2PACX-1vRM9JiPimjJ5jJG0UkpM2tq_FAxMq1USoZKSgXUzUHIYh-BxpPi2MZaS4i-mYyezk2jfXVv6ReIqkuT/pub"
            
            />
            <AtividadeDocx
                TituloAtv="Atividade - criando a banca"
                AssuntoAtv={
                <>
                    <span className="prefixo">Assunto:</span>
                    <p className="resto">Probabilidade e análise combinatória</p>
                </>
                }
                Competencias={
                <>
                    <span className="prefixo">Habilidades desenvolvidas:</span>
                    <p className="resto">C5 - H30 - H31</p>
                </>
                }
                ObjetivoAtv={
                <>
                    <span className="prefixo">Objetivo da atividade:</span>
                    <p className="resto">Desenvolver um jogo original ou atividades gamificadas utilizando os conceitos de análise combinatória e teoria das probabilidades, inspirado no filme Quebrando a Banca.</p>
                </>
                }
                LinkAtv="https://docs.google.com/document/d/e/2PACX-1vR7gPK_90D81v1xK0oMV7x10LTsT_a3aIASjPzcwiOxhjwXljegh8O-iMfcSjzhq1jjmGthhuo7SVvV/pub"
            
            />
            <h1 className='bio-texto'>Segundo Trimestre</h1>
            <AtividadeCanva
        TituloAtv="Análise de dados"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Estatística</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C4 - H27 - H28 - H29</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Estatística básica aplicada à coleta e análise de dados do cotidiano dos alunos, utilizando ferramentas digitais como Google Forms e Google Planilhas.</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAGyf32jFl8/EdwIO17Oujzp-LIzcscoRg/view?embed"
      />
      <h1 className='bio-texto'>Terceiro Trimestre</h1>
        <AtividadeCanva
        TituloAtv="Bolo de caneca"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Proporção</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C5 - H33</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">A atividade consistiu em aplicar o conceito matemático de proporção por meio da adaptação de uma receita de bolo de caneca. Em grupo, pesquisamos a receita original para uma porção e recalculamos as quantidades necessárias para o número de integrantes. Depois, preparamos o bolo usando micro-ondas, registramos o processo e avaliamos se as proporções estavam corretas. Por fim, apresentamos os resultados com tabela de ingredientes, cálculos e reflexão sobre o que aprendemos.</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAG4BvQZDKU/pkHCvE4GyxN-8cF74qnIMQ/view?embed"
      />

        </Container>
    </div>
  )
}

export default Matematica
