import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import AtividadeCanva from '../components/AtividadeCanva'
import AtividadeImg from '../components/AtividadeImg'
import AtividadeDocx from '../components/AtividadeDocx'

function BancoDados() {
  return (
    <Container>
        <h1 className='bio-texto'>Primeiro Trimestre</h1>
            <AtividadeDocx
            TituloAtv="Exercícios Modelagem Conceitual"
            Competencias={
            <>
                <span className="prefixo">Habilidades desenvolvidas:</span>
                <p className="resto">H1 - H2 - H3 - H4</p>
            </>
            }
            ObjetivoAtv={
            <>
                <span className="prefixo">Objetivo da atividade:</span>
                <p className="resto">Praticar exercícios sobre modelagem Conceitual</p>
            </>
            }
            LinkAtv="https://docs.google.com/document/d/e/2PACX-1vTPRXDFwcDwhrHIvrO14GmWjXzn47X8REOPadWL2apjXIYxrqX8meZ17vVtl3eloNIjA8azEtGfFq_f/pub"
        />
    </Container>
  )
}

export default BancoDados