const url = "https://fakestoreapi.com/products/category/men's clothing"

async function chamarApi() {
    const res = await fetch(url);

    if(res.status === 200){
        const apires = await res.json();
        console.log(apires)
    }
}

chamarApi();