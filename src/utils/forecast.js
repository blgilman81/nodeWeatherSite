const request = require('request');

const forecast = (lat, long, callback) => {
        const url = `https://api.darksky.net/forecast/f3428ba6df2eddcf5ef23754568ccbf2/${long},${lat}`;
        request({ url, json: true }, (error, { body }) => {
                if (error) {
                        callback('Unable to access weather service');
                } else if (body.error) {
                        callback('Unable to find location');
                } else {
                        callback(
                                undefined,
                                `${body.currently.summary}.  It is currently ${body.currently.temperature} degrees, with a ${body.currently.precipProbability}% chance of rain. The high temp for today will be ${body.daily.data[0].temperatureHigh}, with a low of ${body.daily.data[0].temperatureLow}`
                        );
                }
        });
};

module.exports = forecast;
