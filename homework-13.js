export class Drink{
    #temperature
    constructor(name,size, price, temperature){
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }
    getInfo(){
        console.log(`напиток ${this.name} размера ${this.size} по цене -${this.price}`)
    }
    getTemperature(){
        console.log(`температура напитка составляет ${this.#temperature}`)
    }
    addTemperature(myTemp){
        this.#temperature = myTemp
    }
    #drinkCookingProcess(){
        console.log("заказ принят готовка началась...") 
    }
    drinkReady(){
        console.log("ваш заказ готов")
    }
    drinkCooking(){
        this.#drinkCookingProcess()
        this.drinkReady()
    }

}

export class Coffee extends Drink{
    constructor(name,size, price, temperature, coffeeType, milkType){
        super(name,size, price, temperature)
        this.coffeeType = coffeeType
        this.milkType = milkType
    }

     getInfo(){
        super.getInfo()
        console.log(`тип молока ${this.milkType}`)
            console.log(`тип кофе ${this.coffeeType}`)
        }   
}

export class Tea extends Drink{
    constructor(name,size, price, temperature, teaType, sugarAmount){
        super(name,size, price, temperature)
        this.teaType = teaType
        this.sugarAmount = sugarAmount
    }
}

export class Cafe{
    constructor(name, location){
        this.name = name
        this.location = location
    }

    getCafeInfo(){
        console.log(`кафе ${this.name} находится по адресу ${this.location}`)
    }

    orderDrink(drink){
        console.log(`вы заказали ${drink.name} размером ${drink.size} по цене ${drink.price}`)
        drink.drinkCooking()
    }
}


