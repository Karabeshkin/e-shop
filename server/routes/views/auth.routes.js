const router = require('express').Router();
const RegistrationForm = require('../../components/RegistrationForm');
// const AuthorizationForm = require('../../components/AuthtorizationForm');
const AuthorizationForm = require('../../components/AuthtorizationForm');

router.get('/registration', (req, res) => {
  res.send(res.renderComponent(RegistrationForm, { title: 'Registration Page' }));
});

router.get('/authorization', (req, res) => {
  res.send(res.renderComponent(AuthorizationForm, { title: 'Authorization Page' }));
});

module.exports = router;
