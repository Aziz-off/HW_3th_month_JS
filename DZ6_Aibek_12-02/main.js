const baseURL = 'https://jsonplaceholder.typicode.com';

const endpoints = {
    posts: '/posts'
};

const getRequest = () => {
    fetch(`${baseURL}${endpoints.posts}`, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    }).then(data => {
        console.log(data);
    });
};

getRequest();



const usersPost = {
    userId: 11,
    title: "You are so shy",
    body: "Be be be be be some lorem text blah blah blah and some other body text ha ha ha"
};

const addNewPost = (usersPost) => {
    fetch(`${baseURL}${endpoints.posts}`, {
        method: 'POST',
        body: JSON.stringify(usersPost),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then(data => {
        console.log(data);
    });
};

addNewPost(usersPost);

