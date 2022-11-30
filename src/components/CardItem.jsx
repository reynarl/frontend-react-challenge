
const CardItem = ({ id, title, name, image, handleAddItem, handleRemoveItem, amount = 0 }) => {
  return (
    <div className='card-item col-12 col-md-3'>
      <div className='card-item__figure text-center'>
        <div>
          <div className='image-items'><img src={image} alt={title} /></div>
          <p>{title}</p>
        </div>
      </div>
      <div className='card-item__input d-flex'>
        <button onClick={() => handleRemoveItem(id)}>-</button>
        <p className='text-center card-item__input-box'>{amount}</p>
        <button onClick={() => handleAddItem(id)}>+</button>
      </div>
    </div>
  )
}

export default CardItem
