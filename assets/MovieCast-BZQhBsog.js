import{d as s,b as d,r as e,j as t}from"./index-B8UNPLxc.js";import{c as p,N as x}from"./getMovies-Cqx9-eYT.js";const h=s.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`,m=s.li`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`,f=s.div`
  width: 100px;
`;s.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;const g=s.p`
  font-weight: 500;
  margin-bottom: 8px;
`,j=s.p``,C=()=>{const{movieId:i}=d(),[r,c]=e.useState([]),[o,n]=e.useState(!1);return e.useEffect(()=>{async function a(){n(!0);try{const l=await p(i);c(l)}catch{x.Notify.failure("Failed to load cast. Please try again later.")}finally{n(!1)}}a()},[i]),t.jsx(t.Fragment,{children:o?t.jsx("p",{children:"Loading cast..."}):r.length>0?t.jsx(t.Fragment,{children:t.jsx(h,{children:r.map(a=>t.jsxs(m,{children:[t.jsx(f,{children:t.jsx("img",{src:`http://image.tmdb.org/t/p/w200/${a.profile_path}`,alt:a.name})}),t.jsxs("div",{children:[t.jsx(g,{children:a.name}),t.jsxs(j,{children:["Character: ",a.character]})]})]},a.id))})}):t.jsx("p",{children:"No cast information available."})})};export{C as default};
