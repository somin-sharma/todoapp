let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("Message");
let tasks = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button clicked");
    formValidation();

});

let formValidation = ()=>{
    if(input.value === "")
    {
        msg.innerHTML = "post cannot be blank";
        console.log("fail");
    }
    else{console.log("success");
    msg.innerHTML = "";
    acceptdata();
    }
}


let data = {};
let acceptdata = () => {
    data = input.value;
    console.log(data);
    createpost();
};

let createpost = ()=> {
    posts.innerHTML += 

    `<div>
    <p>${data}</p>
        <span class ="options"> 
            <i onclick ="editpost(this)" class="fas fa-edit "></i>
            <i onclick ="deletepost(this)" class="fas fa-trash-alt "></i>
        </span>
    
</div>`;
input.value = "";
};

let deletepost = (e)=> {
    e.parentElement.parentElement.remove();

};

let editpost = (e)=> {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};