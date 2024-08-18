export interface Song {
  id: number
  song: {
    album: {
      title: string
      year: number
    },
    artist: string
    files: {
      audio: string
      coverArt: string
      poster: string
    }
    title: string
  }
};

export interface SongWithFavorite extends Song {
  isFavorite: boolean
};