

function isStandAlone(){
    if (!window.navigator.standalone) {
        document.getElementById('add-to-home-screen').style.display = 'block';
        console.log('not standalone')
    } else {
      alert('standalone')
    }
}
if (navigator.serviceWorker) {
    console.log('Service worker supported');
    isStandAlone();
    // initServiceWorker();

}
