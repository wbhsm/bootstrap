import Tooltip from '../../dist/tooltip'
import '../../dist/carousel'

window.addEventListener('load', () => {
  [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    .map(tooltipNode => new Tooltip(tooltipNode))
})
