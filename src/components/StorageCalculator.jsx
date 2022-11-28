import React from 'react'
import CardItem from './CardItem'

const StorageCalculator = () => {
  return (
    <section className='container-fluid calculator'>
      <div className='container'>
        <h2 className='text-center'>What items to store?</h2>
        <p className='calculator-description py-2 text-center'>Select which items you wish to store before moving to <span className='d-sm-block'>your new home. We’ll keep ’em safe!</span></p>
        <div className='row'>
          <CardItem title='Beds' src='../../public/icon-bed.svg' alt='bed icon' />
          <CardItem title='Refrigerator' src='../../public/icon-refrigerator.svg' alt='refrigerator icon' />
          <CardItem title='Furniture' src='../../public/icon-furniture.svg' alt='furniture icon' />
          <CardItem title='Oven' src='../../public/icon-oven.svg' alt='oven icon' />
          <CardItem title='Sofa' src='../../public/icon-sofa.svg' alt='sofa icon' />
        </div>
        <div className='row'>
          <CardItem title='Tv' src='../../public/icon-tv.svg' alt='tv icon' />
          <CardItem title='Washer-dryer' src='../../public/icon-washer-dryer.svg' alt='washer dryer icon' />
          <CardItem title='Dining' src='../../public/icon-dining.svg' alt='dining icon' />
          <CardItem title='Desk' src='../../public/icon-desk.svg' alt='desk icon' />
          <CardItem title='Wardrobe' src='../../public/icon-wardrobe.svg' alt='wardrobe icon' />
        </div>
        <button className='calculator__btn-clear'>Clear</button>

        <h2 className='text-center py-4'>Summary</h2>
        <div className='calculator__sumatory d-flex justify-content-around'>
          <ul>
            <li>Total Items</li>
            <li>Total M2</li>
            <li>Subtotal</li>
            <li>Tax</li>
            <li>Total</li>
            <li>Due Today 50%</li>
          </ul>
          <ul>
            <li>12</li>
            <li>8.55</li>
            <li>$1710</li>
            <li>$273.6</li>
            <li>$1111</li>
            <li>$999</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StorageCalculator
