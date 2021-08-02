const postDetailsBox = document.getElementsByClassName('postDetailsBox')[0];

const JSONPost = new URL(location).searchParams.get('post');
const post = JSON.parse(JSONPost);

let {id, userId, title, body} = post;

postDetailsBox.innerHTML = `
UserId = ${userId}<br>
ID = ${id}<br>
Title = ${title} <br>
Body = ${body}`;

const commentsBox = document.getElementsByClassName('commentBox')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(comment => comment.map(value => {
        console.log(value);
        let {postId, id, name, email, body} = value;
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
    PostId = ${postId}<br>
    ID = ${id}<br>
    Name = ${name}<br>
    Email = ${email}<br>
    Body = ${body}`;

        commentElement.classList.add('commentElement');
        commentsBox.append(commentElement);
    }))