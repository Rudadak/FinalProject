import React from "react";
import styled from "styled-components";


// function Pagination({ total, limit, page, setPage }) {
//   const numPages = Math.ceil(total / limit);

//   return (
//     <>
//       <Nav>
//         <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
//           &lt;
//         </Button>
//         {Array(numPages)
//           .fill()
//           .map((_, i) => (
//             <Button
//               key={i + 1}
//               onClick={() => setPage(i + 1)}
//               aria-current={page === i + 1 ? "page" : null}
//             >
//               {i + 1}
//             </Button>
//           ))}
//         <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
//           &gt;
//         </Button>
//       </Nav>
//     </>
//   );
// }

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 4px;
//   margin: 16px;
// `;

// const Button = styled.button`
//   border: none;
//   border-radius: 8px;
//   padding: 8px;
//   margin: 0;
//   background: black;
//   color: white;
//   font-size: 1rem;

//   &:hover {
//     background: tomato;
//     cursor: pointer;
//     transform: translateY(-2px);
//   }

//   &[disabled] {
//     background: grey;
//     cursor: revert;
//     transform: revert;
//   }

//   &[aria-current] {
//     background: deeppink;
//     font-weight: bold;
//     cursor: revert;
//     transform: revert;
//   }
// `;




const PageUl = styled.ul`
  float: left;
  list-style: none;
  text-align: center;
  border-radius: 3px;
  color: white;
  padding: 1px;
  border-top: 3px solid #186ead;
  border-bottom: 3px solid #186ead;
  background-color: rgba(0, 0, 0, 0.4);
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
    
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    border-radius: 100%;
    color: white;
    background-color: #263a6c;
  }
`;







const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
console.log(pageNumbers)
  return (
    <div className="news">
      <nav>
        <PageUl className="paginations">

          {pageNumbers.map((number) => (
    
            <PageLi key={number} className="page-item">
              <PageSpan onClick={() => paginate(number)} className="page-link">
                {number}
                {console.log(number)}
              </PageSpan>
            </PageLi>
          ))}


        </PageUl>
      </nav>
    </div>
  );
};


// const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
//     const pageNumbers = [];
//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//       pageNumbers.push(i);
//     }
//     return (
//       <div>
//         <nav>

//             {pageNumbers.map((number) => (

//                     <span onClick={() => paginate(number)} className="page-link">
//                   {number}
//                   </span>

//             ))}

//         </nav>
//       </div>
//     );
//   };


  

export default Pagination;