 document.addEventListener('DOMContentLoaded',()=> {
            //PRoduct Card desplay
            let productContainerWidth = document.querySelector('.product-cards-container').offsetWidth;

            //lots of maths shitt
            let productCardWidth = 220;
            let productCardPerRow = Math.floor(productContainerWidth / (productCardWidth + 10));
            let marginSpacing = (productContainerWidth -(productCardPerRow * productCardWidth)) / (productCardPerRow-1);

            let lastElement = productCardPerRow - 1;
            let productCards;

            let productSections = document.querySelectorAll('.product-section');
            productSections.forEach((section) => {
                productCards = section.querySelectorAll('.product-card');
                for(let i = 0; i < productCardPerRow ; i++){
                    productCards[i].classList.add('active');
                    if(i === lastElement){
                        productCards[i].style.marginRight = '0px';
                    }else{
                        productCards[i].style.marginRight = `${marginSpacing}px`;
                    }
                }
            });

            //adding items to wishlist

            let wishListCount = document.querySelector('#wishlist-link span')
            let heartButtons = document.querySelectorAll('.heart-button');

            heartButtons.forEach(button) => {
                
            }
        });