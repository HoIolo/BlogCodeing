

//音乐播放器
export function aplayerOptions() {
    return {
        container: document.getElementById('player'),
        mini: true,
        fixed: true,
        autoplay: false,
        theme: '#FADFA3',
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 3,
        audio: [
            {
                name: '打上火花',
                artist: 'artist1',
                url: 'assets/music.mp3',
                cover: '',
                lrc: '',
                theme: '#ebd0c2'
            }
        ]
      }
}