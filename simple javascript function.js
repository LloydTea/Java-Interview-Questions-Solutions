//A Function That Calculates Dog Years
const cal_dog_Age = (years) =>{
    var dog_years = 7 * years;
    //Output Statment
    var statement = "Your doggie is "+ dog_years +" years old in dog years!"
    //print Statment
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
    var lifetime_delivery = delivery_per_year * yrs_of_supply
    //Output Statment
    supply_statement = "You will need "+lifetime_delivery+" to last you until the ripe old age of "+max_age;
    //print Statment
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
    //Print Output Statment
    console.log("Fibonaci Series Of "+ no_series +" Series, With Starting Numbers "+(start_point-1) +" and "+start_point +"\nSeries: "+f_series+"\n")
}
fibonaci(20,10)
fibonaci(1,20)
fibonaci(500,5)


const calcCircumfrence = (radius) =>{
    //Define your variable and equate to the formula
    var circumference = 2*Math.PI* radius
    //print Output Statment and approximate circumference Value to 3 decimal places
    console.log("The circumference is " + parseFloat(circumference).toFixed(3))
}
const calcArea = (radius) =>{
    //Define your variable and equate to the formula
    var area = Math.pow(radius, 2)* Math.PI
    //print Output Statment and approximate Area Value to 3 decimal places
    console.log("The Area is " + parseFloat(area).toFixed(3))
}
//Create A Function to call both functions
const radius_value = (radius) =>{
    calcCircumfrence(radius)
    calcArea(radius)
}
radius_value(10)
radius_value(16)
radius_value(5.3)

const celsiusToFahrenheit = (temp_celsius) =>{
    //Define your variable and equate to the formula
    var temp_fahren = (temp_celsius * 1.8) + 32;
    //print Output Statment Round Down To Nearest 10
    console.log(temp_celsius+"°C is " +  Math.round (temp_fahren) + "°F")
}
const fahrenheitToCelsius = (temp_fahren) =>{
    //Define your variable and equate to the formula
    var temp_celsius = (temp_fahren - 32) * 0.56;
    //print Output Statment Round Down To Nearest 10
    console.log(temp_fahren+"°F is " + Math.round(temp_celsius) + "°C")
}
celsiusToFahrenheit(30)
fahrenheitToCelsius(86)