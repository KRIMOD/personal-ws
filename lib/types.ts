export interface ISong {
  songUrl: string
  artist: string
  title: string
}

export interface INowPlayingSong {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export interface ITopTracks {
  tracks: ISong[]
}
