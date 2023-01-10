const getBtn = document.getElementById("get-btn");
const showData = document.getElementById("show");

const getData = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users");

  xhr.onload = () => {
    const { data } = JSON.parse(xhr.responseText);
    console.log(data);
    let template = "";
    data.map((newData) => {
      const { id, email, first_name, last_name, avatar } = newData;
      template += `
           <img src=${avatar}>
             <h1>${id}</h1>
             <h3>${first_name}</h3>
             <h3>${last_name}</h3>
             <p>${email}</p>
         `;
    });
    showData.innerHTML = template;
  };
  xhr.send();
};

getBtn.addEventListener("click", getData);
