var button = document.getElementById('buttons');
button.addEventListener('click', () => {
    
    const input_value = document.getElementById("searchTxt").value;
    document.getElementById('searchTxt').value =''
    fetch('https://api.jikan.moe/v4/anime?q='+  input_value +'&sfw')
    .then(res => {
        return res.json();
        }).then(animedisplay
        ).catch(err => {
        console.log(err);
        })
         
        });

var display = document.getElementById("anime-display");
        const animedisplay=(animeapi)=> {

  
            let count = `${animeapi.pagination.items.total}`;
  
            for (let i = 0 ; i < count ; i++){
             if(animeapi.data[i].trailer.embed_url !== null){
                display.innerHTML +=  ` <div class="column">
                <div class="animeImage">
                <iframe class="youtube" src="`+ animeapi.data[i].trailer.embed_url + `frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                <div class="card-body">
                    <h4 class="card-title">Card Title</h4>
                    <p class="card-text">Here is a longer description of the card and the height will be auto aligned with
                        flex box.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Here is a footer</small>
                </div>
            </div>`
           }
            }
          
            
        }
