export default ({ app, context }, inject) => {
  inject('format', format)

  function format (date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en', options)
  }
}
