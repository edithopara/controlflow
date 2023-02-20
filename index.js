let artsSubject = ["Government", "Economics", "Literature", "History"]
let scienceSubject = ["Physics", "Chemistry", "Biology", "Technical Drawing"]
let socialScience = ["Accounting", "Commerce", "Marketing", "Geography"]
let generalSubject = ["English", "Mathematics"]

function choosesubject (n) {
    if (n == 'arts') {
console.log(artsSubject + ' ' + generalSubject);
    }else if (n == 'socialScience' ) {
console.log(socialScience + ' ' + generalSubject);
    }else if (n == 'science') {
console.log(scienceSubject + ' ' + generalSubject);   
    } else {
    console.log(generalSubject)
    }
}

choosesubject("arts")



function nearestPower(num) {
    const power = Math.log2(num);
    const lower = Math.pow(2, Math.floor(power));
    const upper = Math.pow(2, Math.ceil(power));
    if (num - lower < upper - num) {
        console.log("The number " + lower + " is the power of 2 nearest to " + num + " ")
    } else {
        console.log("The number " + upper + " is the power of 2 nearest to " + num + " ")
    }

    }
nearestPower(50)








