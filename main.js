import init from './src/lib/initial_load.js'
import Model from './src/js/model.js'
import View from './src/js/view.js'
import inputs from './src/lib/misc.js'

window.onload = () => {
  init()
  const model = new Model()
  const view = new View()

  model.setView(view)
  view.setModel(model)
}
