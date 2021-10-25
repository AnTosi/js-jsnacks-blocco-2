const teams = [
    {
        "nome": "Juventus",
        "punti": 0,
        "falli": 0  
    },

    {
        "nome": "Inda",
        "punti": 0,
        "falli": 0  
    },

    {
        "nome": "Bilan",
        "punti": 0,
        "falli": 0  
    },

    {
        "nome": "Riomma",
        "punti": 0,
        "falli": 0  
    },

    {
        "nome": "Lazzie",
        "punti": 0,
        "falli": 0  
    },
]

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.punti = Math.floor(Math.random() * (100 - 0) ) + 0;
    team.falli = Math.floor(Math.random() * (100 - 0) ) + 0;
    console.log(team);
    
}