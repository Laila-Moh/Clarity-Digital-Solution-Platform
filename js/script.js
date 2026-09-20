// document.getElementById('form').addEventListener('submit', function(e) {
//         // Prevent default browser form submission refresh
//         e.preventDefault();
        
//         // Show the exact alert message seen in your screenshot
//         alert("Thank you for your message! We'll get back to you soon.");
        
//         // Optional: Reset form fields after successful submission
//         this.reset();
//     });






const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Thank you for your message! We will get back to you soon.', 'success')
  })
}