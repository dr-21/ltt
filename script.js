function getLttImage() {
    fetch('https://raw.githubusercontent.com/dr-21/ltt/master/data.json')
    .then(res => res.json())
    .then(data => {
        let image64 = data["image64"];
        document.body.style.backgroundImage = "url('data:image/png;base64," + image64 + "')";

        let video = data["video"];
        
        let videoElement = document.createElement('video');
        
        videoElement.src = "data:video/webm;base64," + video;
        videoElement.autoplay = false;
        videoElement.loop = false;
        videoElement.controls = true;
        videoElement.muted = false;

        let box = document.getElementById('box');
        box.appendChild(videoElement);
    });
}

getLttImage()
