
let sheetId = "********************"; // Google Sheet Id
let sheetNumber = 1; // Google Sheet number

$.getJSON(`https://spreadsheets.google.com/feeds/list/${sheetId}/${sheetNumber}/public/values?alt=json`, function(data) {

		let headInfo = data.feed.title.$t;
		let entryData = data.feed.entry;

		$('#heading').html(`<h1> ${headInfo} </h1>`);

		jQuery.each(entryData, function () {
			$('.tBody').append(`
				<div class="tRow">
					<div class="tCell">${this.gsx$rank.$t}</div>
					<div class="tCell">${this.gsx$city.$t}</div>
					<div class="tCell">${this.gsx$country.$t}</div>
				</div>
				`);
		});
});