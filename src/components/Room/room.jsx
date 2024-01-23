import './room.css'

export const Room = ({image, name, price}) => {
  return (
    <>
    <div className='room'>
      <img className="room__image" src={image} alt="first room" />
      <h2 className="room__heading">{name}</h2>
      <p className="room__price">{price} Kč na osobu/noc</p>
    </div>
    </>
  )
}