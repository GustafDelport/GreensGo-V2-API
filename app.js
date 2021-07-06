const MongoCLient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "insert connection string here";

MongoCLient.connect(url, function(err, client){
    assert.equal(null, err);

    const db = client.db("Main");

    var cursor = db.collection('Data').find({});

    function iterateFunc(doc) {
        console.log(JSON.stringify(doc, null, 4));
     }
     
     function errorFunc(error) {
        console.log(error);
     }
     
     cursor.forEach(iterateFunc, errorFunc);

    client.close();
});

