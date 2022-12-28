const $ = (ref1, ref2) => {
  const elements = ref2 ? ref1 : document.querySelectorAll(ref2 ? ref2 : ref1);
  if (elements.length > 1) return [...elements];
  return elements[0];
};
