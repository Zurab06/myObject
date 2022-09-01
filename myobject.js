const car = {
    rpm: 0, gearbox:0,speed: 0,

engine:{temp:90, fuel: 4},
autoCondition: 10,

starting: function () {
    car.engine.temp+=10

    car.gearbox+=1
    car.speed+=10
    console.log("двигатель запущен,передача включена")
    if(car.rpm>11&car.engine.temp>130&car.engine.fuel<=0){console.log('отключите двигатель,перегрев')}

  },

  driving: function (){
    car.engine.fuel--
car.engine.temp+10
if(car.engine.fuel<0||car.engine.temp>140){
 console.log('топливо кончилось или двигатель перегрет')
}else{console.log('едем')}
  },
  checking: function(){

    this.autoCondition--
    car.engine.temp++
  if(car.rpm>10&car.engine.temp>130){
    
    console.log('высокие обороты! Немедленно заглушите во избежание перегрева!')
  }
  else{console.log('показания двигателя в порядке')}
  
    },
    checkAuto: function(){
        if(car.engine.temp>130){console.log('двигатель перегрет и выведен из строя')}
else{console.log('все в порядке')}
    },
    current: function(){
console.log(`передача ${car.gearbox} обороты ${car.rpm} температура ${car.engine.temp} топливо ${car.engine.fuel} состояние авто ${car.autoCondition} `)
if(car.autoCondition<=0){console.log('авто сломалось')}    



},
driveFast(){
    car.engine.fuel--
    car.engine.temp+=10
    car.autoCondition--
    if(car.engine.fuel<0&car.engine.temp>100&car.autoCondition<0){
        console.log('car is broken')
    }
    else{
      console.log('turbo режим активирован')
    }



}
}