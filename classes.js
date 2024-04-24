class Car{
    constructor(make,model,year,isAvailable){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable =isAvailable
    }
    toggleAvailability(){
        console.log(`The ${this.make} is not available for rent`)


    }

}
const car = new Car("toyota","camry",2020,"The car is available for rent")
console.log(car.toggleAvailability());

class Rental extends Car{
    constructor(make,model,year,isAvailable,rentalName,rentalStartDate,rentalEndDate){
        super(make,model,year,isAvailable)
        this.rentalName=rentalName
        this.rentalStartDate=rentalStartDate
        this.rentalEndDate=rentalEndDate
    }
    calculateRentalDuration(){
        console.log(`The rental duration is${this.rentalEndDate-this.rentalStartDate}`)

    }
}
const rentalCar = new Rental("toyota","camry",2020,"The car is available for rent","Rental Households",20,30)
console.log(rentalCar.make)
rentalCar.calculateRentalDuration()


class Question{
    constructor(text,options,correctAnswer){
        this.text = text
        this.options = options
        this.correctAnswer=correctAnswer
    

    }
    checkAnswer(answer){
        this.answer=answer
        if (`${this.answer}`!==`${this.correctAnswer}`) {
            console.log("false"); 
            
        }
        else{
            console.log("true");
        }

    }
}
const firstQuestion = new Question("How many planets do we have?",[1,2,3,4,5,6,7,8],8)
console.log({firstQuestion});
console.log(firstQuestion.text);
console.log(firstQuestion.options);
console.log(firstQuestion.correctAnswer);
firstQuestion.checkAnswer(3)
firstQuestion.checkAnswer(8)
const secondQuestion = new Question("How many countries are in Kenya?",[47,65,23,12],47)
console.log({secondQuestion});
const thirdQuestion = new Question("What is the capital city of Kenya?",["Nairobi","Mombasa","Kisumu","Nakuru"],"Nairobi")
console.log({thirdQuestion});

const fourthQuestion = new Question("Who is the president of Kenya",["Uhuru","Raila","Mutahi","Obama"],"Uhuru")
console.log({fourthQuestion});
const lastQuestion = [fourthQuestion]
console.log(lastQuestion);

class Quiz{
    constructor(questions,index,score){
        this.questions = questions

        this.index = index
        this.score = score

    }
    addQuestion(lastQuestion){
        this.lastQuestion = lastQuestion
        const allFourQuestions = this.questions.concat(this.lastQuestion)
        console.log({allFourQuestions});
      

    }
}
const quiz = new Quiz([firstQuestion,secondQuestion,thirdQuestion],1,30)
console.log({quiz});
quiz.addQuestion(lastQuestion)

function questionAddition(quiz){
    
    const allFourQuestions = [firstQuestion,secondQuestion,thirdQuestion]
    console.log({allFourQuestions});
}
console.log(questionAddition(quiz));


