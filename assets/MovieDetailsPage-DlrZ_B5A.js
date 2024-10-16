import{d as t,N as j,b as f,r as n,j as e,L as u,c as b,P as s,a as w,O as k}from"./index-B8UNPLxc.js";import{b as y,N as L}from"./getMovies-Cqx9-eYT.js";const M=t.div`
  display: flex;
  margin-bottom: 32px;
`,N=t.div`
  width: 300px;
  height: 450px;
  margin-right: 30px;
`,B=t.img`
  width: 100%;
  display: block;
  object-fit: cover;
`,G=t.div`
  padding: 20px;
  max-width: 600px;
`,P=t.h2`
  font-size: 24px;
  margin-bottom: 12px;
`,c=t.p`
  font-size: 16px;
  margin-bottom: 32px;
`,l=t.h3`
  margin-bottom: 12px;
`,p=t.p`
  margin-bottom: 20px;
`,S=t.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 400px;
`,_=t.li`
  padding: 5px 10px;
  background-color: #e5e5e5;
  border-radius: 5px;
`,R=t.div`
  margin-bottom: 20px;
`,I=t.ul`
  display: flex;
  gap: 10px;

  list-style: none;
`,v=t(j)`
  display: block;
  padding: 5px 10px;

  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color: #000;

  &.active {
    border: 1px solid #000;
    border-radius: 5px;
  }

  &:hover {
    font-weight: 600;
  }
`,O=()=>{var x;const{movieId:o}=f(),[i,a]=n.useState(null),[g,d]=n.useState(!1);return n.useEffect(()=>{d(!0);async function r(){try{const m=await y(o);a(m)}catch{L.Notify.failure("Failed to load movie details. Please try again later.")}finally{d(!1)}}r()},[o]),g?e.jsx(u,{}):i&&e.jsxs(e.Fragment,{children:[e.jsxs(M,{children:[e.jsx(N,{children:i.poster_path?e.jsx(B,{width:"300px",src:`https://image.tmdb.org/t/p/w300${i.poster_path}`,alt:i.title,className:"movie-poster"}):e.jsx("p",{children:"No poster available"})}),e.jsxs(G,{children:[e.jsxs(P,{children:[i.title," (",(x=i.release_date)==null?void 0:x.slice(0,4),")"]}),i.vote_average!==null&&i.vote_average!==void 0?i.vote_average>0?e.jsxs(c,{children:["User Score: ",i.vote_average*10,"%"]}):e.jsx(c,{children:"No score available"}):e.jsx(c,{children:"No data available"}),e.jsx(l,{children:"Overview"}),i.overview?e.jsx(p,{children:i.overview}):e.jsx(p,{children:"No overview available."}),e.jsx(l,{children:"Genres"}),i.genres&&i.genres.length>0?e.jsx(S,{children:i.genres.map(r=>e.jsx(_,{children:r.name},r.id))}):e.jsx("p",{children:"Sorry, we don`t have any information about genres for this movie."})]})]}),e.jsxs(R,{children:[e.jsx(l,{children:"Additional information"}),e.jsxs(I,{children:[e.jsx("li",{children:e.jsx(v,{to:"cast",children:"Cast"})}),e.jsx("li",{children:e.jsx(v,{to:"reviews",children:"Reviews"})})]})]})]})},z=t.div`
  width: 100px;
  padding: 10px 20px;
  margin-bottom: 12px;
  cursor: pointer;
`,A=t(b)`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: black;

  &:hover {
    font-weight: 600;
  }
`,h=({backLink:o,children:i})=>e.jsx(z,{children:e.jsx(A,{to:o,className:"back-button",children:i})});h.propTypes={backLink:s.oneOfType([s.string,s.shape({pathname:s.string.isRequired,state:s.object})]).isRequired,children:s.string.isRequired};const q=()=>{var a;const o=w(),i=n.useRef(((a=o.state)==null?void 0:a.from)??"/movies");return e.jsxs(e.Fragment,{children:[e.jsx(h,{backLink:i.current,children:"← Go back"}),e.jsx(O,{}),e.jsx(n.Suspense,{fallback:e.jsx("div",{children:"Loading subpage..."}),children:e.jsx(k,{})})]})};export{q as default};
