document.title = "catrpg - " + game["version"]
document.getElementById("version").innerHTML = game["version"]
console.log(`loaded version ${game["version"]}`) // debug

function nodeSwitch(node, skill) {
	if (game["active"]["node"] == node && game["active"]["nodeSkill"] == skill) { // checks if the skill that we pushed is the same one active
		game["active"]["node"] = null
		game["active"]["nodeSkill"] = null
		stopNode()
	} else if (game["active"]["node"] == null && game["active"]["nodeSkill"] == null) {
		game["active"]["node"] = node
		game["active"]["nodeSkill"] = skill
		startNode()
	}
	console.log(game["active"]["node"]) // debug
	console.log(game["active"]["nodeSkill"]) // debug
	update("nodes")
}

function ran(min, max) { // random number generator
	
}

function startNode() {
	nodeLoop = setInterval(function() {
		console.log(game["active"]["node"]) // debug
		
		if (game["active"]["nodeSkill"] == "mining") {
			
		}
	}, 1000)
}

function stopNode() {
	clearInterval(nodeLoop)
}

function drawNodes(style, skill) {
	if (style == 1) { // resource gavering skills (eg, fishing, mining, woodcutting)
		console.log(skill) // debug
		$(`#nodeHolder_${skill}`).empty()
		for (let i = 0; i < Object.getOwnPropertyNames(game["nodes"][skill]).length; i++) { // gets all nodes for a skill
			// variables
			let nodeName = Object.getOwnPropertyNames(game["nodes"][skill])[i]
			let nodeDisplayName = game["nodes"][skill][nodeName]["displayName"]
			let nodeItem = game["nodes"][skill][nodeName]["item"]
			let nodeMinXp = game["nodes"][skill][nodeName]["minXp"]
			let nodeMaxXp = game["nodes"][skill][nodeName]["maxXp"]
			let nodeButtonText = game["nodes"][skill][nodeName]["buttonText"]
			let nodeLevel = game["nodes"][skill][nodeName]["level"]
			
			if (save["skills"][skill]["level"] >= nodeLevel) {
				console.log("level high enough continuing") // debug
				
				// creating elements
				let nodeHolder = document.querySelector(`#nodeHolder_${skill}`)
				let nodeBox = document.createElement("div")
				let nodeBoxTop = document.createElement("div")
				let nodeBoxBottom = document.createElement("div")
				let nodeBoxTopText = document.createElement("p")
				let nodeBoxButton = document.createElement("button")
				
				nodeBox.className = "twentytwoBox"
				
				nodeBoxTop.className = "boxTop"
				nodeBoxBottom.className = "boxBottom"
				
				nodeBoxButton.className = "nodeButton_1"
				if (skill == game["active"]["nodeSkill"] && nodeName == game["active"]["node"]) {
					nodeBoxButton.className = "nodeButtonActive_1 nodeButton_1"
				}
				
				
				nodeBoxButton.onclick = function() { nodeSwitch(nodeName, skill) }
				nodeBoxButton.innerHTML = nodeButtonText
				
				nodeBoxTopText.className = "boxTop_text"
				nodeBoxTopText.innerHTML = nodeDisplayName
				
				nodeBoxTop.appendChild(nodeBoxTopText)
				nodeBoxBottom.appendChild(nodeBoxButton)
				
				nodeBox.appendChild(nodeBoxTop)
				nodeBox.appendChild(nodeBoxBottom)
				nodeHolder.appendChild(nodeBox)
			} else {
				console.log("level not high enough ignoring") // debug
			}
		}
	}
}


function tabSwitch(tabName) {
	for (let i = 0; i < Object.getOwnPropertyNames(game["tabs"]).length; i++) {
		game["tabs"][Object.getOwnPropertyNames(game["tabs"])[i]] = false
	}
	game["tabs"][tabName] = true
	update("tabs")
}

function update(dot) {
	if (dot == "all" || dot == "tabs") {
		$("#tabHolder").empty()
		for (let i = 0; i < Object.getOwnPropertyNames(game["tabs"]).length; i++) {
			let tabName = Object.getOwnPropertyNames(game["tabs"])[i]
			
			let tabHolder = document.querySelector("#tabHolder")
			let tabButton = document.createElement("button")
			
			if (Object.getOwnPropertyNames(game["nodes"]).includes(tabName)) { // checks if the tabname is a skill
				tabButton.innerHTML = `${tabName} ${save["skills"][tabName]["level"]}/20`
			} else {
				tabButton.innerHTML = tabName
			}
			
			tabButton.onclick = function() { tabSwitch(tabName) }	
			
			if (game["tabs"][tabName] == true) {
				tabButton.className = "sideBar_button sideBar_buttonActive"
				document.getElementById(`page_${tabName}`).style.display = ""
			} else {
				tabButton.className = "sideBar_button"
				document.getElementById(`page_${tabName}`).style.display = "none"
			}
			
			tabHolder.appendChild(tabButton)
			
		}
	} 
	if (dot == "all" || dot == "nodes") {
		for (let i = 0; i < Object.getOwnPropertyNames(game["nodes"]).length; i++) {
			if (Object.getOwnPropertyNames(game["nodes"])[i] == "mining") {
				drawNodes(1, Object.getOwnPropertyNames(game["nodes"])[i])
			}
		}
	}
}

update("all")