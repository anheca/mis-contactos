import inputs from './misc.js'
import Service from '../services/data.js'
import DropDown from '../js/components/dropdown.js'

// import loadCountries from './country.js'

const service = new Service()
const dropdown = new DropDown()

const phoneSel = document.getElementById('phonetype')
const countrySel = document.getElementById('country')
const statesSel = document.getElementById('state')
const phone = document.getElementById('phone')

const init = () => {
  // populate controls
  const countryData = service.getCountries()
  const itemSelected = 'Argentina'

  // countries
  dropdown.fill(countrySel, countryData, itemSelected)
  const countryId = parseInt(countrySel.options[countrySel.selectedIndex].value)
  const stateSelected = ''

  // states
  const states = service.getStates(countryId)
  dropdown.fill(statesSel, states, stateSelected)

  // Phone Types
  const phoneTypes = service.getPhoneTypes()
  dropdown.fill(phoneSel, phoneTypes, '')

  // init input effects
  inputs()

  // conutry field change
  countrySel.onchange = () => {
    const countryId = parseInt(countrySel.options[countrySel.selectedIndex].value)
    const states = service.getStates(countryId)
    const currentSelection = ''
    dropdown.select({ name: statesSel, data: states, currentIndex: currentSelection })
  }

  // phone field change
  phone.addEventListener('input', (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
  })
}

export default init
