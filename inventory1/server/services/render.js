
const axios = require('axios');
const req = require('express/lib/request');


exports.homeRoutes = (_req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.find_user = (_req, res) => {
    axios.get('http://localhost:3000/api/users%27)
        .then(function(userdata){
            res.render('index', { users : userdata.data });
        })
        .catch(err =>{
            res.send(err);
        })


exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })



}
