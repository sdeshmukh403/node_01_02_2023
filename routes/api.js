let db = require('./db')

let apis = {
  getData(){
    return new Promise((resolve, reject)=>{
        
        db.collection('test_data').find({}).toArray((err,data)=>{
          console.log(err)
                resolve(data)     
                
        })
    })
  }
}

module.exports = apis;
