exports.signUp = async (ctx) => {
  await ctx.render('sign-up');
};
exports.signIn = async (ctx) => {
  await ctx.render('sign-in');
};
exports.search = async (ctx) => {
  await ctx.render('search');
};
exports.reset = async (ctx) => {
  await ctx.render('reset');
};
exports.recoveryPassword = async (ctx) => {
  await ctx.render('recoveryPassword');
};
exports.personalInfo = async (ctx) => {
  await ctx.render('personalInfo');
};
exports.emailSend = async (ctx) => {
  await ctx.render('emailSend');
};
exports.completeaccount = async (ctx) => {
  await ctx.render('completeaccount');
};
exports.index = async (ctx) => {
  await ctx.render('index');
};
