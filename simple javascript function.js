//A Function That Calculates Dog Years
const cal_dog_Age = (years) =>{
    var dog_years = 7 * years;
    var statement = "Your doggie is "+ dog_years +" years old in dog years!"
    console.log(statement);
    return statement;
}
cal_dog_Age(7);
cal_dog_Age(5);
cal_dog_Age(5);

//A Function That Calculates Life Time Supply With A Max Years Of 100
const calculateSupply = (age, am_per_day) =>{
    //set based on a constant max age
    var max_age = 100;
    //calcutate the number of years of supply
    var yrs_of_supply = 100 - age;
    //calculate number of delivery per year
    var delivery_per_year = am_per_day * 365
    //calculate total lifetime delivery
    supply_statement = "You will need "+delivery_per_year* yrs_of_supply+" to last you until the ripe old age of "+max_age;
    console.log(supply_statement)
}

calculateSupply(30,3)
calculateSupply(10,2)
calculateSupply(40,5.2)
calculateSupply(60,2)

const fibonaci = (start_point, no_series)=>{
    //define all your variables
    var x, y, z, f_series;
    //Set Startpoint, First and Second variable
    x = f_series = 0;
    y = start_point;
    for (let i=0; i<=no_series; i++){
        z = x + y
        y = x
        x = z
        f_series +=", "+ z;
    }
    console.log("Fibonaci Series Of "+ no_series +" Series, With Starting Numbers "+(start_point-1) +" and "+start_point +"\nSeries: "+f_series+"\n")
}
fibonaci(20,10)
fibonaci(1,20)
fibonaci(500,5)

const radius_value = (radius) =>{
    calcCircumfrence(radius)
    calcArea(radius)
}
const calcCircumfrence = (radius) =>{
    //Define your variable and equate to the formula
    circumference = 2*Math.PI* radius
    console.log("The circumference is " + circumference)
}
const calcArea = (radius) =>{
    //Define your variable and equate to the formula
    area = Math.pow(radius, 2)* Math.PI
    console.log("The Area is " + area)
}
radius_value(10)