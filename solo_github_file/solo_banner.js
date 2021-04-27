(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"solo_banner_atlas_1", frames: [[0,1168,184,184],[186,1168,60,133],[248,1168,56,129],[0,0,1014,1166]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_18 = function() {
	this.initialize(ss["solo_banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["solo_banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["solo_banner_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(ss["solo_banner_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3024,4032);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzAV3MAAAgrtMAmBAAAMAAAArtg");
	mask.setTransform(121.675,139.9);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.24,0.24);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,243.4,279.8), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak9E+QiEiDAAi7QAAi6CEiDQCEiEC5AAQC6AACECEQCECDAAC6QAABngsBbQgqBYhMBAQg8AyhIAaQhMAchQAAQi5AAiEiEg");
	mask.setTransform(44.975,45);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00ABE9","#284194"],[0,1],0,0,0,0,0,45).s().p("AnBHCIAAuDIODAAIAAODg");
	this.shape.setTransform(44.975,45);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,90,90), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw3Q4MAAAghvMAhvAAAMAAAAhvg");
	mask.setTransform(108,108);

	// Layer_3
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(61.35,70,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(61.4,70,92,92), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw3Q4MAAAghvMAhvAAAMAAAAhvg");
	mask.setTransform(108,108);

	// Layer_3
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(92.45,8,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(92.5,8,30,66.5), null);


(lib.European = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("European", "italic 24px 'Zapfino'", "#4671A3");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 153;
	this.text.parent = this;
	this.text.setTransform(0,-35.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-37.7,157,75.5);


(lib.button1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Skin
	this.text = new cjs.Text("Click Here", "italic 24px 'Zapfino'", "#234A9A");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 164;
	this.text.parent = this;
	this.text.setTransform(0,-21.15,0.3649,0.3649);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4670A2").ss(1,1,1).p("AEMAAQAABQgpA/QgQAZgWAVQhOBPhvAAQhuAAhPhPQgVgVgQgZQgpg/AAhQQAAhuBOhPQAsgrA1gTQArgQAxAAQAxAAArAQQA2ATArArQBPBPAABug");
	this.shape.setTransform(1.85,-5.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8FC2E2").s().p("AiWCWIgGgHQg4g8AAhTQABhXA9g/QA/g+BXAAQBYAAA+A+QA/A/AABXQAABTg4A8IgHAHQg+A/hYgBQhXABg/g/g");
	this.shape_1.setTransform(1.85,-5.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AiWCWIgGgHQg4g8AAhTQABhXA9g/QA/g+BXAAQBYAAA+A+QA/A/AABXQAABTg4A8IgHAHQg+A/hYgBQhXABg/g/g");
	this.shape_2.setTransform(1.85,-5.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AiWCWIgGgHQg4g8AAhTQABhXA9g/QA/g+BXAAQBYAAA+A+QA/A/AABXQAABTg4A8IgHAHQg+A/hYgBQhXABg/g/g");
	this.shape_3.setTransform(1.85,-5.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#234A9A"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#003399"}}]},1).to({state:[{t:this.shape_3},{t:this.shape},{t:this.text,p:{color:"#00CCFF"}}]},1).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#234A9A"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-33.4,61.3,65.9);


(lib.Adventure = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Adventure", "italic 24px 'Zapfino'", "#4671A3");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(0,-35.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-37.7,157.7,75.5);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzAV3MAAAgrtMAmBAAAMAAAArtg");
	mask.setTransform(121.675,139.925);

	// Layer_3
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(121.7,139.95,1,1,0,0,0,121.7,139.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0.1,243.4,279.79999999999995), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(121.7,140,1,1,0,0,0,121.7,140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,243.4,279.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aw3Q4MAAAghvMAhvAAAMAAAAhvg");
	mask.setTransform(122.6,208.05);

	// Layer_3
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(107.7,107.65,0.5,0.5);

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(121.7,140,1,1,0,0,0,121.7,140);
	this.instance_1.alpha = 0.8398;

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(14.6,100.1,216,179.79999999999998), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(121.7,158,1,1,0,0,0,121.7,158);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(122.6,208.05,1,1,0,0,0,108,108);

	this.instance_2 = new lib.ClipGroup_3();
	this.instance_2.setTransform(122.6,208.05,1,1,0,0,0,108,108);

	this.instance_3 = new lib.ClipGroup_4();
	this.instance_3.setTransform(121.95,216.05,1,1,0,0,0,45,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,243.4,316.1), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(-0.5,-11.95,0.3685,0.3685,-0.2491,0,0,121.3,157.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.4,-70.2,90.1,116.9);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo("synched",0);
	this.instance.setTransform(146.65,-249.3,1,1,0,0,0,-0.4,-11.8);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(-79.95,149,1,1,0,0,0,121.7,158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.6,-270.8,388.7,577.9000000000001);


// stage content:
(lib.solo_banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.clickhere.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://obtainable-momentous-comma.glitch.me/european_adventure/pages/european_adventure.html', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Button
	this.instance = new lib.button1();
	this.instance.setTransform(421.4,29.4,0.052,0.052,0,0,180,0,-5.8);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button1(), 3);

	this.clickhere = new lib.button1();
	this.clickhere.name = "clickhere";
	this.clickhere.setTransform(421.4,29.4,1,1,0,0,0,0,-6);
	new cjs.ButtonHelper(this.clickhere, 0, 1, 2, false, new lib.button1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},46).to({state:[{t:this.clickhere}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(46).to({_off:false},0).to({_off:true,regY:-6,scaleX:1,scaleY:1,skewY:0},13).wait(1));

	// Adventure
	this.instance_1 = new lib.Adventure("synched",0);
	this.instance_1.setTransform(245.05,-13.8);
	this.instance_1._off = true;

	this.text = new cjs.Text("Adventure", "italic 24px 'Zapfino'", "#4670A2");
	this.text.textAlign = "center";
	this.text.lineHeight = 73;
	this.text.lineWidth = 154;
	this.text.parent = this;
	this.text.setTransform(295.5,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.text}]},12).wait(14));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({_off:true,x:295.5,y:4.5,text:"Adventure",font:"italic 24px 'Zapfino'",color:"#4670A2",textAlign:NaN,lineHeight:73.45,lineWidth:154},12).wait(14));

	// European
	this.instance_2 = new lib.European("synched",0);
	this.instance_2.setTransform(98.15,-35.25);
	this.instance_2._off = true;

	this.text_1 = new cjs.Text("European", "italic 24px 'Zapfino'", "#4670A3");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 73;
	this.text_1.lineWidth = 153;
	this.text_1.parent = this;
	this.text_1.setTransform(147.15,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.text_1}]},10).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({_off:true,x:147.15,y:5.5,text:"European",font:"italic 24px 'Zapfino'",color:"#4670A3",textAlign:NaN,lineHeight:73.45,lineWidth:153},10).wait(21));

	// Logo
	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(-197.65,263.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:-105.65,y:269.3,loop:false},15).wait(31));

	// Background
	this.instance_4 = new lib.BG();
	this.instance_4.setTransform(-313,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-150.7,-72,2861.7,4002);
// library properties:
lib.properties = {
	id: 'BBAE175B5BCF432E925952208C5F25A0',
	width: 468,
	height: 60,
	fps: 24,
	color: "#706F6F",
	opacity: 1.00,
	manifest: [
		{src:"images/BG.jpg?1619544444332", id:"BG"},
		{src:"images/solo_banner_atlas_1.png?1619544441032", id:"solo_banner_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BBAE175B5BCF432E925952208C5F25A0'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;