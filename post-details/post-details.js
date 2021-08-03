const postDetailsBox = document.getElementsByClassName('postDetailsBox')[0];

const JSONPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JSONPost);

for (const item in post) {
    postDetailsBox.innerHTML += `${item}: ${post[item]}<br>`;
}

const commentsBox = document.getElementsByClassName('commentBox')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comment => comment.map(value => {
        const commentElement = document.createElement('div');

        for (const item in value) {
            commentElement.innerHTML += `${item}: ${value[item]} <br>`;
            commentElement.classList.add('commentElement');
            commentsBox.append(commentElement);
        }
    }))