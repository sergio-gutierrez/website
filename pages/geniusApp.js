import Layout from '@components/Layout';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function geniusApp() {
  const [songInput, setSongInput] = useState('');   // state to store the entered song
  const [lyrics, setLyrics] = useState('');         // state to store fetched lyrics 
  const [accessToken, setAccessToken] = useState(''); 

  useEffect(() => {
    const handleOAuthCallback = async () => {
      try {
        const {code} = new URLSearchParams(window.location.search);
        if(code){
          const tokenParams = {
            code,
            redirect_uri: 'http://sergio-g.com/geniusApp',
          };
          const tokenResponse = await oauth.authorizationCode.getToken(tokenParams);
          const token = oauth2.accessToken.create(tokenResponse);
          setAccessToken(token.token.access_token);
        } else {
          console.error('Authorization code not found in URL');
        }
      }catch (error) {
        console.error('Error exchnging authorization code for access token.', error);
      }
      };
      handleOAuthCallback();
      }, []);
    //console.log('Submitted Song Name', songName);

    const handleSearch = async (event) => {
      event.preventDefault();
      try{
        const response = await axios.get('https://api.genius.com/search?q=${encodeURIComponent(songInput)}', {
          headers: {
            Authorization: 'Bearer -nX8pzNozRk98MybemJdPOPo9EnheAptUvp5-CBLnGWoCXc8eL4WJfqWKiSaypod',
          },
        });
    
      const firstSong = response.data.response.hits[0];
      if(firstSong){
        const songId = firstSong.result.id;
        const lyricsResponse = await axios.get('https://api.genius.com/songs/${songId}/lyrics', {
          headers:{
            Authorization: 'Bearer -nX8pzNozRk98MybemJdPOPo9EnheAptUvp5-CBLnGWoCXc8eL4WJfqWKiSaypod',
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
