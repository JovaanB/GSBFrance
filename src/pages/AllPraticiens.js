import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabPraticiens from '../components/praticiens/tabPraticiens/TabPraticiens';
import Pagination from '../components/praticiens/tabPraticiens/Pagination';
import FullPageLayout from '../components/layouts/FullPageLayout';

const AllPraticiens = () => {
  const [praticiens, setPraticiens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [praticiensPerPage] = useState(200);

  useEffect(() => {
    const fetchPraticiens = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:4466/praticiens/');
      setPraticiens(res.data);
      setLoading(false);
    };

    fetchPraticiens();
  }, []);

  // Get current praticiens
  const indexOfLastPraticien = currentPage * praticiensPerPage;
  const indexOfFirstPraticien = indexOfLastPraticien - praticiensPerPage;
  const currentPraticiens = praticiens.slice(
    indexOfFirstPraticien,
    indexOfLastPraticien
  );

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(praticiens.length / praticiensPerPage); i++) {
    pageNumbers.push(i);
  }

  // Change page
  const paginate = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage + 1);
  };

  return (
    <FullPageLayout>
      <div className="mt-5">
        <TabPraticiens praticiens={currentPraticiens} loading={loading} />
        <Pagination
          praticiensPerPage={praticiensPerPage}
          totalPraticiens={praticiens.length}
          paginate={paginate}
        />
      </div>
    </FullPageLayout>
  );
};

export default AllPraticiens;
