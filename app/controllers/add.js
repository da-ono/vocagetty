var working = false;
var images = [];

function textInputed(e) {
	if (working || e.source.value == "") {
		return;
	}
	working = true;
	var client = Ti.Network.createHTTPClient({
		"timeout": 60000,
		"onload": function(e) {
			var data = JSON.parse(this.responseText);
			for (var i = 0; i < 9; i++) {
				if (typeof(images[i]) != "undefined") {
					$.win.remove(images[i]);
				}
				var image = Ti.UI.createImageView({
					"image": "http://photohackday.sudachi-works.com/getty/thumb/"+data.imageIds[i]+"/210/210",
					"width": "210px",
					"height": "210px",
					"top": 250 + (Math.floor(i/3) * 215) + "px",
					"left": (Math.floor(i%3) * 215) + "px"
				});
				image.title = data.imageIds[i];
				image.addEventListener('click', function(e) {
					Ti.App.fireEvent('app:addItems', {
						"items": [{
							"template": "template",
							"class": "item",
							"properties": {
								"height": "85dp"
							},
							"textEn": {
								"text": $.textEn.value,
							},
							"textJa": {
								"text": $.textJa.value
							},
							"icon": {
								"image": "http://photohackday.sudachi-works.com/getty/thumb/"+e.source.title+"/340/340"
							}
						}]
					});
					$.win.close();
				});
				$.win.add(image);
				images[i] = image;
			}
			working = false;
		},
		"onerror": function() {
			alert('Error');
		}
	});
	client.open("GET", "http://photohackday.sudachi-works.com/getty/search/"+e.source.value.toLowerCase());
	client.send();
}

function clickImageButton(e) {
	Ti.Media.openPhotoGallery({
		"success": function(e) {
			Ti.App.fireEvent('app:addItems', {
				"items": [{
					"template": "template",
					"class": "item",
					"properties": {
						"height": "85dp"
					},
					"textEn": {
						"text": $.textEn.value,
					},
					"textJa": {
						"text": $.textJa.value
					},
					"icon": {
						"image": e.media.imageAsCropped({"height":340, "width":340})
					}
				}]
			});
			$.win.close();
		},
		"mediaTypes": [Ti.Media.MEDIA_TYPE_PHOTO]
	});
}
