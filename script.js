console.clear()
gsap.registerPlugin(ScrollTrigger)

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

