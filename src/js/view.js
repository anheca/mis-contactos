import AddContact from './add-contact.js'

export default class View {
  constructor() {
    this.model = null
    this.table = 'por ahora vacio'
    this.addContactForm = new AddContact()

    this.addContactForm.onClick((contact) => this.addContact(contact))
  }

  setModel(model) {
    this.model = model
  }

  addContact(contact) {
    this.model.addContact(contact)
  }
}
