const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url == '/') {
		res.write('Witaj na stronie glownej')
		res.end()
	} else if (req.url == '/contact') {
		res.write('Kontakt do nas')
		res.end()
	} else {
		res.write('404 - PAGE NOT FOUND')
		res.end()
	}
})

server.listen(3000, 'localhost', () => {
	console.log('Dziala')
})
