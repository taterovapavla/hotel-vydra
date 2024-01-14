import { Room } from '../Room/room'
import './rooms.css'

export const Rooms = () => {
  return (
    <section className="rooms">
      <div className="rooms__room-list">
        <h1 className='rooms__heading'>Naše pokoje</h1>
        <p className='rooms__description'>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="rooms__list-item">
          <Room/>
          <Room/>
          <Room/>
          <Room/>
          <Room/>
        </div>
      </div>
    </section>
  )
}