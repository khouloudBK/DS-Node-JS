const mongoose = require('mongoose');
const Joi = require('joi'); 

const comics_schema = new mongoose.Schema({ 
    auteur:[String], 
    titre:String, 
    url:String, 
}) 
let comics_validation_schema=Joi.objet({ 
    auteur:Joi.array().min(3).max(15).required(), 
    titre:Joi.string().min(3).max(15).required(),
    url:Joi.Joi.string().uri(), 
}) 
    function comics_validation(body){ 
        return comics_validation_schema.validate(body);
 } 

 let comics_validation_update_schema=Joi.objet({ 
    auteur:Joi.array().min(3).max(15), 
    titre:Joi.string().min(3).max(15),
    url:Joi.Joi.string().uri(), 
}) 
    function comics_validation_update(body){ 
        return comics_validation_update_schema.validate(body);
 } 
 
 const Comics =mongoose.model('Comics',comics_schema); 
 module.exports.Comics= Comics 
 module.exports.comics_validation= comics_validation;
 module.exports.comics_validation_update= comics_validation_update;
