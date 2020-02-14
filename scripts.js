//  we want to display this data on the front end of the website, 
//  which we'll do by modifying the DOM
const app = document.getElementById('root')

// We'll create the image element with createElement().
const logo = document.createElement('img')

// An empty img is no good, so we'll set the src attribute to logo.png
logo.src = 'images/logo.png'

// We'll create another element, a div this time, and set the class attribute to container.
const container = document.createElement('div')
container.setAttribute('class', 'container')

// Now we have a logo and a container, and we just need to place them in the website. We'll use the appendChild()
//  method to append the logo image and container div to the app root.
app.appendChild(logo)
app.appendChild(container)

// ⚡️⚡️⚡️⚡️API
// ⚡️⚡️⚡️⚡️ BE CONNECTED TO THE INTERNET TO AVOID PROBLEM
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
    // Begin accessing JSON data here
   var data = JSON.parse(this.response)

   // The only thing we're missing here is some way to deal with errors.
//    these 3 lines below is the code without checking for errors
//    data.forEach(movie => {
    // Log each movie's title
// console.log(movie.title)
// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️

//  What if the wrong URL is used,
//  or the URL broke and nothing was being displayed?
// When an HTTP request is made, the response returns with HTTP status codes.
//  404 is the most well-known response, meaning Not Found, 
//  and 200 OK is a successful request
// Let's just wrap our code in an if statement,
//  succeeding on any response in the 200-300 range, 
//  and log out an error if the request fails.
//  You can mess up the URL to test the error.
if (request.status >= 200 && request.status < 400) {
  data.forEach(movie => {
    // console.log(movie.title)
    //   console.log(movie.description)
    // Instead of console.log above, we'll use textContent 
    // to set the text of an HTML element to the data
    //  from the API. I'm using substring() on the p 
    // element to limit the description and keep each card equal length
    // ⚡️⚡️⚡️⚡️⚡️⚡️
    // Create a div with a card class
  const card = document.createElement('div')
  card.setAttribute('class', 'card')

    // Create an h1 and set the text content to the film's title
    const h1 = document.createElement('h1')
    h1.textContent = movie.title
    
    // Create a p and set the text content to the film's description
    const p = document.createElement('p')
    movie.description = movie.description.substring(0, 300) // Limit to 300 chars
    p.textContent = `${movie.description}...` // End with an ellipses

     // Append the cards to the container element
  container.appendChild(card)

  // Each card will contain an h1 and a p
  card.appendChild(h1)
  card.appendChild(p)
  })
} else {
    // simple error message
//   console.log('error')
// ⚡️⚡️⚡️⚡️⚡️⚡️
// or a complex one
// do not actually use marquee in any sort of real application, 
const errorMessage = document.createElement('marquee')
errorMessage.textContent = `Gah, it's not working!`
app.appendChild(errorMessage)
}
}
  // Send request
request.send()

// Using Inspect on index.html and viewing the console, 
// you should see the titles of 20 Ghibli films. Success!

// ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
// We've successfully used a GET HTTP request to retrieve (or consume) 
// the API endpoint, which consisted of data in JSON format. However,
//  we're still stuck in the console -

