const featuresBtn = document.getElementById('features-btn')
const companyInfosBtn = document.getElementById('company-infos-btn')

const featuresList = document.querySelector('.features-list')
const companyInfosList = document.querySelector('.company-infos-list')

featuresBtn.addEventListener('click', function () {
    const expanded = this.ariaExpanded
    if (expanded == 'true') {
        featuresList.classList.remove('active')
        this.ariaExpanded = 'false'
    } else {
        featuresList.classList.add('active')
        this.ariaExpanded = 'true'
    }
})

companyInfosBtn.addEventListener('click', () => {
    const expanded = this.ariaExpanded
    if (expanded == 'true') {
        companyInfosList.classList.remove('active')
        this.ariaExpanded = 'false'
    } else {
        companyInfosList.classList.add('active')
        this.ariaExpanded = 'true'
    }
})