function select(index){
    while(document.getElementsByClassName('post').length > 0){
        document.getElementsByClassName('post')[0].classList.add('pre');
        document.getElementsByClassName('post')[0].classList.remove('post');
    }

    document.getElementsByClassName('postR')[0].classList.add('preR');
    document.getElementsByClassName('postR')[0].classList.remove('postR');

    setTimeout(()=>{
        document.getElementById('item-title').innerHTML = "Project 0"+index;
        while(document.getElementsByClassName('pre').length > 0){
            document.getElementsByClassName('pre')[0].classList.add('post');
            document.getElementsByClassName('pre')[0].classList.remove('pre');
        }

        document.getElementsByClassName('preR')[0].classList.add('postR');
        document.getElementsByClassName('preR')[0].classList.remove('preR');
    }, 300);

    document.getElementsByClassName('selected')[0].classList.remove('selected');
    document.getElementById('id'+index).classList.add('selected');

    if(document.getElementsByClassName('stretched')[0] != null){
        document.getElementsByClassName('stretched')[0].classList.remove('stretched');
    }

    document.getElementById('spacer'+index).classList.add('stretched');
}

setTimeout(()=>{
    document.getElementById('arrow').classList.remove('pre');
}, 1000)

function revealGallery(){
    document.getElementById('intro').classList.add('hidden');
    setTimeout(()=>{
        document.getElementById('light-material').classList.add('visible');
        document.getElementById('dark-material').classList.add('visible');

        setTimeout(()=>{
            while(document.getElementsByClassName('pre').length > 0){
                document.getElementsByClassName('pre')[0].classList.add('post');
                document.getElementsByClassName('pre')[0].classList.remove('pre');
            }

            document.getElementsByClassName('preR')[0].classList.add('postR');
            document.getElementsByClassName('preR')[0].classList.remove('preR');
        }, 500);
    }, 500);
}

function hideGallery(){
    while(document.getElementsByClassName('post').length > 0){
        document.getElementsByClassName('post')[0].classList.add('pre');
        document.getElementsByClassName('post')[0].classList.remove('post');
    }

    document.getElementsByClassName('postR')[0].classList.add('preR');
    document.getElementsByClassName('postR')[0].classList.remove('postR');

    setTimeout(()=>{
        document.getElementById('light-material').classList.remove('visible');
        document.getElementById('dark-material').classList.remove('visible');
        setTimeout(()=>{
            document.getElementById('intro').classList.remove('hidden');
        }, 500);
    }, 500);
}