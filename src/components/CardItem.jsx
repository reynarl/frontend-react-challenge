
const CardItem = ({ id, title, name, handleAddItem, handleRemoveItem, amount = 0 }) => {
  return (
    <div className='card-item col-md-2'>
      <div className='card-item__figure text-center'>
        <img src={`../../public/icon-${name}.svg`} alt={title} />
        <p>{title}</p>
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
