  // Ahmed Elmoslmany 2023-02-09 11:37:31
  class Course{

    #price;

    get price(){
      return `\$ ${this.#price}`
    }

    set price(val){
      if(val < 0){
        throw "Error negative val"
      }
      this.#price = val
    }
    constructor(title, length, price){
      this.title =title
      this.length = length
      this.price= price
    }

    calculates(){
      return (this.length / this.#price)
    }

    printSummary(){
      console.log(`Title: ${this.title} Price: ${this.price}`)
    }
  }

  class PracticalCourse extends Course{
    constructor(title,length, price, numOfExercises){
      super(title,length, price)
      this.numOfExercises = numOfExercises
    
    }
  }

  const course1 = new Course("JavaScript", 52, 1500)
  const course2 = new Course("HTML & CSS", 37, 1000)
  const course3 = new PracticalCourse("React", 39, 1000, 10)

  console.log(course1)
  console.log(course2)
  console.log(course3)
  console.log(course3.printSummary())


  console.log(course1.calculates())



  class TheoreticalCourse extends Course{
    publish(){
      console.log("publish")
    }
  }

  const course4 = new TheoreticalCourse("Flutter", 50, 48)
  course4.publish()
  course4.printSummary()