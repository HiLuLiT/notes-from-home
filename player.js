;(() => {
  const progress = document.querySelector("#progress")
  const fill = progress.querySelector(".fill")
  const blockTrigger = document.getElementById("block-trigger")
  const slides = document.querySelectorAll(".new")
  const videoOverlay = document.getElementById("video-overlay")
  const videoElm = document.getElementById("video")
  const hebrewTextElm = document.getElementById("hebrew")
  const englishTextElm = document.getElementById("english")
  const modalClose = document.getElementById("modal-close")
  const eng = document.getElementById("engBtn")
  const heb = document.getElementById("hebBtn")
  button = document.getElementById("play-btn")
  let started = false

  function progressLoop() {
    started = true
    fill.style.width = `${Math.round(
      (video.currentTime / video.duration) * 100
    )}%`
  }

  function playPause(textOver) {
    if (video.paused && textOver !== true) {
      video.play()
      button.innerHTML = ""
    } else {
      video.pause()
      button.innerHTML = "Play"
    }
  }

  function handleVideoModalClose() {
    video.pause()
    fill.style.width = 0
    videoOverlay.classList.add("hide")
    video.classList.remove("show")
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
    const englishParagraph = document.getElementById("english")
    const hebrewParagraph = document.getElementById("hebrew")
    if (event.target.id === "engBtn") {
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
    blockTrigger.innerText =
      blockTrigger.innerText === "Text" ? "Video" : "Text"

    if (started) playPause(textBlock.classList.toggle("open"))
  }

  function setControlColors(ind) {
    try {
      const { controlColor } = data[ind]
      blockTrigger.style.backgroundColor = controlColor
      fill.style.backgroundColor = controlColor
    } catch (error) {}
  }

  function handleVideoModalOpen(ind) {
    const { videoLink, hebrewText, englishText } = data[ind]
    videoOverlay.classList.remove("hide")
    videoElm.src = videoLink
    englishTextElm.innerHTML = englishText
    hebrewTextElm.innerHTML = hebrewText
    if (!videoElm) return

    setControlColors(ind)
    videoElm.classList.add("show")
    videoElm.play()
    videoElm.addEventListener("timeupdate", progressLoop)
  }

  function initSlideClick(slide, ind) {
    slide.addEventListener("click", () => handleVideoModalOpen(ind))
  }

  button.addEventListener("click", playPause)

  modalClose.addEventListener("click", handleVideoModalClose)
  blockTrigger.addEventListener("click", handleTextBlockClick)
  progress.addEventListener("click", handleProgressClick)
  slides.forEach(initSlideClick)
})()
