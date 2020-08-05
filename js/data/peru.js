export default function dataPeru(){
    const d= document,
    $fetchAsync = d.getElementById('fetch'),
    $fragment = d.createDocumentFragment();
    
    let date = new Date();
    let day = date.getDate();


    async function getData(){
        try {
            let res = await fetch(`https://api.covid19api.com/total/country/peru/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-07-${day}T00:00:00Z`);
            let json = await res.json();

            if(!res.ok) throw {status: res.status, statusText: res.statusText}

            json.forEach(e => {
                
                const $tr = document.createElement("tr");
                $tr.setAttribute("class", "tr-data");
                
                $tr.innerHTML = `
                    <td>
                        ${e.Country}
                    </td>
                    <td>
                        ${e.Cases}
                    </td>
                    <td>
                        ${e.Status.toUpperCase()}
                    </td>
                    <td>
                        ${e.Date}
                    </td>
                `;
                $fragment.appendChild($tr);
                
            });
            $fetchAsync.appendChild($fragment);

        }catch (err) {
            let $mensaje = err.statusText || "Ocurrio un error";
            $fetchAsync.innerHTML = `Error ${err.status}: ${$mensaje}`;
        }
    }
    getData();
    
}