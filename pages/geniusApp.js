import Layout from '@components/Layout';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import oauth2 from '../components/oauth';

//defines default function, geniusApp
export default function geniusApp() {
  // useState hooks are used to det state variables and their corresponding setter functions
  const [songInput, setSongInput] = useState('');     // init state variable to empty string
  const [lyrics, setLyrics] = useState('');           
  const [accessToken, setAccessToken] = useState('');  

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.search); // extracts URL params from the current URL
        const code = params.get('code'); // gets the val of the 'code' param form the URL query string
        console.log('Authorization Code', code); // log for authorization code 

        if(code){ // checks if the auth code is present in the URL and does token exchange if it exists
          const tokenParams = {
            code,
            client_id: 'f0Z-QAgvyVYSdC18PYyAIE4xI8LmTVPCz5onapsYCDw-SPCq-9RMBlquN0t2BOgm',
            client_secret: '36Eqv9lOvk7I-t7HaggoZFHKVhafTsjEObQtXxA3QuIM6jp_W5NHvOwCd4a-ysFX2vWhaFVg_uLJmm9T37K1aA',
            redirect_uri: 'http://sergio-g.com/geniusApp',
            response_type: 'code',
            grant_type: 'authorization_code',
          };
          // CHECK THIS LINE OF CODE
          const tokenResponse = await oauth2.authorizationCode.getToken(tokenParams); // calls getToken, passes tokenParams as arg.
          console.log('Token Response', tokenResponse);

          const token = oauth2.accessToken.create(tokenResponse); //calls create method, passing tokenResponse, create token object
          setAccessToken(token.token.access_token); //sets accessToken to value of token.token.acess_token
        } else {
          console.error('Authorization code not found in URL');
        }
      }catch (error) {
        console.error('Error exchanging authorization code for access token.', error);
      }
      };
      handleOAuthCallback();
      }, []);
    //console.log('Submitted Song Name', songName);

    const handleSearch = async (event) => {
      event.preventDefault();
      try{ // 
        const response = await axios.get('https://api.genius.com/search?q=${encodeURIComponent(songInput)}', {
          headers: {
            Authorization: `Bearer -nX8pzNozRk98MybemJdPOPo9EnheAptUvp5-CBLnGWoCXc8eL4WJfqWKiSaypod`,
          },
        });
    
      const firstSong = response.data.response.hits[0];
      if(firstSong){
        const songId = firstSong.result.id;
        const lyricsResponse = await axios.get('https://api.genius.com/songs/${songId}/lyrics', {
          headers:{
            Authorization: `Bearer -nX8pzNozRk98MybemJdPOPo9EnheAptUvp5-CBLnGWoCXc8eL4WJfqWKiSaypod`,
          },
        });
        setLyrics(lyricsResponse.data.response.lyrics.lyrics);
      } else{
        setLyrics('Lyrics not found.');
      }
    } catch (error){
      console.error('error fetching lyrics', error);
      setLyrics('Error fetching lyrics. Please try again.');
    }
  };

  return (
    <Layout>
        <div className="tabs">
        <Link href="/">
          <div className="tab">Home</div>
        </Link>
        <Link href="/geniusApp">
          <div className="tab">App</div>
        </Link>

      </div>
      <h1>placeholder 2</h1>
      <p>this is the second placeholder</p>
      
      {/*Button and search bar*/}
      <form onSubmit={handleSearch}>
        <input 
          type = "text" 
          placeholder='Search...'
          value = {songInput}
          onChange={(e) => setSongInput(e.target.value)}
        />
        <button 
          type = "submit" >Search
        </button>
      </form>

      {/*Display Song Lyrics*/} 
      {lyrics && (
        <div className='{styles.songInput}'>
          <p>Submitted Song Name: </p>
          <p>{lyrics}</p>
        </div>
      )}
    </Layout>
  );
}
