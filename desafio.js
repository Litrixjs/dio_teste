let nomeHeroi = "Bastião"
let XP = 10001
let nivelHeroico = 0

if (XP < 1000) {
    nivelHeroico = "Ferro"
} else if (XP >= 1001 && XP <= 2000) {
    nivelHeroico = "Bronze"
} else if (XP >= 2001 && XP <= 5000) {
    nivelHeroico = "Prata"
} else if (XP >= 5001 && XP <= 7000) {
    nivelHeroico = "Ouro"
} else if (XP >= 7001 && XP <= 8000) {
    nivelHeroico = "Platina"
} else if (XP >= 8001 && XP <= 9000) {
    nivelHeroico = "Ascendente"
} else if (XP >= 9001 && XP <= 10000) {
    nivelHeroico = "Imortal"
} else {
    nivelHeroico = "Radiante"
}

console.log ("O heori de nome " + nomeHeroi + " está no nível " + nivelHeroico)