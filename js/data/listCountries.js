export default function listAllCountries(){
    const d= document,
    $list = d.getElementById('countries'),
    $fragmentlist = d.createDocumentFragment();

    let southAmerica = [
        "Peru", "Chile", "Bolivia" , "Brazil" , "Colombia" , "Costa Rica" , "Cuba", "Ecuador", 
        "El Salvador" ,"Guatemala", "Haiti" , "Honduras",
        "Jamaica" , "Mexico" , "Nicaragua" , "Paraguay" , "Panama" , 
        "Dominican Republic", "Suriname" , "Uruguay" , "Venezuela"
    ];

    southAmerica.forEach((e) => {
        const $button = document.createElement("button");
        $button.innerHTML = e;
        $button.setAttribute("id", e);
        $button.setAttribute("class", "byCountryBtn");
        $fragmentlist.appendChild($button);
    });  
    $list.appendChild($fragmentlist);

}