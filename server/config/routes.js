let PetController = require("../controllers/PetController.js");

let path = require('path'); //for app.all("**")

module.exports = function(app){
    app.get("/pets", PetController.all);
    app.get("/pets/:id", PetController.find);
    app.post("/pets", PetController.create);
    app.put("/pets/:id", PetController.update);    
    app.put("/pets/like/:id", PetController.like);
    app.delete("/pets/:id", PetController.destroy); 

    app.all("**", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html")) });
    
}