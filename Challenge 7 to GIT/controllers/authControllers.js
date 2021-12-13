module.exports = {

    getgame: (req, res) => {
        res.render('game')
    },

    getindex: (req, res) => {
        res.render('index');
    },
    getlogin: (req, res) => {
        res.render('login')
    },
    getregister: (req, res) => {
        res.render('register')
    },
}