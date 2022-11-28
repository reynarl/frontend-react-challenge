import React from 'react'

const CardItem = ({ title, src, alt }) => {
  return (
    <section className='card-item col-md-2'>
      <div className='card-item__figure text-center'>
        <img src={src} alt={alt} />
        <p>{title}</p>
      </div>
      <div className='card-item__input d-flex'>
        <button>-</button>
        <input className='text-center' type='number' placeholder='0' />
        <button>+</button>
      </div>
    </section>
  )
}

export default CardItem
