document.title = `catrpg.${game["version"]}`;

function update(dot) {
    if (dot == "all" || dot == "tabs") {
        for (let i = 0; i < Object.getOwnPropertyNames(game["tabs"]).length; i++) {
            if (game["tabs"][Object.getOwnPropertyNames(game["tabs"])[i]] == false) {
                document.getElementById(`page_${Object.getOwnPropertyNames(game['tabs'])[i]}`).style.display = 'none'
            } else {
                document.getElementById(`page_${Object.getOwnPropertyNames(game['tabs'])[i]}`).style.display = ''
            }
        }
    }
}

update("all")