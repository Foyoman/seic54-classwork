import axios from 'axios';
import React, { useState } from 'react'

const BookSearch = () => {
	const [query, setQuery] = useState(''); // array destructuring
	const [cover, setCover] = useState('');

	// useState gives you an array with  two things:
		// a current value
		// a function to change that value
			// calling this function reruns the entire functional component WITH THE NEW VALUE you just gave it
	
	console.log('rendering the component, current query is', query);
	
	// async functions return a promise
	const _search = async (e) => {
		e.preventDefault();
		// get the data from Google Books API

		// Axios is a Promise based AJAX library
		// that means we need to use .then()
		// OR await

		const { data } = await axios.get('https://www.googleapis.com/books/v1/volumes?q=title:' + query);
		setCover(data.items[0].volumeInfo.imageLinks.thumbnail);

		// display the cover
		// find the DOM
		// set the image attribute to the value

	};

	return (
		<div>
			<form onSubmit={ _search }>
				<label>
					Book title:
					<input 
						type="search"
						placeholder='Jaws'
						autoFocus
						required
						onChange={ (e) => setQuery(e.target.value) }
					/>
				</label>

				<button>Search</button>
			</form>

			{ cover && <img src={ cover } /> }
		</div>
	)
}

export default BookSearch
