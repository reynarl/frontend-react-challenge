import React from 'react'

const CardItem = ({ src, alt }) => {
  return (
    <div>
      <img className='' src={src} alt={alt} />
      <p>Beds</p>
      <button>-</button>
      <input type='number' placeholder='0' />
      <button>+</button>
    </div>
  )
}

export default CardItem
