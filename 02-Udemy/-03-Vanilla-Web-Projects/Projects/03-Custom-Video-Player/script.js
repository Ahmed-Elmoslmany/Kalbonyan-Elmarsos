// Ahmed Elmoslmany 2023-02-08 11:25:02
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// PLay and Pause Video
function toggleVideoStatus(){
  if(video.paused){
    video.play()
  }else{
    video.pause()
  }
}


// Update Icons (play/pause)
function updatePlayIcon(){
  const pauseIcon = play.querySelector('i');

 

    pauseIcon.classList.toggle('fa-pause')
  
}

// Update progress and time
function updateProgress(){
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60)
  if(mins < 10 ) mins = '0' + (+mins)


  let secs = Math.floor(video.currentTime % 60)
  if(secs < 10 ) secs = '0' + (+secs)

  timestamp.innerHTML = `${mins}:${secs}`
}

// Set video Progress time
function setVideoProgress(){
  video.currentTime = +(progress.value * video.duration) / 100;
}

//stop video
function stopVideo(){
  video.currentTime = 0;
  video.pause()
}

// Events
video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)

stop.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)