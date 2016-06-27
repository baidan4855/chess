function Chess(elementId,data){
	//私有属性、方法
	var pieces={
		red:{
			jiang:{ className:"pieces-red-jiang" },
			shi:{ className:"pieces-red-shi" },
			xiang:{ className:"pieces-red-xiang" },
			ma:{ className:"pieces-red-ma" },
			che:{ className:"pieces-red-che" },
			pao:{ className:"pieces-red-pao" },
			zu:{ className:"pieces-red-zu" },
		},
		black:{
			jiang:{ className:"pieces-black-jiang" },
			shi:{ className:"pieces-black-shi" },
			xiang:{ className:"pieces-black-xiang" },
			ma:{ className:"pieces-black-ma" },
			che:{ className:"pieces-black-che" },
			pao:{ className:"pieces-black-pao" },
			zu:{ className:"pieces-black-zu" },
		}	
	}
	//重新摆棋数据
	var initMap = [
		["che","ma","xiang","shi","jiang","shi","xiang","ma","che"],
		[null,null,null,null,null,null,null,null,null],
		[null,"pao",null,null,null,null,null,"pao",null],
		["zu",null,"zu",null,"zu",null,"zu",null,"zu"],
		[null,null,null,null,null,null,null,null,null],
		[null,null,null,null,null,null,null,null,null],
		["zu",null,"zu",null,"zu",null,"zu",null,"zu"],
		[null,"pao",null,null,null,null,null,"pao",null],
		[null,null,null,null,null,null,null,null,null],
		["che","ma","xiang","shi","jiang","shi","xiang","ma","che"]
	]
	var drawTable = function(){
		var boardEle = $("#" +boardId);
		boardEle.empty();
		var tdEleHtml = '<td><div class="pieces"></div></td>';
		var trEleHtml = '<tr>'+ copyStr(tdEleHtml,9)+'</tr>'
		var tbEleHtml = '<table>'+ copyStr(trEleHtml,10)+'</table>';
		boardEle.append(tbEleHtml);
	}

	var boardId=elementId;
	var map=data;


	//公开方法
	//摆棋 flag＝true黑棋在下，红棋在上，为false则相反
	this.init=function(flag){
		map=_.map(initMap,function(rowArr,index){
			var color = ["red","black"]
			var colorIndex = flag?0:1;
			if(index>5)
				colorIndex=1-colorIndex;
			return _.map(rowArr,function(cell){
				return cell? pieces[color[colorIndex]][cell]:null;
			})
		})
		this.refreshBoard();
	}
	this.refreshBoard=function(){
		$("#"+ boardId + " td.pieces").attr("class","pieces");
		for(var row=0;row<10;row++){
			for(var col=0;col<9;col++){
				if(map[row][col]){
					$("#"+ boardId + " tr:eq("+row + ") td:eq("+col + ") div.pieces").addClass(map[row][col].className);
				}
			}
		}
	}
	
	drawTable();
}

$(function(){
	chess = new Chess("chessboard");
	chess.init(true);
})
