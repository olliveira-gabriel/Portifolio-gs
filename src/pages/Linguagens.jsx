import React from 'react'
import AtividadeImg from '../components/AtividadeImg'
import ImgEnem from "../assets/img-linguagens/IfEnem.png"
import Container from 'react-bootstrap/esm/Container'
import ImgRedacao from '../assets/img-linguagens/redacao.png'
import ImgPadlet from '../assets/img-linguagens/comentario.jpg'
import ImgVZ from '../assets/img-linguagens/VZ.png'
import ImgRedacao2 from '../assets/img-linguagens/redacao enem.png'
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
            <p className="resto">Gostei da atividade, mas foi muito presa a regras. Ficou formal demais - faltou espaço pra mostrar personalidade.</p>
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
        LinkAtv="https://docs.google.com/document/d/e/2PACX-1vTMVH3LYOPT6sk2SkP55cbpiwYROgRSwZkLeROWr0N4QA_gBDUYglQahkWXMIZrWucYKQxD2mtYqpOl/pub"
      />
      <h1 className='bio-texto'>Segundo Trimestre</h1>
      <AtividadeImg
        TituloAtv="Revista Literária com as atividades sobre os livros “Parque Industrial” e “O outro lado da bola” postados"
        ImgAtv={ImgVZ}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">livros “Parque Industrial” e “O outro lado da bola”</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H11 e H25</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Fazer reflexões sobre as obras “Parque Industrial” e “O outro lado da bola”.</p>
          </>
        }
        LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/vozes-criativas/in%C3%ADcio"
      
      />
      <AtividadeImg
        TituloAtv="Redação"
        ImgAtv={ImgRedacao}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Alternativas para reduzir a vulnerabilidade dos jovens frente aos golpes vituais no Brasil</p>
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
            <p className="resto">Fazer uma redação sobre "Alternativas para reduzir a vulnerabilidade dos jovens frente aos golpes vituais no Brasil" foi desafiador e vez pensar como é um assunto difícil de lidar.</p>
          </>
        }
        LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/informa-enem-22/in%C3%ADcio"
      />
      <AtividadeDocx
        TituloAtv="Atividade de língua inglesa “Que tipo de arte você consome?”"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Artista</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H11 - H25</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Colocar uma foto do artista/capa da música; Escrevem em inglês; Expliquem porque vocês se identificam com essas obras.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">A atividade foi legal porque deu a chance de pesquisar e conhecer melhor a vida e as obras de um artista. Também ajudou a treinar como organizar as ideias e escrever de forma simples.</p>
          </>
        }
        LinkAtv="https://docs.google.com/document/d/e/2PACX-1vScxYpI2Efm6wfNpqk3YCx-8jTfqX9Q4iK-dVuW0dw9yROBy9m3FwC-Jqq3mWAye2m2wcvy7eT0WKXR/pub"
      />
      <h1 className='bio-texto'>Terceiro Trimestre</h1>
      <AtividadeImg
        TituloAtv="Redação Enem"
        ImgAtv={ImgRedacao2}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto"> Desafios para combater o racismo ambiental no Brasil</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">  H6 - H8</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto"> A atividade consistiu em produzir uma redação sobre o tema “Desafios para combater o racismo ambiental no Brasil”, como preparação para o ENEM. O objetivo foi desenvolver argumentação crítica sobre as desigualdades ambientais que afetam principalmente comunidades vulneráveis, analisando causas, consequências e possíveis soluções.</p>
          </>
        }

        LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/informa-enem-22/in%C3%ADcio?pli=1"
      
      />

    </Container>
    
  )
}

export default Linguagens