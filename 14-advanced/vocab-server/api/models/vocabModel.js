const mongoose = require('mongoose');

const { Schema } = mongoose;

// Vocabs
const VocabSchema = new Schema(
	{
		english: {
			type: String,
			required: 'English word cannot be blank'
		},

		spanish: {
			type: String,
			required: 'Spanish word cannot be blank'
		}
	},
	{ collection: 'vocab' }
);

module.exports = mongoose.model('Vocab', VocabSchema);