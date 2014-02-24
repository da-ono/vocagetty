function itemclick(e) {
	var item = e.section.getItemAt(e.itemIndex);
	if (item.textJa.visible) {
		item.textJa.visible = false;
	} else {
		item.textJa.visible = true;
	}
	e.section.updateItemAt(e.itemIndex, item);
}

function rightNavBtnClick(e) {
	$.nav.openWindow(Alloy.createController("add").getView());
}

Ti.App.addEventListener('app:addItems', function(e) {
	$.section.insertItemsAt(0, e.items);
});

$.nav.open();