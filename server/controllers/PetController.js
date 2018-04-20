let Pet = require("mongoose").model("Pet");

class PetController{
    all(req, res) { 
        Pet.find({}, (err, pets)=> {
            if(err) {
                res.json({errors: err});
            }
            else {
                
                res.json(pets);
            }
        })
    }
    create(req, res) {
        let pet = new Pet(req.body);
        pet.save(function(err) {
            if(err) {
                res.json({errors: err});
            }
            else {
                res.json(pet);        
            }
        }) 
    }
    find(req, res) {
        Pet.find({_id: req.params.id}, (err, pet)=> {
            if(err) {
                res.json({errors: "Failed to find pet"})
            }
            else {
                res.json(pet);            
            }
        })
    }
    update(req, res) {
        console.log(req.params.id);
        Pet.findOne({_id: req.params.id}, (err, pet)=> {
            if(err) {
                res.json({errors: err});                    
            }
            else {
                pet.name = req.body.name || pet.name;
                pet.type = req.body.type || pet.type;
                pet.desc = req.body.desc || pet.desc;
                pet.skills = req.body.skills || pet.skills;
                pet.save(function(err) {
                    if(err) {
                        res.json({errors: err});
                    }
                    else {
                        res.json(pet);
                    }
                })
            }
        })
    }
    like(req, res) {  
        Pet.findOne({_id: req.params.id}, (err, pet)=> {
            if(err) {
                res.json({errors: "Failed to find pet"});                    
            }
            else {
                pet.likes += 1; 
                pet.save (err=> {
                    if(err) {
                        res.json({errors: err});
                    }
                    else {
                        res.json(pet);
                    }
                })
            }
        })
    }
    destroy(req, res) {
        Pet.remove({_id: req.params.id}, (err, pet)=> {
            if(err) {
                res.json({errors: "Error finding Pet to delete"})
            }
            else {            
                // console.log(pet);
                res.json("Pet successfully deleted");                   
            }
        })
    }}

module.exports = new PetController(); 