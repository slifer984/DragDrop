function createBox() {
	var dragObj = $("<div></div>");
	dragObj.attr("class","dragobject");
	var container = $("#preview").append(dragObj);
	dragObj.draggable({drag: function(event, ui) {}});
	dragObj.draggable("option", "containment", "parent");
}