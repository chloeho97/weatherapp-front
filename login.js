// Insert your code here




    document.querySelector('#register').addEventListener('click', function () {

        const userEmail = document.querySelector('#registerEmail').value ;
        const userPassword = document.querySelector('#registerPassword').value ;
        const userName = document.querySelector('#registerName').value ;

        const userInput = {
        email : userEmail,
        password : userPassword,
        name : userName,
}

        fetch('weatherapp-backv2.vercel.app/users/signup', {
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify(userInput)
        })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    window.location.assign('index.html');
                  } else {
                    console.log('erreur');
                    document.querySelector('#registerEmail').value="";
                    document.querySelector('#registerPassword').value=""
                  }
    })
})





document.querySelector('#connection').addEventListener('click', function () {

    const userEmail = document.querySelector('#connectionEmail').value ;
    const userPassword = document.querySelector('#connectionPassword').value ;

    const userConnect = {
    email : userEmail,
    password : userPassword,
}

    fetch('https://weatherapp-backv2.vercel.app/users/signin', {
        method: 'POST',
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify(userConnect)
    })
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                window.location.assign('index.html');
              } else {
                console.log('erreur') ; 
                document.querySelector('#connectionEmail').value="";
                document.querySelector('#connectionPassword').value="";
              }
})
})