const $main = $('main')
const $selector = $('#image-selector')
const image_array = []

const Collection = function(title, image_url, description) {
  this.title = title
  this.path = image_url
  this.description = description
}
const URL='https://raw.githubusercontent.com/ayaleneh/lab/master/data/page1.json'
$.getJSON(URL)
  .then(response => {
    response.forEach(image => {
      let collection_image = new Collection(image.title, image.image_url, image.description)
      collection_image.displayimage()
      image_array.push(collection_image)
      $selector.append(`<option value=${collection_image.title}>${collection_image.title}</option>`)
    })
  })
  
  Collection.prototype.displayimage = function() {
    const $cloneImage = $('#template').clone()
    $main.append($cloneImage)
    $cloneImage.attr('id', this.title)
    $cloneImage.find('img').attr('class', 'images')
    $cloneImage.find('img').attr('src', this.path)
    $cloneImage.find('img').attr('alt', this.description)
    $cloneImage.find('h6').text(this.title)
  }
  $($selector).on('change', () => {
    $('div').hide()
    $(`#${event.target.value}`).show()
  })