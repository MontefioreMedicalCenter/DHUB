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
const getPollControl = require('./response/getPollControl')
const getPollerStatus = require('./response/getPollerStatus')
const getRemoteDirListing = require('./response/getRemoteDirListing')
const getDeliveryControl = require('./response/getDeliveryControl') 
const activateDelivery = require('./response/activateDelivery')
const deliverPayload = require('./response/deliverPayload')
const triggerCombineX12 = require('./response/triggerCombineX12')
const getUsersAndRoleswithFs = require('./response/getUsersAndRoleswithFs')
const getAllUserFacServForRole = require('./response/getAllUserFacServForRole')
const activateUser = require('./response/activateUser')
const manageRole = require('./response/manageRole')
const deleteUser = require('./response/deleteUser')
const getAllFacilityId = require('./response/getAllFacilityId')
const getAllServiceArea = require('./response/getAllServiceArea')
const addNewUser = require('./response/addNewUser')
const findErrorLog = require('./response/findErrorLog')
const deleteErrorLogs = require('./response/deleteErrorLogs')
const findErrorLogById = require('./response/findErrorLogById')
const findDeliveryLog = require('./response/findDeliveryLog')
const findDeliveryLogById = require('./response/findDeliveryLogById')
const getFile = require('./response/getFile')
const republishError = require('./response/republishError')
const findClaimHeader = require('./response/findClaimHeader')
const findClaimProcesses = require('./response/findClaimProcesses')
const findRemitHeader = require('./response/findRemitHeader')
const getPayerName = require('./response/getPayerName')
const getSystemId = require('./response/getSystemId')
const getStatus = require('./response/getStatus')
const remitDetailSearch = require('./response/remitDetailSearch')
const remitCoreSearch = require('./response/remitCoreSearch')
const getAllRemits = require('./response/getAllRemits')
const getRemitReportMaps = require('./response/getRemitReportMaps')
const getRptMonth = require('./response/getRptMonth')
const getRptPayers = require('./response/getRptPayers')
const findBankEFTProcesses = require('./response/findBankEFTProcesses')
const findBankEFTHeader = require('./response/findBankEFTHeader')
const remitMonth = require('./response/remitMonth')
const runEdiRemitEFTReport = require('./response/runEdiRemitEFTReport')
const explainPayload =require('./response/explainPayload')
const runRemitsReport = require('./response/runRemitsReport')
const runReport = require('./response/runReport')
const findRemitsProcesses = require('./response/findRemitProcesses')
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

app.post('/DHub/api/adminsvc/activatePoll', (req, res) => {
	sendResponse(res, 200, activatePoll)
})

app.post('/DHub/api/adminsvc/triggerCombineX12', (req, res) => {
	sendResponse(res, 200, triggerCombineX12)
})

app.post('/DHub/api/adminsvc/dispatchPoll', (req, res) => {
	sendResponse(res, 200, dispatchPoll)
})

app.post('/DHub/api/adminsvc/getPollControl', (req, res) => {
	sendResponse(res, 200, getPollControl)
})

app.post('/DHub/api/adminsvc/getPollerStatus', (req, res) => {
	sendResponse(res, 200, getPollerStatus)
})

app.post('/DHub/api/adminsvc/getRemoteDirListing', (req, res) => {
	sendResponse(res, 200, getRemoteDirListing)
})

app.post('/DHub/api/adminsvc/deliverPayload', (req, res) => {
	sendResponse(res, 200, deliverPayload)
})

app.post('/DHub/api/adminsvc/getDeliveryControl', (req, res) => {
	sendResponse(res, 200, getDeliveryControl)
})

app.post('/DHub/api/adminsvc/activateDelivery' , (req, res) => {
	sendResponse(res, 200, activateDelivery)
})

app.post('/DHub/api/adminsvc/getUsersAndRoleswithFs' , (req, res) => {
	sendResponse(res, 200, getUsersAndRoleswithFs)
})

app.post('/DHub/api/adminsvc/getAllUserFacServForRole' , (req, res) => {
	sendResponse(res, 200, getAllUserFacServForRole)
})

app.post('/DHub/api/manageUsersvc/activateUser' , (req, res) => {
	sendResponse(res, 200, activateUser)
})

app.post('/DHub/api/manageUsersvc/manageRole' , (req, res) => {
	sendResponse(res, 200, manageRole)
})

