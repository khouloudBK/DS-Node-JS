const express = require('express')
const {Course, comics_validation, comics_validation_update} = require('../models/comic');
const _ = require('lodash');
const router = require('express').Router();;

var Comics = [
    {id :1, auteur : "Gōshō Aoyama", titre :"Conan détective" , Url : `http://www.anime-kun.net/animes/fiche-detective-conan-411.html`},
    {id :2, auteur : "Akira Toriyama", titre :"Dragon boll" , Url : "https://www.purebreak.com/news/dragon-ball-super-la-date-du-retour-de-l-anime-teasee-dans-le-manga/186724"},
    {id :3, auteur : "Yoshihiro Togashi", titre :"hunter x hunter" , Url : "https://www.purebreak.com/news/hunter-x-hunter-de-retour-deux-comediennes-teasent-un-nouveau-projet/210084"},

]



router.get('', async(req,res)=>{
    let comics = await Comics.find();
    res.send(comics);
})

router.get('/:id', async (req,res)=>{
    let comic = await Comics.findById(req.params.id);
    if(!comic)
        return res.status(404).send("Comics with the given Id is not found")
    res.send(comic)
})


router.post('', async (req,res)=>{
    let validation_result = comics_validation.validate(req.body)
    if(validation_result.error)
        return res.status(400).send(validation_result.error.details[0].message)
    let comics = new Comics(_.pick(req.body,['titre','auteur','url']));
    try{ 
        await comics.save(); 
    }  
    catch(err){ 
        return res.status(400).send(err); 
    }
    res.status(201).send(comics); 
});

router.put('/:id',async(req,res)=>{ 
    let comics = await Comics.findById(req.params.id);
    if (!Comics) 
        res.status(404).send('comics with this id not found ');
    comic= _.merge(comics,req.body); 
    try {
        await Comics.save();
    } catch (error) {
        res.status(400).send('Storage problem in DB : '+ error.message)
    }
   res.send(comics); 
});

   
router.delete('/:id',async(req,res)=>{ 
    let comics = await Comics.findByIdAndDelete(req.params.id);
    res.send(comics); 
});
    
module.exports = router;