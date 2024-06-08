










const cnt_mess = document.getElementById("status_message").style;

//let new_message;
//try{
//    if (localStorage.getItem("new_message", new_message)){
//        cnt_mess.visibility = 'hidden';
//    }
//}
//catch{
//    console.log(1)
//}













const chat = document.getElementById("current_chat").classList;


function open_chat(){
    //new_message = 1
    //localStorage.setItem("new_message", new_message);
    cnt_mess.visibility = 'hidden';
    chat.add("open_chat");
};

function close_chat(){
    chat.remove("open_chat");
};
