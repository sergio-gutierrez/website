const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

const credentials = {
    client: {
        id: 'f0Z-QAgvyVYSdC18PYyAIE4xI8LmTVPCz5onapsYCDw-SPCq-9RMBlquN0t2BOgm',
        secret: '36Eqv9lOvk7I-t7HaggoZFHKVhafTsjEObQtXxA3QuIM6jp_W5NHvOwCd4a-ysFX2vWhaFVg_uLJmm9T37K1aA',
    },
    auth: {
        tokenHost: 'https://api.genius.com',
        tokenPath: '/oauth/token',
        authorizePath: '/oauth/authorize',
        //response_type: 'token',
        //grant_type: 'authorization_code',
    },
};

const oauth2 = new AuthorizationCode(credentials);

export default oauth2;

export const handleOAuthCallback = async (code) => {
    try{
        if(code){
            const tokenParams = {
                code,
                client_id: 'f0Z-QAgvyVYSdC18PYyAIE4xI8LmTVPCz5onapsYCDw-SPCq-9RMBlquN0t2BOgm',
                client_secret: '36Eqv9lOvk7I-t7HaggoZFHKVhafTsjEObQtXxA3QuIM6jp_W5NHvOwCd4a-ysFX2vWhaFVg_uLJmm9T37K1aA',
                redirect_uri: 'http://sergio-g.com/geniusApp',
                response_type: 'code',
                grant_type: 'authorization_code',
            };
            const tokenResponse = await oauth2.authorizationCode.getTokens(tokenParams);
            console.log('Token Response', tokenResponse);

            const token = oauth2.accessToken.create(tokenResponse);
            return token.token.access_token;
        }else{
            console.error('Authorization code not found. (Oauth) ');
            return null;
        }
    }catch (error){
        console.error('Error exchanging authorization code for access token.', error);
        return null;
    }
};