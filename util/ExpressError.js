const { model } = require("mongoose");

class ExpressError extends Error{
    constructor(statuscode,message){
        super();
        this.status=statuscode;
        this.message=message;
    }
}

module.exports=ExpressError;