import Biografia from '../../components/Biografia'
import PortfoliosAntigos from '../../components/PortfoliosAntigos'
function Home() {
  return (
    <div>
      <Biografia/>
      <h1 className='bio-texto'>Portfólio anteriores</h1>
      <PortfoliosAntigos LinkAtv="https://www.canva.com/design/DAGyZoqMY7Y/qtztYNUADpIxCAWs7spW_Q/watch?embed" 
                         LinkAtv2="https://gabrielocsilva.wixsite.com/portif-lio" 
      />
    </div>

  )
}

export default Home
