import React from 'react'

function PortfoliosAntigos({ url }) {
  return (
    <div className="iframe-container">
      <iframe
        loading="lazy"
        className="iframe-embed"
        src={url}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default PortfoliosAntigos
