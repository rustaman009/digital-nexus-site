let searchForm= document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=() =>
{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm= document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=() =>
{
    searchForm.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=() =>
{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>
{
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


const search =() =>{
    const searchbox =document.getElementById("search-box").value.toUpperCase();
    const storeitems =document.getElementById("box-container")
    const product =document.querySelectorAll(".box")
    const pname=storeitems.getElementsByTagName("h3")
  

    for(var i=0; i<pname.length; i++){
        let match = product[i].getElementsByTagName('h3')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toLocaleUpperCase().indexOf(searchbox) > -1){
                product[i].style.display ="";

            }else{
                product[i].style.display = "none";
            }
        }
    }
}






