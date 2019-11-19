$(function() {
            $(window).scroll(function() {
                if ($(document).scrollTop() > $('.F_head').height()) {
                    $('.M_nav').css({ background: '#fff', top: 0 });
                    $('#Name_img').stop().slideUp(2000);
                    $('.M_N_oa').css('color', '#000')
                    $('.M_N_ospan').css('color', '#000')
                    $('.N_left').css('display', 'block')
                }
                if ($(document).scrollTop() == 0) {
                    $('.M_nav').css({ background: '', top: 48 });
                    $('#Name_img').stop().slideDown(2000);
                    $('.M_N_oa').css('color', '#fff')
                    $('.M_N_ospan').css('color', '#fff')
                    $('.N_left').css('display', 'none')
                }
            })
            $('.misa').mouseover(function() {

                $(this).find($('.ones')).stop().fadeIn(500);
                $(this).find($('.tows')).css('display', 'none')
                $(this).find($('.three')).css('display', 'block')
            })
            $('.misa').mouseout(function() {
                $(this).find($('.ones')).stop().fadeOut(500);
                $(this).find($('.tows')).css('display', 'block')
                $(this).find($('.three')).css('display', 'none')
            })
        )