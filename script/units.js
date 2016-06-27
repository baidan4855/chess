var copyStr = function(str,times){
	var result="";
	for(var i=0;i<times;i++)
		result+=str;
	return result;
}

var makeEmptyMap = function(row,col){
	var map=[],colArr=[];
	for(var i=0;i<col;i++)
		colArr.push(null);
	for(var i=0;i<row;i++)
		map.push(colArr);
	return map;
}