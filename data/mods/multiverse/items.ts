export const Items: {[itemid: string]: ItemData} = {
	mawilelite: {
		name: "Mawile-Lite",
		spritenum: 1,
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Huge Power', '[from] ability: Intimidate', '[of] ' + pokemon);
			pokemon.setAbility('hugepower');
		},
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Mawile') return false;
			return true;
		},
		num: -1,
		gen: 8,
		shortDesc: "When held by Mawile, Changes Intimidate to Huge Power.",
	},
	earthplate: {
		inherit: true,
		isNonstandard: null,
	},
	smokebomb: {
		name: "Smoke Bomb",
		spritenum: 1,
		onTakeItem(item, source) {
			if (source.baseSpecies.baseSpecies === 'Greninja') return false;
			return true;
		},
		onModifyMove(move, source, target) {
			if (move.id !== 'Dig') return;
			if (source.species.id === 'greninja') {
				move.basePower = 100;
				delete move.flags['charge'];
				move.smokebomb = true;
			}
		},
		onChargeMove (pokemon, target, move) {
			if (move.smokebomb && pokemon.useItem()) {
				this.debug('smoke bomb - remove charge turn for ' + move.id);
				this.attrLastMove('[still]');
				this.addMove('-anim', pokemon, move.name, target);
				return false; // skip charge turn
			}
		},
		num: -2,
		gen: 8,
		shortDesc: "When held by Greninja, Dig: +20 BP & 1 turn. Single Use.",
	},
};