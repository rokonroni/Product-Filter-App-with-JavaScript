const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementsById("product-list");
    const product = document.querySelectorAll("product");
    const pname = document.getElementsByTagName("h2")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexof(searchbox) >-1) {
                product[i].getElementsByClassName.display = "";
            }
            else {
                product[i].getElementsByClassName.display = "none";
            }
        }
    }
}