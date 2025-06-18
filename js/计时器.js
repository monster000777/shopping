// 时、分、秒
function getCountTime() {
    const now = +new Date()
    const last = +new Date('2025-8-1 17:50:00')
    const count = (last - now) / 1000

    // let d = parseInt(count / 60 / 60 / 24)
    let h = parseInt(count / 60 / 60 % 24)
    let m = parseInt(count / 60 % 60)
    let s = parseInt(count % 60)
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s
    // console.log(h, m, s)

    document.querySelector('#hour').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#second').innerHTML = s
}

getCountTime()
setInterval(getCountTime, 1000)
