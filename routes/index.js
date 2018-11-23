var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/move/:id', function(req, res, next) {
  // Définir ce que l'ordi va jouer 
  var values = ["papier","ciseaux","pierre"];
  valueToUse = values[Math.floor(Math.random() * values.length)];
  // La victoire ou la défense
  var choise = req.params.id ;

    if (choise === "ciseaux") {
        if ( valueToUse === "papier"){
          result = "gagné";
        }
        else if ( valueToUse === "pierre"){
          result = "perdu";
        }
        else if ( valueToUse === "ciseaux"){
          result = "égalité";
        }
    }
    else if (choise === "papier") {
        if ( valueToUse === "pierre"){
          result = "gagné";
        }
        else if ( valueToUse === "ciseaux"){
          result = "perdu";
        }
        else if ( valueToUse === "papier"){
          result = "égalité";
        }
    }
    else if (choise === "pierre") {
        if ( valueToUse === "ciseaux"){
          result = "gagné";
        }
        else if ( valueToUse === "papier"){
          result = "perdu";
        }
        else if ( valueToUse === "pierre"){
          result = "égalité";
        }
    }
    res.send(result);
});

// router.post('/', function(req, res, next) {
//   console.log(req.body)
//   res.send('coucou');
// });

module.exports = router;
