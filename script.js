const url = "https://jsonplaceholder.typicode.com/users";
let userdetail = document.createElement('div')
let row=document.getElementById('row')


async function getuserdata() {
    let data = await fetch(url);
    let res = await data.json(); 
    console.log(res)
    
    for(let i=0; i<res.length;i++)
    {
    let userdetail = document.createElement('div')
    userdetail.setAttribute("class","col-lg-3")
     userdetail.innerHTML = `
        <div class="card bg-info rounded-0 border border-2 w-100 h-100 m-3">
            <div class="card-body border border-dark">
                <div class="card-text fw-bold p-0">${res[i].name}</div>
                <div class="card-text p-1">${res[i].email}</div>
                <div class="card-text p-0 fs-6">Street:${res[i].name}</div>
                <div class="card-text p-0 fs-6">City:${res[i].address.street} ${res[i].address.city}</div>
            </div>
        </div>`
    row.append(userdetail)
    }
    
}
getuserdata();



