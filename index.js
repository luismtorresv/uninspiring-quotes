import express from "express";

const app = express();
const port = 80;

const phrases = [
  "To bear children into this world is like carrying wood to a burning house.",
  "I think human consciousness is a tragic misstep in human evolution.",
  "Why do we argue? Life's so fragile, a successful virus clinging to a speck of mud, suspended in endless nothing.",
  "This truth, which must be very serious and grave if not terrible to everyone, is that a man also can say and must say: 'The world is my will.'",
  "For the world is Hell, and men are on the one hand the tormented souls and on the other the devils in it",
  "Every thing done under the sun is vanity of vanities.",
];

app.get("/", (req, res) => {
  const number = Math.floor(Math.random() * phrases.length);
  res.send(phrases[number]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
