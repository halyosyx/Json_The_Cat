const {breedDescription}  = require('./breedFetcher');

const args = process.argv;
const argsbreed = args.splice(2);

breedDescription(argsbreed, (error, desc) => {
  if (error) {
    return console.log('Error:', error);
  } else {
    return console.log(desc);
  }
});
