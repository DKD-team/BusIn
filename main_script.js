const review=document.getElementById("review");
const companies=document.getElementById("companies");
const faces=document.getElementById("faces");
const sales=document.getElementById("sales");
const settings=document.getElementById("settings");
const help=document.getElementById("help");
const companies_button=document.getElementById("companies_button");
const review_button=document.getElementById("review_button");
const faces_button=document.getElementById("faces_button");
const sales_button=document.getElementById("sales_button");
const settings_button=document.getElementById("settings_button");
const help_button=document.getElementById("help_button");

const rollup_button=document.getElementById("rollup_button");
const new_company_button=document.getElementById("new_company_button");
const new_face_button=document.getElementById("new_face_button");
const new_sale_button=document.getElementById("new_sale_button");
const close_company_window=document.getElementById("close_company_window");
const close_face_window=document.getElementById("close_face_window");
const close_sale_window=document.getElementById("close_sale_window");
const save_new_company_button=document.getElementById("save_new_company_button");


var pages=[review];






companies_button.addEventListener("click",()=>openPage(companies));
review_button.addEventListener("click",()=>openPage(review));
faces_button.addEventListener("click",()=>openPage(faces));
sales_button.addEventListener("click",()=>openPage(sales));
settings_button.addEventListener("click",()=>openPage(settings));
help_button.addEventListener("click",()=>openPage(help));
rollup_button.addEventListener("click",()=>rollup());
new_company_button.addEventListener("click",()=>new_company());
new_face_button.addEventListener("click",()=>new_face());
new_sale_button.addEventListener("click",()=>new_sale());
close_company_window.addEventListener("click",()=>close_company());
close_face_window.addEventListener("click",()=>close_face());
close_sale_window.addEventListener("click",()=>close_sale());
save_new_company_button.addEventListener("click",()=>save_new_company());



















function openPage(next) {
    let temp=pages[pages.length-1];
    temp.style.display="none";
    next.style.display = 'block';    
    pages.push(next);

}
function rollup(){
    var len=window.getComputedStyle(document.getElementById("navigation"),null);
    var temp=len.getPropertyValue("width");
    if(temp==="225px")
    {
        document.getElementById("navigation").setAttribute("style","width:51px");
        document.getElementById("review_button").setAttribute("style","width:51px");
        document.getElementById("companies_button").setAttribute("style","width:51px");
        document.getElementById("faces_button").setAttribute("style","width:51px");
        document.getElementById("sales_button").setAttribute("style","width:51px");
        document.getElementById("help_button").setAttribute("style","width:51px");
        document.getElementById("exit_button").setAttribute("style","width:51px");
        document.getElementById("settings_button").setAttribute("style","width:51px");
        document.getElementById("rollup_button").setAttribute("style","width:51px");
        

    }
    else{
        document.getElementById("navigation").setAttribute("style","width:225px");
        document.getElementById("review_button").setAttribute("style","width:225px");
        document.getElementById("companies_button").setAttribute("style","width:225px");
        document.getElementById("faces_button").setAttribute("style","width:225px");
        document.getElementById("sales_button").setAttribute("style","width:225px");
        document.getElementById("help_button").setAttribute("style","width:225px");
        document.getElementById("exit_button").setAttribute("style","width:225px");
        document.getElementById("settings_button").setAttribute("style","width:225px");
        document.getElementById("rollup_button").setAttribute("style","width:225px");
        
        
    }
   
    

}

function new_company(){
    document.getElementById("overlay").setAttribute("style","display:block");
    document.getElementById("company_window").setAttribute("style","display:block");
}
function new_face(){
    document.getElementById("overlay").setAttribute("style","display:block");
    document.getElementById("face_window").setAttribute("style","display:block");
}
function new_sale(){
    document.getElementById("overlay").setAttribute("style","display:block");
    document.getElementById("sale_window").setAttribute("style","display:block");
}
function close_company(){
    document.getElementById("overlay").setAttribute("style","display:none");
    document.getElementById("company_window").setAttribute("style","display:none");
}
function close_face(){
    document.getElementById("overlay").setAttribute("style","display:none");
    document.getElementById("face_window").setAttribute("style","display:none");
}
function close_sale(){
    document.getElementById("overlay").setAttribute("style","display:none");
    document.getElementById("sale_window").setAttribute("style","display:none");
}
function save_new_company(){
    let company=document.getElementById("companies");
    let first_input=document.getElementById("new_company_name_input");
    if(first_input.value.length>0)
    {
        let second_input=document.getElementById("new_company_site_input");
        let third_input=document.getElementById("new_company_phone_input");
        let forth_input=document.getElementById("new_company_address_input");
        let fifth_input=document.getElementById("new_company_location_input");
        company.insertAdjacentHTML('beforeend','<div class="company_table_header">'+'<p class="company_item">'+first_input.value+'</p>'
        +'<p class="company_item">'+second_input.value+'</p>'+'<p class="company_item_phone">'+third_input.value+'</p>'+'<p class="company_item_address">'+forth_input.value+'</p>'
        +'<p class="company_item_location">'+fifth_input.value+'</p>'+'</div>'+'<hr align="center" width="100%">');
        close_company();

    }
    else{
        alert("Вы не ввели название компании!");
    }
    
}





