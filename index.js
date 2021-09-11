function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => display(data));
    
}

function display(data){
    const ul = document.getElementById('users');
    for(const user of data){
        
        const li = document.createElement('li');
        li.innerText = `userId: ${user.userId}, id: ${user.id}, title: ${user.title}, body: ${user.body}`;
        ul.appendChild(li);
    }
}