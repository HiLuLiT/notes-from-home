console.clear()
gsap.registerPlugin(ScrollTrigger)

const data = [{
  hebrewTitle: 'שלישי',
  englishTitle: 'Tuesday',
  writerEnglishName: 'Alfie Gelbard',
  writerHebrewName: 'אלפי גלברד',
  animatorEnglishName: 'Sher Zafrany',
  animatorHebrewName: 'שר זפרני',
  controlColor: '#ff0000',
},
  {
    hebrewTitle: 'ממשק קליט',
    englishTitle: 'Striking Experience',
    writerEnglishName: 'תהילה חכימי',
    writerHebrewName: 'Tehila Hakimi',
    animatorEnglishName: 'Anil Rinat',
    animatorHebrewName: 'אניל רינת',
    controlColor: '#ffde00',
    videoEl: '#video-overlay .slide-1'
  },
  {
    hebrewTitle: 'כשהעולם בלם',
    englishTitle: 'When the World Stopped',
    writerEnglishName: 'Arik Eber',
    writerHebrewName: 'אריק אבר',
    animatorEnglishName: 'Adva Santo',
    animatorHebrewName: 'אדוה סנטו'
  },
  {
    hebrewTitle: 'בדיוק איך שזה היה',
    englishTitle: 'Exactly as it Was',
    writerEnglishName: 'Rashel Nakar',
    writerHebrewName: 'רחל נקר',
    animatorEnglishName: 'Daniel Alhasid',
    animatorHebrewName: 'דניאל אלחסיד'
  },
  {
    hebrewTitle: 'אני, אפי והמדינה',
    englishTitle: 'Me, My Nose and the Country',
    writerEnglishName: 'Yuval Plotkin',
    writerHebrewName: 'יובל פלוטקין',
    animatorEnglishName: 'Tamar Chen',
    animatorHebrewName: 'תמר חן'
  },
  {
    hebrewTitle: 'כוכבי הצפון הישן',
    englishTitle: 'The Old Northern Stars',
    writerEnglishName: 'Dean Lanner',
    writerHebrewName: 'דין לנר',
    animatorEnglishName: 'Zohar Dvir',
    animatorHebrewName: 'זוהר דביר'
  },
  {
    hebrewTitle: 'חפצים',
    englishTitle: 'Objects',
    writerEnglishName: 'Achinoam Tamar Virt',
    writerHebrewName: 'אחינעם תמר וירט',
    animatorEnglishName: 'Shy Ben Ari',
    animatorHebrewName: 'שי בן ארי'
  },
  {
    hebrewTitle: 'הוראה מרחוק',
    englishTitle: 'Remote',
    writerEnglishName: 'Kobi Fridchay',
    writerHebrewName: 'קובי פרידחי',
    animatorEnglishName: 'Ofer Winter',
    animatorHebrewName: 'עופר וינטר'
  },
  {
    hebrewTitle: 'אדונית של הזמן',
    englishTitle: 'Misterss of Time',
    writerEnglishName: 'Noa Shaham',
    writerHebrewName: 'נועה שחם',
    animatorEnglishName: 'Talya Neuman',
    animatorHebrewName: 'טליה נוימן'
  },
  {
    hebrewTitle: 'משאלה',
    englishTitle: 'A Wish',
    writerEnglishName: 'Maya Klopmann',
    writerHebrewName: 'מאיה קלופמן',
    animatorEnglishName: 'Tamar Tal-El',
    animatorHebrewName: 'תמר טל-אל'
  },
  {
    hebrewTitle: 'גזר דין',
    englishTitle: 'Sentence',
    writerEnglishName: 'Isaac Cohen',
    writerHebrewName: 'יצחק כהן',
    animatorEnglishName: 'Amit Cohen',
    animatorHebrewName: 'עמית כהן'
  },
  {
    hebrewTitle: 'קופסא מזכוכית',
    englishTitle: 'Say, a Box of Glass',
    writerEnglishName: 'Muriel Naim',
    writerHebrewName: 'מיוריאל נעים',
    animatorEnglishName: 'Adva Cohen',
    animatorHebrewName: 'אדוה כהן'
  },
  {
    hebrewTitle: 'נמלים וחיפושיות',
    englishTitle: 'Ants and Beetles',
    writerEnglishName: 'Livna Eliyahu',
    writerHebrewName: 'ליבנה אליהו',
    animatorEnglishName: 'Nitai Baruch, Nadir Gil Harlap',
    animatorHebrewName: 'ניתאי ברוך, נדיר גיל חרל״פ'
  },
  {
    hebrewTitle: 'לא שעתם היפה של צלמי המגנטים',
    englishTitle: 'It Wasn’t The Best Time for Weddings Photographers',
    writerEnglishName: 'Stav Zimmerman Pollack',
    writerHebrewName: 'סתיו צימרמן פולק',
    animatorEnglishName: 'Rony Karadi',
    animatorHebrewName: 'רוני קרדי'
  },
  {
    hebrewTitle: 'מרחק',
    englishTitle: 'Distance',
    writerEnglishName: 'Lital Kaplan',
    writerHebrewName: 'ליטל קפלן',
    animatorEnglishName: 'Gal Sharir',
    animatorHebrewName: 'גל שריר'
  },
  {
    hebrewTitle: 'אין כניסה',
    englishTitle: 'No Entrance',
    writerEnglishName: 'Or Doron',
    writerHebrewName: 'אור דורון',
    animatorEnglishName: 'Gaya Kesten',
    animatorHebrewName: 'גיה קסטן'
  },
  {
    hebrewTitle: 'עצלני מיטה',
    englishTitle: 'Two Lazy Bed Sloths',
    writerEnglishName: 'Leigh Heiman',
    writerHebrewName: 'לי היימן',
    animatorEnglishName: 'Alon Sivan',
    animatorHebrewName: 'אלון סיון'
  },
  {
    hebrewTitle: 'חומוס',
    englishTitle: 'Hummus',
    writerEnglishName: 'Lahav Halevy',
    writerHebrewName: 'להב הלוי',
    animatorEnglishName: 'Noam Berger',
    animatorHebrewName: 'נועם ברגר'
  },
  {
    hebrewTitle: 'לא כך דמיינתי את הקטסטרופה',
    englishTitle: 'This isn’t How I Imagined The Catastrophe',
    writerEnglishName: 'Einat Fogel-Levin',
    writerHebrewName: 'עינת פוגל-לוין',
    animatorEnglishName: 'Nimrod Saprir',
    animatorHebrewName: 'נמרוד ספיר'
  },
  {
    hebrewTitle: 'גזר דין',
    englishTitle: 'Sentence',
    writerEnglishName: 'Isaac Cohen',
    writerHebrewName: 'יצחק כהן',
    animatorEnglishName: 'Amit Cohen',
    animatorHebrewName: 'עמית כהן'
  },
  {
    hebrewTitle: 'מסיבת תחפושות',
    englishTitle: 'Costume Party',
    writerEnglishName: 'Dor Amitai',
    writerHebrewName: 'דור אמיתי',
    animatorEnglishName: 'Shai Cotani & Rotem Lebel',
    animatorHebrewName: 'שי כותני ורותם לבל'
  },
  {
    hebrewTitle: 'גיטרה',
    englishTitle: 'Guitar',
    writerEnglishName: 'Mati Gilad',
    writerHebrewName: 'מתי גלעד',
    animatorEnglishName: 'Barr Zutra',
    animatorHebrewName: 'בר זוטרא'
  }
]

