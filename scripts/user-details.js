const url = new URL(location.href),
    json = url.searchParams.get('data'),
    users = JSON.parse(json);

const container = document.getElementById('user-container');
const postTitle = document.getElementById('post-title');
const button = document.getElementById('button-user-posts');

function flatter(object) {

    for (const key in object) {

        if (typeof object[key] === 'object') {

            const div1 = document.createElement('div');
            div1.classList.add('div1');

            let newKey = key[0].toUpperCase() + key.slice(1);

            div1.innerText = `${newKey}:`;

            container.appendChild(div1);

            flatter(object[key]);

        } else {

            const div = document.createElement('div');
            div.classList.add('data');

            let newKey = key[0].toUpperCase() + key.slice(1);

            div.innerHTML = `<div class="key">${newKey}:</div> <div class="value">${object[key]}</div>`;

            container.appendChild(div);
        }
    }
}
flatter(users);


button.onclick = function () {

    postTitle.innerHTML = '';

    fetch(`https://jsonplaceholder.typicode.com/users/${users.id}/posts`).
    then(posts => posts.json()).
    then(posts => {

        for (const item in posts) {

            const titleDiv = document.createElement('div');
            titleDiv.classList.add('title-div');
            titleDiv.innerText = `${posts[item].title}`;

            const button = document.createElement('button');
            button.classList.add('button-details');
            button.innerText = 'Details';

            button.addEventListener('click', function () {
                window.open('post-details.html?postID=' + posts[item].id, '_self');
            });

            titleDiv.appendChild(button);
            postTitle.appendChild(titleDiv);
        }
    });

    container.classList.remove('container');
    container.classList.add('new-container');

}
const buttonHome = document.getElementById('home');
buttonHome.onclick = function () {
    window.open('../index.html', '_self');
}