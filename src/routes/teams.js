const { Router } = require('express');
const router = Router();
const teams = require('../samples.json');

router.get('/', (req, res) => {
  res.json(teams);
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const { Team, Manager, Awards, Star } = req.body;
  if (Team && Manager && Awards && Star){
    _.each(movies, (movie, i) => {
        if (movie.id == id){
          team.Manager = Manager;
          team.Awards = Awards;
          team.Star = Star;
        }
    });
  }
});

router.post('/', (req, res) => {
 const { Team, Manager, Awards, Star } = req.body;
 if (Team && Manager && Awards && Star) {
   res.json('saved');
 } else {
   res.send('Wrong data');
 }
   
  res.send('okay I have information')
});

module.exports = router;