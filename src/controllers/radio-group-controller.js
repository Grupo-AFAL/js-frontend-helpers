import { Controller } from 'stimulus'

export default class RadioGroupController extends Controller {
  connect () {
    this.containersSelector = this.data.get('containers')
    this.radioButtonContainers = Array.from(
      this.element.querySelectorAll(this.containersSelector)
    )
    this.radioButtons = Array.from(
      this.element.querySelectorAll('input[type=radio]')
    )
    this.radioButtons.forEach(radioButton => {
      radioButton.addEventListener('change', this.radioButtonSelected)
    })
  }

  radioButtonSelected = event => {
    this.radioButtonContainers.forEach(container => {
      container.classList.remove('selected')
    })

    event.target.closest(this.containersSelector).classList.add('selected')
  }
}
