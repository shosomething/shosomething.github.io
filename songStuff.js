fetch("today.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("artistStuffP").textContent = `${data.artist} ー ${data.song}`
        document.getElementById("lyricP").textContent = `「${data.lyric}」`
    })