module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '38a57970fa290ada43b45b526a1e9144'),
  },
});
