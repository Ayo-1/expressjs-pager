/**
 * Generate Custom Page.
 */

 class Temp {
      main(ul) {
        return `div
                    ul.${ul}
                        if currentPage && currentPage.previousPage
                            include previous
                
                        each page, i in pages
                            if page.inLeftOuter || page.inInner || page.inRightOuter
                                include page
                            else if !page.previousPage.isSeparator
                                include separator
                
                        if currentPage && currentPage.nextPage
                            include next
                `
      }	
      page(li, a) {
      return `li(class=page.isCurrent ? 'active ${li}' : '${li}')
                    if page.isCurrent
                        a #{page.page}
                    else
                        a(href='#{baseUrl}?page=#{page.page}' class='${a}') #{page.page}
                `
      }
      previous(previous, a, li){
      return `
      li.${li}.${previous}
            a(href='#{baseUrl}?page=#{currentPage.previousPage.page}' class="${a}") &lsaquo; Previous
        `
      }
      next(next, a, li){
      return `li.${li}.${a}
                    a(href='#{baseUrl}?page=#{currentPage.nextPage.page}' class="${a}") Next &rsaquo;
                `
      }
 }

module.exports = Temp;