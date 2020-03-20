export const serialize = form => {
  const elements = Array.from(form.elements)

  const data = elements
    .flatMap(element => {
      if (element.type === 'checkbox' && !element.checked) return null
      if (element.name.length === 0) return null

      return getFormElementData(element)
    })
    .filter(Boolean)

  return data
    .map(e => `${encodeURI(e.name)}=${encodeURIComponent(e.value)}`)
    .join('&')
}

export const getFormElementData = element => {
  if (element.type === 'select-multiple') {
    return Array.from(element.selectedOptions).map(option => {
      return { name: element.name, value: option.value }
    })
  }

  if (element.type === 'checkbox') {
    const value = element.checked ? element.value : false
    return [{ name: element.name, value }]
  }

  if (element.type === 'radio') {
    if (!element.checked) return []
    return [{ name: element.name, value: element.value }]
  }

  return [{ name: element.name, value: element.value }]
}
