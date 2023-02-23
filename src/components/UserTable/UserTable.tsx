import React, { useEffect, useState } from 'react';
import { User } from '../../store/types/userTypes';
import { getUsers } from '../../store/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import classNames from 'classnames/bind';
import styles from './UserTable.module.css';


const cx = classNames.bind(styles)
interface UserTableProps {
  users: User[];
  isLoading: boolean;
}

type SortConfig = {
    key: string | null;
    direction: string|'ascending' | 'descending' | null ;
};

const UserTable: React.FC<UserTableProps> = ({ users, isLoading }) => {
  const [page, setPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });

  const dispatch = useDispatch();
    console.log(users)
  useEffect(() => {
    dispatch(getUsers(1, 10));
  }, [dispatch, page]);

  const sortData = (users: any, sortConfig: any) => {
    if (!sortConfig) {
      return users;
    }
    
    const sortedData = [...users];
    
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    
    return sortedData;
  };

  const handleSort = (key: any) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  function handlePageChange(newPage: any) {
    setPage(newPage);
  }
  const sortedData = sortData(users, sortConfig);

  return (
    <div className={cx('container')}>
      <h1>Random User Data</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className={cx("customers")}>
          <thead>
            <tr>
              <th>Id</th>  
              <th>Thumbnail</th>
              <th onClick={() => handleSort('firstName')}>
                Full Name  {sortConfig.key === 'firstName' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                </th>
              <th onClick={() => handleSort('username')}>
                Username {sortConfig.key === 'username' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((user: any, i: number) => (
              <tr key={user.uuid}>
                <td>{i+1}</td>
                <td>
                  <img src={user.thumbnail} alt={user.firstName} />
                </td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div style={{display:'flex'}} className={cx("Pagination")} >
        <button disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
          Previous Page
        </button>
        <h4>{page}</h4>
        <button disabled={page === 10} onClick={() => handlePageChange(page + 1)}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default UserTable;
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}

