class DropDown {
  // llenado de componente
  fill = (component, dataArray, selectedItem) => {
    for (let i = 0; i < dataArray.length; i++) {
      const itemName = dataArray[i].name ? dataArray[i].name : dataArray[i]
      const itemId = dataArray[i].id ? dataArray[i].id : i
      component.options[component.options.length] = new Option(itemName, itemId)
      if (itemName === selectedItem) {
        component.selectedIndex = i
      }
    }
  }

  select = (component) => {
    component.name.innerHTML = ''
    this.fill(component.name, component.data, component.currentIndex)
  }
}

export default DropDown
