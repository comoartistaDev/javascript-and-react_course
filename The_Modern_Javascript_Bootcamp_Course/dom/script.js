const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

todo.setAttribute('class', 'done');

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
newImg.style.width = '500px';

document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Mr Bubz Video! Click me';
newLink.href = 'https://images.unsplash.com/photo-1669798158874-9c05aa89d71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

document.querySelector('p').appendChild(newLink);

append()
prepend()