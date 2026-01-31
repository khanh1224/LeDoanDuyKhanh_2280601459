function test(data) {
    console.log("Du lieu trong ham test:", data);
}

fetch('https://jsonplaceholder.typicode.com/photos/1')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        test(data);
    })
    .catch(function (error) {
        console.error(error);
    });
