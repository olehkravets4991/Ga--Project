const $searchForm = $("form");




$searchForm.on("submit", event => {
    event.preventDefault();

    //generate data from the target object
    const formData = new FormData(event.target);

    //get the value from the generated data where the name value is "character" (on the form)
    const character = formData.get("character").toLowerCase();

    const url = `https://anapioficeandfire.com/api/characters/${character}`

    // function numberToName(number){
    //     const numberMapping = {
    //         1: '',
    //         2: 'Walder',
    //         3: '',
    //         4: '',


    //     }
    //     if(number in numberMapping){
    //         return numberMapping[number];
    //     }
    //     else{
    //         return 'Name not founds';
    //     }

    
    // }
    
    // console.log(numberToString())

    // async function getCharacterToNumber(character){
    //     try{
    //         const response = await fetch(`https://anapioficeandfire.com/api/characters/${character}`);
    //         if(response.ok){
    //             const data = await response.json();
    //             return data.number;
    //         } else {
    //             throw new Error( 'Failed to retrieve number for the name');
    //         }
    //     } catch (error){
    //         console.error(erroe);
    //         return null
    //     }
    //    }

   document.getElementById("catalogButton").addEventListener("click", function() {
  var nameList = document.getElementById("nameList");
  var names = ["583-Jon Snow", "12-Balon Greyjoy", "16-Margaery Tyrell", "27-Tywin Lannister","38-46-Aegon's","60-Aeron Greyjoy","148-Arya Stark","168-Barristan Selmy","181-Benjen Stark","208-Brandon Stark","216-Brienne of Tarth","217- Bronn","232-Catelyn Stark","238-Cersei Lannister","271-Daenerys Targaryen","339-Eddard Stark","385-Euron Greyjoy","529-Jaime Lannister","547-Jeor Mormont","565-Joffrey Baratheon","572-Jon Arryn","613-Lancel Lannister","640-Loras Tyrell","649-Lothar Frey","688-Lysa Arryn","743-Melisandre","775-Myrcella Baratheon","783-Olene Tyrell","823-Petyr Baelish","849-Ramsay Snow","850-Randyll Tarly","862-Renly Baratheon","867-Rhaegar Targaryen","891-Rickon Stark","901-Robert I Baratheon","933-Roose Bolton","954-Samwell Tarly","955-Sandor Clegane","957-Sansa Stark","1022-Theon Greyjoy","1029-Tommen Baratheon","1052-Tyrion Lannister","1079-Viserys Targaryen","1093-Walder Frey"]; 
  
  nameList.innerHTML = "";

  names.forEach(function(name) {
    var li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
});
    
    
    const $screen = $(".screen");
    const $result = $(".result");

    //empty out the input field
    $('[name="character"]')[0].value = "";

    //empty out the input field
    $('[name="character"]')[0].value = "";
    const $characterImg = $(".character-image")
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        $characterImg.html(
            `<img src=${data} alt=${data.name}>`
        );
        $result.html(`
            <div>
                <b>name:&nbsp;</b> ${data.name}
            </div>
            <div>
                    <b>gender:&nbsp;</b> ${data.gender}
                </div>

                <div>
                    <b>culture:&nbsp;</b> ${data.culture}
                </div>
                <div>
                    <b>born:&nbsp;</b> ${data.born}
                </div>

                <div>
                    <b>titles:&nbsp;</b> ${data.titles}
                </div>
                <div>
                    <b>aliases:&nbsp;</b> ${data.aliases}
                </div>
                <div>
                    <b>books:&nbsp;</b> ${data.books}
                </div>
                <div><b>playedBy:&nbsp;</b> ${data.playedBy}
            </div>


        `)
    })
    .catch(() => {
        $result.html(`<div> there was an error...</div>`)
    });
});


