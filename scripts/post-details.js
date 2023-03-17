const url = new URL(location.href);
const postId = url.searchParams.get('postID');

const postDiv = document.getElementById('post-detail');
const commentsDiv = document.getElementById('comments');

fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(detail => detail.json())
    .then(detail => {

        const ulDiv = document.createElement('div');
        ulDiv.classList.add('post-ul');

        for (const item in detail) {

            const ul = document.createElement('ul');
            ul.classList.add('postUL');

            const detLi = document.createElement('li');
            detLi.classList.add('post-detail-li');

            const detLi1 = document.createElement('li');
            detLi1.classList.add('inner-li');

            let newItem = item[0].toUpperCase() + item.slice(1);
            detLi.innerText = `${newItem}:`;
            detLi1.innerText = `${detail[item]}`;

            ul.append(detLi, detLi1);
            ulDiv.appendChild(ul);
            postDiv.appendChild(ulDiv);
        }
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(comments => comments.json())
    .then(comments => {

        const commUl = document.createElement('ul');
        commUl.classList.add('comments-ul');

        for (const item in comments) {

            const commLi = document.createElement('li');
            commLi.classList.add('comments-li');
            commLi.innerHTML = `<img class="img" src="../images/pngwing.png" alt="icon">`

            for (const i in comments[item]) {

                const p = document.createElement('p');

                p.innerText = `${i} - ${comments[item][i]}`;

                commLi.appendChild(p);
            }


            commUl.appendChild(commLi);
            commentsDiv.appendChild(commUl);
        }
    });

const buttonHome = document.getElementById('home');
buttonHome.onclick = function () {
    window.open('../index.html', '_self');
}