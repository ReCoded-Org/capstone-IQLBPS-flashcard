/* eslint-disable react/destructuring-assignment */
import Card from '../components/Card';
import Filter from '../components/filter/Filter';

const Search = (props) => {
  return (
    <div className="grid-container grid grid-cols-4">
      <Filter />
      <div className="col-span-3">
        <div className="m-5 grid grid-cols-4 gap-12">
          {props.data.length > 0 ? (
            props.data.map((el) => (
              <Card title={el.title} description={el.description} />
            ))
          ) : (
            <h1>NO DATA FOUND!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
