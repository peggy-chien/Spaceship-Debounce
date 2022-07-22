function debounce(callback, delay) {
  let timer = null;

  return () => {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  }
}
