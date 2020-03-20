import { Controller } from 'stimulus'
import { getTimestamp } from '../utils/time'
import {
  replaceInFragment,
  removeNonHiddenFormElements,
  previousSibling,
  nextSibling
} from '../utils/domHelpers'

export default class DynamicFieldsController extends Controller {
  static targets = ['template', 'container']

  connect () {
    this.fieldsSelector = this.data.get('selector')
  }

  addFields (e) {
    e.preventDefault()

    const newSize = parseInt(this.data.get('size')) + 1
    this.data.set('size', newSize)

    const template = replaceInFragment(
      this.templateTarget,
      /new_record/g,
      getTimestamp()
    )

    const positionInput = template.querySelector('[data-position]')
    if (positionInput) positionInput.value = newSize

    this.containerTarget.appendChild(template)
  }

  removeFields (e) {
    e.preventDefault()

    const newSize = parseInt(this.data.get('size')) - 1
    this.data.set('size', newSize)

    const fieldsContainer = e.target.closest(this.fieldsSelector)

    fieldsContainer.style.display = 'none'
    removeNonHiddenFormElements(fieldsContainer)
    fieldsContainer.querySelector('.destroy-flag').value = true
  }

  moveUp (e) {
    e.preventDefault()

    const fieldsContainer1 = e.target.closest(this.fieldsSelector)
    const fieldsContainer2 = previousSibling(
      fieldsContainer1,
      this.fieldsSelector
    )

    this.swapElements(fieldsContainer1, fieldsContainer2)
    this.resetPositionValues()
  }

  moveDown (e) {
    e.preventDefault()

    const fieldsContainer1 = e.target.closest(this.fieldsSelector)
    const fieldsContainer2 = nextSibling(fieldsContainer1, this.fieldsSelector)

    this.swapElements(fieldsContainer1, fieldsContainer2)
    this.resetPositionValues()
  }

  swapElements (elm1, elm2) {
    var parent, next1, next2

    if (elm2 == null) return

    parent = elm1.parentNode
    next1 = elm1.nextElementSibling
    next2 = elm2.nextElementSibling

    parent.insertBefore(elm2, next1)
    parent.insertBefore(elm1, next2)
  }

  resetPositionValues () {
    document.querySelectorAll(this.fieldsSelector).forEach((fields, index) => {
      fields.querySelector('[data-position]').value = index + 1
    })
  }
}
