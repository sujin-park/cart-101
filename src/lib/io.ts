export default (callbackFunc: () => void) =>
  new IntersectionObserver(([entry], observer) => {
    if (entry.intersectionRatio) {
      observer.unobserve(entry.target)
      callbackFunc()
    }
  }, {
    root: null,
    rootMargin: '-100px',
    threshold: 0,
  }
)
