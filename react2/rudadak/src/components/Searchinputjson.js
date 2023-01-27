import React from 'react';

const Searchinputjson = ({name,onChange, onClick}) => {

  return(
    <div>
      제품명 : <input name = "name" type="text" placeholder="이름을 입력하세요" value={name} onChange={onChange} /><br />
      <button type="submit" onClick={onClick}>탐색!</button>
    </div>
  );
};

export default Searchinputjson;