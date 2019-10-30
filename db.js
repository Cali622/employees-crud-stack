const mongoose = require('mongoose');

mongoose.connect('mongodb://BTMoneyGang:Jamil320@ds125932.mlab.com:25932/cruddb', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded...');
    else
        console.log('Error in DB connection : ' +JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;