function createPages () {
  let galleryTemplateStringArray = []
  data.map((page, i) => {
    const galleryTemplateString = `<div class="thumb container">
       <article class="post-wrap col-lg-12">
        <div class="titles">
          <span class="first white SundayMediumItalic">${page.hebrewTitle}</span>
          <span class="second gallery-${i + 1} SundayExtraBoldItalic">${page.englishTitle}</span>
        </div>
        <div class="credits">
          <span class="text white SundayRegular">Text</span>
          <div class="text-name">
            <span class="gallery-${i + 1} SundayRegular">${page.writerEnglishName}</span>
            <span class="white SundayRegular">${page.writerHebrewName}</span>
          </div>
          <span class="animation white SundayRegular">Animation</span>
          <div class="animation-name">
            <span class="gallery-${i + 1} SundayRegular">${page.animatorEnglishName}</span>
            <span class="white SundayRegular">${page.animatorHebrewName}</span>
          </div>
        </div>
      </article>
     </div>`
    galleryTemplateStringArray.push(galleryTemplateString)
  })
  $('#column').append(galleryTemplateStringArray)
}

const slider = {
  boxes: gsap.utils.toArray('.new'),
  mainTl: gsap.timeline({
    defaults: {
      duration: 1
    },
    scrollTrigger: {
      trigger: '#column',
      start: 'top 20%',
      end: 'bottom 100%',
      pin: '#column',
      scrub: true
    }
  }),
  pageAnimation: function (box, i) {
    const thumbs = gsap.utils.toArray('.thumb')
    const boxes = gsap.utils.toArray('.new')
    var tl = gsap.timeline()
    tl.to(box, { yPercent: -100 })
      .to([thumbs[i].querySelector('.titles'), thumbs[i].querySelector('.credits')], {
        autoAlpha: 0,
        translateY: -30,
        ease: 'power'
      }, '<')
      .set(thumbs[i + 1], { position: 'absolute', top: 0, width: '100%' }, '<')
      .to(boxes[i].querySelector('.slide'), { yPercent: 100 }, '<')
      .from(thumbs[i + 1].querySelector('.titles'), {
        autoAlpha: 0,
        translateY: 30,
        duration: 1,
        ease: 'power'
      }, '-=0.2')
      .from(thumbs[i + 1].querySelector('.credits'), {
        autoAlpha: 0,
        translateY: 30,
        duration: 1,
        ease: 'power'
      }, '<')
    return tl
  },
  lastPageAnimation: function (box, i) {
    var tl = gsap.timeline()
      .to('.new', { yPercent: -100 })
      .to('.thumb .titles, .thumb .credits', { autoAlpha: 0 }, '<')
      .to('.new > .slide', { yPercent: 100 }, '<')
    return tl
  },
  setNextPics: function () {
    slider.boxes.forEach((box, i) => {
      i > 0 ? gsap.set(box.firstElementChild, { scale: 1 }) : null
    })
  },
  setTl: function () {
    slider.mainTl
      .set('.images', { position: 'fixed' })
      .from('.side-logo', { autoAlpha: 0 })
    slider.boxes.forEach((box, i) => {
      i < (slider.boxes.length - 1) ? slider.mainTl.add(slider.pageAnimation(box, i)) :
        slider.mainTl.add(slider.lastPageAnimation(box, i))
    })
  }
}

createPages()
slider.setNextPics()
slider.setTl()

