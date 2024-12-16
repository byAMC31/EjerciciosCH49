const data = { "id": 5, "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "price": 695, "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.", "category": "jewelery", "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "rating": { "rate": 4.6, "count": 400 } };
//const data = null; 

function getData() {
    return new Promise((resolve, reject) => {
        if ((data == null) || (data.length == 0)) {
            reject(new Error("Data is empty"))
        }
        setTimeout(() => {
            resolve(data);
        }, 3000); //60 segundos (1000 * 60)
    })
} //getData

async function fetchingData() {
    try {
        const res = await getData();
        let alertInfo = document.getElementById("alertInfo")
        alertInfo.innerHTML = `<strong>${res.description}</strong>`; alertInfo.style.display = "block";
        console.log(res, typeof (res));
    } catch (err) {
        let alertError = document.getElementById("alerError")
        alertError.innerHTML = `<strong>${err}</strong>`;
        alertError.style.display = "block";
        console.log(err);
    }
}//fetchingData
fetchingData();



// getData()
// .then((response)=>{
//     let alertInfo = document.getElementById("alertInfo")
//     alertInfo.innerHTML= `<strong>${response.description}</strong>`;
//     alertInfo.style.display="block";
//     console.log("respuesta", response);
// })
// .catch((err)=>{
//     let alertError = document.getElementById("alerError")
//     alertError.innerHTML= `<strong>${err}</strong>`;
//     alertError.style.display="block";
//     console.log(err);
// });

