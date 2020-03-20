import { Controller } from 'stimulus'

export default class SubmitOnChangeController extends Controller {
  submit () {
    this.element.submit()
  }
}
