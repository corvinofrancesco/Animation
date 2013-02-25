<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Invasioni Barbariche</title>
        <link type="text/css" href="resources/styles/main.css" rel="stylesheet">


        <script type="text/javascript" src="resources/scripts/jquery-1.8.3.min.js" ></script>
        <script type="text/javascript" src="resources/scripts/buzz.js" ></script>
        <script type="text/javascript" src="resources/scripts/raphael-min.js" ></script>
        <script type="text/javascript" src="resources/scripts/arrows.raphael.js" ></script>
        <script>
            var actions = [
                {
                    description: "Azione 1: Freccia dall'irlanda -> britannia -> mare;",
                    play: function(callback){
                        SAguilar.print(this.description);
                        var pathstr =  "M0,0 Q50,50,100,30 Q25,80,100,100 Q150,150,200,50";
                        SAguilar.arrow(pathstr,{ stroke: 'black', 'stroke-width': 8, 'fill-opacity': 0 });
                        if(callback) callback();
                    },
                    goback: function(){},
                    stop:function(){},
                    clear:function(){}
                    
                },
                {
                    description: "Azione 2: Freccia casuale;",
                    play: function(callback){
                        SAguilar.print(this.description);
                        var pathstr =  "M200,50 L200,300 Q25,80,50,350 Q150,150,350,150";
                        SAguilar.arrow(pathstr,{ stroke: 'blue', 'stroke-width': 8, 'fill-opacity': 0 });
                        if(callback) callback();
                    },
                    goback: function(){},
                    stop:function(){},
                    clear:function(){}
                    
                },
                {
                    description: "Azione 3: Freccia casuale;",
                    play: function(callback){
                        SAguilar.print(this.description);
                        var pathstr =  "M350,150 Q50,80,150,330";
                        SAguilar.arrow(pathstr,{ stroke: 'red', 'stroke-width': 8, 'fill-opacity': 0 });
                        if(callback) callback();
                    },
                    goback: function(){},
                    stop:function(){},
                    clear:function(){}
                    
                },
                {
                    play: function(callback){
                        SAguilar.print("prova riempimento area");
                        var pathstr =  "M350,150 L50,80 150,330";
                        SAguilar.area(pathstr,{ fill: 'red', 'fill-opacity': 0 });
                        if(callback) callback();
                    },
                    goback: function(){},
                    stop:function(){},
                    clear:function(){}
                    
                }
                
            ];

            $(document).ready(function () {
                SAguilar.init({descriptions:"#descriptions", slides: actions});
                SAguilar.addSlides(actions);
                //SAguilar.runAction("play");
            });
        </script>
    </head>
    <body>
        <div></div>
        <div><img src="resources/images/map.png" height="60%" width="40%"/></div>
        <div id="descriptions" style="top:0px;left:50%;position:absolute">
            <p class="SAPrints">
                prova 1; fklasj fl fklkla sjf klasjfkljasf klasjfdsklj fskjlfl skjfdskjlf
                fdjskflds fkjlds fklsfkljòsòkjlfòklj sdfkjl dfskòl jfkjfkjòl s fklòs fkjòlds fkjsldfl kjòfslkjò
            </p>
            <p class="SAPrints">
                prova 2;
            </p>            

        </div>
    </body>
</html>
