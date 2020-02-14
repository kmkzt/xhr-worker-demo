
async function getdata(url) {
    return new Promise((resolve, reject) => {
        xhr = new XMLHttpRequest();
        xhr.addEventListener('load', (res) => {
            console.log('load', res)
            if (res.target.status === 200) {
                resolve(res.target.responseText)
                return
            }
            reject(res.target.statusText)
        })
        xhr.addEventListener('error', (err) => {
            console.log(err)
            reject(err)
        })
        xhr.open('GET', url);
        xhr.send()
    })
} 
self.onmessage = (e) => {
    console.log(e)
    getdata( e.data.url).then((data) => self.postMessage({data})).catch((err) => self.postMessage({err}))
}