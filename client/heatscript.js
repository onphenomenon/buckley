//The color of each hexagon
//var color = ["#E9FF63", "#7DFF63", "#63F8FF", "#99FF63", "#CFFE63", "#FFC263", "#FFC763", "#FF8E63", "#FF6464", "#FF7563", "#FF6364", "#FF7F63", "#FFE963", "#E3FF63", "#FFD963", "#FFE263", "#BAFF63", "#6BFF63", "#64FF69", "#71FF63", "#63FF6C", "#63FFD8", "#64FF69", "#63FF9A", "#FDFC63", "#88FF63", "#66FF64", "#A6FF63", "#63FFDB", "#63D9FE", "#90FF63", "#FF9B63", "#FF7263", "#9DFF63", "#E5FF63", "#FF7F63", "#FF7463", "#FFAE63", "#F4FF63", "#FFEC63", "#FBFF63", "#FFE663", "#FFC263", "#9DFF63", "#AEFF63", "#6AFF63", "#65FF65", "#63FFC7", "#C5FF63", "#63FFBE", "#63FF93", "#63FFAC", "#62FF79", "#90FF63", "#6AFF63", "#63FFEF", "#63F7FF", "#63FFD1", "#6370FF", "#638DFF", "#63FFDF", "#C5FF63", "#63FF6A", "#64FF69", "#C7FE63", "#FDFC63", "#D0FE63", "#FFDC63", "#E3FF63", "#DCFF63", "#C9FE63", "#FBFF63", "#FFB663", "#D9FF63", "#9DFF63", "#69FF63", "#DCFF63", "#63FFD4", "#63FFB8", "#64FF67", "#74FF63", "#63FCFF", "#63FFF9", "#63FFE9", "#A6FF63", "#63FFCD", "#63CEFE", "#63FBFF", "#63FFFB", "#637CFF", "#6379FF", "#D2FE63", "#CFFE63", "#63FF6E", "#65FF65", "#EEFF63", "#DCFF63", "#9DFF63", "#AAFF63", "#B6FF63", "#D0FE63", "#AEFF63", "#CDFE63", "#64FF67", "#99FF63", "#66FF64", "#63FFC1", "#63FFD4", "#63FF90", "#63FFD1", "#63FFF4", "#63FFEC", "#63FFF9", "#71FF63", "#63FF93", "#63FFC4", "#63F7FF", "#638DFF", "#63E9FF", "#6375FF", "#88FF63", "#95FF63", "#63FFAF", "#63FF93", "#63FF9A", "#9DFF63", "#88FF63", "#EEFF63", "#BDFF63", "#71FF63", "#B6FF63", "#80FF63", "#62FF82", "#63FF6C", "#62FF76", "#63FF6E", "#63FFCD", "#63EFFF", "#63FFF6", "#63FFB5", "#63FFFC", "#63B4FF", "#63FFC1", "#63F5FF", "#63FFB5", "#63FFBB", "#63FFFC", "#6379FF", "#63B0FF", "#63FFBB", "#D5FE63", "#63FFB8", "#63FF6C", "#62FF7C", "#63FFBE", "#FFDF63", "#FFE263", "#FFE963", "#76FF63", "#67FF64", "#63FF90", "#65FF65", "#63FFA0", "#63FFA6", "#62FF73", "#63FFC1", "#63FFC4", "#63FFF9", "#63CEFE", "#63A4FF", "#6373FF", "#63C5FE", "#638DFF", "#63FF9D", "#6387FF", "#63FFBE", "#63FEFE", "#63FFEC", "#63FFF1", "#638DFF", "#FF6A64", "#FBFF63", "#FFEF63", "#63FFE9", "#62FF8C", "#BAFF63", "#FFAB63", "#FFCB63", "#62FF82", "#88FF63", "#63FFB2", "#63FFC1", "#63FFDF", "#63FFB5", "#63FFB5", "#62FF7F", "#63FFC4", "#63ECFF", "#63FFFC", "#63F3FF", "#63FFE5", "#63D2FE", "#63FFF6", "#63A8FF", "#63F8FF", "#63FFFB", "#63E4FF", "#636DFF", "#63FFC4", "#6387FF", "#FF8B63", "#EBFF63", "#C5FF63", "#BDFF63", "#62FF76", "#DCFF63", "#BDFF63", "#99FF63", "#62FF82", "#63FFA6", "#63C9FE", "#63FEFE", "#62FF89", "#63FFD8", "#63FFB8", "#63FFF1", "#63C1FE", "#63FCFF", "#63FFCA", "#63C9FE", "#63FFFC", "#6FFF63", "#63FFE5", "#63E9FF", "#63F7FF", "#63B0FF", "#636CFF", "#636CFF", "#63ACFF", "#63F1FF", "#FF8863", "#FF6864", "#FFB363", "#A2FF63", "#63FFD8", "#63FF96", "#99FF63", "#AEFF63", "#C7FE63", "#63FF93", "#63FFC1", "#63FFF9", "#63FFFB", "#67FF64", "#B2FF63", "#62FF76", "#62FF73", "#639CFF", "#63FFC1", "#63FFEF", "#66FF64", "#62FF76", "#63FFC4", "#63FFCA", "#63FFBE", "#63FFFC", "#6363FF", "#63ACFF", "#6375FF", "#63CEFE", "#FFB663", "#79FF63", "#BDFF63", "#63FF6C", "#66FF64", "#76FF63", "#FEF763", "#D7FE63", "#7DFF63", "#63FFB8", "#63F5FF", "#63F7FF", "#62FF7F", "#63FFA6", "#62FF76", "#63FFA6", "#63FFD1", "#63FEFE", "#63FFDF", "#63F8FF", "#63FF96", "#63FFA9", "#63FFA9", "#63C1FE", "#63FFC1", "#63D6FE", "#636EFF", "#6364FF", "#6370FF", "#6398FF", "#FFE663", "#C0FF63", "#EBFF63", "#C5FF63", "#D2FE63", "#69FF63", "#6FFF63", "#D4FE63", "#F4FF63", "#63FFC4", "#62FF89", "#63FFF4", "#63FFB8", "#63FFF4", "#63F8FF", "#62FF71", "#63FFBB", "#63FFEF", "#63FFF1", "#63FBFF", "#63C1FE", "#63FFDF", "#63FFD1", "#63FFE2", "#63ACFF", "#63F3FF", "#63DDFF", "#63FFF6", "#63D6FE", "#63CEFE", "#D4FE63", "#80FF63", "#FF8B63", "#D5FE63", "#63FFCA", "#90FF63", "#D7FE63", "#FBFF63", "#62FF7C", "#C9FE63", "#76FF63", "#69FF63", "#62FF7C", "#63FFD4", "#63FFA6", "#6BFF63", "#63FFC7", "#63E4FF", "#62FF7C", "#63FFF6", "#6379FF", "#63FFCD", "#63FFCA", "#63FFEF", "#63FFBE", "#63E9FF", "#63ECFF", "#63FFF9", "#63E0FF", "#63C5FE", "#FF6B63", "#FFD663", "#63FF6E", "#63FFB2", "#FFD663", "#62FF7F", "#63FFA6", "#9DFF63", "#F6FF63", "#95FF63", "#95FF63", "#FFD963", "#DCFF63", "#63FF90", "#63FFD1", "#63FFFC", "#63FFA3", "#63FFAF", "#63ECFF", "#63FFEF", "#63C5FE", "#63FDFF", "#63FF93", "#62FF76", "#69FF63", "#63EFFF", "#636DFF", "#6379FF", "#63E7FF", "#63E7FF", "#FF8E63", "#CDFE63", "#BDFF63", "#F9FF63", "#62FF7F", "#63FFE2", "#62FF86", "#67FF64", "#63FFA3", "#6DFF63", "#9DFF63", "#FFE963", "#FFBE63", "#6AFF63", "#62FF7F", "#63FFD4", "#79FF63", "#63D2FE", "#63DDFF", "#63FEFE", "#63BDFE", "#63FFDB", "#64FF69", "#62FF8C", "#63FFD8", "#63BDFE", "#63B8FF", "#6391FF", "#63FFDB", "#63FEFE", "#F8FF63", "#FFF263", "#C2FF63", "#FFDF63", "#D2FE63", "#64FF69", "#63FFE2", "#7DFF63", "#FDFC63", "#FF9763", "#6BFF63", "#F2FF63", "#FBFF63", "#AEFF63", "#80FF63", "#63D9FE", "#63FFBB", "#63FFD8", "#63FFEF", "#63C5FE", "#63FF90", "#62FF89", "#63D2FE", "#63FFC4", "#63FF93", "#63D2FE", "#63DDFF", "#63FDFF", "#6DFF63", "#62FF82", "#FF8363", "#DAFF63", "#74FF63",
//             "#63FF6A", "#63FF6A", "#64FF69", "#FFDF63", "#FF7F63", "#FFEF63", "#EEFF63", "#CFFE63", "#6AFF63", "#95FF63", "#63FF6C", "#63FF90", "#6BFF63", "#63FF90", "#63FFCA", "#63E9FF", "#63FFEC", "#63FFAC", "#63FFD4", "#63FAFF", "#63FFCA", "#63ECFF", "#62FF8C", "#63FFE5", "#69FF63", "#FF7463", "#FF9463", "#E0FF63", "#FFCB63", "#A6FF63", "#63FF93", "#E0FF63", "#FEFA63", "#EBFF63", "#AAFF63", "#C2FF63", "#D4FE63", "#63FFAC", "#65FF65", "#62FF73", "#63FFE9", "#65FF66", "#95FF63", "#62FF7F", "#63FFB5", "#63D2FE", "#63FFAC", "#63FFFB", "#62FF8C", "#64FF69", "#99FF63", "#63FFB2", "#63FFDF", "#63FFB8", "#BAFF63", "#FFDC63", "#62FF76", "#BDFF63", "#C2FF63", "#95FF63", "#F6FF63", "#FFA163", "#CFFE63", "#63FFE9", "#84FF63", "#6BFF63", "#6DFF63", "#63FFC1", "#D0FE63", "#69FF63", "#63FFC1", "#62FF8C", "#63FFBB", "#63FF96", "#63FAFF", "#63FFEC", "#63FEFE", "#62FF76", "#63FF9A", "#FFC563", "#6FFF63", "#63FFAF", "#63F5FF", "#63F1FF", "#63FF6A", "#62FF7C", "#63F8FF", "#9DFF63", "#99FF63", "#AEFF63", "#FF8363", "#FFC963", "#62FF79", "#63FF90", "#63FF6A", "#63FCFF", "#63E9FF", "#63FFA0", "#64FF67", "#FFD463", "#A6FF63", "#CBFE63", "#63FF90", "#63FFC4", "#63C9FE", "#63FFE5", "#63FFDB", "#62FF89", "#63FFD8", "#79FF63", "#63FF9A", "#63FAFF", "#63E9FF", "#63FF6E", "#63F7FF", "#63E4FF", "#63F5FF", "#64FF67", "#C9FE63", "#FFBA63", "#D9FF63", "#63FFD1", "#63FFF6", "#63FF93", "#C0FF63", "#F6FF63", "#62FF82", "#AEFF63", "#CBFE63", "#FF8363", "#63FF6A", "#63FFCD", "#63F7FF", "#63FFF9", "#63FFC4", "#63FFC4", "#95FF63", "#63FFCD", "#A2FF63", "#EBFF63", "#63FFC1", "#63FFA0", "#63E4FF", "#63FFFB", "#63F3FF", "#63CEFE", "#63FBFF"]
//data
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var data = {
"1": 6,
"3": 2,
"4": 3,
"6": 7,
"7": 12,
"8": 7,
"9": 5,
"10": 4,
"11": 34,
"12": 53,
"13": 34,
"14": 280,
"15": 184,
"16": 75,
"17": 60,
"18": 58,
"19": 171,
"20": 168,
"21": 332,
"22": 161,
"23": 118,
"24": 87,
"25": 389,
"26": 285,
"27": 240,
"28": 153,
"29": 132,
"30": 131,
"31": 59,
"32": 40,
"33": 48,
"34": 45,
"35": 59,
"36": 46,
"37": 27,
"38": 66,
"39": 90,
"40": 55,
"41": 77,
"42": 88,
"43": 107,
"44": 207,
"45": 156,
"46": 117,
"47": 163,
"48": 177,
"49": 149,
"50": 46,
"51": 58,
"52": 54,
"53": 61,
"54": 66,
"55": 62,
"56": 51,
"57": 79,
"58": 51,
"59": 35,
"60": 30,
"61": 28,
"62": 27,
"63": 36,
"64": 322,
"65": 135,
"66": 259,
"67": 214,
"68": 185,
"69": 56,
"70": 71,
"71": 80,
"72": 67,
"73": 34,
"74": 120,
"75": 36,
"76": 56,
"77": 102,
"78": 66,
"79": 180,
"80": 169,
"81": 59,
"82": 54,
"83": 54,
"84": 28,
"85": 14,
"86": 11,
"87": 14,
"88": 12,
"89": 11,
"90": 45,
"91": 58,
"92": 59,
"93": 183,
"94": 68,
"95": 55,
"96": 76,
"97": 35,
"98": 30,
"99": 33,
"100": 19,
"101": 23,
"102": 17,
"103": 22,
"104": 23,
"105": 41,
"106": 20,
"107": 19,
"108": 142,
"109": 62,
"110": 11,
"111": 6,
"112": 7,
"113": 22,
"114": 64,
"115": 35,
"116": 40,
"117": 61,
"118": 36,
"119": 20,
"120": 46,
"121": 82,
"122": 88,
"123": 75,
"124": 44,
"125": 43,
"126": 102,
"127": 36,
"128": 32,
"129": 43,
"130": 26,
"131": 28,
"132": 61,
"133": 29,
"134": 26,
"135": 26,
"136": 24,
"137": 25,
"138": 50,
"139": 32,
"140": 48,
"141": 31,
"142": 63,
"143": 46,
"144": 10,
"145": 5,
"146": 4,
"147": 7,
"148": 4,
"149": 1,
"150": 1,
"151": 1,
"152": 1,
"153": 1,
"154": 1,
"155": 3,
"156": 3,
"157": 5,
"158": 6,
"159": 4,
"160": 9,
"161": 1,
"162": 1,
"163": 1,
"164": 1,
"165": 1,
"166": 1,
"167": 1,
"168": 1,
"169": 1,
"170": 1,
"171": 1,
"172": 1,
"173": 1,
"174": 1,
"175": 1,
"176": 1,
"177": 1,
"178": 1,
"179": 1,
"180": 1,
"181": 1,
"182": 1,
"183": 1,
"184": 1,
"185": 1,
"186": 1,
"187": 1,
"188": 1,
"189": 1,
"190": 1,
"191": 1,
"192": 1,
"193": 1,
"194": 2,
"195": 1,
"196": 1,
"197": 1,
"198": 1,
"199": 1,
"200": 1,
"201": 1,
"202": 1,
"203": 1,
"204": 1,
"205": 1,
"206": 1,
"207": 1,
"208": 1,
"209": 1,
"210": 1,
"211": 1,
"212": 1,
"213": 1,
"214": 1,
"215": 1,
"216": 1,
"217": 1,
"218": 1,
"219": 1,
"220": 1,
"221": 1,
"222": 1,
"223": 1,
"224": 1,
"225": 1,
"226": 1,
"227": 1,
"228": 1,
"229": 1,
"230": 1,
"231": 1,
"232": 1,
"233": 1,
"234": 1,
"235": 4,
"236": 1,
"237": 1,
"238": 1,
"239": 1,
"241": 5,
"242": 2,
"243": 3,
"244": 2,
"245": 2,
"249": 2,
"251": 1,
"255": 1,
"256": 1,
"257": 3,
"258": 3,
"259": 5,
"260": 4,
"261": 5,
"262": 4,
"263": 4,
"264": 5,
"265": 6,
"266": 4,
"267": 1,
"268": 1,
"269": 1,
"270": 1,
"271": 1,
"272": 1,
"273": 1,
"274": 1,
"275": 1,
"276": 1,
"277": 1,
"278": 1,
"279": 1,
"280": 3,
"281": 5,
"282": 1,
"283": 2,
"284": 7,
"285": 11,
"286": 4,
"290": 1,
"291": 1,
"292": 1,
"293": 1
}
//array with spaces for # of pages, 294.
var citations = [];
for(var i = 0; i < 294; i++){
  citations.push(0);
}
console.log("citations length ", citations.length);
for(var key in data) {
  if(data.hasOwnProperty(key)){
    //find spot before
    var spot = parseInt(key)
    citations[spot-1] = parseInt(data[key])
    // console.log("key ", key, "value ", data[key])
  }
}
//console.log("citations ", citations, "length: ", citations.length);
var max = getMaxOfArray(citations)
console.log("MAX ", max)
//remember page for citation plus 1
///////////////////////////////////////////////////////////////////////////
///////////////////////////// Mouseover functions /////////////////////////
///////////////////////////////////////////////////////////////////////////

