const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');


const quran = ['Al-Jin', 'Al-marig', 'Al-mudather']

let quranIndex = 0

loadQuran(quran[quranIndex])

function playQuran(){
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  audio.play()
}

function pauseQuran(){
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  playBtn.querySelector('i.fas').classList.add('fa-play')

  audio.pause()
}

function prevSong(){
  quranIndex--;

  if(quranIndex < 0) quranIndex = quran.length - 1
  
  loadQuran(quran[quranIndex])
  playQuran()
}


function nextSong(){
  quranIndex++;

  if(quranIndex == quran.length) quranIndex = 0

  loadQuran(quran[quranIndex])

  playQuran()
}



function loadQuran(quran){
  title.innerText = quran
  audio.src = `music/${quran}.mp3`
  cover.src = `images/${quran}.jpg`
}

// Update progress bar
function updateProgress(e){
  const { duration, currentTime } = e.srcElement;
  
  const progressPrecent = (currentTime / duration) * 100;

  progress.style.width = `${progressPrecent}%`;
}

playBtn.addEventListener('click' , () => {
  const isplaying = musicContainer.classList.contains('play')
  if(isplaying){
    pauseQuran()
  }else{
    playQuran()
  }
})

function setProgress(e){
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration
}




// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);
