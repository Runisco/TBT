// ==UserScript==
// @name         TBThumbnailResize
// @namespace    https://github.com/runisco
// @downloadURL  https://github.com/Runisco/TBThumbnailResize/raw/main/TBThumbnailResize.user.js
// @updateURL    https://github.com/Runisco/TBThumbnailResize/raw/main/TBThumbnailResize.user.js
// @supportURL   https://github.com/Runisco/TBThumbnailResize/issues
// @homepageURL  https://github.com/Runisco/TBThumbnailResize
// @version      1.0.1
// @description  Resizes the thumbnails to make them easier to see
// @author       Runisco
// @match        https://forum.thotsbay.com/forums/*
// @match        https://forum.thotsbay.com/trending/*
// @exclude      https://forum.thotsbay.com/forums/help-support-suggestions.60/
// @exclude      https://forum.thotsbay.com/forums/helping-the-community.35/
// @exclude      https://forum.thotsbay.com/forums/reviews.55/
// @exclude      https://forum.thotsbay.com/forums/general-discussion.15/
// @exclude      https://forum.thotsbay.com/forums/trans-discussions.40/
// @exclude      https://forum.thotsbay.com/forums/trans-reviews.64/
// @exclude      https://forum.thotsbay.com/forums/thotsbay-news-rules-and-faq.6/
// @icon         data:image/png;base64,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
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

/* globals $ */

var imageWidth = 300 // 75 is default
var imageHeight = 200 // 50 is default
var resizeDefault = true // resize the default image when there is no thumbnail, in order to keep all thread titles flush with eachother


$('.js-threadList').find('a.DC_ThreadThumbnail_image').each(function(index){
    let thumbUrl = $(this).find('img').attr('style')
    if(!thumbUrl.includes('-Default-Thumbnail.png')){
        $(this).attr('style','width: ' + imageWidth + 'px; height: ' + imageHeight + 'px;')
    } else {
        if (resizeDefault){
            $(this).attr('style','width: ' + imageWidth + 'px; height: 50;')
        }
    }
});
