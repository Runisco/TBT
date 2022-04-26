// ==UserScript==
// @name         TBThumbnailResize
// @namespace    https://github.com/runisco
// @downloadURL  https://github.com/Runisco/TBThumbnailResize/raw/main/TBThumbnailResize.user.js
// @updateURL    https://github.com/Runisco/TBThumbnailResize/raw/main/TBThumbnailResize.user.js
// @supportURL   https://github.com/Runisco/TBThumbnailResize/issues
// @homepageURL  https://github.com/Runisco/TBThumbnailResize
// @version      2.0.0
// @description  Resizes the thumbnails to make them easier to see
// @author       Runisco
// @match        https://forum.thotsbay.com/*
// @icon         data:image/png;base64,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
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @require            https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant              GM_getValue
// @grant              GM_setValue
// @grant              GM_deleteValue
// ==/UserScript==

/* globals $, GM_config */

var iconData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAPZJREFUWEftlrENwjAQRb8bWppzSQcN9AwArAEVHQPQUdAxAAuQNYCGGWABRJWrYIBDQbYUgiESSpzm0sa+e3r37cSg4cc03B8KoAbUgBowzLwHMC65kB4AFiLSM8YsAbQC619riCjJ3jHzGUC/pO7tYwQOaJgv5oukabp2ACcimuSLu4ad0L4cUBvAjIiOfm9lAL/gogKISGKtnRfVO0P1GXANQESD0NyrBgiFMOt7iQUQCqE/TYdiQKNkgJmnALYA7sWkxwIYAdi5+b8dtVgA3sA1lIOqQ/jtIuqKyMZau6r7GJZexX8DxP5J1c+xGlADaqBxA0+67ujJ2qrzbQAAAABJRU5ErkJggg=='
var menuIcon = $('<a href="#" id="tbtConfig" class="p-navgroup-link u-ripple p-navgroup-link--iconic p-navgroup-link--conversations js-badge--conversations badgeContainer rippleButton"><img width="23" height="5" src="' + iconData + '"></img></a>')
menuIcon.insertAfter($('.p-navgroup-link--alerts'))
$('#tbtConfig').click(function(e){
    e.preventDefault();
    GM_config.open();
})

GM_config.init(
    {
        'id': 'TBThumbnailResize',
        'title': 'TBThumbnailResize Config',
        'fields':
        {
            'tbtWidth':
            {
                'section': 'Image Size',
                'label': 'Width',
                'labelPos': 'Left',
                'type': 'int',
                'default': 300
            },
            'tbtHeight':
            {
                'label': 'Height',
                'type': 'int',
                'default': 200
            },
            'resizeDefault':
            {
                'label': 'Resize default',
                'type': 'checkbox',
                'title': 'Should default thumbnails (no image) be resized to keep titles flush with eachother?',
                'default': true
            },
        },
        'events': // Callback functions object
        {
            'save': function() {resizeThumbnails()},
            'open': function(){
                var config_ui = this.frame;
                config_ui.style.height = '30%';
                config_ui.style.margin = 'auto';
                config_ui.style.width = '20%';
                config_ui.style.left = '40%';
            }
        },
        'css':'#TBThumbnailResize_field_tbtWidth{width: 10%} #TBThumbnailResize_field_tbtHeight{width: 10%}'
    });

function resizeThumbnails(){
    let newWidth = GM_config.get('tbtWidth');
    let newHeight = GM_config.get('tbtHeight');
    let resizeDefault = GM_config.get('resizeDefault');
    console.log("newWidth: " + newWidth)
    console.log("newHeight: " + newHeight)
    console.log("reset default? :" + GM_config.get('resizeDefault'))
    $('.js-threadList').find('a.DC_ThreadThumbnail_image').each(function(index){
        let thumbUrl = $(this).find('img').attr('style')
        if(!thumbUrl.includes('-Default-Thumbnail.png')){
            $(this).attr('style','width: ' + newWidth + 'px; height: ' + newHeight + 'px;')
        } else {
            if (resizeDefault){
                $(this).attr('style','width: ' + newWidth + 'px; height: 50;')
            } else {
                $(this).attr('style','width: 75px; height: 50;')
            }
        }
    });

    if (['whats-new', 'watched/threads'].some(v => String(window.location.href).includes(v))){
        $('.structItemContainer').find('a.avatar.DC_ThreadThumbnail_image ').each(function(index){
            let thumbUrl = $(this).find('img').attr('style')
            if(!thumbUrl.includes('-Default-Thumbnail.png')){
                $(this).attr('style','width: ' + newWidth + 'px; height: ' + newHeight + 'px;')
            } else {
                if (resizeDefault){
                    $(this).attr('style','width: ' + newWidth + 'px; height: 50;')
                } else {
                    $(this).attr('style','width: 75px; height: 50;')
                }
            };
        });
    };
}

resizeThumbnails()
