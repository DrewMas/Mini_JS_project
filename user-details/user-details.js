const userBox = document.getElementsByClassName('userBox')[0];

const JSONUser = new URL(location).searchParams.get('user');
const user = JSON.parse(JSONUser);

let {
    id,
    name,
    username,
    email,
    phone,
    website,
    address: {city, street, suit, zipcode, geo: {lat, lng}},
    company: {bs, catchPhrase, name: companyName}
} = user;

userBox.innerHTML = `User ID: ${id}<br/>
 Name: ${name}<br/>
 Username: ${username}<br/>
 Email: ${email}<hr/>
 Address:<br/>
 Street: ${street}<br/>
 Suit: ${suit}<br/>
 City: ${city}<br/>
 Zipcode: ${zipcode}<br/>
 Geo:<br/>
 Lat: ${lat}<br/>
 Lng: ${lng}<hr/> 
 Phone: ${phone}<br/>
 Website: ${website}<hr/>
 Company:<br/>
 Name: ${companyName}<br/>
 Catch phrase: ${catchPhrase}<br/>
 BS: ${bs}`;

const userPostBtn = document.getElementById('btn');

userPostBtn.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            const postBox = document.getElementsByClassName('postBox')[0];
            postBox.innerHTML = ``;

            posts.map(value => {
                const postElement = document.createElement('div');
                postBox.append(postElement);
                postElement.innerHTML = `${value.id} - ${value.title}`;
                postElement.classList.add('postElement');

                const postDetailsBtn = document.createElement('button');
                postDetailsBtn.innerText = `Post details`;
                postDetailsBtn.classList.add('btn2');

                const btnLink = document.createElement('a');
                btnLink.href = `../post-details/post-details.html?post=${JSON.stringify(value)}`;

                btnLink.append(postDetailsBtn);
                postElement.append(btnLink);
                postBox.append(postElement);


            })
        })
}