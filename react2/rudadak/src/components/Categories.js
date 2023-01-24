import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {Outlet} from 'react-router-dom';


const categories = [
  {
    name: 'home',
    text: '홈'
  },
  {
    name: 'find',
    text: '친구찾기'
  }
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover{
    color: #495057;
  }

  &+&{
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return(
    <div>
      <header>
        <CategoriesBlock>
          {categories.map(c => (
            <Category
              key={c.name}
              to={c.name==='home'?'/':`/${c.name}`}
            >
              {c.text}
            </Category>
          ))}
        </CategoriesBlock>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Categories;