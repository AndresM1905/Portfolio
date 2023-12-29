import { WebcimesModal } from "../../node_modules/webcimes-modal/dist/js/webcimes-modal.esm.js";

const exp1=document.querySelector("#experience1");
const exp2=document.querySelector("#experience2");
const exp3=document.querySelector("#experience3");
const exp4=document.querySelector("#experience4");

exp1.addEventListener("click",()=>{

    const myModal = new WebcimesModal({
        titleHtml: "Experience 1", // html for title, default "null"
        bodyHtml: document.querySelector("#experience1").outerHTML, // html for body, default "null"
        buttonConfirmHtml: "Ok", // html for confirm button, default "null"
        showCloseButton: true,
    });

});

exp2.addEventListener("click",()=>{

    const myModal = new WebcimesModal({
        titleHtml: "Experience 2", // html for title, default "null"
        bodyHtml: document.querySelector("#experience2").outerHTML, // html for body, default "null"
        buttonConfirmHtml: "Ok", // html for confirm button, default "null"
        showCloseButton: true
    });

});

exp3.addEventListener("click",()=>{

    const myModal = new WebcimesModal({
        titleHtml: "Experience 3", // html for title, default "null"
        bodyHtml: document.querySelector("#experience3").outerHTML, // html for body, default "null"
        buttonConfirmHtml: "Ok", // html for confirm button, default "null"
        showCloseButton: true
    });

});

exp4.addEventListener("click",()=>{

    const myModal = new WebcimesModal({
        titleHtml: "Experience 4", // html for title, default "null"
        bodyHtml: document.querySelector("#experience4").outerHTML, // html for body, default "null"
        buttonConfirmHtml: "Ok", // html for confirm button, default "null"
        showCloseButton: true
    });
});