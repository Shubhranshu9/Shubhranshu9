
  
  // Smooth scrolling for anchor links (if any navigation anchors exist)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  
  // Hover effect for career sections (applies a temporary style change)
  document.querySelectorAll('.career-section').forEach(section => {
    section.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.03)';
      this.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
    });
  
    section.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
    });
  });
  document.getElementById('careerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('position', document.getElementById('position').value);
    formData.append('message', document.getElementById('message').value);
    formData.append('resume', document.getElementById('resume').files[0]);

    try {
        const response = await fetch('http://localhost:3000/career', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            alert('Your application has been submitted successfully!');
            document.getElementById('careerForm').reset(); // Clear the form
        } else {
            const errorData = await response.json();
            alert(`Failed to submit application: ${errorData.error || 'Unknown error'}`);
        }
    } catch (error) {
        console.error('Error submitting the application:', error);
        alert('There was an error submitting your application.');
    }
});
