const viewController = {
  signUp(req, res, next){
    res.render('auth/SignUp')
  },
  signIn(req, res, next){
    res.render('auth/SignIn')
  },
  apiAuth(req, res, next){
    res.json({user: req.user, token: res.locals.data.token})
  },
  redirectToLogin(req, res, next){
    res.redirect('/users/login')
  },

  
  showSchedule(req, res, next) {
  res.render('auth/Schedule', {
    user: res.locals.data.user,
    token: req.query.token
  });
}

}

module.exports = viewController
