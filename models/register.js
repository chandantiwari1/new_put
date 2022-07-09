const db = require('../util/database');
module.exports = class User{
    constructor(id,name,email,section,password,batch){
        this.id=id;
        this.name=name;
        this.email=email;
        this.section=section;
        this.password=password;
        this.batch=batch;
    }
    save(){
        return db.execute('INSERT INTO user (id,name,email,section,password,batch) VALUES (?,?,?,?,?,?)',[this.id,this.name,this.email,this.section,this.password,this.batch]);
    }
}