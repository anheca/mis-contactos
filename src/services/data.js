export default class Services {
  constructor() {
    this.countryData = this.getData()
  }

  getData() {
    // prettier-ignore
    return {
      countries: [
        {
          id: 54,
          name: 'Agentina',
          states: ['Buenos Aires', 'Buenos Aires Capital', 'Catamarca', 'Chaco', 'Chubut', 'Cordoba', 'Corrientes',
            'Entre Rios','Formosa','Jujuy','La Pampa','La Rioja','Mendoza','Misiones','Neuquen','Rio Negro','Salta','San Juan','San Luis','Santa Cruz','Santa Fe','Santiago del Estero','Tierra del Fuego','Tucuman',
          ],
        },
        {
          id: 52,
          name: 'Mexico',
          states: ['Mexico DF', 'Estado de Mexico', 'Sonora', 'Baja California Norte'],
        },
        {
          id: 593,
          name: 'Ecuador',
          states: ['Pichincha', 'Guayakil', 'Chimborazo', 'Otavalo'],
        },
        {
          id: 57,
          name: 'Colombia',
          states: ['Bucaramanga', 'Santander', 'Antioquia', 'Cali'],
        },
      ],
      phoneTypes: ['Oficina', 'Casa', 'Mobil', 'Celular', 'Otro'],
    }
  }

  getCountries() {
    const countryList = this.countryData.countries.map((country) => {
      return { id: country.id, name: country.name }
    })
    return countryList
  }

  getCountry(id) {
    const country = this.countryData.countries.filter((country) => country.id === id)
    return country
  }

  getStates(countryId) {
    const states = this.getCountry(countryId).map((country) => country.states)
    return states[0]
  }

  getPhoneTypes() {
    const phoneTypes = this.countryData.phoneTypes
    return phoneTypes
  }
}
