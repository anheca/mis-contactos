const loadCountries = () => {
  const countries = new Array(
    'Argentina',
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Ecuador',
    'Mexico',
    'Venezuela',
  )

  const val = 'Argentina'

  const select = document.getElementById('country')

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i]
    select.options[select.options.length] = new Option(country, i)
    if (countries[i] == val) {
      select.selectedIndex = i
    }
  }
}

export default loadCountries
