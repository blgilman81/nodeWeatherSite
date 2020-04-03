// fetch('http://localhost:3000/weather?address=minneapolis').then(response => {
//         response.json().then(data => {
//                 if (data.error) {
//                         console.log(data.error);
//                 } else {
//                         console.log(data);
//                 }
//         });
// });

const form = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#messageOne');
const messageTwo = document.querySelector('#messageTwo');

form.addEventListener('submit', e => {
        e.preventDefault();
        const location = search.value;
        messageOne.textContent = 'Loading...';
        fetch(`http://localhost:3000/weather?address=${location}`).then(response => {
                response.json().then(data => {
                        if (data.error) {
                                messageOne.textContent = data.error;
                        } else {
                                messageOne.textContent = `Location: ${data.location}`;
                                messageTwo.textContent = data.forecast;
                        }
                });
        });
});
