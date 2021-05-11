export default class AddContact {
  constructor() {
    this.btn = document.getElementById('add')
    this.name = document.getElementById('name')
    this.lastname = document.getElementById('lastname')
    this.company = document.getElementById('company')
    this.jobposition = document.getElementById('jobposition')
    this.email = document.getElementById('email')
    this.phone = document.getElementById('phone')
    this.phonetype = document.getElementById('phonetype')
    this.address1 = document.getElementById('address1')
    this.address2 = document.getElementById('address2')
    this.country = document.getElementById('country')
    this.zipcode = document.getElementById('zipcode')
    this.state = document.getElementById('state')
  }

  onClick(callback) {
    this.btn.onclick = () => {
      if (this.name.value === '' || this.phone.value === '') {
        console.error('valores Incorrectos...')
      } else {
        const contact = {
          name: this.name.value,
          lastname: this.lastname.value,
          company: this.company.value,
          jobposition: this.jobposition.value,
          email: this.email.value,
          phone: this.phone.value,
          phonetype: this.phonetype.value,
          address1: this.address1.value,
          address2: this.address2.value,
          country: this.country.value,
          zipcode: this.zipcode.value,
          state: this.state.value,
        }
        callback(contact)
      }
    }
  }
}
