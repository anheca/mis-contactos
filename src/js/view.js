class View {
  constructor() {
    this.model = null
    this.table =
      'por ahora vacio --- pero debe tener in id del htlm para pegar los records de contacto '
  }

  setModel(model) {
    this.model = model
  }

  addContact(contact, name, lastname) {
    console.log(contact)
    console.log(name)
    console.log(lastname)
  }
}
