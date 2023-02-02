let db = require('./db')

let apis = {
  getData(){
    return new Promise((resolve, reject)=>{
        
        db.collection('employees').find({}).toArray((err,data)=>{
          console.log(err)
                resolve(data)     
                
        })
    })
  }
}

module.exports = apis;
