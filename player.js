;(() => {
  const progress = document.querySelector("#progress")
  const fill = progress.querySelector(".fill")
  const blockTrigger = document.getElementById("block-trigger")
  const slides = document.querySelectorAll(".new")
  const videoOverlay = document.getElementById('video-overlay')
  const videos = videoOverlay.querySelectorAll('video')
  const modalClose = document.getElementById('modal-close')
  const eng = document.getElementById("engBtn")
  const heb = document.getElementById("hebBtn")
  let video
  button = document.getElementById("play-btn")
  let started = false

  function progressLoop() {
    started = true
    console.log('POOOO')
    fill.style.width = `${Math.round(
      (video.currentTime / video.duration) * 100
    )}%`
  }

  function playPause() {
    if (video.paused) {
      video.play()
      button.innerHTML = "&#10073;&#10073;"
    } else {
      video.pause()
      button.innerHTML = "►"
    }
  }

  function handleVideoModalClose() {
    video.pause()
    fill.style.width = 0
    videoOverlay.classList.add('hide')
    video.classList.remove('show')
  }

  function handleProgressClick(e) {
    const rect = e.target.getBoundingClientRect()
    const width = rect.width
    const x = e.clientX - rect.left
    const rel = x / width
    const dur = video.duration
    video.currentTime = Math.round(rel * dur)
  }
  
  function handleTextSelection(event) {
    const englishParagraph = document.getElementById('english')
    const hebrewParagraph = document.getElementById('hebrew')
    if(event.target.id === 'engBtn') {
      eng.classList.add("active")
      heb.classList.remove("active")
      hebrewParagraph.classList.add("hide")
      englishParagraph.classList.remove("hide")
    } else {
      heb.classList.add("active")
      eng.classList.remove("active")
      hebrewParagraph.classList.remove("hide")
      englishParagraph.classList.add("hide")
    }
    
  }

  function handleTextBlockClick() {
    const textBlock = document.getElementById("text-block")
    eng.addEventListener("click", handleTextSelection)
    heb.addEventListener("click", handleTextSelection)
    textBlock.classList.toggle("open")
    blockTrigger.innerText =
      blockTrigger.innerText === "Text" ? "Video" : "Text"

    if (started) playPause()
  }

  function handleVideoModalOpen(ind) {
    videoOverlay.classList.remove('hide')
    video = videos[ind] && videos[ind]
    
    video.classList.add('show')
    video.play()
    video.addEventListener("timeupdate", progressLoop)
  }

  function initSlideClick(slide, ind) {
    slide.addEventListener("click", () => handleVideoModalOpen(ind))
  }

  button.addEventListener("click", playPause)

  modalClose.addEventListener('click', handleVideoModalClose)
  blockTrigger.addEventListener("click", handleTextBlockClick)
  progress.addEventListener("click", handleProgressClick)
  slides.forEach(initSlideClick)
})()
