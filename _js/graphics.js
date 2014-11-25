var canvas;
var g2d;

function inherit(proto) {
	function F() {}
	F.prototype = proto;
	return new F;
}

$(function() {
	canvas = document.getElementById('myCanvas');
	g2d = canvas.getContext('2d');
});

function getWidth() {
	return $(canvas).css('width');
}

function getHeight() {
	return $(canvas).css('height');
}


var objects = [];

var drawCanvas = function drawCanvas() {
	g2d.clearRect(0,0,getWidth(), getHeight());
	for(var i = 0; i < objects.length; ++i){
		objects[i].draw();
	}
}



function GraphicsObj(w, h) {
}


GraphicsObj.prototype.register = function register() {
	console_log('registered object');
	objects.push(this);
	drawCanvas();
}

GraphicsObj.prototype.remove = function remove() {
	for(var i = 0; i < objects.length; ++i) {
		if(objects[i] === this) {
			objects.splice(i, 1);
		}
	}
}

GraphicsObj.prototype.setPosition = function setPosition(x, y) {
	this.x = x;
	this.y = y;
	drawCanvas();
}

GraphicsObj.prototype.getX = function getX() {
	return this.x;
}

GraphicsObj.prototype.getY = function getY() {
	return this.y;
}

GraphicsObj.prototype.move = function move(dx, dy) {
	this.x += dx;
	this.y += dy;
	drawCanvas();
}

var hexEncode = function hexEncode(n) {
	var encoded = (n).toString(16);
	if(encoded.length === 1)
		return '0'+encoded;
	else
		return encoded;
}

GraphicsObj.prototype.setColor = function(r, g, b) {
	this.color = '#' + hexEncode(r) + hexEncode(g) + hexEncode(b);
	drawCanvas();
}


function Rectangle(w, h) {
	this.x = 0;
	this.y = 0;
	this.w = w;
	this.h = h;
	this.color = '#FFF';
	this.register();
}

Rectangle.prototype = inherit(GraphicsObj.prototype);

Rectangle.prototype.draw = function render() {
	g2d.fillStyle = this.color;
	g2d.fillRect(this.x, this.y, this.w, this.h);
}



function Circle(r) {
	this.x = 0;
	this.y = 0;
	this.r = r;
	this.color = '#FFF';
	this.register();
}

Circle.prototype = inherit(GraphicsObj.prototype);
Circle.prototype.draw = function draw() {
	g2d.beginPath();
	g2d.arc(this.x, this.y, this.r, 0, 2*Math.PI);
	g2d.fillStyle = this.color;
	g2d.fill();
}


var TextVisual = function(label, font) {
	this.label = label;
	this.font = font;
	this.color = '#FFF';
	this.x = 0;
	this.y = 0;
}

TextVisual.prototype = inherit(GraphicsObj.prototype);
TextVisual.prototype.draw = function() {
	g2d.fillText(this.l, this.x, this.y);
	g2d.font = this.font;
}

TextVisual.prototype.setText = function setText(text) {
	this.label = text;
}


var Line = function(x1, y1, x2, y2) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
	this.color = '#FFF';
}

Line.prototype = inherit(GraphicsObj.prototype);
Line.prototype.draw = function draw() {
	g2d.moveTo(this.x1, this.y1);
	g2d.lineTo(this.x2, this.y2);
	g2d.strokeStyle = this.color;
	g2d.stroke();
}




