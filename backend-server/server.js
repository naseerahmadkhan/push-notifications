const { GoogleAuth } = require('google-auth-library');

async function getServiceAccountAccessToken() {
  const keyFile = './dev-notification-580ca-e15b72075e4f.json';
  const scopes = ['https://www.googleapis.com/auth/firebase.messaging'];
  console.log('keyfile',keyFile)

  try {
    const auth = new GoogleAuth({
      keyFilename: keyFile,
      scopes,
    });

    const accessToken = await auth.getAccessToken();

    // Use the accessToken to make authorized API requests
    // ...

    console.log('Access Token:', accessToken);
  } catch (error) {
    console.error('Error:', error.message);
    throw new Error('An error occurred during the authorization process.');
  }
}

// Example usage
getServiceAccountAccessToken()
  .catch((error) => {
    console.error('Error:', error.message);
  });