app.post('/DHub/api/manageUsersvc/deleteUser' , (req, res) => {
	sendResponse(res, 200, deleteUser)
})

app.post('/DHub/api/adminsvc/getAllFacilityId' , (req, res) => {
	sendResponse(res, 200, getAllFacilityId)
})

app.post('/DHub/api/adminsvc/getAllServiceArea' , (req, res) => {
	sendResponse(res, 200, getAllServiceArea)
})

app.post('/DHub/api/manageUsersvc/addNewUser' , (req, res) => {
	sendResponse(res, 200, addNewUser)
})

app.post('/DHub/api/adminsvc/findErrorLog', (req,res) => {
	sendResponse(res, 200, findErrorLog)
})

app.post('/DHub/api/adminsvc/findDeliveryLog', (req,res) => {
	sendResponse(res, 200, findDeliveryLog)
})

app.post('/DHub/api/adminsvc/findDeliveryLogById', (req,res) =>{
	sendResponse(res, 200, findDeliveryLogById)
})
 
app.post('/DHub/api/fileManagersvc/getFile', (req,res) =>{
	sendResponse(res, 200, getFile)
})

app.post('/DHub/api/adminsvc/deleteErrorLogs', (req,res) => {
	sendResponse(res, 200, deleteErrorLogs)
})

app.post('/DHub/api/adminsvc/findErrorLogById', (req,res) => {
	sendResponse(res, 200, findErrorLogById)
})

app.post('/DHub/api/adminsvc/republishError', (req,res) => {
	sendResponse(res, 200, republishError)
})

app.post('/DHub/api/claimsvc/findClaimHeader', (req,res) => {
	sendResponse(res, 200, findClaimHeader)
})

app.post('/DHub/api/claimsvc/findClaimProcesses', (req,res) => {
	sendResponse(res, 200, findClaimProcesses)
})

app.post('/DHub/api/remitssvc/findRemitHeader', (req,res) => {
	sendResponse(res, 200, findRemitHeader)
})

app.post('/DHub/api/remitSearchsvc/getPayerName', (req,res) => {
	sendResponse(res, 200, getPayerName)
})

app.post('/DHub/api/remitSearchsvc/getSystemId', (req,res) => {
	sendResponse(res, 200, getSystemId)
})

app.post('/DHub/api/remitSearchsvc/getStatus', (req,res) => {
	sendResponse(res, 200, getStatus)
})

app.post('/DHub/api/remitSearchsvc/remitDetailSearch', (req,res) => {
	sendResponse(res, 200, remitDetailSearch)
})

app.post('/DHub/api/remitSearchsvc/remitCoreSearch', (req,res) => {
	sendResponse(res, 200, remitCoreSearch)
})

app.post('/DHub/api/remitssvc/getAllRemits', (req,res) => {
	sendResponse(res, 200, getAllRemits)
})

app.post('/DHub/api/remitssvc/getRemitReportMaps', (req,res) => {
	sendResponse(res, 200, getRemitReportMaps)
})

app.post('/DHub/api/remitssvc/getRptMonth', (req,res) => {
	sendResponse(res, 200, getRptMonth)
})

app.post('/DHub/api/remitssvc/getRptPayers', (req,res) => {
	sendResponse(res, 200, getRptPayers)
})

app.post('/DHub/api/bankEFTsvc/findBankEFTProcesses', (req, res) => {
	sendResponse(res, 200, findBankEFTProcesses)
})


app.post('/DHub/api/bankEFTsvc/findBankEFTHeader', (req, res) => {
	sendResponse(res, 200, findBankEFTHeader)
})

app.post('/DHub/api/remitssvc/remitMonth', (req, res) => {
	sendResponse(res, 200, remitMonth)
})

app.post('/DHub/api/bankEFTsvc/runEdiRemitEFTReport', (req, res) => {
	sendResponse(res, 200, runEdiRemitEFTReport)
})

app.post('/DHub/api/fileManagersvc/explainPayload', (req, res) => {
	sendResponse(res, 200, explainPayload)
})

app.post('/DHub/api/remitssvc/runRemitsReport', (req, res) => {
	sendResponse(res, 200, runRemitsReport)
})

app.post('/DHub/api/fileManagersvc/runReport', (req, res) => {
	sendResponse(res, 200, runReport)
})

app.post('/DHub/api/remitssvc/findRemitsProcesses', (req, res) => {
	sendResponse(res, 200, findRemitsProcesses)
})

app.use(require('express').static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`)
})
