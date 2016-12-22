var timeSlotModule = (function(){
	var slots = [];
	var slotsContainer = document.createElement('div');
	var time = '';
	var i=0;
	var tr = {};
	for (i=0; i<25; i++) {
		slots.push(9*60+i*30);
	}
	for (i=0; i<slots.length; i++) {
		if (slots[i]%60 === 0) {
			time = slots[i]/60 + ':00' +'<span class="am"> AM</span>';
			oddRowDiv = document.createElement('div');
			oddRowDiv.className = 'odd';
			oddRowDiv.innerHTML = time;
			slotsContainer.appendChild(oddRowDiv);
		} else {
			time = parseInt(slots[i]/60) + ':' + '30';
			evenRowDiv = document.createElement('div');
			evenRowDiv.className = 'even';
			evenRowDiv.innerHTML = time;
			slotsContainer.appendChild(evenRowDiv);
		}
		
	}
	return slotsContainer;
})()