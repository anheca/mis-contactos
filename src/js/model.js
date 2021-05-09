class Model {
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

  addContact(contact, name, lastname) {
    console.log(contact)
    console.log(name)
    console.log(lastname)
  }
}
