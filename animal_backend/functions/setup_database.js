const db = require('./api/database')

async function setupDatabase(req, res, next) {
  
    // Add documents to the animals collection
    addDocuments(
        'animal',
        [
            { 
                name: 'cow', 
                imagehide: 'assets/animalasset/cowhide.png', 
                image: 'assets/animalasset/cow.png', 
                audio: 'animalasset/Cow.mp3', 
                height: 50,
                animalalpha: {
                'c' : 'assets/animalasset/c.png',
                'o' : 'assets/animalasset/o.png',
                'w' : 'assets/animalasset/w.png',  
                }
            },
            { 
                name: 'bird', 
                imagehide: 'assets/animalasset/birdhide.png', 
                image: 'assets/animalasset/bird.png', 
                audio: 'animalasset/Bird.mp3', 
                height: 50,
                animalalpha: {
                'b' : 'assets/animalasset/b.png',
                'i' : 'assets/animalasset/i.png',  
                'r' : 'assets/animalasset/r.png',
                'd' : 'assets/animalasset/d.png',
        }
            },
            { 
                name: 'lion', 
                imagehide: 'assets/animalasset/lionhide.png', 
                image: 'assets/animalasset/lion.png', 
                audio: 'animalasset/Lion.mp3', 
                height: 50,
                animalalpha: {
                'l' : 'assets/animalasset/l.png',
                'i' : 'assets/animalasset/i.png',
                'o' : 'assets/animalasset/o.png',
                'n' : 'assets/animalasset/n.png',
                }
            },
            {
                name: 'owl', 
                imagehide: 'assets/animalasset/owlhide.png', 
                image: 'assets/animalasset/owl.png', 
                audio: 'animalasset/owl.mp3', 
                height: 50,
                animalalpha: {
                'o' : 'assets/animalasset/o.png',
                'w' : 'assets/animalasset/w.png',
                'l' : 'assets/animalasset/l.png'
                }
            },
            {
                name: 'dog', 
                imagehide: 'assets/animalasset/doghide.png', 
                image: 'assets/animalasset/dog.png', 
                audio: 'animalasset/dog.mp3', 
                height: 50,
                animalalpha: {
                'd' : 'assets/animalasset/d.png',
                'o' : 'assets/animalasset/o.png',
                'g' : 'assets/animalasset/g.png'
                }
            },
            {
                name: 'cat', 
                imagehide: 'assets/animalasset/cathide.png', 
                image: 'assets/animalasset/cat.png', 
                audio: 'animalasset/cat.mp3', 
                height: 50,
                animalalpha: {
                'c' : 'assets/animalasset/c.png',
                'a' : 'assets/animalasset/a.png',
                't' : 'assets/animalasset/t.png'
                }
            }         
        ]
    )

    res.send('Setting Up Animal Database.... Done ')
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase