import { Form } from '../Form/form'
import { RoomDetail } from '../RoomDetail/RoomDetail'
import './reservation.css'

export const Reservation = () => {
  return (
    <section className="reservation">
      <div className="reservation__wrapper">
        <RoomDetail/>
        <Form/>
      </div>
    </section>
  )
}