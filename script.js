//will see local storage now
const addbutton=document.querySelector('#add');
const updatelsdata=()=>{
    const tareadata=document.querySelectorAll('textarea')
    const notes=[];
    tareadata.forEach((curelem,index)=>{
        return notes.push(curelem.value);
    })
    localStorage.setItem('notes',JSON.stringify(notes));
}
const addnote=(text='')=>{


    const note=document.createElement('div');
    note.classList.add('note');
    const htmldata=`
    <div class="operation">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text? "":"hidden"} "></div>

    <textarea class="${text? "hidden":" "}"></textarea>`
    //insertadjacenthtml and insertadjacentelement-whats the difference?
    note.insertAdjacentHTML('afterbegin',htmldata);
    
    //getting references-humein ab document se nhi but note ke andar se button aur textarea ke references chahiye
    const editbutton=note.querySelector('.edit');
    const delbutton=note.querySelector('.delete');
    const maindiv=note.querySelector('.main');
    const textarea=note.querySelector('textarea');

    delbutton.addEventListener('click',()=>{
        note.remove();
        updatelsdata();
    })
    textarea.value=text;
    maindiv.innerHTML=text;
    //ab ya to textarea chahiye ya fir main div kyuki agar save kiya to type nhi kar sakte
    editbutton.addEventListener('click',()=>{
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })
    textarea.addEventListener('change',(event)=>{
        const value=event.target.value;
        maindiv.innerHTML=value;
        updatelsdata();
    })
    //now we need to work on local storage
    //localStorage and session storage store data in form of key value pairs

    
    
    
    
    //now we gotta use appendchild-adds a node as last child of the body
    document.body.appendChild(note);
}

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes)
{
    notes.forEach((note)=>addnote(note));
}
addbutton.addEventListener('click',()=>addnote());