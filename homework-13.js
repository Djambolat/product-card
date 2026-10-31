class Drink{
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
}
const cola = new Drink("cola","big","300",4)
cola.addTemperature(20)
cola.getInfo()