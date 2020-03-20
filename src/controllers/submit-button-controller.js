import { Controller } from 'stimulus'

export default class SubmitButtonController extends Controller {
  submit (e) {
    const form = e.target.closest('form')
    this.disableButton(e.target)

    // Return early if HTML form is invalid.
    if (form && !form.checkValidity()) {
      setTimeout(() => this.enableButton(e.target), 500)
      return
    }

    form.submit()
  }

  disableButton (target) {
    target.classList.add('is-loading')
    target.setAttribute('disabled', '')
  }

  enableButton (target) {
    target.classList.remove('is-loading')
    target.removeAttribute('disabled')
  }
}
