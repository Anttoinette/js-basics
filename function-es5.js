/*
CREATE YOUR OWN PERSON OBJECT WITH...
first name
last name
fav color
hobby

Crete an array with your fave movie * 5

Create a function that generates the folllowing...
console.log F1 Hi my full name is $firstN $lastN. Fav color is $favC and love
console.log F2 I like these 5 movies. $movie0, $movie1

console.log F3 Create a math function taht takes 3 parameters
*/


const person = {
    firstName: "Anttoinette",
    lastName: "Henry",
    favColor: "pink",
    hobby: "nature walks <3", 


} 
const favMovieArray = [
    "Avatar",
    "Joes Apartment",
    "White Chicks",
    "Forest Gump",
    "Wakanda",

]

 function hiMyFullNameIs (firstName, lastName, favColor, hobby){
    console.log ('Hi my name is:', firstName, lastName, 'and my fav color is', favColor,'and i like', hobby )       
 }
 hiMyFullNameIs ('Anttoinette','Henry','pink,', 'naturewalks <3' )

 function iLikeThese5Movies (){
    const allMovies = favMovieArray[0] + ", " + favMovieArray[1] + "," + favMovieArray[2] + "," + favMovieArray[3] + "," + favMovieArray[4]
    console.log ('I Like These 5 movies: ',allMovies)
 }
 iLikeThese5Movies()



let x = 1
let y = 4
let z = 3

function addNumbers (x, y, z)
    const addNumbers = (x + y + z = 9){
        console,log (1 + 4 + 3 = )
    }
returns
