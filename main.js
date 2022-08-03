let inp1 = document.querySelector('.input1');
let inp2 = document.querySelector('.input2');
let inp3 = document.querySelector('.input3');
let inp4 = document.querySelector('.input4');

let inpArr = [inp1, inp2, inp3, inp4];

let li1 = document.querySelector('.item1');
let li2 = document.querySelector('.item2');
let li3 = document.querySelector('.item3');
let li4 = document.querySelector('.item4');

let liArr = [li1, li2, li3, li4];

liArr.forEach((li) => {
  li.style.height = '128px';
});

function checker(num) {
  liArr.forEach((li) => {
    if (li.className.split('').reverse()[0] == num) {
      li.style.height === '128px' ? (li.style.height = '310px') : (li.style.height = '128px');
    } else {
      li.style.height = '128px';
    }
  });
  inpArr.forEach((inp) => {
    if (inp.className.split('').reverse()[0] != num) {
      inp.checked = true;
    }
  });
}
