
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


// var citations = [];
//takes in data object and last page number found on html doc
var citationsArray = function(data, last){
  var citations = [];

  for(var i = 0; i < last; i++){
    citations.push(0);
  }
  for(var key in data) {
    if(data.hasOwnProperty(key)){
    //find spot before, zero based array
      var spot = parseInt(key)
      citations[spot-1] = parseInt(data[key])
    }
  }
  return citations;
}

var citations = citationsArray(data, 294);
var max = d3.max(citations);


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
    }
}

//tool tip for heatmap
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .direction('e')
  // .offset([30, 100])
  .html(function(d) {
    var page = d.j+1;
    console.log(d[0][2])
    return "Page "+page+": " + d[0][2] + " citations";
  });
//Create SVG element
var newWidth = width + margin.left + margin.right;
var newHeight = height + margin.top + margin.bottom;

var svg = d3.select("#chart").append("svg")
    // .attr("width", newWidth)
    // .attr("height", newHeight)
    // .attr("viewBox", "0 0 100 500")
    .attr("viewBox", "0 0 400 "+newHeight)
    // .attr("viewBox", "0 0 "+newWidth+" "+newHeight)
    .attr("class", "scaling-svg")

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
    $("span[data-page='"+page+"']").ScrollTo()
  });

