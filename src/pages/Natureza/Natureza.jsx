import AtividadeCanva from "../../components/AtividadeCanva"
import AtividadeYoutube from "../../components/AtividadeYoutube"
import AtividadeDocx from "../../components/AtividadeDocx"
import AtividadeImg from "../../components/AtividadeImg"
import ImgSite from "../../assets/img-natureza/magnetismo.PNG"
import Container from "react-bootstrap/esm/Container"
import ImgPadlet from "../../assets/img-natureza/padlet.png"

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
        TituloAtv="Vídeo Estequiometria"
        VideoId="qOuNngrAEJM"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Estequiometria</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H29, H30 e H31</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Compreender os conceitos de Estequiometria com a indústria do Brasil</p>
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
        LinkAtv="https://docs.google.com/document/d/e/2PACX-1vQ5dHmQUqwgcmXAX575qxklqKEHVlKSMhnulgTafbYDui8aNajwiyyWdqNYhQ1lhbfh912xzFsGtG5I/pub"
      />
      <AtividadeCanva
        TituloAtv="mapa mental eletrostática"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">eletrostática</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">H29, H30 e H31</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">compreender os conceitos da eletrostática.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Poderia ter mais exemplos práticos para conectar ainda melhor a teoria com aplicações do dia a dia, deixando o conteúdo ainda mais interessante.</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAGyazrswGE/E9wzmGwCumZ4FzEBlYFfJg/view?embed"
      />
      <h1 className='bio-texto'>Segundo Trimestre</h1>
      <AtividadeCanva
        TituloAtv="Vacinas"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Sistema Imunológicos e Vacinas</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C4 - H23</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Entender e explicar o Sistema Imunológico e as vacinas em um mapa mental.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Gostei da atividade, foi interessante falar sobre as vacinas, e ajudou o mapa mental ajudou a memorizar o conteúdo</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAGycKeT9tI/8ING7xMYI6YSPsV9PrQiRA/view?embed"
      />
      <AtividadeCanva
        TituloAtv="Eletroquímica"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Glossário eletroquímica</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C2 - H6, H7 e H9</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">Promover uma aprendizagem ativa, interdisciplinar e integrada entre Física e Química por meio da criação de um glossário técnico ilustrado e matemático, com os principais conceitos de eletroquímica e eletricidade, destacando definições, aplicações cotidianas, fórmulas matemáticas relevantes e ilustrações explicativas.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Gostei da atividade, me ajudou muito lembrar dos conceitos da eletroquímica.</p>
          </>
        }
        LinkAtv="https://www.canva.com/design/DAGr1A35Iek/4ksTeqcmVAWFec2m2srbmA/view?embed"
      />
      <AtividadeImg
        TituloAtv="Magnetismo"
        ImgAtv={ImgSite}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">campo magnético</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C2 - H6, H7 e H9</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">compreender o campo magnético da Terra, os fenômenos das auroras austrais e boreais, e como esses temas estão relacionados ao eletromagnetismo estudado em sala de aula. O resultado será a criação de um site educativo com 6 páginas, com textos, imagens, vídeos e curiosidades científicas.</p>
          </>
        }
        ComentarioPessoal={
          <>
            <span className="prefixo">Crítica pessoal:</span>
            <p className="resto">Gostei da atividade, o formato de site deixa o estudo muito mais interessante e interativo.</p>
          </>
        }
        LinkAtv="https://sites.google.com/estudante.sesisenai.org.br/site-magnetismo/v%C3%ADdeos-explicativos-e-curiosidades?authuser=0&pli=1"
      
      />
      <h1 className='bio-texto'>Terceiro Trimestre</h1>
      <AtividadeCanva
        TituloAtv="Passado, Presente e Futuro"
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Eletricidade</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto"> C5 - H24, H25, H26, H27, H28</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">A atividade consistiu em escolher um equipamento do dia a dia que usa energia e explicar de forma simples como ele funciona e para que serve e sua evolução com o tempo.</p>
          </>
        }

        LinkAtv="https://www.canva.com/design/DAGz45zyOT4/PaIpoFwfkzlt_8FcmUY0Lg/view?embed"
      />
      <AtividadeImg
        TituloAtv="Magnetismo"
        ImgAtv={ImgPadlet}
        AssuntoAtv={
          <>
            <span className="prefixo">Assunto:</span>
            <p className="resto">Controle de ph e condutividade</p>
          </>
        }
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C5 - H24, H25, H26, H27, H28</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">A atividade consistiu em uma pesquisa em grupo sobre métodos de purificação utilizados na indústria. Cada grupo estudou um método específico, identificando seu princípio de funcionamento, equipamentos utilizados e principais aplicações, especialmente na extração de óleos essenciais.</p>
          </>
        }
        LinkAtv="https://padlet.com/romuelsilva/trabalhos-3a-x9g8c2ybggrprlju?frame_id=page%3AAYqftY9LL3WFETgVRjzxJ"
      
      />
              <AtividadeYoutube
        TituloAtv="Destilação por Arraste a Vapor"
        VideoId="igfmLOran00?si=H6MDEJ4oxCFDRrNE"
        Competencias={
          <>
            <span className="prefixo">Habilidades desenvolvidas:</span>
            <p className="resto">C5 - H24, H25, H26, H27, H28</p>
          </>
        }
        ObjetivoAtv={
          <>
            <span className="prefixo">Objetivo da atividade:</span>
            <p className="resto">A atividade consistiu na produção de um vídeo de 2 a 3 minutos explicando o processo de destilação por arraste a vapor utilizando plantas aromáticas como alecrim, lavanda e manjericão. No vídeo, foi necessário apresentar as características dessas plantas, mostrar como ocorre a extração dos óleos essenciais e destacar suas aplicações em áreas como cosméticos, terapias e produtos de limpeza.</p>
          </>
        }
      />

    </Container>

    
  )
}

export default Natureza
