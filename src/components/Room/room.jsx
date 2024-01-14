import './room.css'

export const Room = () => {
  return (
    <>
    <div className='room'>
      <img className="room__image" src="../../src/img/pokoj01.jpg" alt="first room" />
      <h2 className="room__heading">Úkryt</h2>
      <p className="room__price">450 Kč na osobu</p>
    </div>
    </>
  )
}