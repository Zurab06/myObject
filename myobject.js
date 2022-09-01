const car = {
    rpm: 0, gearbox:0,speed: 0,

engine:{temp:90, fuel: 4},
autoCondition: 10,

starting: function () {
    car.engine.temp+10
    car.
    car.gearbox++
    car.speed+10
    console.log("двигатель запущен,передача включена")
    if(rpm>11&car.engine.temp>130&car.engine.fuel<=0){console.log('отключите двигатель,перегрев')}

  },

  driving: function (){
    car.engine.fuel--
car.engine.temp+10
if(car.engine.fuel<0||car.engine.temp>140){
    car.speed=0

    console.log('топливо кончилось')
}
  },
  checking: function(){
    this.autoCondition--
    car.engine.temp++
  if(car.rpm>10){
    
    console.log('высокие обороты! Немедленно заглушите во избежание перегрева!')
  }
  
    },
    checkAuto: function(){
        if(car.engine.temp>130){console.log('двигатель перегрет и выведен из строя')}

    },
    current: function(){
console.log(`обороты ${car.rpm} температура ${car.engine.temp} топливо ${car.engine.fuel} состояние авто ${car.autoCondition} `)
if(car.autoCondition<=0){console.log('авто сломалось')}    



},
driveFast(){
    car.engine.fuel--
    car.engine.temp+=10
    car.autoCondition--
    if(car.engine.fuel<0&car.engine.temp>100&car.autoCondition<0){
        console.log('car is broken')
    }



}
}