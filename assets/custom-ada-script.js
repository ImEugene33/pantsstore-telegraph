jQuery(document).ready(function () {

   // setTimeout(()=>{
   //    jQuery('.minus-control').attr('role','button');
   //    jQuery('.minus-control').attr('tabindex','0');
   //    jQuery('.minus-control').attr('aria-label','increase');
   //    jQuery('.plus-control').attr('role','button');
   //    jQuery('.plus-control').attr('tabindex','0');
   //    jQuery('.plus-control').attr('aria-label','decrease');
   //  }, 5000);
  
 // jQuery(".product-wrap").find('a').attr("tabindex",'0').focus();
 //  jQuery(".product-wrap").find('a').attr("tabindex",'1').focus();
  
  $(".navbar-link svg").attr("aria-expanded", "false");
  jQuery(".navbar-item.header__item:eq(2)").find('a').attr("tabindex",'0').focus();
  jQuery(".navbar-item.header__item:eq(3)").find('a').attr("tabindex",'0').focus();
  jQuery(".navbar-item.header__item:eq(6)").find('a').attr("tabindex",'0').focus();
  jQuery(".navbar-item.header__item:eq(7)").find('a').attr("tabindex",'0').focus();
  jQuery(".announcement-bar__text.text-align-center p").attr("tabindex",'1').focus();
  jQuery("body").on("keydown",".navbar-item:not(.navbar-link--active)", function(e){
      if(e.keyCode == 13) {
          jQuery(this).addClass("navbar-link--active");
          jQuery(".navbar-link--active").find('label a svg').attr("aria-expanded",'true');          
          jQuery('.navbar-item.header__item section').css("display", "block");  
          jQuery('.navbar-item.header__item .navbar-dropdown').css("display", "block");  
          e.preventDefault();
      }
    }); 
  
     jQuery("body").on("keyup",".navbar-item.header__item .navbar-link.header__link", function(e){
      if(e.keyCode == 9) {
        jQuery(this).focus();
        jQuery(".navbar-item").not(this).removeClass("navbar-link--active");
        jQuery(".navbar-item").not(this).find('a svg').attr('aria-expanded',"false");       
        jQuery('.navbar-item.header__item').not(this).find("section").css("display", "none");
        jQuery('.navbar-item.header__item').not(this).find(".navbar-dropdown").css("display", "none");
        e.preventDefault();
      }
    });
     jQuery("body").on("keydown", ".navbar-item.header__item a",  function(e) {
        if(e.keyCode == 27) {
          // Move focus to the NEXT top-level nav item so :focus-within
          // releases the current navbar-item (closing its submenu) and
          // the user can immediately tab into the next item without
          // being trapped in the just-closed dropdown.
          var $currentItem = jQuery(this).closest('.navbar-item.header__item');
          var $nextItem = $currentItem.nextAll('.navbar-item.header__item').first();
          if ($nextItem.length) {
            $nextItem.find('a.navbar-link.header__link').first().focus();
          } else {
            e.target.blur();
          }
          jQuery('.navbar-item.header__item').find('a svg').attr('aria-expanded',"false");
          jQuery('.navbar-item.header__item').removeClass("navbar-link--active");
          jQuery('.navbar-item.header__item section').css("display", "none");
          jQuery('.navbar-item.header__item .navbar-dropdown').css("display", "none");
          jQuery('.mega-menu__section').removeClass('is-active');
          e.preventDefault();
        }
   });

   $("body").on("keyup",".swatch__options .swatch__option:not(.swatch__options .swatch__option --active)", function(e){
            if(e.keyCode == 9) {
                $(this).addClass("--active");
                $('.swatch__options .swatch__option').not(this).removeClass("--active");
                $(".swatch__option input").attr("aria-checked", "true");
                $('.swatch__options .swatch__option').not(this).find("input").attr("aria-checked", "false");
                e.preventDefault();
            }
        });

//
    jQuery(".navbar-item.header__item:eq(9)").find('svg').remove();
  // 
   // jQuery("body").on("keyup",".ajax-cart__list .ajax-cart__product .qty-wrapper", function(e){
   //    if(e.keyCode == 9) {
   //      jQuery(".control.minus-control").attr("tabindex",'0').focus();
   //      jQuery(".control.plus-control").attr("tabindex",'1').focus();
   //    }
   // });


   // 
   // setTimeout(()=>{
   //      $('.boost-pfs-filter-display-item.boost-pfs-filter-display-grid').attr("aria-label", "Grid view");
   //      $('.boost-pfs-filter-display-item.boost-pfs-filter-display-list').attr("aria-label", "List view");
   //      $('.boost-pfs-filter-top-display-type a').click(function(){
   //          $('.boost-pfs-filter-display-item.boost-pfs-filter-display-grid.active').attr("aria-label", "Grid view selected");
   //          $('.boost-pfs-filter-display-item.boost-pfs-filter-display-list.active').attr("aria-label", "List view selected"); 
   //       })
   //   }, 10000);
  
  // console.log(jQuery(".header__menu .mega-menu__section:eq(0) .mega-menu__linklist "));
  // setTimeout(()=>{
  //      var i = 1;
  //      var j = 2
  //     jQuery(".header__menu .mega-menu__section:eq(0) .mega-menu__linklist ").each(function () {
  //     	var head= jQuery(this).find("h2").html();
  //     	jQuery(this).find("h2").attr('id', jQuery.trim(head))
  //     	var label=  jQuery(this).find("ul li:eq(0) a").html();
  //     	jQuery(this).find("ul li:eq(0) a").attr('id', 'Shop_All_'+j);  
  //     	jQuery(this).find("ul li:eq(0) a").attr('aria-labelledby', 'Shop_All_'+j +' '+jQuery.trim(head));
  //        i+=2;
  //        j+=2;
  //     })
      
  //     jQuery(".header__menu .mega-menu__section:eq(1) .mega-menu__linklist ").each(function () {
  //       var i = 1;
  //       var j = 2;
  //     	var head= jQuery(this).find("h2").html();
  //     	jQuery(this).find("h2").attr('id', jQuery.trim(head))
  //     	var label=  jQuery(this).find("ul li:eq(0) a").html();
  //     	jQuery(this).find("ul li:eq(0) a").attr('id', 'Shop_All_'+j);  
  //     	jQuery(this).find("ul li:eq(0) a").attr('aria-labelledby', 'Shop_All_'+j +' '+jQuery.trim(head));
  //        i+=2;
  //        j+=2;
  //     })
  //   }, 5000);

   
  
  //
  jQuery('.dynamic-sections').attr("role","main");

  //
  setTimeout(()=>{
    $('.boost-pfs-search-box').attr("aria-label", "");
    $('.boost-pfs-search-box').attr("aria-label","Search- Start typing, when autocomplete results are available use up and down arrows to review and enter to select");
  }, 5000);

  //
    $('.image-element__wrap:eq(0) img').attr('alt', 'Pants Store');
    $('.image-element__wrap .footer__logo').attr('alt', 'Pants Store');
  
  //
  jQuery('.banner--full-link').attr("aria-label","womens-gameday");
 
  //
  setTimeout(()=>{
  jQuery('.heading-wrapper--recommended-products h4').replaceWith(function () {
     return jQuery("<h2>", {
     class: this.className,
     html: jQuery(this).html(),
     style: jQuery(this).attr('style')
             });
          });
      }, 5000);
  
 //
   setTimeout(()=>{
         jQuery(".boost-pfs-filter-option-item-list.boost-pfs-filter-option-item-list-multiple-list").before('<div class="sr-only cc-control">Activating the following form controls will update the content below.</div>');
         var incr = 1; 
         jQuery('.boost-pfs-filter-option-content-inner').each(function () {
           jQuery(this).find('.cc-control').attr('id', 'sr-instr-'+incr);
           jQuery(this).find('ul.boost-pfs-filter-option-item-list').attr('aria-labelledby', 'sr-instr-'+incr);
           incr+=1;
         })
     }, 5000);
     //
     
  $('.action-area__link:eq(0)').attr('aria-label', 'Search Modal');
  $('.action-area__link:eq(1)').attr('aria-label', 'Account login');
//
  
  jQuery('.share-btn--twitter a').attr("aria-label","Share this on Twitter");
  jQuery('.share-btn--facebook a').attr("aria-label","Share this on Facebook");
  jQuery('.share-btn--pinterest a').attr("aria-label","Share this on Pinterest");
  jQuery('.share-btn--mail a').attr("aria-label","Email this to a friend");
  
  // //
  //  setTimeout(()=>{
  //       jQuery('.boost-pfs-filter-display-grid').attr("aria-label","Grid view");
  //       jQuery('.boost-pfs-filter-display-list').attr("aria-label","List view");
  // }, 3000);
  //
       setTimeout(()=>{
        jQuery('.boost-pfs-filter-product-item-image a').attr("aria-hidden","true");
        jQuery('.boost-pfs-filter-product-item-image a').attr("tabindex","-1");
      }, 5000);
 //
   setTimeout(()=>{
          jQuery('.boost-pfs-filter-top-sorting-wrapper:eq(1)').removeAttr("aria-label");
          jQuery('.boost-pfs-filter-top-sorting-wrapper:eq(1) span').removeAttr("aria-hidden");
          jQuery(".boost-pfs-filter-top-sorting-wrapper:eq(1) span span").before('<span class="sr-only">Sort by:</span>');
          
 }, 5000);

//
   setTimeout(()=>{
             jQuery(".ajax-cart__list:eq(1) .ajax-cart__product").each(function( index ) {
             var title = jQuery(this).find('.ajax-cart__product-title a').html();
             jQuery(this).find('.qty-wrapper button').attr('aria-label','Remove from cart '+title);
         });
      }, 5000);
  
  //
   setTimeout(()=>{
            jQuery(".cart__item-list .cart__card").each(function( index ) {
             var title = jQuery(this).find('.item__title a').html();
             jQuery(this).find('.cart__remove-btn button').attr('aria-label','Remove from cart '+title);
         });
      }, 5000);

  //
     setTimeout(()=>{
              jQuery(".ajax-cart__list:eq(1) .ajax-cart__product").each(function( index ) {
               var title = jQuery(this).find('.ajax-cart__product-title a').html();
               jQuery(this).find('.qty-wrapper input').attr('title','Quantity - '+jQuery.trim(title));
         });
      }, 5000);
  //
      // setTimeout(()=>{  
      //   var head = jQuery('.header-cart__count.header-cart__count--badge.badge').html(); 
      //   jQuery('.count').html('Items'+ head)
      // }, 10000);
      // jQuery(".action_button").on( "click", function() {
      //   setTimeout(()=>{  
      //     var head = jQuery('.header-cart__count.header-cart__count--badge.badge').html();
      //     jQuery('.count').html('Items'+ head)
      //   }, 5000);
      // } ); 
      // // jQuery(".ajax-cart__delete .close").on( "click", function() {
      // //   alert()
      // //   // setTimeout(()=>{  
      // //   //   var head = jQuery('.header-cart__count.header-cart__count--badge.badge').html();
      // //   //   jQuery('.count').html('Items'+ head)
      // //   // }, 5000);
      // // } ); 
 // 
  
  jQuery('.product-7506809127094 h1').replaceWith(function () {
     return jQuery("<h2>", {
     class: this.className,
     html: jQuery(this).html(),
     style: jQuery(this).attr('style')
   });
});
 //
  
  jQuery('#26826770383030').attr("alt","Steve Madden Xandra Bodysuit");
  
  // 
setTimeout(()=>{
      jQuery('.boost-pfs-filter-toolbar-item.boost-pfs-filter-custom-sorting.boost-pfs-filter-top-sorting button').attr("aria-expananded","false");
      jQuery('.boost-pfs-filter-top-sorting').click(function(){ 
        if($('.boost-pfs-filter-top-sorting').hasClass('boost-pfs-filter-sort-active')) {
          jQuery('.boost-pfs-filter-toolbar-item.boost-pfs-filter-custom-sorting.boost-pfs-filter-top-sorting button').attr("aria-expananded","true");
        } else {
          jQuery('.boost-pfs-filter-toolbar-item.boost-pfs-filter-custom-sorting.boost-pfs-filter-top-sorting button').attr("aria-expananded","false");
        }
      });
    }, 5000);

  setTimeout(()=>{
    // jQuery('.header-cart .header__link').click(function(){
    //      $('.header-cart.action-area__link.has-cart-count').not(this).find('.product-wrap.enable-zoom-false').attr("aria-hidden", "true");
    //      $('.header-cart.action-area__link.has-cart-count').not(this).find('.product-wrap.enable-zoom-false').attr("tabindex",'-1');
    //   });
     
  }, 5000);

      jQuery('.header-cart .header__link').click(function(){
          jQuery(this).closest('body').find('#shopify-section-header-classic, [data-check-for-order="true"], #shopify-section-footer-classic').attr({
              'aria-hidden' : 'true',
              'tabindex' : '-1',
          });
      });

  setTimeout(() => {
    var i =1;
    
    jQuery('.navbar .header__menu li.navbar-item.header__item.has-mega-menu:eq(0), .navbar .header__menu li.navbar-item.header__item.has-mega-menu:eq(1)').each(function () {
        var menuText = jQuery(this).find('a').first().text().trim().toLowerCase().replace(/ /g,"_");
        
        jQuery(this).find('.mega-menu__linklist').each(function () {
            var menuHead = jQuery(this).find('.menu__heading').attr('id', menuText+ '_header_'+i);
            var menuLink = jQuery(this).find('ul>li>a').first().attr({
                'id' : menuText+ '_shop_'+i,
                'aria-labelledby' : menuText+ '_shop_'+i + ' ' + menuText+ '_header_'+i
            });
            
            i+=1;
        })
    })
  }, 1000)

  setTimeout(() => {
      jQuery('.product-recommendations li a.swatch').each(function () {
          var adaColorName = jQuery(this).find('.swatch__image').attr('alt');
          jQuery(this).attr('aria-label', adaColorName);    
      })
  }, 1500)
  
  
})


// jQuery(".ajax-cart__delete").on( "click", function() {
//         // setTimeout(()=>{  
//         alert()
          
//           // var head = jQuery('.header-cart__count.header-cart__count--badge.badge').html();
//           // jQuery('.count').html('Items'+ head)
//         // }, 5000);
//       } );







  