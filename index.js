// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// THEMES
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 =document.querySelector('.bg-1');
const Bg2 =document.querySelector('.bg-2');
const Bg3 =document.querySelector('.bg-3');




// ----------------------------  SIDEBAR  ----------------------------

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// ----------------------  MESSAGES  ------------------------
// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
      let nameElem = chat.querySelectorAll('h5');
      if (nameElem.length > 0) {
        let name = nameElem[0].textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
          chat.style.display = 'flex';
        } else {
          chat.style.display = 'none';
        }
      }
    });
  };
  
// search chat
messageSearch.addEventListener('keyup', searchMessage)

// Highlight messages when clicked on messages bar on sidebar
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})

// -----------------------------  Theme Customization  ------------------------
// opens modal
const openThememodal = () => {
    themeModal.style.display = 'grid';
}

// closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}


// closes modal
themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThememodal)




// ------------------------------------  Fonts -------------------------

// removeactive class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize ='10px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')){
            fontSize ='13px';
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')){
            fontSize ='16px';
            root.style.setProperty('--sticky-top-left', '-2rem')
            root.style.setProperty('--sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')){
            fontSize ='19px';
            root.style.setProperty('--sticky-top-left', '-5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')){
            fontSize ='22px';
            root.style.setProperty('--sticky-top-left', '-10rem')
            root.style.setProperty('--sticky-top-right', '-33rem')
        }

        // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;

    })

})


// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        // remove active class from colors
        changeActiveColorClass();


        if(color.classList.contains('color-1')){
            primaryHue = 48;
            
        } else if(color.classList.contains('color-2')){
            primaryHue = 252;
        }else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue',primaryHue)

    })
})




// theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click' ,() => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click' ,() => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});

Bg3.addEventListener('click' ,() => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});



const starIcon = document.querySelector('.middle .feed .action-buttons span i.uil-star');
starIcon.addEventListener('click', function() {
    this.classList.toggle('clicked');
});

// to increase the count of likes
let likeButton = document.querySelector('.like-button');
let likeIcon = likeButton.querySelector('i');
let likeCount = likeButton.querySelector('.like-count');

let liked = false;
let count = parseInt(likeCount.innerText);

likeButton.addEventListener('click', () => {
    if (!liked) {
        likeIcon.classList.add('clicked');
        likeCount.innerText = ++count;
        liked = true;
    } else {
        likeIcon.classList.remove('clicked');
        likeCount.innerText = --count;
        liked = false;
    }
});
