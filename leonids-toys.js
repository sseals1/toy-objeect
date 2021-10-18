
const toysArray =[
    {
        id: 1,
        name: "teddyBear",
        manufacturer: "ACME",
        color: "brown",
        modelNumber: 10,
        adultSupervisionRequired: true,
        price: 25.97
    },
    
    {
        id: 2,
        name: "theSquirter",
        manufacturer: "Mattel",
        color: "yellow",
        modelNumber: 5.3,
        adultSupervisionRequired: true,
        price: 5.75
    }
]
    const messi = {

        id: 3,
        name: "Messi",
        manufacturer: "Maco",
        color: "blue",
        modelNumber: 3.6,
        adultSupervisionRequired: false,
        price: 48.99
    }

    const kite = {
        id: 4,
        name: "High flyer",
        manufacturer: "Mattel",
        color: "red",
        modelNumber: 8.4,
        adultSupervisionRequired: true,
        price: 15.99
    }
    
    
    toysArray.push(messi)
    toysArray.push(kite)
    
    for (const toyObj of toysArray) {
        toyObj.price += (toyObj.price * .05)
        console.log(`The ${toyObj.color} ${toyObj.name} is $${toyObj.price} dollars.`)
    }
    
    const addNewToy = (toyObject) => {
        const lastIndex = toysArray.length - 1
        const currentLastToy = toysArray[lastIndex]
        const maxId = currentLastToy.id
        const idForNewToy = maxId + 1
        toyObject.id = idForNewToy
        toysArray.push(toyObject)
    }
    
    addNewToy("frisbee", 15)
    addNewToy("balloons", 4)
    addNewToy("Tonka-truck", 11.89)
    addNewToy("airplane", 8)
    addNewToy("legos", 16)



    addNewToy(yoyo = {
        name: "yoyo ",
        manufacturer: "Mattel",
        color: "green",
        modelNumber: 4.0,
        adultSupervisionRequired: false,
        price: 4.35
}
)
    

console.log(toysArray)