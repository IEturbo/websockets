//make connection
setInterval(()=>{
    var socket = io.connect('http://localhost:4000');
    var li = document.createElement(li);
    li.append(socket.ids);
    document.getElementById('ul').append(
        li
    )
},1000)