//Function to call when you mouseover a node
// function mover(d) {
//   var el = d3.select(this)
//     .transition()
//     .duration(10)
//     .style("fill-opacity", 0.3)
//     ;

// }

// //Mouseout function
// function mout(d) {
//   var el = d3.select(this)
//      .transition()
//      .duration(1000)
//      .style("fill-opacity", 1)
//      ;
// };

///////////////////////////////////////////////////////////////////////////
////////////// Initiate SVG and create hexagon centers ////////////////////
///////////////////////////////////////////////////////////////////////////

//svg sizes and margins
var margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
};

//The next lines should be run, but this seems to go wrong on the first load in bl.ocks.org
//var width = $(window).width() - margin.left - margin.right - 40;
//var height = $(window).height() - margin.top - margin.bottom - 80;
//So I set it fixed to:
var width = 250;
var height = 5500;

//The number of columns and rows of the heatmap
var MapColumns = 1,
  MapRows = 294;

//The maximum radius the hexagons can have to still fit the screen
var hexRadius = d3.min([width/(Math.sqrt(3)*(MapColumns+3)),
      height/((MapRows+3)*1.5)]);

//Set the new height and width based on the max possible
width = MapColumns*hexRadius*Math.sqrt(3);
height = MapRows*1.5*hexRadius+0.5*hexRadius;

