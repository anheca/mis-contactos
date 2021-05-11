export default class Model {
  constructor() {
    this.view = null
    this.contacts = []
  }

  setView(view) {
    this.view = view
  }

  getContacts() {
    return this.contacts
  }

  addContact(contact) {
    this.contacts.push(contact)
    console.log(this.contacts)
    return { ...contact }
  }
}
