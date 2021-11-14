const userWord = document.querySelector('#user-word'), // input
    submitCheckBtn = document.querySelector('#sub-check-button'), // submit / check button
    guessWord = document.querySelector('#guess-word'), // ----- / word
    info = document.querySelector('#info'), // Enter a letter / one more letter / The end
    message = document.querySelector('#message'); // Enter word / Your word ... letters / No such letter / Supper!

let error = false, mainPage = true, wordArr = [], arrTemp = []




submitCheckBtn.onclick = () => {
    const word = userWord.value
    attentionInfo(word)
    if (!error && mainPage) {
        mainPage = false
        wordArr = word.split('')
        arrTemp = word.split('').map(el => el = '-')
        guessWord.style.display = 'block'
        guessWord.innerHTML = arrTemp.join('')
        info.style.display = 'block'
        message.innerHTML = `Your word is ${word.length} ${word.length == 1 ? 'letter' : 'letters'}`
        submitCheckBtn.innerHTML = 'Check'
        userWord.value = ''
    } else if (!error && !mainPage) {
        if (wordArr.join('').includes(word)) {
            arrTemp = changeArr(arrTemp, word)
            guessWord.innerHTML = arrTemp.join('')
            message.innerHTML = 'Supper!'
            if (arrTemp.join('').includes('-')) {
                info.innerHTML = 'One more letter'
            } else {
                guessWord.innerHTML = wordArr.join('')

                if (confirm(`Perfect!!! Correct word: "${wordArr.join('')}"! Start again?`)) {
                    mainPage = true
                    guessWord.style.display = 'none'
                    message.innerHTML = 'Enter a word'
                    info.style.display = 'none'
                    submitCheckBtn.innerHTML = 'Submit'
                } else {
                    submitCheckBtn.style.display = 'none'
                    info.innerHTML = 'The end!'
                }
            }
            userWord.value = ''
        } else {
            message.innerHTML = 'No such letter'
            userWord.value = ''
        }
        userWord.value = ''
    }
}

function changeArr(inputArr, letter) {
    let arrCheck = [...wordArr]
    for (let i = 0; i < arrCheck.length; i++) {
        if (inputArr[i] == '-') {
            arrCheck[i] == letter ? arrCheck[i] = letter : arrCheck[i] = '-'
        }
    }
    return arrCheck
}

function attentionInfo(input) {
    if (input == '') {
        error = true
        alert('Please check input! Field is empty')
    } else { error = false }
}
