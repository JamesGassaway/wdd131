const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐',
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

let parent = document.getElementById("article-container");
let referenceElement = document.getElementById("filters");

for (let article = 0; article < articles.length; article++) {
	const articleDetails = document.createElement("div");
	articleDetails.setAttribute('class', 'article-details')

	const newDate = document.createElement("p");
	newDate.innerText = articles[article].date;
	newDate.setAttribute('class', 'date')
	articleDetails.appendChild(newDate);

	const newAges = document.createElement("p");
	newAges.innerText = articles[article].ages;
	newAges.setAttribute('class', 'ages')
	articleDetails.appendChild(newAges);

	const newGenre = document.createElement("p");
	newGenre.innerText = articles[article].genre;
	newGenre.setAttribute('class', 'genre')
	articleDetails.appendChild(newGenre);
	
	const newRating = document.createElement("p");
	newRating.innerText = articles[article].stars;
	newRating.setAttribute('class', 'rating')
	articleDetails.appendChild(newRating);

	const articlePreview = document.createElement("div");
	articlePreview.setAttribute('class', 'article-preview')

	const newTitle = document.createElement("h2");
	newTitle.innerText = articles[article].title;
	newTitle.setAttribute('class', 'title')
	articlePreview.appendChild(newTitle);

	const image = document.createElement('img');
	image.setAttribute('src', articles[article].imgSrc)
	image.setAttribute('alt', articles[article].imgAlt);
	articlePreview.appendChild(image);

	const newDescription = document.createElement("p");
	newDescription.innerText = articles[article].description;
	newDescription.setAttribute('class', 'rating')
	articlePreview.appendChild(newDescription);

	//parent.appendChild(articleDetails);
	//parent.appendChild(articlePreview);

	// Insert the new element after the reference element

    parent.insertBefore(articleDetails, referenceElement);
	parent.insertBefore(articlePreview, referenceElement);
}