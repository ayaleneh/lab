const $main = $('main')
const $selector = $('#image-selector')
const image_array = []

const Collection = function(title, image_url, description,keyword,horns) {
  this.title = title
  this.image_url = image_url
  this.description = description
  this.keyword=keyword
  this.horns=horns
}
const URL='https://raw.githubusercontent.com/ayaleneh/lab/master/data/page1.json'
$.getJSON(URL)
  .then(response => {
    response.forEach(image => {
      let collection_image = new Collection(image.title, image.image_url, image.description,image.keyword,image.horns)
      collection_image.displayimage()
      image_array.push(collection_image)
      $selector.append(`<option value=${collection_image.keyword}>${collection_image.keyword}</option>`)
    })
  })
  
  Collection.prototype.displayimage = function() {
    const $cloneImage = $('#template').clone()
    $main.append($cloneImage)
    $cloneImage.attr('id', this.keyword)
    $cloneImage.find('img').attr('class', 'images')
    $cloneImage.find('img').attr('src', this.image_url)
    $cloneImage.find('img').attr('alt', this.description)
    $cloneImage.find('h6').text(this.title)
  }
  $($selector).on('change', () => {
    $('div').hide()
    $(`#${event.target.value}`).show();
  })