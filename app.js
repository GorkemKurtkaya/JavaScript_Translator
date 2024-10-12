const fromLang=document.querySelector('#from-lang');
const toLang=document.querySelector('#to-lang');
const btnTranslate=document.querySelector('#btn-translate');
const fromtext=document.querySelector('#from-text');
const totext=document.querySelector('#to-text');



for(let lang in languages){
    let option=`<option value="${lang}">${languages[lang]}</option>`;
    fromLang.insertAdjacentHTML('beforeend',option);
    toLang.insertAdjacentHTML('beforeend',option);

    fromLang.value="tr-TR";
    toLang.value="en-GB";
}

btnTranslate.addEventListener("click",()=>{
    let text=fromtext.value;
    let from=fromLang.value;
    let to=toLang.value;

    const url=`https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            totext.value=data.responseData.translatedText;
        })
})

// const url="https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it"