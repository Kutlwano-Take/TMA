document.querySelectorAll('.step-header').forEach(header => {
  header.addEventListener('click', () => {
    const step = header.parentElement;
    const isActive = step.classList.contains('active');
    
    document.querySelectorAll('.step').forEach(s => {
      s.classList.remove('active');
    });
    
    if (!isActive) {
      step.classList.add('active');
    }
  });
});