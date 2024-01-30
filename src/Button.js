function Join() {
    function handleClick() {
        var modal = document.querySelector('.modal')
        var modalSec = document.querySelector('.modalSec')
        modal.classList.add('show')
        modalSec.style.display = 'grid'
    }
    return(
        <>
         <button className="btn join" onClick={handleClick}>Join the waitlist </button>
        </>
    )
}
export default Join;