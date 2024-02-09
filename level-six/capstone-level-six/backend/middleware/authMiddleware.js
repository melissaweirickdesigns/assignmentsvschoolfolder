// This line imports the 'jsonwebtoken' library, which provides functions to handle JSON Web Tokens (JWT). JWTs are a secure way to transmit information between parties as a JSON object.
const jwt = require('jsonwebtoken');

// This function is designed to authenticate tokens in requests to your server. It acts as middleware in your web application, verifying that the request comes from an authenticated user.
function authenticateToken(req, res, next) {
  // Extracts the 'Authorization' header from the incoming request. This header is expected to contain the JWT, typically in a format like "Bearer [token]".
  const authHeader = req.headers['authorization'];
  // If the 'Authorization' header is present, the token is extracted from it. The token is expected to follow the "Bearer" keyword, hence the split and selection of the second array element.
  const token = authHeader && authHeader.split(' ')[1];
  // If no token is found, the server responds with a 401 status code, indicating that the request is unauthorized due to missing credentials.
  if (token == null) return res.sendStatus(401);

  // Here, the jwt.verify function is used to validate the extracted token. It checks the token against the secret key stored in your environment variables (process.env.SECRET).
  jwt.verify(token, process.env.SECRET, (err, user) => {
    // If the token is invalid or has expired, the server responds with a 403 status code, indicating that the server understands the request but refuses to authorize it.
    if (err) return res.sendStatus(403);
    // If the token is successfully verified, the user's information decoded from the token is attached to the request object. This allows subsequent middleware or route handlers to access the user's information.
    req.user = user;
    // Calls the next middleware in the stack. If the token is valid, execution moves forward to the next operation (e.g., accessing a protected route).
    next();
  });
}

// Exports the authenticateToken function so it can be used in other parts of your application. This is how you make the function available for use as middleware in your route definitions.
module.exports = authenticateToken;
