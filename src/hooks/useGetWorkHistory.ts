import { getWork } from "../api/resume";

export const useGetWorkHistory = () => {
  const workHistory = getWork();

  return { workHistory };
};
