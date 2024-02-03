const button = document.getElementById('clickme');
const countDisplay = document.getElementById('clickCount');

let count = 0;

function updateCount(){
    countDisplay = document.getElementById('clickCount')
}

button.addEventListener('click', function() {
    count++;
    updateCount()
})
