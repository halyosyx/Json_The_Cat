const request = require('request');
const args = process.argv;
const argsbreed = args.splice(2);

const breedDescription = (breed, cb) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, 'utf-8', (error, response, body) => {
    const data = JSON.parse(body)[0];

    if (error) {
      cb(error, null);
    } else {
      if (!data) {
        cb(null, 'Cat not found 404');
      } else {
        cb(null, `${data.description}`);
      }
    }
  });
};

breedDescription(argsbreed, (error, breed) => {
  if (error) {
    return console.log('Error:', error);
  } else {
    return console.log(breed);
  }
});

