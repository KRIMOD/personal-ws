import querystring from 'querystring'

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token
} = process.env

// Client id 1442a15640b040bc8112f9e8ea9d843d
// Client secret 9b059c6bd0064f91aad00172553c8538
// refresh token AQD5saAXKk11QoKlMbOmEfdd9DfjQ9Jz2OY1xybWzZbQYTmRChJkr9HSGFlTp52cx4slr02HlSnzd7G3RV5H7c29VMJgbSWuShx9KsaiRCmnCjXYqtl
// new ? refresh token
// code
// http://localhost:3000/?code=AQAx90htuZy5kfrMSUNtbPCR_ulCMuZ4FAHo7sMT60Y0fcQuFmlJ-nCR9na9k8OXytbbQy2O4Q1nw7rwUAAYCIkraah-RFwP7_VdahrEr-8LSnBTZHYG5WaqCIus30_AL-xYicJ04mnWBw0cQmicWcbFEMyWro124bZr8LtTZDua4ZQ43JNtbe-sdJ6R3aUnUClnQv8f9oYZ9ERDJZJgcL_HPqtm

// https://accounts.spotify.com/authorize?client_id=1442a15640b040bc8112f9e8ea9d843d&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}
