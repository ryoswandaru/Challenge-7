module.exports = {
    index: (req, res) => res.render('index'),
    greet: (req, res) => {
        console.log(req.loggedInUser);
        res.render('greet', { game })
    }
}