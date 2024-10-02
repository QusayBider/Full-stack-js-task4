async function getProducts(){

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const products = await response.json();
    const data =products.recipes;
    const result = data.map(function(product){

        return `
        <div class="pizza">
        <h2>${product.title}</h2>
        <img src="${product.image_url}"/>
        </div>
        `;
    }).join('');
    document.querySelector(".row").innerHTML =result;
}
getProducts();
