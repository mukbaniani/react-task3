import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanies } from '../../redux/actions/common-action';
import { companiesSelector } from '../../redux/selectors/common-selectors';

function FakerCompany() {
  const dispath = useDispatch();
  const companies = useSelector(companiesSelector);

  useEffect(() => {
    dispath(getCompanies());
  }, [dispath]);

  return (
    <div className="col-6">
      {/* <pre>{JSON.stringify(storage, null, 2)}</pre> */}
      <pre>{JSON.stringify(companies, null, 2)}</pre>
    </div>
  );
}

export default FakerCompany;
