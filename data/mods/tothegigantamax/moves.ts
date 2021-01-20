export const Moves: {[k: string]: ModdedMoveData} = {
	gmaxbeheading: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Beheading",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Scyther",
		self: {
			onHit(source) {
				this.field.setTerrain('gmaxbeheading');
			},
		},
		condition: {
			duration: 5,
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Bug') {
					this.debug('G-Max Beheading boost');
					return this.chainModify(2);
				}
			},
			onStart(battle, source, effect) {
				this.add('-fieldstart', 'move: G-Max Beheading');
			},
			onEnd() {
				this.add('-fieldend', 'move: G-Max Beheading');
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
	},
	gmaxhornsharpening: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Horn Sharpening",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Heracross",
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.side.active) {
					this.boost({spe: 1, accuracy: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Bug",
		contestType: "Cool",
	},
	gmaxrockcrash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Rock Crash",
		pp: 10,
		priority: 0,
		flags: {contact: 1},
		isMax: "Lycanroc-Dusk",
		secondary: null,
		target: "adjacentFoe",
		type: "Rock",
		contestType: "Cool",
	},
	gmaxanion: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Anion",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Magnezone",
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Steel",
		contestType: "Cool",
	},
	gmaxsubzerofossil: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Subzero Fossil",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Arctozolt",
		self: {
			onHit(source) {
				if (!source.volatiles['dynamax']) return;
				for (const pokemon of source.side.foe.active) {
					this.boost({spe: -1}, pokemon);
				}
				for (const pokemon of source.side.active) {
					this.boost({atk: 1}, pokemon);
				}
			},
		},
		target: "adjacentFoe",
		type: "Ice",
		contestType: "Cool",
	},
	gmaxvenomousstrike: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "G-Max Venomous Strike",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "Scolipede",
		self: {
			onHit(source) {
				source.side.foe.addSideCondition('toxicspikes');
				source.side.foe.addSideCondition('toxicspikes');
			},
		},
		ignoreImmunity: true,
		secondary: null,
		target: "adjacentFoe",
		type: "Poison",
		contestType: "Cool",
	},
	/*
	gmaxcoralcurse: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxconstructionhazards: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxdarkerpursuit: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxoperetta: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxdoomsday: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxkaleidoscope: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxgreentea: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxlandtremble: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxmoonsault: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxsharpenediceberg: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxarrowraid: {
		num: 1000,
		accuracy: true,
		basePower: 160,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxfutureshock: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxbugshield: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxmeddling: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxbellyswirl: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxgaleforce: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxpetalshake: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxconversionseizure: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxkeylock: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxshellshock: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxpuffup: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxgravedig: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxbeastlyiron: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxcruelchill: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxsparkingstrikes: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxdevastation: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxrebellion: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxrecoil: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxdesolatingdrought: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxdrizzlingdownpour: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxcrystalhail: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxslimeslide: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxazureflare: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxbreakdown: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxshootingstar: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxswamp: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxmountaincrash: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxiceage: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxmolteniron: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxhaywire: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxsupernova: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxmistymayhem: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	gmaxdescendingdragon: {
		num: 1000,
		accuracy: true,
		basePower: 10,
		category: "Physical",
		isNonstandard: "Gigantamax",
		name: "",
		pp: 10,
		priority: 0,
		flags: {},
		isMax: "",
		secondary: null,
		target: "adjacentFoe",
		type: "",
		contestType: "Cool",
	},
	*/
};