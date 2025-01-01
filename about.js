document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
  
    // Example: Fetching dynamic content (replace with an actual API call)
    const aboutContent = `
      Welcome to Taxism! Our mission is to provide the best tax solutions 
      and services tailored to your needs. With years of experience, 
      we aim to make your tax experience seamless and stress-free.
      Your Trusted Chartered Accountant
                    Expert financial advice and tax planning.
                     With years of experience and a commitment to excellence, our goal is to 
                ensure your financial success. We offer a comprehensive range of services, 
                including tax planning, auditing, and corporate finance services.
    `;
  
    // Insert dynamic content
    dynamicText.textContent = aboutContent;
  });
  