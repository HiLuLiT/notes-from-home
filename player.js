;(() => {
  const progress = document.querySelector("#progress")
  const fill = progress.querySelector(".fill")
  const blockTrigger = document.getElementById("block-trigger")
  const slides = document.querySelectorAll(".new")
  const videoOverlay = document.getElementById('video-overlay')
  const videos = videoOverlay.querySelectorAll('video')
  const modalClose = document.getElementById('modal-close')
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

  function handleTextBlockClick() {
    const textBlock = document.getElementById("text-block")
    const width = document.querySelector("figure").clientWidth * 0.7

    textBlock.querySelector("#text-block .wrapper").style.width = `${width}px`
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
