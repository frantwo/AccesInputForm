class Student {
    constructor(nameParam, surnameParam, ageParam, marksParam, genreParam) {
        // watch out! this is implicit
        // var this = {}
        if (nameParam.length < 3) {
            throw new Error("error in your name: " + nameParam)
        }

        this.name = nameParam
        this.surname = surnameParam
        this.age = ageParam
        this.marks = marksParam
        this.genre = genreParam
    }

    calculateMarksAvg() {
        let average = 0
        let totalMarks = this.marks.length

        for (var i = 0; i < totalMarks; i++) {
            average += this.marks[i]
        }

        return (average / totalMarks)
    }

    addNewMark(mark) {
        if (mark < 0 || mark > 10) {
            throw new RangeError("The mark provided is not right")
        }

        this.marks.push(mark)
    }
}

let students = [
    new Student("francho", "garcía", 40, [1, 2, 5, 10], "m"),
    new Student("rubén", "vallejo", 26, [10, 2, 1, 9], "m")
]

console.log(students)