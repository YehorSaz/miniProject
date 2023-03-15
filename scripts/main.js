let url = new URL('https://jsonplaceholder.typicode.com/users');

const  wrapper = document.querySelector('.wrapper');

fetch(url)
    .then(users => users.json())
    .then(users => {

        for (const user of users) {

            let usersDiv = document.createElement('div');
            usersDiv.classList.add('users-div');

            usersDiv.innerHTML = `<h2 class="h2">id: ${user.id} &nbsp ${user.name}</h2>`;

            const button = document.createElement('button');
            button.classList.add('button-info');
            button.name = 'userInfo';
            button.innerText = 'More info';

            button.addEventListener('click', function () {
                window.open('pages/user-details.html?data=' + JSON.stringify(user), '_self');
            });

            usersDiv.appendChild(button);
            wrapper.appendChild(usersDiv);
        }
    });


