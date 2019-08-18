const Router = require('koa-router');
const ctrl = require('./controllers');

const router = new Router();

router.get('signUp', ctrl.signUp);
router.get('signIn', ctrl.signIn);
router.get('search', ctrl.search);
router.get('reset', ctrl.reset);
router.get('recoveryPassword', ctrl.recoveryPassword);
router.get('personalInfo', ctrl.personalInfo);
router.get('emailSend', ctrl.emailSend);
router.get('completeAccount', ctrl.completeaccount);

module.exports = router;
