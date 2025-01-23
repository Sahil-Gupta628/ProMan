//display  modal on click
 
const modalWrapper = document.querySelector(".modals-wrapper");
if (modalWrapper){
    function displayModal(id){
        const modal = document.getElementById(id);
        modalWrapper.style.display = "flex";
        modal.style.display = "flex";
        //close modal
        const close = document.getElementById("close-modal");
        close.addEventListener("click", () =>{
            modalWrapper.style.display = "none";
            modal.style.display = "none";
        //I added this later, didn't cover it on the tutorial
        document.querySelector("header").style.display = "unset";
        })

        //I added this later, didn't cover it on the tutorial
        document.querySelector("header").style.display = "none";
    }
}


//copy to clipboard
const copies = document.querySelectorAll(".copy");
copies.forEach(copy =>{
    copy.onclick = () =>{
        let elemntToCopy = copy.previousElementSibling;
        elemntToCopy.select();
        document.execCommand("copy");
    }
})

//I added this later, didn't cover it on the tutorial
//Display the actions of the password card for mobile devices
const actions = document.querySelectorAll(".actions");
if (actions){
    actions.forEach(action =>{
        action.onclick = () =>{
            const links = action.querySelectorAll("a");
            links.forEach(link =>{
                link.style.display = "flex";
            })
            setTimeout(function(){
                links.forEach(link =>{
                    link.style.display = "none";
                })}
            , 3000)
        }
    })
}

// Function to display a modal
function displayModal(modalId) {
    const modalsWrapper = document.getElementById('modals-wrapper');
    const modal = document.getElementById(modalId);
    
    // Show modal wrapper and the specific modal
    if (modalsWrapper && modal) {
        modalsWrapper.classList.add('active');
        modal.style.display = 'block';
    }
}

// Function to close any active modal
function closeModal() {
    const modalsWrapper = document.getElementById('modals-wrapper');
    const modals = document.querySelectorAll('.modal');

    // Hide modal wrapper and all modals
    if (modalsWrapper) modalsWrapper.classList.remove('active');
    modals.forEach(modal => (modal.style.display = 'none'));
}

// Copy to clipboard functionality for card items
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy')) {
        const input = e.target.previousElementSibling;

        if (input) {
            navigator.clipboard.writeText(input.value).then(() => {
                alert('Copied to clipboard!');
            }).catch(err => {
                console.error('Error copying text: ', err);
            });
        }
    }
});
