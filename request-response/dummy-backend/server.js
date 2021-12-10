const app = require('express')()
const PORT = 8080
const cors = require('cors')
const bodyParser = require('body-parser')
const sendResponse = require('./sendResponse')
const path = require('path')
const authenticateUser = require('./response/authenticateUser')
const saveServiceArea = require('./response/saveServiceArea')
const activatePoller = require('./response/activatePoller')
const activatePoll = require('./response/activatePoll')
const dispatchPoll = require('./response/dispatchPoll')
const multer = require('multer')
// const loginResponse = require('./response/loginResponse')


app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

var upload = multer({ dest: 'upload/' })

// app.post('/IdentityHub/api/authenticationsvc/authenticateUser', (req, res) => {
// 	if (req.body.userName === 'flexicious' && req.body.password === 'support') {
// 		sendResponse(res, 200, loginResponse)
// 	}
// })
app.post('/DHub/api/authenticationsvc/authenticateUser', (req, res) => {
	if (
		req.body.userName === 'flexicious' &&
		req.body.password === 'support'
	) {
		sendResponse(res, 200, authenticateUser)
	} else {
		sendResponse(res, 400, 'ERROR')
	}
})

app.post('/DHub/api/authenticationsvc/saveServiceArea', (req, res) => {
	sendResponse(res, 200, saveServiceArea)
})

app.post('/DHub/api/adminsvc/activatePoller', (req, res) => {
	sendResponse(res, 200, activatePoller)
})

app.post('//DHub/api/adminsvc/activatePoll', (req, res) => {
	sendResponse(res, 200, activatePoll)
})

app.post('/DHub/api/adminsvc/dispatchPoll', (req, res) => {
	sendResponse(res, 200, dispatchPoll)
})


app.use(require('express').static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`)
})
