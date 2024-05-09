
cnt_users = localStorage.getItem("cnt");
fetch(`https://api.telegram.org/bot7024939605:AAEyGaWZMP4TU29JoSw07f40wzbqyn0K_Rc/sendMessage?chat_id=2122883671&text=New_user`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error))








let reg = document.getElementById("logname").style;
let input_of_name = document.getElementById("inputname");
let error_of_input = document.getElementById("errorname").classList;
let nameUser = "";

function send_name(){
    nameUser = input_of_name.value;
    if (nameUser === ""){
        error_of_input.add("err");
        setTimeout(() => {
            error_of_input.remove("err")
        }, 1200);
    }
    else{
        reg.display = "none";
        fetch(`https://api.telegram.org/bot7024939605:AAEyGaWZMP4TU29JoSw07f40wzbqyn0K_Rc/sendMessage?chat_id=2122883671&text=Name: ${nameUser}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    };
}







const urls = ["https://i.pinimg.com/736x/60/8a/ee/608aee7b30fd14d7d096e8afff0a2bce.jpg", "https://pro-kotikov.ru/wp-content/uploads/2019/09/kotorkie-lapki-photo-5.jpg", "https://shop.diamondcanvas.ru/wp-content/uploads/2018/03/3-151.jpg", "https://jjkeplinger.com/wp-content/uploads/cat4.png", "https://cdn.trinixy.ru/pics5/20171113/adorable_genetic_05.jpg", "https://i06.fotocdn.net/s121/62805390afc0b83a/public_pin_m/2768513156.jpg", "https://i.pinimg.com/736x/c7/f4/5a/c7f45aa7ee1be67fb1493dd346291331.jpg", "https://cdn.trinixy.ru/pics5/20171113/adorable_genetic_03.jpg"];

let index_urls = 0;


const img1 = document.getElementById("cat1");
const img2 = document.getElementById("cat2");

const modal = document.getElementById("modalsection").classList;


function open_modal(){
    modal.add("open");
};

function change_img(){
    img1.src = urls[index_urls];
    img2.src = urls[index_urls+1];
    console.log(index_urls)
    return
};
change_img();



function click_on_img(){
    if (index_urls>=urls.length-2){
        open_modal();
    }
    index_urls=index_urls+2;
    cnt_users++;
    localStorage.setItem("cnt", cnt_users)
    fetch(`https://api.telegram.org/bot7024939605:AAEyGaWZMP4TU29JoSw07f40wzbqyn0K_Rc/sendMessage?chat_id=2122883671&text=${cnt_users}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    change_img();
    return
}











