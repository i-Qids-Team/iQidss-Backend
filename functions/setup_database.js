const db = require('./api/database')

async function setupDatabase(req, res, next) {
  
    // Add documents to the colors collection
    addDocuments(
        'color',
        [
            { 
                question: 'Is a tiger orange?', 
                imageURL: 'https://4.bp.blogspot.com/-CDWC0kIUyvU/Wyki1CAb0TI/AAAAAAAgYYQ/nuC6FFFWIkM_WMq4zmcmsuP546Y5AcInQCLcBGAs/s1600/AW1237953_05.gif', 
                answer: 'True', 
            },
            { 
                question: 'Is a dolphin blue?', 
                imageURL: 'https://i.pinimg.com/originals/5c/92/70/5c927090eb8e055873c90a01365f7107.gif', 
                answer: 'True',
            },
            { 
                question: 'Is a caterpillar yellow?', 
                imageURL: 'https://gifimage.net/wp-content/uploads/2018/06/transparent-animated-gif-1.gif', 
                answer: 'False',
            },
            {
                question: 'Is a bird black?', 
                imageURL: 'https://i.gifer.com/ZHug.gif', 
                answer: 'True',
            },
            {
                question: 'Is a duck yellow?', 
                imageURL: 'https://media0.giphy.com/media/63MTnAuYB6DxZ1J3Aq/source.gif', 
                answer: 'True',
            },
            {
                question: 'Is an octopus pink?', 
                imageURL: 'https://media.giphy.com/media/6U9oZb44dg2Uo/giphy.gif', 
                answer: 'False',
            }         
        ]
    )

    res.send('Setting Up color Database.... Done ')
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase