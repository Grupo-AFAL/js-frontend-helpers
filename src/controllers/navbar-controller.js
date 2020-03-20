import { Controller } from "stimulus"

export default class NavbarController extends Controller {
  static targets = ['menu']

  toggleMenu (e) {
    e.preventDefault()
    this.menuTarget.classList.toggle('is-active')
  }
}
