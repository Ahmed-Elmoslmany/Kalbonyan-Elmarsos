
// AhmedElmoslmany 2023-02-06 11:33:49
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI()

let ticketPrice = +movieSelect.value;


function selectedMovieData(movieIndex, moviePrice){
  localStorage.setItem("selectedMoviePrice", moviePrice)
  localStorage.setItem("selectedMovieIndex", movieIndex)
}


movieSelect.addEventListener('change', e =>{
  ticketPrice = e.target.value;
  selectedMovieData(e.target.selectedIndex, e.target.value)
  
  updateSelectedCount()
})


function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll('.seat.selected')
  
  /*
  const seatIndexes = [...selectedSeats].map(function(seat){
    return [...seats].indexOf(seat);
  })

  Like Below but more shorter.
  */
  const seatIndexes = [...selectedSeats].map((seat) => [...seats].indexOf 
  (seat))
  localStorage.setItem("seatsIndexes", JSON.stringify(seatIndexes))
  const selectedSeatsCound = selectedSeats.length - 1;
  count.innerText = selectedSeatsCound
  total.innerText = selectedSeatsCound * ticketPrice
}

// Get data from localStorage and populate UI
function populateUI(){
  const selectedSeats = JSON.parse(localStorage.getItem('seatsIndexes'))
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
  
  
  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat,index) => {
      if(selectedSeats.indexOf(index) > -1){
        seat.classList.add('selected')
      }
    })
  }

  if(selectedMovieIndex){
    movieSelect.selectedIndex = selectedMovieIndex;
  }

}


container.addEventListener('click', (e) =>{
  if(e.target.classList.contains('seat') &&
  !e.target.classList.contains('occupied')){
    e.target.classList.toggle('selected')
    updateSelectedCount()
  }
})

// Call at end because update selectedSeatsCount and price after any reload
updateSelectedCount()