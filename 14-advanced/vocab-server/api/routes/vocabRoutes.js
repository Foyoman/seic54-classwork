/*
RESTful routes

GET    /words         - index
POST   /words         - create
GET    /words/:wordId - show
PUT    /words/:wordId - update
DELETE /words/:wordId - destroy

*/

const vocabBuilder = require('../controllers/vocabController');

// Export a function that will add routes
module.exports = (app) => {
	app.route('/words')
		.get(vocabBuilder.listAllWords)
		.post(vocabBuilder.createWord);
	
	app.route('/words/:wordId')
		.get(vocabBuilder.readWord)
		.put(vocabBuilder.updateWord)
		.delete(vocabBuilder.deleteWord);
};