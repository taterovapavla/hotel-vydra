import './form.css'

export const Form = () => {
  return (
    <form>
      <div className='form__fields'>
        <label className='field__label' htmlFor="od">Od: </label>
        <input className='field__input' id='od' type="date" />

        <label className='field__label' htmlFor="do">Do: </label>
        <input className='field__input' id='do' type="date" />

        <label className='field__label' htmlFor="pocet-osob">Počet osob: </label>
        <input className='field__input' id='pocet-osob' type="number" />

        <label className='field__label' htmlFor="stravovani">Stravování: </label>
        <select className='field__input' id="stravovani">
          <option value="plna-penze">Plná penze</option>
          <option value="polopenze">Polopenze</option>
          <option value="vlastni">Vlastní</option>
        </select>

        <label className='field__label' htmlFor="mazlicci">Domácí mazlíček: </label>
        <input className='field__input' type="checkbox" id="mazlicci" />

        <label className='field__label' htmlFor="pristylka">Přistýlka pro dítě: </label>
        <input className='field__input' type="checkbox" id="pristylka" />

        <label className='field__label' htmlFor="bezbarierove">Bezbariérový přístup: </label>
        <input className='field__input' type="checkbox" id="bezbarierove" />

        <label className='field__label' htmlFor="email">Email: </label>
        <input className='field__input' type="email" id="email" />

        <label className='field__label' htmlFor="tel">Telefon: </label>
        <input className='field__input' type="tel" id="tel" />
      </div>
      <h4 className='form__price'>Celková cena za pobyt: 0 Kč</h4>
      <button className='form__button'>Odeslat poptávku</button>
    </form>
  )
}