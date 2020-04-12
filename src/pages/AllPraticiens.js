import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabPraticiens from '../components/praticiens/tabPraticiens/TabPraticiens';
import Pagination from '../components/praticiens/tabPraticiens/Pagination';
import FullPageLayout from '../components/layouts/FullPageLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const AllPraticiens = () => {
  const [praticiens, setPraticiens] = useState([]);
  const [nombrePages, setNombrePages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [limit] = useState(50);

  useEffect(() => {
    fetchData(currentPage, null);
    // eslint-disable-next-line
  }, []);

  // Change page
  const paginate = (e) => {
    const selectedPage = e.selected + 1;
    setCurrentPage(selectedPage);
    fetchData(currentPage, filter);
  };

  const fetchData = async (currentPage, filter) => {
    let mounted = true;
    setLoading(true);
    let res;
    if (filter) {
      if (filter !== '') {
        if (mounted) {
          res = await axios.get(
            `http://localhost:4466/praticiens/${filter}/${limit}/${currentPage}`
          );
        }
      }
    } else {
      if (mounted) {
        res = await axios.get(
          `http://localhost:4466/praticiens/${limit}/${currentPage}`
        );
      }
    }
    setPraticiens(res.data.praticiens);
    setNombrePages(Math.ceil(res.data.count / limit));
    setLoading(false);
    return () => (mounted = false);
  };

  const handleChangeFilter = (event) => {
    const value = event.target.value;
    setFilter(value);
  };

  const handleSearch = (all) => {
    if (all) {
      fetchData(currentPage);
      setFilter('');
    } else fetchData(currentPage, filter);
  };

  return (
    <FullPageLayout>
      <div>
        <div
          className="row d-flex justify-content-between pt-3"
          style={{ width: '90vw', margin: '0 auto' }}
        >
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="Recherche"
              className="form-control col"
              value={filter}
              onChange={handleChangeFilter}
            />
          </div>
          <button
            className="col-12 col-md-2 form-control btn btn-info mx-3"
            onClick={() => handleSearch(false)}
          >
            {' '}
            <FontAwesomeIcon icon={faSearch} />
          </button>

          <input
            type="submit"
            value="Tout"
            className="col-12 col-md-2 form-control btn btn-primary mx-3"
            onClick={() => handleSearch(true)}
          />
        </div>
        <TabPraticiens praticiens={praticiens} loading={loading} />
        <Pagination pageCount={nombrePages} paginate={paginate} />
      </div>
    </FullPageLayout>
  );
};

export default AllPraticiens;
