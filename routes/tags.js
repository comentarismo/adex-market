const express = require('express')
const { PredefinedTags } = require('adex-models').constants

const router = express.Router()

router.get('/tags', getTags)

function getTags (req, res) {
	return res.send(PredefinedTags)
}

module.exports = router
