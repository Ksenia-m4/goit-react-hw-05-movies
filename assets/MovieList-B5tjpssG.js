import{d as i,N as n,P as s,a,j as t}from"./index-B8UNPLxc.js";const p=i.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 20px;
`,c=i.li`
  width: 200px;
  text-align: center;
`,d=i(n)`
  text-decoration: none;
  display: block;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`,l=i.div`
  position: relative;
  overflow: hidden;

  width: 200px;
  height: 300px;
`,x=i.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,h=i.p`
  max-width: 300px;
  display: block;
  font-size: 16px;
  color: black;
  padding-top: 12px;
  padding-bottom: 20px;
`,b=({movies:o})=>{const r=a();return t.jsx(t.Fragment,{children:t.jsx(p,{children:o==null?void 0:o.map(e=>t.jsx(c,{children:t.jsxs(d,{to:`/movies/${e.id}`,state:{from:r},children:[t.jsx(l,{children:t.jsx(x,{src:`https://image.tmdb.org/t/p/w300/${e.poster_path}`,alt:e.title})}),t.jsx(h,{children:e.title})]})},e.id))})})};b.propTypes={movies:s.arrayOf(s.shape({id:s.number.isRequired,title:s.string.isRequired})).isRequired};export{b as M};
