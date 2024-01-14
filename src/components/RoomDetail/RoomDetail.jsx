import './RoomDetail.css'

export const RoomDetail = () => {
  return (
    <div className="room-detail">
      <h2 className="room-detail__heading">Pokoj Úkryt, 450 kč na osobu na noc</h2>
      <img className="room-detail__image" src="../../../src/img/pokoj01.jpg" alt="pokoj Úkryt" />
      <p className="room-detail__description">
        Strohý avšak pohodlný pokoj ideální pro hosty, kteří chtějí maximálně ušetřit a hledají cenově dostupné ubytování bez ztráty základního komfortu. Vhodné pro všechny, kdo chtějí v našem hotelu rychle přečkat nepřízeň počasí a vydat se rychle zase na cestu ať už pěší nebo po řece.
      </p>
    </div>
    
  )
}