//import {create} from 'simple-oauth2';
//import { createOAuth } from 'simple-oauth2';
const { AuthorizationCode } = require('simple-oauth2');

const { OAuth2 } = require('simple-oauth2');


const credentials = {
    client: {
        id: 'f0Z-QAgvyVYSdC18PYyAIE4xI8LmTVPCz5onapsYCDw-SPCq-9RMBlquN0t2BOgm',
        secret: '36Eqv9lOvk7I-t7HaggoZFHKVhafTsjEObQtXxA3QuIM6jp_W5NHvOwCd4a-ysFX2vWhaFVg_uLJmm9T37K1aA',
    },
    auth: {
        tokenHost: 'https://api.genius.com/oauth',
        tokenPath: '/oauth/token',
        authorizePath: '/oauth/authorize',
        //response_type: 'code',
        grant_type: "authorization_code",
    },
};

const oauth2 = new AuthorizationCode(credentials);

export default oauth2;