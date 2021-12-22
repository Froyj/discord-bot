const quotes = ['Hop là', 'Typiquement ...', 'SIGNATURES', 'eh beh', 'Lis la doc'];

const randomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
} 


export default randomQuote;