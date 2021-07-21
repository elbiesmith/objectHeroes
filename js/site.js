let heroes = JSON.parse(localStorage.getItem('heroesArray')) || [];
let results = document.getElementById('results');


function getValues() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let heroName = document.getElementById('heroName').value;
    let hero = {};

    if (firstName == '' || lastName == '' || heroName == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'This database is for KNOWN hero Aliases',
            confirmButtonColor: '#1c1f23',
            footer: `<strong>Search for&nbsp; </strong><a href="https://www.marvel.com/characters#filter_grid-7" target="_blank">Marvel Hero</a> <strong>&nbsp;or&nbsp;</strong> <a href="https://www.dccomics.com/characters#dcbrowseapp" target="_blank">DC Hero</a>&nbsp; <strong>Identity</strong>`
        })
        
    } else {
        hero.firstName = firstName;
        hero.lastName = lastName;
        hero.heroName = heroName;

        addHero(hero);
    }
    //reset form
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('heroName').value = '';
    document.getElementById('firstName').focus();
}


function addHero(hero) {    
    heroes.push(hero);
    localStorage.setItem('heroesArray', JSON.stringify(heroes));
    displayHeroes(heroes);
}

function displayHeroes(heroes) {
    let results = document.getElementById('results');
    results.innerHTML = '';
    

    for (let i = 0; i < heroes.length; i++) {
        // results.innerHTML += `<p>First Name: ${heroes[i].firstName}, Last Name: ${heroes[i].lastName}, Hero Name: ${heroes[i].heroName}</p>`;
        results.innerHTML += `<div class="card my-2"><div class="card-body"><strong>First Name:</strong> ${heroes[i].firstName}<br> 
                              <strong>Last Name:</strong> ${heroes[i].lastName} <br><strong>Hero Name:</strong> ${heroes[i].heroName}</div></div>`;
    }
}

function resetHeroes() {
    results.innerHTML = '';
    heroes = [];
    localStorage.clear();
    window.location.reload();
    document.getElementById('firstName').focus();

}