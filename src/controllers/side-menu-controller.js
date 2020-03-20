import { Controller } from 'stimulus'

export default class SideMenuController extends Controller {
  static targets = ['container', 'overlay']

  connect () {
    this.overlayTarget.addEventListener('click', this.closeMenu)
    this.containerTarget.addEventListener('click', this.closeMenu)
  }

  disconnect () {
    this.overlayTarget.removeEventListener('click', this.closeMenu)
    this.containerTarget.removeEventListener('click', this.closeMenu)
  }

  toggleMenu (e) {
    e.stopPropagation()
    this.containerTarget.classList.toggle('is-active')
  }

  closeMenu = e => {
    this.containerTarget.classList.remove('is-active')
  }
}
