import Biografia from '../../components/Biografia'
import PortfoliosAntigos from '../../components/PortfoliosAntigos'
function Home() {
  return (
    <div>
      <Biografia/>
      <h1 className='bio-texto'>Portfólio anteriores</h1>
      <PortfoliosAntigos url="https://www.canva.com/design/DAGyZoqMY7Y/D-r00wseYTJbqPIpbIVtTg/watch?embed" />

    </div>

  )
}

export default Home
