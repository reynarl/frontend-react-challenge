import { useEffect, useState } from 'react'
import CardItem from './CardItem'

const StorageCalculator = () => {
  const [totalItems, setTotalItems] = useState(0)
  const [totalM2, setTotalM2] = useState(0)
  const [subTotal, setSubTotal] = useState(0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState(0)
  const [dueToday, setDueToday] = useState(0)
  const [items, setItems] = useState(
    [
      { id: 1, name: 'bed', title: 'Beds', m2: 1.2 },
      { id: 2, name: 'refrigerator', title: 'Refrigerator', m2: 1 },
      { id: 3, name: 'furniture', title: 'Furniture', m2: 0.5 },
      { id: 4, name: 'oven', title: 'Oven', m2: 0.6 },
      { id: 5, name: 'sofa', title: 'Sofa', m2: 1.5 },
      { id: 6, name: 'tv', title: 'Tv', m2: 0.25 },
      { id: 7, name: 'washer-dryer', title: 'Washer-dryer', m2: 0.5 },
      { id: 8, name: 'dining', title: 'Dining', m2: 2 },
      { id: 9, name: 'desk', title: 'Desk', m2: 0.75 },
      { id: 10, name: 'wardrobe', title: 'Wardrobe', m2: 3.2 }
    ]
  )
  const COST_M2 = 200
  const TAX_VALUE = 16

  const handleAddItem = id => {
    const addItems = items.map(item => {
      if (id === item.id) {
        item.amount
          ? item.amount = item.amount + 1
          : item.amount = 1
      }
      return item
    })
    setItems(addItems)
    setTotalItems(totalSum(item => item.amount))
  }

  const handleRemoveItem = id => {
    const removeItems = items.map(item => {
      if (id === item.id) {
        item.amount
          ? item.amount = item.amount - 1
          : item.amount = 0
      }
      return item
    })
    setItems(removeItems)
    setTotalItems(totalSum(item => item.amount))
  }

  const handleClearAllItems = () => {
    const removeItems = items.map(item => {
      item.amount = 0
      return item
    })
    setItems(removeItems)
    setTotalItems(totalSum(item => item.amount))
  }

  // function to calculate the total sum of items and m2
  const totalSum = operation => (
    items.filter(item => item.amount)
      .map(operation)
      .reduce((a, b) => a + b, 0)
  )

  // Sumatory
  useEffect(() => setTotalM2(parseFloat(totalSum(item => item.m2 * item.amount).toFixed(2))), [items])
  useEffect(() => setSubTotal(parseFloat((totalM2 * COST_M2).toFixed(2))), [totalM2])
  useEffect(() => setTax(parseFloat(((subTotal * TAX_VALUE) / 100).toFixed(2))), [subTotal])
  useEffect(() => setTotal(subTotal + tax), [tax])
  useEffect(() => setDueToday(total * 0.5), [total])

  return (
    <section className='container-fluid calculator'>
      <div className='container text-md-center text-lg-start'>
        <h2 className='text-center'>What items to store?</h2>
        <p className='calculator-description py-2 text-center'>Select which items you wish to store before moving to <span className='d-sm-block'>your new home. We’ll keep ’em safe!</span></p>
        <div className='row d-lg-flex flex-lg-wrap '>
          {
            items.map(item => (
              <CardItem
                key={item.id}
                {...item}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
              />
            ))
          }
        </div>
        <button className='calculator__btn-clear' onClick={handleClearAllItems}>Clear</button>

        <h2 className='text-center py-4'>Summary</h2>
        <div className='mx-md-auto calculator__sumatory d-flex justify-content-around'>
          <ul>
            <li>Total Items</li>
            <li>Total M2</li>
            <li>Subtotal</li>
            <li>Tax</li>
            <li>Total</li>
            <li>Due Today 50%</li>
          </ul>
          <ul>
            <li>{totalItems}</li>
            <li>{totalM2}</li>
            <li>${subTotal}</li>
            <li>${tax}</li>
            <li>${total}</li>
            <li>${dueToday}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default StorageCalculator
