save = {
	"skills": {
		"mining": {
			"level": 1,
			"xp": 0,
		}
	},
	"inventory": {
		"coal": 1,
		"copper_ore": 1,
	}
}

game = {
	"version": "b2.0.0",
	"tabs": {
		"home": true,
		"inventory": false,
		"settings": false,
		"mining": false,
	},
	"active": {
		"node": null,
		"nodeSkill": null
	},
	"items": {
		"coal": {
			"displayName": "Coal",
			"value": 4,
		},
		"copper_ore": {
			"displayName": "Copper ore",
			"value": 4
		}
	},
	
	"nodes": {
		"mining": {
			"coal": {
				"displayName": "Coal",
				"level": 1,
				"minXp": 5,
				"maxXp": 6,
				"item": "coal",
				"buttonText": "mine",
			},
			"copper_ore": {
				"displayName": "Copper ore",
				"level": 1,
				"minXp": 5,
				"maxXp": 6,
				"item": "copper_ore",
				"buttonText": "mine",
			}
		}
	}
}