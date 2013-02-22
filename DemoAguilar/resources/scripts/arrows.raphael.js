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