import React from 'react'
import AtividadeImg from '../components/AtividadeImg'
import ImgEnem from "../assets/img-linguagens/IfEnem.png"
import Container from 'react-bootstrap/esm/Container'
import ImgRedacao from '../assets/img-linguagens/redacao.png'
import ImgPadlet from '../assets/img-linguagens/comentario.jpg'
import ImgVZ from '../assets/img-linguagens/VZ.png'
import AtividadeCanva from '../components/AtividadeCanva'
import AtividadeDocx from '../components/AtividadeDocx'

function Linguagens() {
  return (
    <Container>
      <h1 className='bio-texto'>Primeiro Trimestre</h1>
        <AtividadeImg
        TituloAtv="Site Repertório para o Enem"
        ImgAtv={ImgEnem}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Repertório para o Enem</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H23</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Criar um site que tenha repertórios que podem ser usados em redações do ENEM</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Gostei da atividade, o formato de site deixa o estudo muito mais interessante e interativo.</p>
          </>
        }
        LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/informa-enem-22/in%C3%ADcio"
      
      />
        <AtividadeImg
        TituloAtv="Redação"
        ImgAtv={ImgRedacao}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Desafios para a inclusão social por meio dos esportes no Brasil.</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H6 - H8</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Fazer uma Redação estilo ENEM.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Fazer uma redação sobre "Os desafios de promover inclusão social através do esporte no Brasil" foi desafiador. Conduzi reflexões sobre barreiras como desigualdade e a importância de projetos sociais.</p>
          </>
        }
        LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/informa-enem-22/in%C3%ADcio"
      
      />
       <AtividadeCanva
        TituloAtv="Biografia"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">biografia pessoal</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H6/H8</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Criar um texto biográfico que apresente informações fundamentais sobre a própria vida.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Gostei da atividade, foi interessante falar sobre as vacinas, e ajudou o mapa mental ajudou a memorizar o conteúdo</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAGiqgdQbXw/JleD4KKvJ7cLRDnfrIfK1g/view?embed"
      />
        <AtividadeImg
        TituloAtv="leituras obrigatórias da UFSC"
        ImgAtv={ImgPadlet}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Livros Memórias Póstumas de Brás Cubas e Parque Industrial</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H17</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">ler e comentar sobre as leituras obrigatórias da UFSC.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Ler esses livros foi uma experiência enriquecedora. "Brás Cubas" me fez refletir sobre a ironia na literatura, enquanto "Parque Industrial" abordou questões relevantes sobre trabalho e alienação.</p>
          </>
        }
        LinkAtv="https://padlet.com/claudiabechler/leituras-obrigat-rias-ufsc-2026-i3y2t016v48gskg"
      
      />
        <AtividadeImg
        TituloAtv="Revista Literária"
        ImgAtv={ImgVZ}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Memórias Póstumas de Brás Cubas e Parque Industrial</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H4/H14/H17</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">ler e comentar sobre Memórias póstumas de Brás Cubas.</p>
          </>
        }
        LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/vozes-criativas/in%C3%ADcio"
      
      />
        <AtividadeDocx
        TituloAtv="Pai contra mãe"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Proteínas</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H4 - H14 - H17</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">ler e comentar sobre a obra Pai contra mãe.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Fazer essa atividade sobre "Pai contra mãe" foi bem interessante. Reescrever a história pela visão da mãe me ajudou a entender melhor os conflitos familiares e as pressões da época. O título realmente captura o embate central.</p>
          </>
        }
        LinkAtv="https://docs.google.com/document/d/e/2PACX-1vQ5dHmQUqwgcmXAX575qxklqKEHVlKSMhnulgTafbYDui8aNajwiyyWdqNYhQ1lhbfh912xzFsGtG5I/pub"
      />
      <h1 className='bio-texto'>Segundo Trimestre</h1>

    </Container>
    
  )
}

export default Linguagens