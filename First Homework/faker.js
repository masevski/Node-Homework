const faker = require('faker')
let list = []
for (let i = 0; i < 100; i++) {
    list.push({
        Gender: faker.name.gender(),
        Company: faker.company.companyName(),
        Word: faker.lorem.word(),
        Music: faker.music.genre(),
        Job: faker.name.jobType(),
        Finance: faker.finance.creditCardNumber(),
        Phrase: faker.hacker.phrase(),
        VehicleType: faker.vehicle.type(),
        Vehicle: faker.vehicle.vehicle(),
        Dog: faker.animal.dog()
    })
}
console.log(list)