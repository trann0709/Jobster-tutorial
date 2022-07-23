import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Stats = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);

  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );

  if (isLoading) {
    return <Loading center />;
  }

  return <div>Stats</div>;
};

export default Stats;
