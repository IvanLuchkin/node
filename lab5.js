const http = require('http')
const hostname = '127.0.0.1'
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hi there!\n')
})
/*server.get("/", function(req, res) {
  res.send
})
*/

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

function total () {
  document.getElementById('result').value = 'The total price of the courses: $' + (coursePrice('Java') + coursePrice('Cpp') + coursePrice('Cs') + coursePrice('Js') + coursePrice('HtmlCss'))
}
function coursePrice (id) {
  const form = document.getElementById(id + 'Form')
  const checkbox = document.getElementById(id)
  let price = 0
  if (checkbox.checked) {
    price += Number(checkbox.value)
    price += parseInt(form.language.value)
    price += parseInt(form.length.value)
    price += parseInt(form.repForm.value)
  }
  return price
}
function showOrHide (id) {
  if (document.getElementById(id).checked) {
    document.getElementById(id + 'Options').style.display = 'block'
  } else {
    document.getElementById(id + 'Options').style.display = 'none'
  }
}
