var car = {
    make: 'VW',
    type: 'Polo',
    color: 'red',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
    'seat 1',
    'seat 2',
    'seat 3',
    'seat 4'
],
turnOn: function() {
    this.isTurnedOn = true;
},
turnOff: function() {
    this.isTurnedOn = false;
},
fly: function() {
    alert('Fly');
},
switchCar: function(isOn) {
    console.log('Turn Car '+isOn)
    if (isOn == true) {
        this.isTurnedOn = true;
    } else {
        this.isTurnedOn = false;
    }
}
};

console.log("Hello Everyone!")