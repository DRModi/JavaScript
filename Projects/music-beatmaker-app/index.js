window.addEventListener("load" , () => {

	
	//retrieve all the sounds using html tag class=sound.
	const sounds = document.querySelectorAll(".sound");
	
	
	//retrieve all the pads div
	const pads = document.querySelectorAll(".pads div");
	
	//retrive the visual area
	const visual = document.querySelector(".visual");
	
	//get the colors from the stylesheet for the bubble.
	const colors = [
		"#60d394",
		"#d36060",
		"#c060d3",
		"#d3d160",
		"#6860d3",
		"#60b2b3"
	];
	
	console.log(sounds);
	
	//iterate all the sounds
	pads.forEach((pad, index) => {
		pad.addEventListener('click', function(){
			sounds[index].currentTime = 0; // This will reset the time, so multiple click / back to back click will play the sound. Otherwise it will complete the full track.
			sounds[index].play();
			
			// Adding index for creating bubbles according to the tapped the music button.
			createBubbles(index);
		});
	});
	
	//create bubbles
	const createBubbles = index => {
		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = "jump 1s ease"; //CSS animation property
		
		//remove each created element - Otherwise it will keep creating new bubble and that are never deleted till app is not refreshed.
		bubble.addEventListener("animationend", function() {
			visual.removeChild(this);
		});
		
	};
	
});