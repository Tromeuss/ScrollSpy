


const threshold = .6 // pourcentage de visibiliter de l'élement avant de l'activer


const active = function (element) {
    const id = element.getAttribute('id')
    const anchor = document.querySelector(`a[href="#${id}"]`)
    if (anchor === null) {
        return null
    }
    anchor.parentElement.querySelectorAll(".active").forEach(node => node.classList.remove('active'))

    anchor.classList.add('active')
}






const callback = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > threshold) {
            active(entry.target)
        }
    })
}


const spies = document.querySelectorAll(".data")

if (spies.length > 0) {
    const observer = new IntersectionObserver(callback, {
        threshold : threshold
    })
    spies.forEach(function (spy) {
        observer.observe(spy)
    })
}



