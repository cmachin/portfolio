import { getProjects } from "../api/resume";

export const useGetProjects = () => {
  const projects = getProjects();

  return { projects };
};
