    function insArrow( canvas, x, y, xf,yf,attr) {
        if(!attr) attr = {fill: "#fff", stroke: "none", "stroke-dasharray": "-", "fill-opacity": 0.2};
        var arrowPath = "M15.834,29.084 15.834,16.166 2.917,16.166 29.083,2.917z";
        var angle = (180/Math.PI) * Math.atan((yf - y) / (xf - x));
        var origPath = canvas.path(arrowPath).attr(attr);
            origPath.transform([["t",xf-14.834,yf-20.084],["r",angle],["r",45]]);
        return origPath;
    };

    function drawline(canvas, pathstr, duration, attr, callback){
        // disegna il percorso
        var guide_path = canvas.path( pathstr ).attr( {stroke: "none", fill: "none"} );
        var path = canvas.path( guide_path.getSubpath( 0, 1 ) ).attr( attr );
        var total_length = guide_path.getTotalLength( guide_path );
        var start_time = new Date().getTime();
        var interval_length = 25;

        var interval_id = setInterval( function(){
            var elapsed_time = new Date().getTime() - start_time;
            var this_length = elapsed_time / duration * total_length;
            var subpathstr = guide_path.getSubpath( 0, this_length );
            attr.path = subpathstr;
            path.animate( attr, interval_length );

            if ( elapsed_time >= duration ) {
                clearInterval( interval_id );                
                if ( callback != undefined ) callback();
            }                                       
        }, interval_length );  

        return guide_path;    

    }

    function drawline_withArrow(canvas, pathstr, duration, attr, callback){
        if(!attr) attr = {fill: "#fff", stroke: "none", "stroke-dasharray": "-", "fill-opacity": 0.2};
        var 
            guide_path = canvas.path( pathstr ).attr( {stroke: "none", fill: "none"} ),
            end = guide_path.getTotalLength(), bend = end - end/10,
            pend = guide_path.getPointAtLength(end),
            pbend = guide_path.getPointAtLength(bend),
            x = pbend.x,y = pbend.y, xf = pend.x, yf = pend.y; 
            var attr2 = {};
            for(var a in attr){attr2[a]=attr[a];}
                
        var p_callback = function(){
            var arrowIcon = "M15.834,29.084 15.834,16.166 2.917,16.166 29.083,2.917z";
            var angle = (180/Math.PI) * Math.atan((yf - y) / (xf - x));
            //canvas.path([["M",0,0],["L",30,30]]);
            var origPath = canvas.path(arrowIcon).attr(attr2);
                origPath.transform([["t",xf-14.834,yf-20.084],["r",angle],["r",45]]);
            if(callback != undefined) callback();
            
        };
        drawline(canvas,pathstr,duration,attr,p_callback);        
    }
    
    
var SAguilar = {};
SAguilar.icons = {
                "play": "M6.684,25.682L24.316,15.5L6.684,5.318V25.682z",
                "stop": "M5.5,5.5h20v20h-20z",
                "pause": "M26,27.5H6c-0.829,0-1.5-0.672-1.5-1.5V6c0-0.829,0.671-1.5,1.5-1.5h20c0.828,0,1.5,0.671,1.5,1.5v20C27.5,26.828,26.828,27.5,26,27.5zM7.5,24.5h17v-17h-17V24.5z",
                "next": "M25.5,15.5,15.2,9.552,15.2,15.153,5.5,9.552,5.5,21.447,15.2,15.847,15.2,21.447z",
                "prec": "M5.5,15.499,15.8,21.447,15.8,15.846,25.5,21.447,25.5,9.552,15.8,15.152,15.8,9.552z",
                "full-screen":"M25.083,18.895l-8.428-2.259l2.258,8.428l1.838-1.837l7.053,7.053l2.476-2.476l-7.053-7.053L25.083,18.895zM5.542,11.731l8.428,2.258l-2.258-8.428L9.874,7.398L3.196,0.72L0.72,3.196l6.678,6.678L5.542,11.731zM7.589,20.935l-6.87,6.869l2.476,2.476l6.869-6.869l1.858,1.857l2.258-8.428l-8.428,2.258L7.589,20.935zM23.412,10.064l6.867-6.87l-2.476-2.476l-6.868,6.869l-1.856-1.856l-2.258,8.428l8.428-2.259L23.412,10.064z"
            };

SAguilar.paintMenu = function(canvas){
    var diff = 0, buttons =[],j=0;
    var initx = 200, inity=500;
    for(var i in SAguilar.icons){
        buttons[j] = canvas.rect(initx + diff -2, inity -2, 40,40, 5).attr({stroke:8,"stroke-width":1,fill:"#fff"});
        buttons[j].icon = canvas.path(SAguilar.icons[i]).transform(["t", initx + diff,inity]);
        
        diff += 50;
        buttons[j].hover( 
            function() { this.icon.animate( {"stroke-width":2}, 500 ); },
            function() { this.icon.animate( {"stroke-width":1}, 500 ) } 
        );
        buttons[j].click(
            function(){
                
            }
        );    
        j++;
    }
}