//Set the hexagon radius
var hexbin = d3.hexbin()
    .radius(hexRadius);

//Calculate the center positions of each hexagon
var points = [];
var truePoints = [];
for (var i = 0; i < MapRows; i++) {
    for (var j = 0; j < MapColumns; j++) {
        points.push([hexRadius * j * 1.75, hexRadius * i * 1.5, citations[i]]);
  //truePoints.push([hexRadius * j * Math.sqrt(3), hexRadius * i * 1.5]);
    }//for j
}//for i

//tool tip for heatmap
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([30, 100])
  .html(function(d) {
    var page = d.j+1;
    return "Page "+page+": <span > " + d[0][2] + " citations</span>";
  });
//Create SVG element
var newWidth = width + margin.left + margin.right;
var newHeight = height + margin.top + margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", newWidth)
    .attr("height", newHeight)
    // .attr("viewBox", "0 0 700 500")
    .attr("viewBox", "0 0 "+newWidth+" "+newHeight)
    // .attr("class", "scaling-svg")

    .attr("preserveAspectRatio", "xMinYMin meet")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.call(tip);

///////////////////////////////////////////////////////////////////////////
////////////////////// Draw hexagons and color them ///////////////////////
///////////////////////////////////////////////////////////////////////////
//color scale
  var color = d3.scale.linear()
    .domain([0, 389])
    .range(['#CCFF99', "#141A0F"]);


//Start drawing the hexagons
svg.append("g")
    .selectAll(".hexagon")
    .data(hexbin(points))
    .enter().append("path")
    .attr("class", "hexagon")
    .attr("d", function (d) {
    return "M" + d.x + "," + d.y + hexbin.hexagon();
  })
    .attr("stroke", "white")
    .attr("stroke-width", "1px")
    .style("fill", function (d,i) {
    return color(d[0][2]);
  })
  .on("mouseover", tip.show)
  .on("mouseout", tip.hide)
  .on("click", function(d) {
    var page = d[0][2];
    console.log(page);
    $("span[data-page='"+page+"']").ScrollTo()
  });

