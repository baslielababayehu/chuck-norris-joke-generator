// add event listener

const generateButton = document.getElementById('generate-joke-button');

let generateJoke = function (e) {
  const numberOfJokes = document.getElementById('number-of-jokes').value;
  console.log('number-of-jokes');

  xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${numberOfJokes}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      // console.log(response.value.joke);

      let output = '';
      if (response.type === 'success') {
        let output = `<li>${response.value.joke}</li>`;
        response.value.forEach(function (joke) {
          output += `<li>${joke.joke}</li>`;
        });
        // console.log(output);
        document.querySelector('.jokes').innerHTML = output;
      } else {
        let output = '<li>Something went Wrong!</li>';
        document.querySelector('.jokes').innerHTML = output;
      }

      // document.querySelector('jokes').appendChild(output);
    }
  };
  xhr.send();
};

generateButton.addEventListener('click', generateJoke);
