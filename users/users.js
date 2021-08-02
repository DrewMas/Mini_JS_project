const usersBox = document.getElementsByClassName('usersBox')[0];

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(value => value.json())
    .then(users => users.map(value => {
        const userBlock = document.createElement('div');
        const userLink = document.createElement('a');
        const userDetailsBtn = document.createElement('button');
        userDetailsBtn.innerText = `User details`;
        userDetailsBtn.classList.add('btn');

        userBlock.innerHTML = `${value.id} - ${value.name}`;
        userLink.href = `../user-details/user-details.html?user=${JSON.stringify(value)}`


        userBlock.classList.add('userBlock');

        userLink.append(userDetailsBtn);
        userBlock.append(userLink);
        usersBox.append(userBlock);
    }));


