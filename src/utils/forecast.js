const request = require('request')
const forecast = (lat, long, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=263819027ce6b7fc7a2c9822da76898d&query=" + lat + "," + long + "" + "&units=f";
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.success === false) {
            callback('Location not exists', undefined)
        } else {
            const temp = body.current.temperature;
            const feel = body.current.feelslike;
            const desc = body.current.weather_descriptions[0]
            const humidity = body.current.humidity;
            callback(
                undefined,
                desc + ' It is currently ' + temp + ' degrees out. It feels like ' +
                feel + ' degrees out. The humidity is ' + humidity + '%.'
            )
        }
    })
}
module.exports = forecast