(function(SAguilar){

    SAguilar.lpanel = {
        panelStyle: "SAPrints",
        _getId: function(slide){
           return "description_slide_" + slide; 
        },
        _findElem: function(slide){
           var id = "#" + SAguilar.lpanel._getId(slide);
           var el =  $(id);
           if(el.length>0) return el;
           else return false;
        },
        _createSlide: function(slide){
            var el = $("<p></p>").attr({
                id: SAguilar.lpanel._getId(slide),
                "class": SAguilar.lpanel.panelStyle
            });
            el.appendTo(SAguilar.descriptionElem);
            //var el = $(SAguilar.descriptionElem).append("</p>");
            var datas = SAguilar.slides[slide];
           
            if(datas.title) el.append("<b>" + datas.title + "</b>");
            if(datas.description) el.append(datas.description);
        },
        _hideSlide: function(slide){
            var el = SAguilar.lpanel._findElem(slide);
            if(el) el.slideDown();
        },
        _showSlide: function(slide){
            var el = SAguilar.lpanel._findElem(slide);
            if(el) el.slideUp();
            else {
                // crea l'elemento
                SAguilar.lpanel._createSlide(slide);
            }
        },
        back: function(){
            var slide = SAguilar.slides[SAguilar.currentSlide ];
            if(slide){
                SAguilar.lpanel._hideSlide(SAguilar.currentSlide);
            }
        },
        next: function(){
            var slide = SAguilar.slides[SAguilar.currentSlide];
            if(slide){
                SAguilar.lpanel._showSlide(SAguilar.currentSlide);
            }            
        },
        reset: function(){
            $("." + SAguilar.lpanel.panelStyle).hide();
        }
    };

    
})(SAguilar);
