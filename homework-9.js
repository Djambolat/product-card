import {comments} from "./comments.js"

//level.1/2
const array1 = [1,2,3,4,5,6,7,8,9,10]
const array2 = array1.filter(number => number > 4)

// 1/3
const cars = ["bmw","lada","chevrolet","nissan"]

// 1/4
const doRevers = array => array.reverse()
doRevers(cars)
doRevers(array1)

// Level 2/6,7
const commentsCom = comments.filter(comment => comment.email.includes(".com"))

// 2/8
const commentsCorrected = comments.map(comment => ({...comment, postId: comment.id <= 5 ? 2: 1}))

// 2/9
const commentsIdAndName = comments.map(({id, name}) => ({id:id, name:name}))

// 2/10
const commentsWithInvalid = comments.map(comment => ({...comment, isInvalid: comment.body.length > 180 ? true: false}))

// Level.3/11
const emailArray = comments.reduce((mail, comment) => {mail.push(comment.email) ; return mail},[])

// 3/12
const emailsStrings = emailArray.join(" ; ")
console.log(emailsStrings)

