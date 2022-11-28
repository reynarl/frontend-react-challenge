import React from 'react'
import CardItem from './CardItem'

const StorageCalculator = () => {
  return (
    <section className='container-fluid calculator'>
      <div className='container'>
        <h2 className='text-center'>What items to store?</h2>
        <p className='text-center'>Select which items you wish to store before moving to <span className='d-md-block'>your new home. We’ll keep ’em safe!</span></p>
        <div className='row'>
          <CardItem src='../../public/icon-bed.svg' alt='icono de cama' />
        </div>
      </div>
    </section>
  )
}

export default StorageCalculator
