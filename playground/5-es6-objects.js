const name = 'Alex'
const userAge = 28

const user = {
    name,
    age: userAge,
    location: 'Philadelphia',
    rating: 1
}
const {name: test, rating = 5} = user
console.log(test);
console.log(rating);