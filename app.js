$(function(){
    for(var i=0; i<fonts_list.length; i++){
        addFont(fonts_list[i]);
    }

    renderContent();

    $('.js_font input').bind('input', changeParams);

    $('.js_header').bind('input', renderContent);
    $('.js_header').bind('change', renderContent);
    $('.js_text').bind('input', renderContent);
    $('.js_text').bind('change', renderContent);

    if(!isFullscreenEnabled()) $('.js_fullscreen').hide();
    $('.js_fullscreen').bind('click', toggleFullscreen);
});

var tmpl = `
    <div class="font js_font">
        <div class="font__form">
            <div class="font__names js_font_names"></div>
            <span class="font__form_group">
                <label>HS</label>
                <input type="number" min="0" value="40" name="header_size">
            </span>
            <span class="font__form_group">
                <label>HL</label>
                <input type="number" min="0" value="55" name="header_line">
            </span>
            <span class="font__form_group">
                <label>HP</label>
                <input type="number" min="0" value="25" name="header_para">
            </span>
            <br />
            <span class="font__form_group">
                <label>TS</label>
                <input type="number" min="0" value="19" name="text_size">
            </span>
            <span class="font__form_group">
                <label>TL</label>
                <input type="number" min="0" value="28" name="text_line">
            </span>
            <span class="font__form_group">
                <label>TP</label>
                <input type="number" min="0" value="25" name="text_para">
            </span>
        </div>
        <div class="font__content js_font_content">
            <div class="font__header js_font_header"></div>
            <div class="font__text js_font_text"></div>
        </div>
    </div>
`;

function addFont(font){
    var $html = $(tmpl);

    $html.find('.js_font_header').css('font-family', font.header);
    $html.find('.js_font_text').css('font-family', font.text);
    $html.find('.js_font_names').text(font.header+', '+font.text);

    $('.js_fonts').append($html);
}
function renderContent(){
    var header = $('.js_header').val();
    var text = $('.js_text').val();

    text = _.map(text.split(/\n{1,}/gi), function(para){return '<p>'+para+'</p>';}).join('');

    $('.js_font_header').html(header);
    $('.js_font_text').html(text);

    $('.js_font').each(function(i, el){
        setParams($(el));
    })
}
function changeParams(e){
    var $font = $(e.currentTarget).closest('.js_font');
    setParams($font);
}
function setParams($font){
    var header_size = Number($font.find('input[name=header_size]').val());
    var header_line = Number($font.find('input[name=header_line]').val());
    var header_para = Number($font.find('input[name=header_para]').val());
    var text_size   = Number($font.find('input[name=text_size]').val());
    var text_line   = Number($font.find('input[name=text_line]').val());
    var text_para   = Number($font.find('input[name=text_para]').val());

    $font.find('.js_font_header').css({
        'font-size': header_size+'px',
        'line-height': header_line+'px',
        'margin-bottom': header_para+'px'
    });
    $font.find('.js_font_text p').css({
        'font-size': text_size+'px',
        'line-height': text_line+'px',
        'margin-bottom': text_para+'px'
    });
}

function isFullscreenEnabled(){
    return document.fullscreenEnabled;
}

function toggleFullscreen(e){
    var el = $('.js_fullscreen_el')[0];
    var doc = document;

    if(doc.fullscreenElement){
        if(doc.exitFullscreen){
            doc.exitFullscreen();
        } else if(doc.webkitExitFullscreen){
            doc.webkitExitFullscreen();
        } else if(doc.mozExitFullscreen){
            doc.mozExitFullscreen();
        }
    } else {
        if(el.requestFullscreen){
            el.requestFullscreen();
        } else if(el.webkitRequestFullscreen){
            el.webkitRequestFullscreen();
        } else if(el.mozRequestFullscreen){
            el.mozRequestFullscreen();
        }
    }
}
