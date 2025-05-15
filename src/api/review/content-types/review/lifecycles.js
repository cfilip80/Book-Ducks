module.exports = {
  beforeCreate(event) {
    const { data, params } = event;

    // Använd ID från autentiserad användare (sätts i ctx.state.user i request)
    if (params.context && params.context.state && params.context.state.user) {
      data.users_permissions_user = params.context.state.user.id;
    }
  },
};