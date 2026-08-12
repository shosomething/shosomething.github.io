fetch("today.json?v=" + Date.now()) // prevent caching or sth
    .then(response => response.json())
    .then(data => {
        document.getElementById("artistStuffP").textContent = `${data.artist} ー ${data.song}`
        document.getElementById("lyricP").textContent = `「${data.lyric}」`
    })
