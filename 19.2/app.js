const users = [
  {
  id: 167464,
  firstName: "Jimmy",
  lastName: "Arnold",
  email: "jimmya@gmail.com",
  },
  {
  id: 578447,
  firstName: "Martha",
  lastName: "Goldman",
  email: "gold@hotmail.com",
  },
  {
  id: 864578,
  firstName: "Tim",
  lastName: "Burton",
  email: "timmy.hotmail.com",
  },
  ];
  
  const ol = document.createElement('ol');
  const div= document.createElement('div');
  const body = document.body;
  body.append(div);
  div.append(ol);
  
  users.forEach(element => {
    const fullName = element.firstName+ element.lastName;
    const li =document.createElement('li');
    console.log(fullName)
    li.innerText= fullName;
    ol.append(li);
    li.setAttribute("data-id",element.id)
  });

  ol.style.listStyle= 'none';