const usersBox = document.getElementsByClassName('usersBox')[0];

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(users => users.map(value => {
        let userBlock = document.createElement('div');
        let userLink = document.createElement('a');

        userBlock.innerHTML = `${value.id} - ${value.name}`;
        userLink.innerText = `User details`;
        userLink.href = `../user-details/user-details.html?user=${JSON.stringify(value)}`

        userBlock.classList.add('userBlock');

        userBlock.append(userLink);
        usersBox.append(userBlock);
    }));


