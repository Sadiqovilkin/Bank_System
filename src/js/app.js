// fetch('./data.json')
//     .then(res =>{
//         return res.json
//     })
//     .then(data => console.log(data))
const textarea = document.querySelector(".right_side")
// fetch('./data.json')
//   .then((res) => res.json())
//   .then((data) => {
//     data.map((el) => {
//         textarea.innerHTML += `
//         <p>${el.id}</p>
//         `
//     });
//   });
  const data = async()=>{
    const req = await fetch('./data.json')
    const res = await req.json();
    res.map((e)=>{
      textarea.innerHTML += `
      <p>${e.id}</p>
      `
    })
  }
  data()