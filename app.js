const Twit = require('twit')

const T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token: '',
  access_token_secret: "",
  timeout_ms: 60 * 1000,
})

if (!process.argv[2]) {
  console.log('Por favor insira a mensagem do tweet')

  return 
}

T.post('statuses/update', { status: process.argv[2] }, (err, data, response) => {
  if (!err) {
    console.log('Twett publicado!')
  }
})