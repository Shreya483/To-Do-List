var button=document.querySelector('button');
console.log(button);
const e=document.getElementById('add-book');
console.log(e);
var ul=document.querySelector('#b > ul');
console.log(ul);
button.addEventListener("click",function(event)
{
  event.stopPropagation();
var dv=document.createElement('div');
dv.className="demo";
var li=document.createElement('li');
li.className = "demo1";

var btn=document.createElement('button');
btn.className = "demo2";
li.innerHTML=e.value;
btn.setAttribute("class","rmv-btn");
btn.innerHTML = "remove";
li.innerHTML = e.value;
dv.appendChild(li);
dv.appendChild(btn);
var firstchild=ul.firstElementChild;
var before=ul.insertBefore(dv,ul.firstElementChild);
before.addEventListener("click",remove);
e.value=" ";
event.preventDefault();
},false);
var del = document.querySelectorAll('button.rmv-btn');
function remove(event)
{
  var rmbtn=event.target.parentElement;
  rmbtn.parentNode.removeChild(rmbtn);}
  for(let i=0;i<del.length;i++)
{
    del[i].addEventListener("click",function(event){
      var parent=document.getElementById("b");
      var list=document.getElementsByTagName("li");
      var rem=parent.removeChild(list);
      parent.appendChild(rem);

    });
  }
