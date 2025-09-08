import AtividadeCanva from "../../components/AtividadeCanva"
import AtividadeYoutube from "../../components/AtividadeYoutube"
import AtividadeDocx from "../../components/AtividadeDocx"
import Container from "react-bootstrap/esm/Container"

function Natureza() {
  return (
    <Container>
      <h1 className='bio-texto'>Primeiro Trimestre</h1>
      <AtividadeCanva
        TituloAtv="Poluição"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Tipos de poluição</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H29, H30 e H31.</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Entender e explicar diferentes tipos de poluição.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Gostei da atividade, foi interessante falar sobre algumas poluições</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAGe5hgZ8AA/TAZJqrQ6WxNO43-1VpzXww/view?embed"
      />


      <AtividadeYoutube
        TituloAtv="Mapa Mental Eletrostática"
        VideoId="qOuNngrAEJM"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Eletrostática</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H29, H30 e H31.</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Compreender os conceitos da eletrostática.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">
              Achei muito interessante a forma que a Estequiometria está relacionada com a indústria do Brasil.
            </p>
          </>
        }
      />
        <AtividadeDocx
        TituloAtv="Tabela de Pesquisa – Doenças Relacionadas a Proteínas"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Proteínas</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C4 - H23 C5 - H24, H25 e H28.</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">compreender as Doenças Relacionadas a Proteínas.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Fazer essa atividade foi interessante, pois deu pra perceber o quanto as proteínas são importantes para o funcionamento do corpo. Cada doença tem uma relação direta com a falta ou problema em alguma proteína.</p>
          </>
        }
        LinkAtv="https://docs.google.com/document/d/e/2PACX-1vQ5dHmQUqwgcmXAX575qxklqKEHVlKSMhnulgTafbYDui8aNajwiyyWdqNYhQ1lhbfh912xzFsGtG5I/pub  "
      />
    </Container>

    
  )
}

export default Natureza
