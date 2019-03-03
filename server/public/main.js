const socket = io();

// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const inputText = document.querySelector('input[type="text"]');
// const inputSubmit = document.querySelector('input[type="submit"]');
// const h2 = document.querySelector('h2');
// let users = [];
// let currentUser = null;
// userExistsByName = (name) => users.find(user=>(user.name === name))
// userExistsById = (ID) => users.find(user=>(user.id === ID))

// createNewUser = (socket, value) => {
//     const obj = {
//         name: value,
//         id: socket.id
//     }
//     socket.emit('createUser', obj);
//     socket.on('createUser', usersArr => {
//         usersArr.forEach((user, id) => {
//             h2.textContent += (id === users.length - 1) ? `${user.name}, ` : `${user.name}.`
//         });
//         console.log(users)

//     })

// }
io.emit('connection',socket)
//     console.log(socket)
//     users = usersArr;
//     console.log(users)
//     inputText.addEventListener('input', e => {
//         const { value } = e.target;
//         inputSubmit.disabled = (value) ? false : true;
//         console.log(value)

//     })

//     form.addEventListener('submit', e => {
//         e.preventDefault()
//         const value = e.target.querySelector('input').value;
//         // if no user
//         console.log(userExistsById(socket.id))
//         if (userExistsById(socket.id)){
//             currentUser = userExistsById(socket.id)
//         }else {
//             if (userExistsById(socket.id)) {
                
//             }
//                 console.log('open new browser select anothr name')
//                 return;
//         }
//         console.log(currentUser)
        

//         e.target.querySelector('input').value = '';
//     })

// })



console.log('main.js loaded')