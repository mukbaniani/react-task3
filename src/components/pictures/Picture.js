import useFetch from '../../hooks';

function Picture() {
  const {
    loading,
    data: response,
    error,
  } = useFetch(`${process.env.REACT_APP_IMAGES_URL}?_start=1&_limit=10`);

  if (loading) {
    return (
      <div className="row">
        <h2>loading</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="alert alert-danger">
        <pre>{JSON.stringify(error)}</pre>
      </div>
    );
  }

  console.log(response.data);
  return (
    <div className="container">
      {' '}
      {response.map((pictures) => {
        return (
          <div key={pictures.id}>
            <img
              src={pictures.thumbnailUrl}
              alt={pictures.id}
              className="img-thumbnail"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Picture;
