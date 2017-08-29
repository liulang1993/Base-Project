
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

//startMove(obj,{attr1:itarget1,attr2:itarget2},fn);

function startMove(obj,json,huidiao){


	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var over = true;

		for (var attr in json){	
			//取得当前的值
			var cur = 0;
			if (attr == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				cur = parseInt(getStyle(obj,attr))
			}
			//算速度
			var speed = (json[attr]-cur)/10;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			//检测停止
			if (cur != json[attr]){
				over =false;	
			}
			if (attr =='opacity') {
				obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity = (cur+speed)/100;
			}
			else{
				obj.style[attr] = cur + speed +'px';
				// attr 不加括号， 用点表示为什么不行
			}		
		}
		if (over) {
			clearInterval(obj.timer);
			if (huidiao) huidiao();

		};
	},30)

}