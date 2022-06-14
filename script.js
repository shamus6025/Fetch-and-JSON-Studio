window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json) {
            const sortObject = obj => {
                const arr = json.keys(obj).map(el => {
                   return obj[el];
                });
                arr.sort((a, b) => {
                   return a - b;
                });
                return arr;
             };
             console.log(sortObject(json));

               const container = document.getElementById("container"); 
           let html = '';
           for(let astronaut of json){
               html += `
               <div class="astronaut">
                   <div class="bio">
                       <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                            <ul>
                            <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills}</li>
                            </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}" alt = "${astronaut.firstName} ${astronaut.lastName}">
                </div>
                `
           }
           container.innerHTML = html;
        });
     });
})

