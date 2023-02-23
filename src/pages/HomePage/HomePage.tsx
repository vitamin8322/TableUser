import {  useSelector } from "react-redux";
import { RootState } from "../../store/store";
import UserTable from "../../components/UserTable/UserTable";

const HomePage = () => {
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );


  return (
    <div>
      {error && <p>{error}</p>}
      <UserTable users={users} isLoading={loading} />
    </div>
  );
};

export default HomePage;
