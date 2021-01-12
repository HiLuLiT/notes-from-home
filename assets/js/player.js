;(() => {
  const progress = document.querySelector('#progress')
  const fill = progress.querySelector('.fill')
  const credits = document.querySelectorAll('.dynamic-color')
  const blockTrigger = document.getElementById('block-trigger')
  const slides = document.querySelectorAll('.new')
  const videoOverlay = document.getElementById('video-overlay')
  const opacityOverlay = document.getElementById('opacity-overlay')
  const videoElm = document.getElementById('video')
  const hebrewTextElm = document.getElementById('hebrew')
  const englishTextElm = document.getElementById('english')
  const modalClose = document.getElementById('modal-close')
  const engBtn = document.getElementById('engBtn')
  const hebBtn = document.getElementById('hebBtn')
  const videoTitleHebrew = document.getElementById('videoTitleHebrew')
  const animatorHebrew = document.getElementById('animatorHebrew')
  const writerHebrew = document.getElementById('writerHebrew')
  const videoTitleEnglish = document.getElementById('videoTitleEnglish')
  const writerEnglish = document.getElementById('writerEnglish')
  const animatorEnglish = document.getElementById('animatorEnglish')
  const button = document.getElementById('play-btn')
  let started = false
  
  function progressLoop () {
    started = true
    fill.style.width = `${Math.round(
      (videoElm.currentTime / videoElm.duration) * 100
    )}%`
  }
  
  function playPause (textOver) {
    opacityOverlay.classList.toggle('show')
    if (videoElm.paused && textOver !== true) {
      videoElm.play()
      button.innerHTML = ''
    } else {
      videoElm.pause()
      button.innerHTML = 'Play'
    }
  }
  
  function handleVideoModalClose () {
    videoElm.pause()
    document.getElementById('text-block').classList.remove('open')
    fill.style.width = 0
    button.innerHTML = ''
    videoOverlay.classList.add('hide')
    videoElm.classList.remove('show')
  }
  
  function handleProgressClick (e) {
    const rect = e.target.getBoundingClientRect()
    const width = rect.width
    const x = e.clientX - rect.left
    const rel = x / width
    const dur = videoElm.duration
    videoElm.currentTime = Math.round(rel * dur)
  }
  
  function handleTextSelection (event) {
    const englishParagraph = document.getElementById('english')
    const hebrewParagraph = document.getElementById('hebrew')
    const hebText = document.getElementById('hebText')
    const engText = document.getElementById('engText')
    
    if (event.target.id === 'engBtn') {
      engBtn.classList.add('active')
      hebBtn.classList.remove('active')
      hebrewParagraph.classList.add('hide')
      englishParagraph.classList.remove('hide')
      engText.classList.add('active')
      hebText.classList.remove('active')
    } else {
      hebBtn.classList.add('active')
      engBtn.classList.remove('active')
      hebrewParagraph.classList.remove('hide')
      englishParagraph.classList.add('hide')
      engText.classList.remove('active')
      hebText.classList.add('active')
    }
  }
  
  function handleTextBlockClick () {
    const textBlock = document.getElementById('text-block')
    engBtn.addEventListener('click', handleTextSelection)
    hebBtn.addEventListener('click', handleTextSelection)
    blockTrigger.innerText =
      blockTrigger.innerText === 'Text' ? 'Video' : 'Text'
    
    if (started) playPause(textBlock.classList.toggle('open'))
  }
  
  function setControlColors (ind) {
    try {
      const { controlColor } = data[ind]
      blockTrigger.style.backgroundColor = controlColor
      fill.style.backgroundColor = controlColor
      credits.forEach(credit => credit.style.color = controlColor)
    } catch (error) {}
  }
  
  function handleVideoModalOpen (ind) {
    const { videoLink, hebrewText, englishText } = data[ind]
    const { hebrewTitle, englishTitle, writerHebrewName, writerEnglishName, animatorHebrewName, animatorEnglishName } = data[ind]
    videoOverlay.classList.remove('hide')
    videoElm.src = videoLink
    englishTextElm.innerHTML = englishText
    hebrewTextElm.innerHTML = hebrewText
    videoTitleHebrew.innerHTML = hebrewTitle
    videoTitleEnglish.innerHTML = englishTitle
    writerHebrew.innerHTML = writerHebrewName
    writerEnglish.innerHTML = writerEnglishName
    animatorHebrew.innerHTML = animatorHebrewName
    animatorEnglish.innerHTML = animatorEnglishName
    if (!videoElm) return
    
    setControlColors(ind)
    videoElm.classList.add('show')
    videoElm.play()
    videoElm.addEventListener('timeupdate', progressLoop)
  }
  
  function initSlideClick (slide, ind) {
    slide.addEventListener('click', () => handleVideoModalOpen(ind))
  }
  
  button.addEventListener('click', playPause)
  blockTrigger.addEventListener('click', handleTextBlockClick)
  modalClose.addEventListener('click', handleVideoModalClose)
  progress.addEventListener('click', handleProgressClick)
  slides.forEach(initSlideClick)
})()
