var sounds_loaded = {
	11: false,
	111: false,
	112: false,
	113: false,
	114: false,
	115: false,
}
// sounds that need to load before starting the game

function reg_sound(n) {
	return function() {
		sounds_loaded[n] = true;
		for (var i in sounds_loaded) {
			if (sounds_loaded[i] == false) return;
		}
		markAssetLoaded("sounds");
	}
}

// define sound names here. Maybe make a manifest for them later.

var bgm_undyne = new Howl({
	onload: reg_sound(10),
	src: "audio/bgm/mus_undyne.ogg",
	loop: true,
	volume: 0.7,
});

var bgm_undyne1 = new Howl({
	onload: reg_sound(11),
	src: "audio/bgm/mus_undyneboss.ogg",
	loop: true,
	volume: 0.7,
});



var se_arrow_ding = new Howl({
	onload: reg_sound(111),
	src: "audio/se/000029aa.wav",
	loop: false,
	volume: 0.7,
});

var se_damage = new Howl({
	onload: reg_sound(112),
	src: "audio/se/000029c3.wav",
	loop: false,
	volume: 0.7,
});

var se_spear_appear = new Howl({
	onload: reg_sound(113),
	src: "audio/se/0000299b.wav",
	loop: false,
	volume: 0.7,
});

var se_spear_shoot = new Howl({
	onload: reg_sound(114),
	src: "audio/se/000029a2.wav",
	loop: false,
	volume: 0.7,
});


var se_attack = new Howl({
	onload: reg_sound(115),
	src: "audio/se/000029c1.wav",
	loop: false,
	volume: 0.7,
});
