var grades = [1, 10, 20]
var grades2 = grades

grades2[1] = 100

grades
(3) [1, 100, 20]

grades2
(3) [1, 100, 20]





/////// problem with object, remember, we are linking not cloning 
/////// when using objects or arrays. For primitive values it works
/////// as expected. To clone objects or arrays please use spread operation (...)


// var emp1 = {name: "dan", salary: 1000000000}
// undefined
// emp1
// {name: "dan", salary: 1000000000}
// var emp2 = emp1
// undefined
// emp2
// {name: "dan", salary: 1000000000}
// emp2.name = "agustin"
// "agustin"
// emp2
// {name: "agustin", salary: 1000000000}
// emp1
// {name: "agustin", salary: 1000000000}

var emp1 = {name: "dan", salary: 1000000000}
undefined
var emp2 = {...emp1}
undefined
emp1
{name: "dan", salary: 1000000000}
emp2
{name: "dan", salary: 1000000000}
emp2.name = "agustin"
"agustin"
emp2
{name: "agustin", salary: 1000000000}
emp1
{name: "dan", salary: 1000000000}