export default function(context) {
  let document = require('sketch/dom').getSelectedDocument()
  let page = document.selectedPage

  let artboardsOnPage = page.layers

  let artboardNames = artboardsOnPage.map(layer => layer.name)

  // Toast
  context.document.showMessage(`🎨: ${artboardNames}`)


}
