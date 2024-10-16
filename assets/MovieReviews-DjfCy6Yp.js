import{d as i,b as l,r as s,j as e}from"./index-B8UNPLxc.js";import{d as f,N as x}from"./getMovies-Cqx9-eYT.js";const h=i.ul``,p=i.li`
  margin-bottom: 12px;
  padding: 20px 32px;
  background-color: #f8f8f8;
  border-radius: 6px;
`,u=i.p`
  margin-bottom: 8px;
  font-weight: 600;
`,g=()=>{const{movieId:o}=l(),[a,n]=s.useState([]),[c,r]=s.useState(!1);return s.useEffect(()=>{async function t(){r(!0);try{const d=await f(o);n(d)}catch{x.Notify.failure("Failed to load reviews. Please try again later.")}finally{r(!1)}}t()},[o]),e.jsx(e.Fragment,{children:c?e.jsx("p",{children:"Loading reviews..."}):a.length>0?e.jsx(h,{children:a.map(t=>e.jsxs(p,{children:[e.jsxs(u,{children:["Author: ",t.author]}),e.jsx("p",{children:t.content})]},t.id))}):e.jsx("p",{children:"We don`t have any reviews for this movie"})})};export{g as default};
