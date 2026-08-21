import { getResearch } from "../api/resume";

export const useGetResearch = () => {
  const research = getResearch();

  return { research };
};
