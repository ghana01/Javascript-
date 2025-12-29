// destructring the array ,object


const course ={
    coursename :"js in hindi",
    price:299,
    courseInstructor:"ghan",
    courseLength:"20 hours",
    tags:["js","javascript","web development"]  

}

const  {coursename,price,courseInstructor:instructor,courseLength,tags} = course // object destructring
console.log(coursename)
console.log(price)
console.log(instructor)// we can change the variable name using :
console.log(courseLength)
console.log(tags)

//api response ->json

const response =`{
    "coursename":"js in hindi",
    "price":299,
    "courseInstructor":"ghan",
    "courseLength":"20 hours",
    "tags":["js","javascript","web development"]  
}`

const jsCourse = JSON.parse(response) // json to object
console.log(jsCourse)
console.log(typeof jsCourse) // object
console.log(jsCourse.coursename)
console.log(jsCourse.price)
console.log(jsCourse.courseInstructor)
console.log(jsCourse.courseLength)
console.log(jsCourse.tags)

const jsonCourse = JSON.stringify(course) // object to json
console.log(jsonCourse)
console.log(typeof jsonCourse) // string
// we can use json to store data in local storage or send data to server

//many time we get api response in json array format
const response2 =`[
    {
        "coursename":"js in hindi",
        "price":299,
        "courseInstructor":"ghan",
        "courseLength":"20 hours",
        "tags":["js","javascript","web development"]  
    },
    {
        "coursename":"python in hindi",
        "price":399,
        "courseInstructor":"mishra",
        "courseLength":"30 hours",
        "tags":["python","data science","web development"]  
    }
]`

const jsCourses = JSON.parse(response2) // json to object
console.log(jsCourses)
console.log(typeof jsCourses) // object
console.log(jsCourses[0].coursename)
console.log(jsCourses[1].coursename)
console.log(jsCourses[0].price)
console.log(jsCourses[1].price)
console.log(jsCourses[0].courseInstructor)
console.log(jsCourses[1].courseInstructor)


// we can use json to store data in local storage or send data to server
// local storage only store data in string format
// so we need to convert object to json string using JSON.stringify() method
// and convert json string to object using JSON.parse() method
localStorage.setItem("jsCourse",JSON.stringify(course)) // store data in local storage
const localCourse = localStorage.getItem("jsCourse") // get data from local storage
console.log(localCourse)
const localCourseObj = JSON.parse(localCourse) // convert json string to object
console.log(localCourseObj)
console.log(typeof localCourseObj) // object
